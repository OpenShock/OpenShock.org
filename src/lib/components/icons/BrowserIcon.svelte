<script lang="ts">
  interface Props {
    class?: string;
  }
  let { class: className = 'h-5 w-5' }: Props = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class={className}>
  <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
  <path
    d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM96 208c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L112 224c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm224-64c0-8.8 7.2-16 16-16l64 0 0-64-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16z"
  />
</svg>
