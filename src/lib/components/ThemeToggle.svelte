<script lang="ts">
  import { mode, setMode } from 'mode-watcher';

  const HOLD_DURATION = 1000;

  // Reflect mode-watcher's reactive state; treat the (undefined) initial
  // resolution as dark since the site defaults to dark mode.
  let isDark = $derived(mode.current !== 'light');
  let holdProgress = $state(0);
  let holdTimer: number | null = null;
  let holdInterval: number | null = null;

  function setTheme(dark: boolean) {
    setMode(dark ? 'dark' : 'light');
  }

  function startPress() {
    // Switching back to dark mode is instant
    if (!isDark) {
      setTheme(true);
      return;
    }

    // Switching to light mode requires a 1s hold
    const start = Date.now();

    holdInterval = window.setInterval(() => {
      holdProgress = Math.min((Date.now() - start) / HOLD_DURATION, 1);
    }, 16);

    holdTimer = window.setTimeout(() => {
      setTheme(false);
      cancelPress();
    }, HOLD_DURATION);
  }

  function cancelPress() {
    if (holdTimer) clearTimeout(holdTimer);
    if (holdInterval) clearInterval(holdInterval);
    holdTimer = null;
    holdInterval = null;
    holdProgress = 0;
  }
</script>

<button
  aria-label="Toggle theme (hold 1s for light mode)"
  class="relative flex items-center justify-center rounded-full p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
  onpointerdown={startPress}
  onpointerup={cancelPress}
  onpointerleave={cancelPress}
  onpointercancel={cancelPress}
>
  {#if isDark}
    <!-- Moon icon -->
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  {:else}
    <!-- Sun icon -->
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36l-.7-.7M6.34 6.34l-.7-.7m12.02 0l-.7.7M6.34 17.66l-.7.7M12 8a4 4 0 100 8 4 4 0 000-8z"
      />
    </svg>
  {/if}

  {#if holdProgress > 0}
    <svg class="pointer-events-none absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36">
      <circle
        cx="18"
        cy="18"
        r="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-dasharray="100"
        stroke-dashoffset={100 - holdProgress * 100}
        pathLength="100"
        class="text-primary"
      />
    </svg>
  {/if}
</button>
