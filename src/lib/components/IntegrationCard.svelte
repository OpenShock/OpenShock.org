<script lang="ts">
  import { Badge } from '$lib/components/ui/badge/index.js';
  import * as Card from '$lib/components/ui/card/index.js';
  import ExternalLinkIcon from './icons/ExternalLinkIcon.svelte';
  import GithubIcon from './icons/GithubIcon.svelte';

  interface Props {
    name: string;
    game: string;
    description: string;
    author: string;
    image?: string;
    githubUrl?: string;
    tags?: string[];
  }

  let { name, game, description, author, image, githubUrl, tags = [] }: Props = $props();
</script>

<svelte:element
  this={githubUrl ? 'a' : 'div'}
  href={githubUrl}
  target={githubUrl ? '_blank' : undefined}
  rel={githubUrl ? 'external noopener' : undefined}
  class="group block transition-all hover:-translate-y-0.5"
>
  <Card.Root class="h-full transition-colors group-hover:ring-primary/40">
    <!-- Image -->
    {#if image}
      <img
        src={image}
        alt={name}
        class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    {:else}
      <div class="from-primary/60 to-brand/60 h-48 w-full bg-linear-to-br"></div>
    {/if}

    <Card.Header>
      <Card.Action>
        <Badge variant="secondary">{game}</Badge>
      </Card.Action>
      <Card.Title class="group-hover:text-primary text-lg font-bold transition-colors">
        {name}
      </Card.Title>
      <Card.Description class="line-clamp-2">{description}</Card.Description>
    </Card.Header>

    {#if tags.length > 0}
      <Card.Content class="flex flex-wrap gap-2">
        {#each tags as tag (tag)}
          <Badge variant="outline">{tag}</Badge>
        {/each}
      </Card.Content>
    {/if}

    <Card.Footer class="justify-between">
      <p class="text-muted-foreground text-xs">
        by <span class="text-foreground font-semibold">{author}</span>
      </p>
      {#if githubUrl}
        <div
          class="text-primary flex items-center gap-2 transition-transform group-hover:translate-x-1"
        >
          <GithubIcon class="h-4 w-4" />
          <ExternalLinkIcon class="h-4 w-4" />
        </div>
      {/if}
    </Card.Footer>
  </Card.Root>
</svelte:element>
