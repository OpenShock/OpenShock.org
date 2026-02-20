<script>
  import CloudflareLogo from './CloudflareLogo.svelte';
  import Container from './Container.svelte';

  const year = new Date().getFullYear();
</script>

<footer class="relative border-t border-gray-200/40 dark:border-gray-800/60">
  <!-- Top gradient accent line -->
  <div
    class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary via-secondary to-transparent"
  ></div>

  <Container>
    <div class="py-16 md:py-20">
      <!-- Main grid -->
      <div class="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-12">
        <!-- Brand column (spans full width on mobile) -->
        <div class="col-span-2 md:col-span-1 space-y-6">
          <a href="/#home" class="inline-flex items-center space-x-2">
            <img class="h-8" src="/logo.svg" alt="OpenShock logo" />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-4"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
            <a
              href="https://discord.gg/OpenShock"
              target="_blank"
              aria-label="Discord"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300/60 dark:border-gray-700/60 text-gray-500 dark:text-gray-400 transition hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 127.14 96.36">
                <path
                  fill="currentColor"
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                ></path>
              </svg>
            </a>
            <a
              href="https://x.com/OpenShockORG"
              target="_blank"
              aria-label="X (Twitter)"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300/60 dark:border-gray-700/60 text-gray-500 dark:text-gray-400 transition hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary"
            >
              <svg
                class="w-3.5"
                viewBox="0 0 1200 1227"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                ></path>
              </svg>
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
        <span>AGPL-3.0 OpenShock Team {year}</span>

        <a
          href="https://cloudflare.com"
          target="_blank"
          class="flex items-center gap-2 opacity-60 transition hover:opacity-100"
          title="Sponsored by Cloudflare, Project Alexandria"
        >
          <span class="text-xs">Sponsored by</span>
          <CloudflareLogo class="h-6 w-auto -my-1" />
        </a>

        <a href="mailto:admin@openshock.org" class="transition hover:text-primary">
          admin@openshock.org
        </a>
      </div>
    </div>
  </Container>
</footer>
