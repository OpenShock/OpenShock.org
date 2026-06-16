<script lang="ts">
  import ExternalLinkIcon from './icons/ExternalLinkIcon.svelte';
  import GithubIcon from './icons/GithubIcon.svelte';

  interface Props {
    name: string;
    game: string;
    description: string;
    author: string;
    image?: string;
    githubUrl: string;
    tags?: string[];
  }

  let { name, game, description, author, image, githubUrl, tags = [] }: Props = $props();
</script>

<a
  href={githubUrl}
  target="_blank"
  rel="external noopener noreferrer"
  class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-xl hover:shadow-gray-600/10 dark:border-gray-800 dark:bg-gray-900"
>
  <!-- Image Section -->
  {#if image}
    <div class="relative h-48 overflow-hidden bg-linear-to-br from-sky-400 to-blue-600">
      <img
        src={image}
        alt={name}
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  {:else}
    <div class="relative h-48 bg-linear-to-br from-sky-400 to-blue-600"></div>
  {/if}

  <!-- Content Section -->
  <div class="p-4 sm:p-6">
    <!-- Game Badge -->
    <div
      class="mb-2 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-900 dark:text-sky-200"
    >
      {game}
    </div>

    <!-- Title -->
    <h3
      class="mb-2 text-lg font-bold text-gray-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition"
    >
      {name}
    </h3>

    <!-- Description -->
    <p class="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
      {description}
    </p>

    <!-- Tags -->
    {#if tags.length > 0}
      <div class="mb-4 flex flex-wrap gap-2">
        {#each tags as tag (tag)}
          <span
            class="inline-block rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
          >
            {tag}
          </span>
        {/each}
      </div>
    {/if}

    <!-- Footer -->
    <div
      class="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-800"
    >
      <p class="text-xs text-gray-500 dark:text-gray-400">
        by <span class="font-semibold text-gray-700 dark:text-gray-300">{author}</span>
      </p>
      <div
        class="flex items-center gap-2 text-sky-600 dark:text-sky-400 transition group-hover:translate-x-1"
      >
        <GithubIcon class="w-4 h-4" />
        <ExternalLinkIcon class="w-4 h-4" />
      </div>
    </div>
  </div>
</a>
