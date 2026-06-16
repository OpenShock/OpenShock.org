<script>
  import { asset } from '$app/paths';
  import CloudflareLogo from './CloudflareLogo.svelte';
  import Container from './Container.svelte';
  import DiscordIcon from './icons/DiscordIcon.svelte';
  import GithubIcon from './icons/GithubIcon.svelte';
  import XIcon from './icons/XIcon.svelte';

  const year = new Date().getFullYear();
</script>

<footer class="relative border-t border-gray-200/40 dark:border-gray-800/60">
  <!-- Top gradient accent line -->
  <div
    class="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-primary via-brand to-transparent"
  ></div>

  <Container>
    <div class="py-16 md:py-20">
      <!-- Main grid -->
      <div class="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-12">
        <!-- Brand column (spans full width on mobile) -->
        <div class="col-span-2 md:col-span-1 space-y-6">
          <a href="/#home" class="inline-flex items-center space-x-2">
            <img class="h-8" src={asset('/branding/Logo/Logo.svg')} alt="OpenShock logo" />
          </a>
          <p class="text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-xs">
            Open-source shock collar platform. Free, self-hostable, and community-driven.
          </p>
          <!-- Social icons -->
          <div class="flex items-center gap-3">
            <a
              href="https://github.com/OpenShock"
              target="_blank"
              aria-label="GitHub"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300/60 dark:border-gray-700/60 text-gray-500 dark:text-gray-400 transition hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary"
            >
              <GithubIcon />
            </a>
            <a
              href="https://discord.gg/OpenShock"
              target="_blank"
              aria-label="Discord"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300/60 dark:border-gray-700/60 text-gray-500 dark:text-gray-400 transition hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary"
            >
              <DiscordIcon />
            </a>
            <a
              href="https://x.com/OpenShockORG"
              target="_blank"
              aria-label="X (Twitter)"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300/60 dark:border-gray-700/60 text-gray-500 dark:text-gray-400 transition hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary"
            >
              <XIcon />
            </a>
          </div>
        </div>

        <!-- Product links -->
        <div class="space-y-5">
          <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-white">
            Product
          </h3>
          <ul class="space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="/#home" class="transition hover:text-primary">Home</a></li>
            <li><a href="/#features" class="transition hover:text-primary">Features</a></li>
            <li><a href="/#hardware" class="transition hover:text-primary">Hardware</a></li>
            <li>
              <a href="https://openshock.app" target="_blank" class="transition hover:text-primary">
                OpenShock.app
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources links -->
        <div class="space-y-5">
          <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-white">
            Resources
          </h3>
          <ul class="space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://wiki.openshock.org"
                target="_blank"
                class="transition hover:text-primary"
              >
                Wiki / Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/OpenShock"
                target="_blank"
                class="transition hover:text-primary"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/OpenShock"
                target="_blank"
                class="transition hover:text-primary"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://x.com/OpenShockORG"
                target="_blank"
                class="transition hover:text-primary"
              >
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal links -->
        <div class="space-y-5">
          <h3 class="text-xs font-semibold uppercase tracking-widest text-gray-900 dark:text-white">
            Legal
          </h3>
          <ul class="space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://openshock.org/tos"
                target="_blank"
                class="transition hover:text-primary"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="https://openshock.org/pp"
                target="_blank"
                class="transition hover:text-primary"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://wiki.openshock.org/legal/license/"
                target="_blank"
                class="transition hover:text-primary"
              >
                AGPL-3.0 License
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="mt-16 flex flex-col items-center justify-between gap-6 border-t border-gray-200/40 dark:border-gray-800/60 pt-8 text-sm text-gray-500 dark:text-gray-400 sm:flex-row"
      >
        <span class="flex-1">AGPL-3.0 OpenShock Team {year}</span>

        <a
          href="https://cloudflare.com"
          target="_blank"
          class="flex items-center gap-2 opacity-60 transition hover:opacity-100"
          title="Sponsored by Cloudflare, Project Alexandria"
        >
          <span class="text-xs">Sponsored by</span>
          <CloudflareLogo class="h-6 w-auto -my-1" />
        </a>

        <div class="flex flex-1 justify-end">
          <a href="mailto:admin@openshock.org" class="transition hover:text-primary">
            admin@openshock.org
          </a>
        </div>
      </div>
    </div>
  </Container>
</footer>
