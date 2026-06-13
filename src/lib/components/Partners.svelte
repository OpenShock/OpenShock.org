<script lang="ts">
  import { ArrowRight } from '@lucide/svelte';
  import { asset } from '$app/paths';
  import { fade } from 'svelte/transition';
  import CloudflareLogo from './CloudflareLogo.svelte';
  import Container from './Container.svelte';
  import UsersGroupIcon from './icons/UsersGroupIcon.svelte';

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
          <UsersGroupIcon class="h-6 w-6 text-primary" />
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
