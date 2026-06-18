<script lang="ts">
  import {
    Boxes,
    ExternalLink,
    LoaderCircle,
    Puzzle,
    RefreshCw,
    Search,
    Zap,
  } from '@lucide/svelte';
  import { asset } from '$app/paths';
  import Container from '$lib/components/Container.svelte';
  import DesktopDownloadButton from '$lib/components/DesktopDownloadButton.svelte';
  import ElectricBackground from '$lib/components/ElectricBackground.svelte';
  import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
  import { Button } from '$lib/components/ui/button';
  import { type RepoModule, fetchDesktopModules } from '$lib/data/desktopRepo';
  import { onMount } from 'svelte';

  let modules = $state<RepoModule[]>([]);
  let loading = $state(true);
  let error = $state(false);
  let query = $state('');

  const filtered = $derived.by(() => {
    const q = query.trim().toLowerCase();
    if (!q) return modules;
    return modules.filter(
      (m) => m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q)
    );
  });

  async function loadModules() {
    loading = true;
    error = false;
    try {
      modules = await fetchDesktopModules();
    } catch {
      error = true;
    } finally {
      loading = false;
    }
  }

  onMount(loadModules);

  const features = [
    {
      icon: Puzzle,
      title: 'Module-based',
      description:
        'Install only the integrations you need. Each module plugs into the same app and shares your setup.',
    },
    {
      icon: Boxes,
      title: 'All in one place',
      description:
        'No more juggling separate tools. Manage every integration and hub from a single window.',
    },
    {
      icon: RefreshCw,
      title: 'Always up to date',
      description:
        'Modules and the app update together, so everything stays in sync automatically.',
    },
    {
      icon: Zap,
      title: 'Open source',
      description:
        'Fully open source and community-driven. Audit it, extend it, or build your own module.',
    },
  ];

  // Add more screenshots to this list as they become available.
  const screenshots = [
    { src: asset('/images/desktop/screenshot.webp'), alt: 'OpenShock Desktop — ForzaShock module' },
  ];
</script>

<!-- Module cards link to external repository URLs, so resolve() does not apply. -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->

<svelte:head>
  <title>OpenShock Desktop — One app for all your integrations</title>
  <meta
    name="description"
    content="OpenShock Desktop is a unified, module-based application for Windows. Install modules like ShockOSC directly inside one place and keep everything in sync."
  />
</svelte:head>

<main class="mb-40">
  <!-- Hero -->
  <section class="relative overflow-hidden pt-32 md:pt-40">
    <ElectricBackground />
    <div
      aria-hidden="true"
      class="absolute inset-x-0 top-0 -z-10 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div
        class="h-56 bg-linear-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"
      ></div>
      <div
        class="h-32 bg-linear-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"
      ></div>
    </div>

    <Container>
      <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
        <img src={asset('/branding/Icon/Icon.svg')} alt="OpenShock Desktop" class="h-16 w-16" />
        <h1 class="mt-6 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
          OpenShock <span class="text-primary">Desktop</span>
        </h1>
        <p class="mt-6 text-lg text-gray-700 dark:text-gray-300">
          One unified, module-based app for Windows. Install integrations like ShockOSC directly
          inside one place — keeping everything in sync and easy to manage.
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <DesktopDownloadButton />
          <Button
            href="https://github.com/OpenShock/Desktop"
            target="_blank"
            variant="outline"
            size="lg"
            class="h-14 px-5"
          >
            <GithubIcon class="size-5" />
            View on GitHub
          </Button>
        </div>
        <p class="mt-4 text-sm text-muted-foreground">Free and open source · Windows 10 &amp; 11</p>
      </div>

      <!-- Screenshot -->
      <div class="relative mx-auto mt-16 max-w-4xl">
        <div
          aria-hidden="true"
          class="absolute inset-0 -z-10 scale-90 bg-linear-to-br from-primary/40 to-purple-500/30 opacity-50 blur-[80px] dark:opacity-40"
        ></div>
        <img
          src={asset('/images/desktop/screenshot.webp')}
          alt="OpenShock Desktop"
          class="w-full rounded-xl shadow-2xl ring-1 ring-foreground/10"
        />
      </div>
    </Container>
  </section>

  <!-- Features -->
  <section class="mt-28">
    <Container>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-2xl font-bold text-gray-800 md:text-3xl dark:text-white">
          Built to keep things simple
        </h2>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Everything you need to run your OpenShock integrations, without the clutter.
        </p>
      </div>
      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {#each features as feature (feature.title)}
          <div class="flex flex-col gap-4 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30"
            >
              <feature.icon class="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
              <p class="mt-1 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </Container>
  </section>

  <!-- Modules preview -->
  <section class="mt-28">
    <Container>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-2xl font-bold text-gray-800 md:text-3xl dark:text-white">
          Available modules
        </h2>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Pick from a growing library of integrations — and more are on the way.
        </p>
      </div>

      <!-- Search -->
      <div class="relative mx-auto mt-10 max-w-md">
        <Search
          class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="search"
          bind:value={query}
          placeholder="Search modules…"
          aria-label="Search modules"
          class="w-full rounded-lg bg-card py-2.5 pr-4 pl-9 text-sm text-foreground ring-1 ring-foreground/10 outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary"
        />
      </div>

      {#if loading}
        <div class="mt-10 flex items-center justify-center gap-2 text-muted-foreground">
          <LoaderCircle class="size-5 animate-spin" />
          Loading modules…
        </div>
      {:else if error}
        <div class="mt-10 flex flex-col items-center gap-4 text-center">
          <p class="text-muted-foreground">Couldn't load the module list right now.</p>
          <Button variant="outline" onclick={loadModules}>
            <RefreshCw class="size-4" />
            Try again
          </Button>
        </div>
      {:else if filtered.length === 0}
        <p class="mt-10 text-center text-muted-foreground">
          No modules match “{query}”.
        </p>
      {:else}
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {#each filtered as mod (mod.id)}
            <a
              href={mod.sourceUrl}
              target="_blank"
              rel="noopener"
              class="group flex flex-col gap-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10 transition hover:ring-foreground/20"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/50 ring-1 ring-foreground/10"
                >
                  <img src={mod.iconUrl} alt={mod.name} loading="lazy" class="size-6" />
                </div>
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <h3 class="truncate font-semibold text-gray-800 dark:text-white">{mod.name}</h3>
                    {#if mod.latestVersion}
                      <span
                        class="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
                      >
                        v{mod.latestVersion}
                      </span>
                    {/if}
                  </div>
                  <p class="mt-1 text-sm text-muted-foreground">{mod.description}</p>
                </div>
              </div>
              <span
                class="mt-auto inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition group-hover:text-primary"
              >
                View source
                <ExternalLink class="size-3" />
              </span>
            </a>
          {/each}
        </div>
      {/if}
    </Container>
  </section>

  <!-- Screenshots -->
  <section class="mt-28">
    <Container>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-2xl font-bold text-gray-800 md:text-3xl dark:text-white">
          See it in action
        </h2>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          A clean, focused interface for every module.
        </p>
      </div>
      <div class="mx-auto mt-12 flex max-w-5xl flex-col gap-6">
        {#each screenshots as shot (shot.src)}
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            class="w-full rounded-xl shadow-2xl ring-1 ring-foreground/10"
          />
        {/each}
      </div>
    </Container>
  </section>

  <!-- Final CTA -->
  <section class="mt-28">
    <Container>
      <div
        class="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-card px-6 py-16 text-center ring-1 ring-foreground/10"
      >
        <div
          aria-hidden="true"
          class="absolute inset-0 -z-10 bg-linear-to-br from-primary/15 to-purple-500/10"
        ></div>
        <h2 class="text-2xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Get OpenShock Desktop
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-gray-600 dark:text-gray-300">
          Download the app, install your modules, and you're ready to go.
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <DesktopDownloadButton />
          <Button
            href="https://github.com/OpenShock/Desktop"
            target="_blank"
            variant="outline"
            size="lg"
            class="h-14 px-5"
          >
            <GithubIcon class="size-5" />
            View on GitHub
          </Button>
        </div>
      </div>
    </Container>
  </section>
</main>
