<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
  {@render children?.()}
</div>
