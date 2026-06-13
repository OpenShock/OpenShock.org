<script lang="ts">
  import { ArrowRight } from '@lucide/svelte';
  import { asset } from '$app/paths';
  import { fade } from 'svelte/transition';
  import CloudflareLogo from './CloudflareLogo.svelte';
  import Container from './Container.svelte';

  interface Partner {
    id: string;
    name: string;
    tag: string;
    description: string;
    link: string;
    banner?: string;
  }

  const partners: Partner[] = [
    {
      id: 'cloudflare',
      name: 'Cloudflare',
      tag: 'Infrastructure Sponsor',
      description:
        "Supporting OpenShock through Project Alexandria — Cloudflare's program for open-source projects.",
      link: 'https://cloudflare.com',
    },
    {
      id: 'club69',
      name: 'CLUB69',
      tag: 'Community Partner',
      description:
        'Saturday Party Streaming on Twitch, Fansly and more, while helping spread the word about OpenShock to their community.',
      link: 'https://linktree.club69.club/',
      banner: asset('/partner/club69_banner.png'),
    },
  ];

  let currentIndex = $state(0);
  let timerDuration = $state(5000);
  let timer: ReturnType<typeof setTimeout> | null = null;

  function goTo(index: number) {
    currentIndex = ((index % partners.length) + partners.length) % partners.length;
    resetTimer(10000);
  }

  function resetTimer(delay = 5000) {
    timerDuration = delay;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      currentIndex = (currentIndex + 1) % partners.length;
      resetTimer();
    }, delay);
  }

  $effect(() => {
    resetTimer();
    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  const currentPartner = $derived(partners[currentIndex]);
</script>

<div id="partners">
  <Container>
    <div class="flex flex-col gap-10 lg:flex-row lg:gap-12">
      <!-- Left: intro -->
      <div class="flex flex-col gap-8 lg:w-5/12">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="currentColor"
            class="h-6 w-6 text-primary"
          >
            <!--!Font Awesome Free 6.6.0 by @fontawesome-->
            <path
              d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8C224 387.2 192 348.7 192 304c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"
            />
          </svg>
          <h2 class="mt-6 text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            Backed by great partners
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-300">
            OpenShock is a community-driven, open-source project. We're grateful to the partners who
            support us in various ways!
          </p>
        </div>

        <a
          href="mailto:admin@openshock.org"
          class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Become a partner
          <ArrowRight class="h-4" />
        </a>
      </div>

      <!-- Right: partner card -->
      <div class="w-full lg:w-7/12">
        <div
          class="overflow-hidden rounded-2xl border border-gray-200/60 bg-white/5 backdrop-blur-sm dark:border-gray-700/40"
        >
          {#key currentIndex}
            <div in:fade={{ duration: 220 }}>
              {#if partners[currentIndex].banner}
                <!-- Banner-first layout -->
                <img
                  src={currentPartner.banner}
                  alt="{currentPartner.name} banner"
                  class="h-52 w-full object-cover"
                />
                <div class="p-6">
                  <div class="flex items-center justify-between">
                    <span class="text-lg font-bold text-gray-800 dark:text-white">
                      {currentPartner.name}
                    </span>
                    <span
                      class="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {currentPartner.tag}
                    </span>
                  </div>
                  <p class="mt-3 min-h-15 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                    {currentPartner.description}
                  </p>
                  <a
                    href={currentPartner.link}
                    target="_blank"
                    rel="external"
                    class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Visit {currentPartner.name}
                    <ArrowRight class="h-4" />
                  </a>
                </div>
              {:else}
                <!-- Logo-first layout -->
                <div
                  class="flex h-52 w-full items-center justify-center bg-gray-100 dark:bg-gray-800/50"
                >
                  {#if currentPartner.id === 'cloudflare'}
                    <CloudflareLogo class="h-10 w-auto text-gray-800 dark:text-white" />
                  {:else}
                    <span class="text-2xl font-bold text-gray-800 dark:text-white">
                      {currentPartner.name}
                    </span>
                  {/if}
                </div>
                <div class="p-6">
                  <div class="flex items-center justify-between">
                    <span class="text-lg font-bold text-gray-800 dark:text-white">
                      {currentPartner.name}
                    </span>
                    <span
                      class="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {currentPartner.tag}
                    </span>
                  </div>
                  <p class="mt-3 min-h-15 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                    {currentPartner.description}
                  </p>
                  <a
                    href={currentPartner.link}
                    target="_blank"
                    rel="external"
                    class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Visit {currentPartner.name}
                    <ArrowRight class="h-4" />
                  </a>
                </div>
              {/if}
            </div>
          {/key}

          <!-- Dots -->
          <div class="flex justify-center gap-2 py-3">
            {#each partners as partner, i (partner.id)}
              <button
                aria-label="Image stepper"
                type="button"
                onclick={() => goTo(i)}
                class="h-2 rounded-full transition-all duration-300 {i === currentIndex
                  ? 'w-4 bg-primary'
                  : 'w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'}"
              ></button>
            {/each}
          </div>

          <!-- Progress bar -->
          {#key currentIndex}
            <div
              class="progress-bar h-0.5 bg-primary/60"
              style="--duration: {timerDuration}ms"
            ></div>
          {/key}
        </div>
      </div>
    </div>
  </Container>
</div>

<style>
  @keyframes grow {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  .progress-bar {
    animation: grow var(--duration, 5s) linear forwards;
  }
</style>
