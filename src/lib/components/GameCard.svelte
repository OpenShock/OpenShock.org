<script lang="ts">
  import { asset } from '$app/paths';
  import * as Card from '$lib/components/ui/card/index.js';
  import ArrowRightIcon from './icons/ArrowRightIcon.svelte';

  interface Props {
    name: string;
    image?: string;
    integrationCount: number;
    onselect: () => void;
  }

  let { name, image, integrationCount, onselect }: Props = $props();
</script>

<button
  type="button"
  onclick={onselect}
  class="group block w-full self-start text-left transition-all hover:-translate-y-0.5"
>
  <Card.Root class="transition-colors group-hover:ring-primary/40">
    <!-- Game Image -->
    {#if image}
      <img
        src={asset(image)}
        alt={name}
        class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    {:else}
      <div class="from-primary/60 to-brand/60 h-48 w-full bg-linear-to-br"></div>
    {/if}

    <Card.Header>
      <Card.Title
        class="group-hover:text-primary text-lg font-semibold capitalize transition-colors"
      >
        {name}
      </Card.Title>
      <Card.Description>
        {integrationCount} integration{integrationCount !== 1 ? 's' : ''}
      </Card.Description>
    </Card.Header>

    <Card.Content class="text-primary flex items-center text-sm font-medium">
      <span>View Integrations</span>
      <ArrowRightIcon class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Card.Content>
  </Card.Root>
</button>
