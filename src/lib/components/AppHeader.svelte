<script>
  import { asset, resolve } from '$app/paths';
  import { Button } from '$lib/components/ui/button';
  import Container from './Container.svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  import DiscordIcon from './icons/DiscordIcon.svelte';
  import ExternalLinkIcon from './icons/ExternalLinkIcon.svelte';

  // Reactive state for mobile nav
  let isOpen = $state(false);

  const toggleNav = () => (isOpen = !isOpen);
  const closeNav = () => (isOpen = false);

  // Derived classes for dynamic UI based on state
  const line1Class = $derived(
    `m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 ${
      isOpen ? 'translate-y-1.5 rotate-45' : ''
    }`
  );
  const line2Class = $derived(
    `m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 ${
      isOpen ? '-translate-y-1 -rotate-45' : ''
    }`
  );
  const navLayerClass = $derived(
    `fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden ${
      isOpen ? 'origin-top scale-y-100' : ''
    }`
  );
</script>

<header>
  <nav
    class="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent"
  >
    <Container>
      <div class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
        <a href={resolve('/')} aria-label="logo" class="flex items-center space-x-2 shrink-0">
          <img
            class="h-9"
            src={asset('/branding/Logo/NavbarLogoSpin.svg')}
            alt="OpenShock logo"
            fetchpriority="high"
          />
        </a>

        <!-- Navigation for desktop -->
        <div class="hidden lg:flex lg:items-center lg:gap-8">
          <div class="text-gray-600 dark:text-gray-200">
            <ul class="flex gap-8 text-sm items-center">
              <li>
                <a
                  href="#features"
                  class="hover:text-primary block transition dark:hover:text-white"
                  onclick={closeNav}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#hardware"
                  class="hover:text-primary block transition dark:hover:text-white"
                  onclick={closeNav}
                >
                  Hardware
                </a>
              </li>
              <li>
                <a
                  href={resolve('/integrations')}
                  class="hover:text-primary block transition dark:hover:text-white"
                  onclick={closeNav}
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href={resolve('/desktop')}
                  class="hover:text-primary block transition dark:hover:text-white md:px-4"
                  onclick={closeNav}
                >
                  <span>Desktop</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wiki.openshock.org"
                  target="_blank"
                  class="hover:text-primary block transition dark:hover:text-white"
                  onclick={closeNav}
                >
                  Wiki
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/OpenShock"
                  target="_blank"
                  class="hover:text-primary block transition dark:hover:text-white"
                  onclick={closeNav}
                >
                  <DiscordIcon class="w-5 inline-block" />
                </a>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>

          <Button href="https://openshock.app" class="h-9 px-4 shrink-0">
            OpenShock.app
            <ExternalLinkIcon class="size-4" />
          </Button>
        </div>

        <!-- Mobile menu button -->
        <div class="relative flex lg:hidden">
          <button
            aria-label="hamburger"
            aria-expanded={isOpen}
            class="relative p-2"
            onclick={toggleNav}
            type="button"
          >
            <div aria-hidden="true" class={line1Class}></div>
            <div aria-hidden="true" class={line2Class}></div>
          </button>
        </div>

        <!-- Mobile navigation overlay -->
        <div aria-hidden="true" class={navLayerClass} onclick={closeNav}></div>

        <!-- Mobile navigation menu -->
        <div
          class={`fixed top-16 left-0 right-0 z-20 lg:hidden origin-top scale-y-0 transition-transform duration-300 ${
            isOpen ? 'scale-y-100' : ''
          } bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700`}
        >
          <Container>
            <div class="py-4 space-y-4">
              <a
                href="#features"
                class="block px-4 py-2 hover:text-sky-600 dark:hover:text-sky-400 transition"
                onclick={closeNav}
              >
                Features
              </a>
              <a
                href="#hardware"
                class="block px-4 py-2 hover:text-sky-600 dark:hover:text-sky-400 transition"
                onclick={closeNav}
              >
                Hardware
              </a>
              <a
                href={resolve('/integrations')}
                class="block px-4 py-2 hover:text-sky-600 dark:hover:text-sky-400 transition"
                onclick={closeNav}
              >
                Integrations
              </a>
              <a
                href="https://wiki.openshock.org"
                target="_blank"
                class="block px-4 py-2 hover:text-sky-600 dark:hover:text-sky-400 transition"
                onclick={closeNav}
              >
                Wiki
              </a>
              <a
                href="https://discord.gg/OpenShock"
                target="_blank"
                class="block px-4 py-2 hover:text-sky-600 dark:hover:text-sky-400 transition"
                onclick={closeNav}
              >
                <DiscordIcon class="w-5 inline-block" />
                <span class="ml-2">Discord</span>
              </a>
              <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button href="https://openshock.app" class="h-9 w-full px-4">
                  OpenShock.app
                  <ExternalLinkIcon class="size-4" />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  </nav>
</header>
