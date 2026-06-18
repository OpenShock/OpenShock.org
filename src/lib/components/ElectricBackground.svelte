<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d')!;
    // Only target interactive elements within the background's own container.
    const root = canvas.parentElement ?? document;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      // Draw in CSS pixels; the transform maps them to the HiDPI backing store.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => ro.disconnect();
    }

    type Point = [number, number];
    type Bolt = {
      branches: Point[][];
      alpha: number;
      fadeSpeed: number;
      holdFrames: number;
      revealProgress: number;
      revealSpeed: number;
    };

    const bolts: Bolt[] = [];
    let mouse = { x: -9999, y: -9999 };
    let rafId = 0;
    let running = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function midDisplace(p1: Point, p2: Point, depth: number, roughness = 0.5): Point[] {
      if (depth === 0) return [p1, p2];
      const mx = (p1[0] + p2[0]) / 2;
      const my = (p1[1] + p2[1]) / 2;
      const len = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
      if (len < 2) return [p1, p2];
      const dx = p2[0] - p1[0],
        dy = p2[1] - p1[1];
      const nx = -dy / len,
        ny = dx / len;
      const offset = (Math.random() - 0.5) * len * roughness;
      const mp: Point = [mx + nx * offset, my + ny * offset];
      return [
        ...midDisplace(p1, mp, depth - 1, roughness),
        ...midDisplace(mp, p2, depth - 1, roughness).slice(1),
      ];
    }

    function buildBolt(x1: number, y1: number, x2: number, y2: number): Point[][] {
      const main = midDisplace([x1, y1], [x2, y2], 6);
      const branches: Point[][] = [main];
      const numBranches = 1 + Math.floor(Math.random() * 2);
      for (let b = 0; b < numBranches; b++) {
        const idx = Math.floor(main.length * 0.15 + Math.random() * main.length * 0.55);
        const sp = main[idx];
        const len = 40 + Math.random() * 90;
        const angle = Math.random() * Math.PI * 2;
        const ep: Point = [sp[0] + Math.cos(angle) * len, sp[1] + Math.sin(angle) * len];
        branches.push(midDisplace(sp, ep, 3));
      }
      return branches;
    }

    function canvasRect(): DOMRect {
      return canvas.getBoundingClientRect();
    }

    function randomEdgePoint(): Point {
      const vw = canvas.offsetWidth,
        vh = canvas.offsetHeight;
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) return [Math.random() * vw, 0];
      if (edge === 1) return [vw, Math.random() * vh];
      if (edge === 2) return [Math.random() * vw, vh];
      return [0, Math.random() * vh];
    }

    function elementEdgePoint(rect: DOMRect, cr: DOMRect): Point {
      const side = Math.floor(Math.random() * 4);
      if (side === 0) return [rect.left - cr.left + Math.random() * rect.width, rect.top - cr.top];
      if (side === 1)
        return [rect.right - cr.left, rect.top - cr.top + Math.random() * rect.height];
      if (side === 2)
        return [rect.left - cr.left + Math.random() * rect.width, rect.bottom - cr.top];
      return [rect.left - cr.left, rect.top - cr.top + Math.random() * rect.height];
    }

    type Target = { el: Element; rect: DOMRect };

    function getVisibleElements(cr: DOMRect): Target[] {
      const targets: Target[] = [];
      for (const el of root.querySelectorAll('button, a[href], [role="button"]')) {
        const rect = el.getBoundingClientRect();
        if (
          rect.width > 0 &&
          rect.height > 0 &&
          rect.top < cr.bottom &&
          rect.bottom > cr.top &&
          rect.left < cr.right &&
          rect.right > cr.left
        ) {
          targets.push({ el, rect });
        }
      }
      return targets;
    }

    function spawnBolt() {
      if (bolts.length >= 3) {
        scheduleNext();
        return;
      }

      const cr = canvasRect();
      const vw = canvas.offsetWidth,
        vh = canvas.offsetHeight;
      const elements = getVisibleElements(cr);

      let x1: number, y1: number, x2: number, y2: number;
      let startEl: Element | null = null;

      if (elements.length > 0 && Math.random() < 0.75) {
        const start = elements[Math.floor(Math.random() * elements.length)];
        startEl = start.el;
        [x1, y1] = elementEdgePoint(start.rect, cr);
      } else {
        [x1, y1] = randomEdgePoint();
      }

      const cursorVisible = mouse.x > -9999;
      const nearCursor = cursorVisible && Math.hypot(mouse.x - x1, mouse.y - y1) < 500;

      if (nearCursor) {
        x2 = mouse.x + (Math.random() - 0.5) * 40;
        y2 = mouse.y + (Math.random() - 0.5) * 40;
      } else {
        const r = Math.random();
        if (r < 0.4 && elements.length > 1) {
          let el2 = elements[Math.floor(Math.random() * elements.length)];
          let attempts = 0;
          while (el2.el === startEl && attempts++ < 5)
            el2 = elements[Math.floor(Math.random() * elements.length)];
          [x2, y2] = elementEdgePoint(el2.rect, cr);
        } else {
          const dist = 100 + Math.random() * Math.min(vw, vh) * 0.45;
          const angle = Math.random() * Math.PI * 2;
          x2 = x1 + Math.cos(angle) * dist;
          y2 = y1 + Math.sin(angle) * dist;
        }
      }

      bolts.push({
        branches: buildBolt(x1, y1, x2, y2),
        alpha: 0.1 + Math.random() * 0.2,
        fadeSpeed: 0.002 + Math.random() * 0.002,
        holdFrames: 60 + Math.floor(Math.random() * 40),
        revealProgress: 0,
        revealSpeed: 0.07 + Math.random() * 0.06,
      });

      startLoop();
      scheduleNext();
    }

    function scheduleNext() {
      timeoutId = setTimeout(spawnBolt, 500 + Math.random() * 1000);
    }

    // [strokeStyle, lineWidth, shadowColor, shadowBlur, alphaFactor]
    const PASSES: [string, number, string, number, number][] = [
      ['#6735a5', 7, '#6735a5', 28, 0.3],
      ['#e14a6d', 1.5, '#e14a6d', 10, 0.75],
      ['rgba(255,230,255,0.95)', 0.8, '#000', 0, 0.9],
    ];

    function loop() {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (const [stroke, width, shadow, blur, factor] of PASSES) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = width;
        ctx.shadowColor = shadow;
        ctx.shadowBlur = blur;

        for (const bolt of bolts) {
          ctx.globalAlpha = bolt.alpha * factor;
          for (const branch of bolt.branches) {
            const count = Math.max(2, Math.floor(bolt.revealProgress * branch.length));
            ctx.beginPath();
            ctx.moveTo(branch[0][0], branch[0][1]);
            for (let i = 1; i < count; i++) ctx.lineTo(branch[i][0], branch[i][1]);
            ctx.stroke();
          }
        }
      }

      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i];
        if (bolt.revealProgress < 1) {
          bolt.revealProgress = Math.min(1, bolt.revealProgress + bolt.revealSpeed);
        } else if (bolt.holdFrames > 0) {
          bolt.holdFrames--;
        } else {
          bolt.alpha -= bolt.fadeSpeed;
          if (bolt.alpha <= 0) bolts.splice(i, 1);
        }
      }

      if (bolts.length > 0) {
        rafId = requestAnimationFrame(loop);
      } else {
        running = false;
      }
    }

    function startLoop() {
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(loop);
      }
    }

    function onMouseMove(e: MouseEvent) {
      const cr = canvasRect();
      mouse.x = e.clientX - cr.left;
      mouse.y = e.clientY - cr.top;
    }

    function resetCursor() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', resetCursor);
    window.addEventListener('blur', resetCursor);
    scheduleNext();

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', resetCursor);
      window.removeEventListener('blur', resetCursor);
      ro.disconnect();
    };
  });
</script>

<canvas
  bind:this={canvas}
  style="position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;z-index:0;"
  aria-hidden="true"
></canvas>
