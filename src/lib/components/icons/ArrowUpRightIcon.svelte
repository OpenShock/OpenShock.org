<script lang="ts">
  interface Props {
    class?: string;
  }
  let { class: className = 'size-[1.2em]' }: Props = $props();
</script>

<svg viewBox="0 0 24 24" class={className} xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M7 7h10v10M7 17L17 7"
  ></path>
</svg>
