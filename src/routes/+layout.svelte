<script lang="ts">
  import '../app.css';
  import AppFooter from '$lib/components/AppFooter.svelte';
  import AppHeader from '$lib/components/AppHeader.svelte';
  import { ModeWatcher } from 'mode-watcher';
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<ModeWatcher defaultMode="dark" track={false} />
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
