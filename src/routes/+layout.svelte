<script lang="ts">
  import '../app.css';
  import AppFooter from '$lib/components/AppFooter.svelte';
  import AppHeader from '$lib/components/AppHeader.svelte';
  import type { Snippet } from 'svelte';

  import { ModeWatcher } from "mode-watcher";

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
  
</script>

<ModeWatcher />
<AppHeader />
{@render children?.()}
<AppFooter />

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  :global(body) {
    margin: 0;
  }
</style>
