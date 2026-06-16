<script lang="ts">
  import { Blocks, BookOpen, Cpu, Monitor, Sparkles } from '@lucide/svelte';
  import { asset, resolve } from '$app/paths';
  import { Button } from '$lib/components/ui/button';
  import type { Component } from 'svelte';
  import Container from './Container.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import DiscordIcon from './icons/DiscordIcon.svelte';
  import ExternalLinkIcon from './icons/ExternalLinkIcon.svelte';

  interface NavLink {
    label: string;
    href: string;
    external?: boolean;
    icon: Component<{ class?: string }>;
    /** On desktop show only the icon (label is still used for a11y + the mobile menu). */
    iconOnlyDesktop?: boolean;
  }

  const navLinks: NavLink[] = [
    { label: 'Features', href: '/#features', icon: Sparkles },
    { label: 'Hardware', href: '/#hardware', icon: Cpu },
    { label: 'Integrations', href: resolve('/integrations'), icon: Blocks },
    { label: 'Desktop', href: resolve('/desktop'), icon: Monitor },
    { label: 'Wiki', href: 'https://wiki.openshock.org', external: true, icon: BookOpen },
    {
      label: 'Discord',
      href: 'https://discord.gg/OpenShock',
      external: true,
      icon: DiscordIcon,
      iconOnlyDesktop: true,
    },
  ];

  // On desktop, text links are spaced apart while icon-only links cluster
  // together with the theme toggle as a tight set of icon buttons.
  const mainLinks = navLinks.filter((link) => !link.iconOnlyDesktop);
  const utilityLinks = navLinks.filter((link) => link.iconOnlyDesktop);

  let isOpen = $state(false);
  const toggleNav = () => (isOpen = !isOpen);
  const closeNav = () => (isOpen = false);

  const line1Class = $derived(
    `m-auto h-0.5 w-5 rounded bg-foreground transition duration-300 ${
      isOpen ? 'translate-y-1.5 rotate-45' : ''
    }`
  );
  const line2Class = $derived(
    `m-auto mt-2 h-0.5 w-5 rounded bg-foreground transition duration-300 ${
      isOpen ? '-translate-y-1 -rotate-45' : ''
    }`
  );
</script>

<header>
  <nav class="border-border/50 absolute z-20 w-full border-b lg:border-transparent">
    <Container>
      <div class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
        <a href={resolve('/')} aria-label="logo" class="flex shrink-0 items-center space-x-2">
          <img
            class="h-9"
            src={asset('/branding/Logo/NavbarLogoSpin.svg')}
            alt="OpenShock logo"
            fetchpriority="high"
          />
        </a>

        <!-- Desktop navigation -->
        <div class="hidden lg:flex lg:items-center lg:gap-4">
          <ul class="text-foreground/80 flex items-center gap-6 text-sm">
            {#each mainLinks as link (link.label)}
              {@const Icon = link.icon}
              <li>
                <a
                  href={link.href}
                  class="hover:text-primary inline-flex items-center gap-1.5 transition"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onclick={closeNav}
                >
                  <Icon class="size-4" />
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>

          <!-- Icon-only utilities -->
          <div class="text-foreground/80 flex items-center gap-1">
            {#each utilityLinks as link (link.label)}
              {@const Icon = link.icon}
              <a
                href={link.href}
                class="hover:bg-muted hover:text-primary rounded-full p-2 transition"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                onclick={closeNav}
              >
                <Icon class="size-5" />
              </a>
            {/each}
            <ThemeToggle />
          </div>

          <Button href="https://openshock.app" class="ml-2 h-9 shrink-0 px-4">
            OpenShock.app
            <ExternalLinkIcon class="size-4" />
          </Button>
        </div>

        <!-- Mobile menu button -->
        <button
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          class="relative p-2 lg:hidden"
          onclick={toggleNav}
          type="button"
        >
          <div aria-hidden="true" class={line1Class}></div>
          <div aria-hidden="true" class={line2Class}></div>
        </button>
      </div>
    </Container>

    <!-- Mobile navigation backdrop -->
    <div
      aria-hidden="true"
      class={`bg-background/80 fixed inset-0 z-10 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onclick={closeNav}
    ></div>

    <!-- Mobile navigation menu -->
    <div
      class={`bg-popover border-border absolute inset-x-0 top-full z-20 origin-top border-b transition-all duration-300 lg:hidden ${
        isOpen ? 'scale-y-100 opacity-100' : 'pointer-events-none scale-y-0 opacity-0'
      }`}
    >
      <Container>
        <ul class="flex flex-col gap-1 py-4">
          {#each navLinks as link (link.label)}
            {@const Icon = link.icon}
            <li>
              <a
                href={link.href}
                class="hover:text-primary hover:bg-muted flex items-center gap-2 rounded-md px-4 py-2 transition"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onclick={closeNav}
              >
                <Icon class="size-5" />
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
        <div class="border-border flex items-center justify-between gap-4 border-t px-4 py-4">
          <ThemeToggle />
          <Button href="https://openshock.app" class="h-9 px-4">
            OpenShock.app
            <ExternalLinkIcon class="size-4" />
          </Button>
        </div>
      </Container>
    </div>
  </nav>
</header>
