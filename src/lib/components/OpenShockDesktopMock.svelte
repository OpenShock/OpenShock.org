<script lang="ts">
  import {
    Square,
    LayoutGrid,
    Eye,
    Crosshair,
    Zap,
    Medal,
    Gamepad2,
    Radio,
    Wifi,
    ChevronDown,
  } from '@lucide/svelte';
  import { asset } from '$app/paths';

  const modules = [
    { name: 'Sentry', icon: Eye, chevron: true },
    { name: 'Interception', icon: Crosshair, chevron: false },
    { name: 'Example Module', icon: Zap, chevron: true },
    { name: 'ShockOSC', img: asset('/icons/ShockOSC.svg'), chevron: true },
    { name: 'Medal', icon: Medal, chevron: false },
    { name: 'ForzaShock', icon: Gamepad2, chevron: false, active: true },
    { name: 'Local Relay', icon: Radio, chevron: true },
  ];

  const connections = ['SignalR', 'Hub 1', 'Hub 2'];
</script>

<div class="overflow-hidden rounded-xl bg-card shadow-2xl ring-1 ring-foreground/10">
  <!-- Window chrome / title bar -->
  <div class="flex items-center border-b border-foreground/10 bg-muted px-3 py-2">
    <div class="flex items-center gap-2">
      <img src={asset('/branding/Icon/Icon.svg')} alt="OpenShock" class="size-3.5" />
      <span class="text-xs font-medium text-foreground">OpenShock</span>
    </div>
    <div class="ml-auto flex items-center gap-2">
      <span class="h-3 w-3 rounded-full bg-red-500"></span>
      <span class="h-3 w-3 rounded-full bg-yellow-400"></span>
      <span class="h-3 w-3 rounded-full bg-green-500"></span>
    </div>
  </div>

  <!-- App body: sidebar + main pane -->
  <div class="flex min-h-[320px]">
    <!-- Sidebar -->
    <div class="flex w-[42%] flex-col border-r border-foreground/10 p-3">
      <img
        src={asset('/branding/Logo/NavbarLogoSpin.svg')}
        alt="OpenShock"
        class="h-7 self-start px-1"
      />

      <div class="my-2 -mx-3 border-t border-foreground/10"></div>

      <div class="flex items-center gap-2 px-2 py-1.5 text-[11px] font-medium text-foreground">
        <LayoutGrid class="size-3.5" />
        Manage Modules
      </div>

      <div class="my-2 -mx-3 border-t border-foreground/10"></div>

      <div class="mt-1 flex flex-col gap-0.5">
        {#each modules as mod}
          <div
            class="flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] {mod.active
              ? 'border-l-2 border-primary bg-primary/10 font-medium text-primary'
              : 'border-l-2 border-transparent text-muted-foreground'}"
          >
            {#if mod.img}
              <img src={mod.img} alt={mod.name} class="size-3.5 rounded-sm" />
            {:else if mod.icon}
              <mod.icon class="size-3.5" />
            {/if}
            <span class="grow truncate">{mod.name}</span>
            {#if mod.chevron}
              <ChevronDown class="size-3 opacity-60" />
            {/if}
          </div>
        {/each}
      </div>

      <!-- Connection status -->
      <div class="mt-auto">
        <div class="-mx-3 mb-3 border-t border-foreground/10"></div>
        <div class="flex items-center justify-around">
          {#each connections as conn}
            <div class="flex flex-col items-center gap-1">
              <span class="text-[9px] text-muted-foreground">{conn}</span>
              <Wifi class="size-3.5 text-green-500" />
            </div>
          {/each}
        </div>
        <div class="mt-3 flex items-center gap-2 px-1">
          <div class="size-6 rounded-full bg-gradient-to-br from-primary/60 to-purple-500/60"></div>
          <span class="text-[11px] font-medium text-foreground">OpenShock</span>
        </div>
      </div>
    </div>

    <!-- Main pane -->
    <div class="flex grow flex-col gap-3 p-4">
      <div>
        <h3 class="text-lg font-bold text-foreground">ForzaShock</h3>
        <p class="mt-0.5 text-[11px] leading-snug text-muted-foreground">
          Forza Horizon telemetry → OpenShock. Enable "Data Out" and target 127.0.0.1.
        </p>
      </div>

      <!-- Status bar -->
      <div
        class="flex items-center gap-3 rounded-lg bg-accent/50 px-3 py-2.5 ring-1 ring-foreground/10"
      >
        <Square class="size-4 fill-muted-foreground text-muted-foreground" />
        <span class="text-[11px] text-foreground">
          Stopped — packets: <span class="font-semibold">0</span>, detections:
          <span class="font-semibold">0</span>
        </span>
        <span
          class="ml-auto rounded-md bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground"
        >
          Start
        </span>
      </div>

      <!-- Telemetry panel -->
      <div class="flex grow flex-col rounded-lg bg-accent/50 p-3 ring-1 ring-foreground/10">
        <span class="text-[11px] font-medium text-foreground">Live telemetry (last 30s)</span>
        <div class="mt-2 flex grow flex-col rounded-md border border-foreground/10 p-2">
          <span class="text-[9px] text-orange-400">AccelMag (max 30.0)</span>
          <span class="text-[9px] text-sky-400">VelDiff (max 0.1)</span>
          <div class="mt-auto flex items-center justify-between">
            <span class="text-[9px] text-muted-foreground">-30s</span>
            <span class="text-[9px] text-muted-foreground">now</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
