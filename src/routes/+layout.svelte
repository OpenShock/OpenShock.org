<script>
  import '../app.css';
  import AppHeader from '$lib/AppHeader.svelte';
  import AppFooter from '$lib/AppFooter.svelte';
</script>

<AppHeader />
<slot />
<AppFooter />
