<script>
import Container from '$lib/components/Container.svelte';
const year = new Date().getFullYear();
</script>

<h2 class="mx-auto text-center text-xl text-zinc-500">This site is WIP, please share feedback with us if you have any!</h2>
<footer class="py-20 md:py-40">
  <Container>
    <div class="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12 text-center text-gray-500 dark:text-gray-400">
      <span>OpenShock Team {year}</span>
    </div>
  </Container>
</footer>
