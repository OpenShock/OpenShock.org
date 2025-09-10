<script>
import Container from '$lib/components/Container.svelte';
let open = false;
const links = [
  { to: '/#features', label: 'Features' },
  { to: '/#hardware', label: 'Hardware' },
  { to: 'https://wiki.openshock.org', label: 'Wiki', target: '_blank' }
];
</script>

<header>
  <nav class="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
    <Container>
      <div class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
        <a href="/#home" aria-label="logo" class="flex items-center space-x-2">
          <img class="h-[36px]" src="/logo.svg" alt="logo" />
        </a>
        <button aria-label="toggle navigation" class="relative flex max-h-10 items-center lg:hidden" on:click={() => open = !open}>
          <div class="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition" class:translate-y-1.5={open} class:rotate-45={open}></div>
          <div class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition" class:-translate-y-1={open} class:-rotate-45={open}></div>
        </button>
        <div class="w-full lg:w-7/12" class:invisible={!open && 'lg:visible'} class:opacity-0={!open && 'lg:opacity-100'} class:scale-90={!open && 'lg:scale-100'} class:visible={open} class:opacity-100={open} class:scale-100={open}>
          <div class="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
            <ul class="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
              {#each links as link}
                <li><a href={link.to} target={link.target} class="hover:text-primary block transition dark:hover:text-white md:px-4">{link.label}</a></li>
              {/each}
            </ul>
          </div>
          <div class="mt-12 lg:mt-0">
            <a href="https://openshock.app" class="relative flex h-9 items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
              <span class="relative text-sm font-semibold text-white"> OpenShock.app</span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  </nav>
</header>
