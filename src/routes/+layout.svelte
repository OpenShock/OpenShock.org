<script lang="ts">
  import '../app.css';
  import AppFooter from '$lib/components/AppFooter.svelte';
  import AppHeader from '$lib/components/AppHeader.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
  <meta
    name="description"
    content="OpenShock is an open-source platform designed to control various shocking devices over the internet, catering to all your masochistic needs!"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <title>OpenShock</title>
</svelte:head>

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