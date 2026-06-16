<script lang="ts">
  import IntegrationCard from '$lib/components/IntegrationCard.svelte';
  import Container from '$lib/components/Container.svelte';
  import ArrowRightIcon from '$lib/components/icons/ArrowRightIcon.svelte';
  import { asset } from '$app/paths';
  import { games } from '$lib/data/integrations';
  import { searchIntegrations, getMatchedGame } from '$lib/data/search';

  let selectedGame = $state<string | null>(null);
  let searchQuery = $state('');
  let debouncedQuery = $state('');
  let debounceTimer: ReturnType<typeof setTimeout>;

  function handleSearchInput(value: string) {
    searchQuery = value;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      debouncedQuery = value;
    }, 150);
  }

  // Get integrations for the selected game (with search applied)
  const filteredIntegrations = $derived(
    selectedGame
      ? searchIntegrations(debouncedQuery).filter((integration) => integration.gameId === selectedGame)
      : []
  );

  // Search across all integrations (used when no game is selected)
  const allIntegrationsFiltered = $derived(searchIntegrations(debouncedQuery));

  // If the search matches a game, surface it before the integration results
  const matchedGame = $derived(debouncedQuery ? getMatchedGame(debouncedQuery) : undefined);

  // Games data for the grid view
  const gamesData = $derived(
    games.map((game) => ({
      id: game.id,
      name: game.name,
      image: game.thumbnail,
      integrationCount: game.integrations.length
    }))
  );

  const selectedGameName = $derived(games.find((g) => g.id === selectedGame)?.name ?? '');
</script>

<svelte:head>
  <title>Integrations - OpenShock</title>
  <meta name="description" content="Discover community and official integrations for OpenShock across various games and platforms." />
</svelte:head>

<main>
  <!-- Decorative background elements -->
  <div
    aria-hidden="true"
    class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none"
  >
    <div class="blur-[106px] h-56 bg-linear-to-br from-primary to-purple-400 dark:from-blue-700"></div>
    <div class="blur-[106px] h-32 bg-linear-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
  </div>

  <!-- Hero Section -->
  <section class="relative overflow-hidden py-20">
    <Container>
      <div class="mx-auto max-w-3xl text-center">
        <div class="flex items-center justify-center gap-2 mb-4">
          <img class="h-8" src={asset('/branding/Icon/Icon.svg')} alt="OpenShock logo" />
          <h1 class="text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Highlighted Integrations
          </h1>
        </div>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Discover community-built and official integrations that bring haptic feedback to your favorite games and applications.
        </p>
      </div>
    </Container>
  </section>

  <!-- Search Section (always visible) -->
  <section>
    <Container>
      <div class="py-4 space-y-3 sm:py-6">
        <!-- Back Button (only show when viewing a game) -->
        {#if selectedGame}
          <button
            onclick={() => {
              selectedGame = null;
              searchQuery = '';
              debouncedQuery = '';
            }}
            class="inline-flex items-center gap-2 text-sm font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
          >
            <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            Back to Games
          </button>
        {/if}

        <!-- Search -->
        <input
          type="text"
          placeholder={selectedGame ? 'Search integrations...' : 'Search all integrations...'}
          value={searchQuery}
          oninput={(e) => handleSearchInput(e.currentTarget.value)}
          class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm placeholder-gray-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400"
        />

        <!-- Results count -->
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {#if selectedGame}
            {filteredIntegrations.length} integration{filteredIntegrations.length !== 1 ? 's' : ''} found
          {:else if debouncedQuery}
            {allIntegrationsFiltered.length} integration{allIntegrationsFiltered.length !== 1 ? 's' : ''} found
          {/if}
        </p>
      </div>
    </Container>
  </section>

  <!-- Games or Integrations Grid -->
  <section class="relative py-16 sm:py-20">
    <Container>
      {#if !selectedGame}
        {#if debouncedQuery}
          <!-- Search Results (All Integrations) -->
          {#if allIntegrationsFiltered.length > 0 || matchedGame}
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {#if matchedGame}
                <button
                  onclick={() => (selectedGame = matchedGame.id)}
                  class="group relative self-start overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-sky-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-sky-500"
                >
                  <!-- Game Image -->
                  <div class="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                    {#if matchedGame.thumbnail}
                      <img
                        src={matchedGame.thumbnail}
                        alt={matchedGame.name}
                        class="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    {/if}
                    <div class="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>

                  <!-- Game Info -->
                  <div class="p-4">
                    <h3 class="font-semibold text-gray-800 dark:text-white capitalize group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">
                      {matchedGame.name}
                    </h3>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {matchedGame.integrations.length} integration{matchedGame.integrations.length !== 1 ? 's' : ''}
                    </p>
                    <div class="mt-4 inline-flex items-center text-sky-600 dark:text-sky-600 group-hover:translate-x-1 transition-transform">
                      <span class="text-sm font-medium">View Integrations</span>
                      <ArrowRightIcon class="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </button>
              {/if}
              {#each allIntegrationsFiltered as integration (integration.id)}
                <IntegrationCard
                  name={integration.name}
                  game={integration.gameName}
                  description={integration.description}
                  author={integration.author}
                  image={integration.thumbnail}
                  githubUrl={integration.links[0]?.url ?? '#'}
                  tags={integration.tags}
                />
              {/each}
            </div>
          {:else}
            <div class="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center dark:border-gray-700 dark:bg-gray-900/50">
              <p class="text-gray-600 dark:text-gray-400">
                No integrations found. Try adjusting your search.
              </p>
            </div>
          {/if}
        {:else}
          <!-- Games Grid -->
          {#if gamesData.length > 0}
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {#each gamesData as game (game.id)}
                <button
                  onclick={() => (selectedGame = game.id)}
                  class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-sky-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-sky-500"
                >
                  <!-- Game Image -->
                  <div class="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                    {#if game.image}
                      <img
                        src={game.image}
                        alt={game.name}
                        class="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    {/if}
                    <div class="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>

                  <!-- Game Info -->
                  <div class="p-4">
                    <h3 class="font-semibold text-gray-800 dark:text-white capitalize group-hover:text-sky-600 dark:group-hover:text-sky-400 transition">
                      {game.name}
                    </h3>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {game.integrationCount} integration{game.integrationCount !== 1 ? 's' : ''}
                    </p>
                    <div class="mt-4 inline-flex items-center text-sky-600 dark:text-sky-600 group-hover:translate-x-1 transition-transform">
                      <span class="text-sm font-medium">View Integrations</span>
                      <ArrowRightIcon class="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </button>
              {/each}
            </div>
          {:else}
            <div class="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center dark:border-gray-700 dark:bg-gray-900/50">
              <p class="text-gray-600 dark:text-gray-400">
                No games available yet.
              </p>
            </div>
          {/if}
        {/if}
      {:else}
        <!-- Integrations Grid (for selected game) -->
        <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white capitalize">
          {selectedGameName} Integrations
        </h2>
        {#if filteredIntegrations.length > 0}
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {#each filteredIntegrations as integration (integration.id)}
              <IntegrationCard
                name={integration.name}
                game={integration.gameName}
                description={integration.description}
                author={integration.author}
                image={integration.thumbnail}
                githubUrl={integration.links[0]?.url ?? '#'}
                tags={integration.tags}
              />
            {/each}
          </div>
        {:else}
          <div class="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center dark:border-gray-700 dark:bg-gray-900/50">
            <p class="text-gray-600 dark:text-gray-400">
              No integrations found. Try adjusting your search.
            </p>
          </div>
        {/if}
      {/if}
    </Container>
  </section>

  <!-- Submit Integration CTA -->
  <section class="relative border-t border-gray-200 dark:border-gray-800 py-12 sm:py-16">
    <div
      aria-hidden="true"
      class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none"
    >
      <div class="blur-[106px] h-32 bg-linear-to-br from-primary to-purple-400 dark:from-blue-700"></div>
      <div class="blur-[106px] h-32 bg-linear-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
    </div>
    <Container>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Built something cool?
        </h2>
        <p class="mb-8 text-gray-600 dark:text-gray-400">
          Have you created an integration? We'd love to feature it here. Submit your project on GitHub and let us know!
        </p>
        <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://github.com/openShock"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition-all hover:bg-sky-700 hover:shadow-lg"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />            </svg>
            Submit on GitHub
          </a>
          <a
            href="https://discord.gg/OpenShock"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-lg border-2 border-sky-600 px-6 py-3 font-semibold text-sky-600 transition-all hover:bg-sky-50 dark:hover:bg-gray-900"
          >
            Let us know on Discord
          </a>
        </div>
      </div>
    </Container>
  </section>
</main>