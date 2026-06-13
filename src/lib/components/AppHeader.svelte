<script>
  import { asset } from '$app/paths';
  import Container from './Container.svelte';
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
  const navLinksClass = $derived(
    `${isOpen ? '!visible !scale-100 !opacity-100 !lg:translate-y-0' : ''}`
  );
</script>

<header>
  <nav
    class="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent"
  >
    <Container>
      <div class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
        <div class="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
          <a href="#home" aria-label="logo" class="flex items-center space-x-2">
            <img
              class="h-9"
              src={asset('/branding/Logo/NavbarLogoSpin.svg')}
              alt="OpenShock logo"
              fetchpriority="high"
            />
          </a>

          <div class="relative flex max-h-10 items-center lg:hidden">
            <button
              aria-label="humburger"
              aria-expanded={isOpen}
              class="relative -mr-6 p-6"
              onclick={toggleNav}
              type="button"
            >
              <div aria-hidden="true" class={line1Class}></div>
              <div aria-hidden="true" class={line2Class}></div>
            </button>
          </div>
        </div>
        <div aria-hidden="true" class={navLayerClass} onclick={closeNav}></div>
        <div
          class={'invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 ' +
            'flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white dark:bg-[#181a1b] ' +
            'p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:shadow-none lg:visible lg:relative ' +
            'lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none ' +
            'lg:bg-transparent! lg:p-0 lg:opacity-100 lg:shadow-none dark:border-gray-200 ' +
            navLinksClass}
        >
          <div class="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
            <ul class="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
              <li>
                <a
                  href="#features"
                  class="hover:text-primary block transition dark:hover:text-white md:px-4"
                  onclick={closeNav}
                >
                  <span>Features</span>
                </a>
              </li>
              <li>
                <a
                  href="#hardware"
                  class="hover:text-primary block transition dark:hover:text-white md:px-4"
                  onclick={closeNav}
                >
                  <span>Hardware</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wiki.openshock.org"
                  target="_blank"
                  class="hover:text-primary block transition dark:hover:text-white md:px-4"
                  onclick={closeNav}
                >
                  <span>Wiki</span>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/OpenShock"
                  target="_blank"
                  class="hover:text-primary block transition dark:hover:text-white md:px-4"
                  onclick={closeNav}
                >
                  <DiscordIcon class="w-5 inline-block mr-1" />
                  <span>Discord</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="mt-12 lg:mt-0">
            <a
              href="https://openshock.app"
              class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span class="relative text-sm font-semibold text-white"> OpenShock.app</span>
              <ExternalLinkIcon class="ml-3 size-4 text-white z-1" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  </nav>
</header>
