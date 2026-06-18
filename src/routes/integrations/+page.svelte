<script lang="ts">
  import { asset } from '$app/paths';
  import Container from '$lib/components/Container.svelte';
  import ElectricBackground from '$lib/components/ElectricBackground.svelte';
  import GameCard from '$lib/components/GameCard.svelte';
  import IntegrationCard from '$lib/components/IntegrationCard.svelte';
  import ArrowRightIcon from '$lib/components/icons/ArrowRightIcon.svelte';
  import DiscordIcon from '$lib/components/icons/DiscordIcon.svelte';
  import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { games } from '$lib/data/integrations';
  import { getMatchedGame, searchIntegrations } from '$lib/data/search';
  import { onDestroy } from 'svelte';

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
      ? searchIntegrations(debouncedQuery).filter(
          (integration) => integration.gameId === selectedGame
        )
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
      integrationCount: game.integrations.length,
    }))
  );

  const selectedGameName = $derived(games.find((g) => g.id === selectedGame)?.name ?? '');

  function clearSelection() {
    selectedGame = null;
    searchQuery = '';
    debouncedQuery = '';
  }

  onDestroy(() => clearTimeout(debounceTimer));
</script>

<svelte:head>
  <title>Integrations - OpenShock</title>
  <meta
    name="description"
    content="Discover community and official integrations for OpenShock across various games and platforms."
  />
</svelte:head>

<main>
  <!-- Decorative background elements -->
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
  >
    <div class="from-primary to-brand h-56 bg-linear-to-br blur-[106px]"></div>
    <div class="from-brand to-primary h-32 bg-linear-to-r blur-[106px]"></div>
  </div>

  <!-- Hero Section -->
  <section class="relative overflow-hidden pt-36 pb-20">
    <ElectricBackground />
    <Container>
      <div class="mx-auto max-w-3xl text-center">
        <div class="mb-4 flex items-center justify-center gap-2">
          <img class="h-8" src={asset('/branding/Icon/Icon.svg')} alt="OpenShock logo" />
          <h1 class="text-foreground text-2xl font-bold md:text-4xl">Highlighted Integrations</h1>
        </div>
        <p class="text-muted-foreground text-lg">
          Discover community-built and official integrations that bring haptic feedback to your
          favorite games and applications.
        </p>
      </div>
    </Container>
  </section>

  <!-- Search Section (always visible) -->
  <section>
    <Container>
      <div class="space-y-3 py-4 sm:py-6">
        <!-- Back Button (only show when viewing a game) -->
        {#if selectedGame}
          <Button variant="ghost" size="sm" onclick={clearSelection}>
            <ArrowRightIcon class="h-4 w-4 rotate-180" />
            Back to Games
          </Button>
        {/if}

        <!-- Search -->
        <Input
          type="text"
          placeholder={selectedGame ? 'Search integrations...' : 'Search all integrations...'}
          value={searchQuery}
          oninput={(e) => handleSearchInput(e.currentTarget.value)}
          class="h-10"
        />

        <!-- Results count -->
        <p class="text-muted-foreground text-xs">
          {#if selectedGame}
            {filteredIntegrations.length} integration{filteredIntegrations.length !== 1 ? 's' : ''} found
          {:else if debouncedQuery}
            {allIntegrationsFiltered.length} integration{allIntegrationsFiltered.length !== 1
              ? 's'
              : ''} found
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
                <GameCard
                  name={matchedGame.name}
                  image={matchedGame.thumbnail}
                  integrationCount={matchedGame.integrations.length}
                  onselect={() => (selectedGame = matchedGame.id)}
                />
              {/if}
              {#each allIntegrationsFiltered as integration (integration.id)}
                <IntegrationCard
                  name={integration.name}
                  game={integration.gameName}
                  description={integration.description}
                  author={integration.author}
                  image={asset(integration.thumbnail)}
                  githubUrl={integration.links[0]?.url}
                  tags={integration.tags}
                />
              {/each}
            </div>
          {:else}
            <div
              class="border-border text-muted-foreground rounded-xl border-2 border-dashed p-12 text-center"
            >
              No integrations found. Try adjusting your search.
            </div>
          {/if}
        {:else}
          <!-- Games Grid -->
          {#if gamesData.length > 0}
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {#each gamesData as game (game.id)}
                <GameCard
                  name={game.name}
                  image={game.image}
                  integrationCount={game.integrationCount}
                  onselect={() => (selectedGame = game.id)}
                />
              {/each}
            </div>
          {:else}
            <div
              class="border-border text-muted-foreground rounded-xl border-2 border-dashed p-12 text-center"
            >
              No games available yet.
            </div>
          {/if}
        {/if}
      {:else}
        <!-- Integrations Grid (for selected game) -->
        <h2 class="text-foreground mb-6 text-2xl font-bold capitalize">
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
                image={asset(integration.thumbnail)}
                githubUrl={integration.links[0]?.url ?? '#'}
                tags={integration.tags}
              />
            {/each}
          </div>
        {:else}
          <div
            class="border-border text-muted-foreground rounded-xl border-2 border-dashed p-12 text-center"
          >
            No integrations found. Try adjusting your search.
          </div>
        {/if}
      {/if}
    </Container>
  </section>

  <!-- Submit Integration CTA -->
  <section class="border-border relative border-t py-12 sm:py-16">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
    >
      <div class="from-primary to-brand h-32 bg-linear-to-br blur-[106px]"></div>
      <div class="from-brand to-primary h-32 bg-linear-to-r blur-[106px]"></div>
    </div>
    <Container>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-foreground mb-4 text-3xl font-bold">Built something cool?</h2>
        <p class="text-muted-foreground mb-8">
          Have you created an integration? We'd love to feature it here. Submit your project on
          GitHub and let us know!
        </p>
        <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="https://github.com/openShock" target="_blank" size="lg">
            <GithubIcon class="h-5 w-5" />
            Submit on GitHub
          </Button>
          <Button href="https://discord.gg/OpenShock" target="_blank" variant="outline" size="lg">
            <DiscordIcon class="h-5 w-5" />
            Let us know on Discord
          </Button>
        </div>
      </div>
    </Container>
  </section>
</main>
