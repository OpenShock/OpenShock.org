<script lang="ts">
  import WindowsIcon from './icons/WindowsIcon.svelte';

  let { class: className = '' }: { class?: string } = $props();
</script>

<a
  href="https://github.com/OpenShock/Desktop/releases/latest"
  target="_blank"
  class="group inline-flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 {className}"
>
  <WindowsIcon class="size-7" />
  <span class="flex flex-col text-left leading-tight">
    <span class="text-[11px] font-medium opacity-80">Download for</span>
    <span class="text-base font-bold">Windows 10 &amp; 11</span>
  </span>
</a>
