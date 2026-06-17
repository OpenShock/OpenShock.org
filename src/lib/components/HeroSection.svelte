<script>
  import { Button } from '$lib/components/ui/button';
  import Container from './Container.svelte';
  import ElectricBackground from './ElectricBackground.svelte';
  import BrowserIcon from './icons/BrowserIcon.svelte';
  import CodeIcon from './icons/CodeIcon.svelte';
  import DiyIcon from './icons/DiyIcon.svelte';
  import StoreIcon from './icons/StoreIcon.svelte';
</script>

<div id="home" class="relative overflow-hidden">
  <ElectricBackground />
  <div
    aria-hidden="true"
    class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
  >
    <div class="h-56 bg-linear-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
    <div class="h-32 bg-linear-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
  </div>
  <Container>
    <div class="relative pt-40">
      <div class="mx-auto text-center lg:w-2/3">
        <h1 class="text-5xl font-bold text-gray-900 md:text-6xl xl:text-7xl dark:text-white">
          The <span class="text-primary">Shocking</span> experience.
        </h1>
        <p class="mt-8 text-gray-700 dark:text-gray-300">
          OpenShock is an open-source platform designed to control various shocking devices over the
          internet, catering to all your masochistic needs!
        </p>

        <div class="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
          <Button
            href="https://wiki.openshock.org/vendors/hardware/"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            class="h-11 w-full px-6 text-base sm:w-max"
          >
            <StoreIcon class="size-4" />
            Buy Hardware
          </Button>
          <Button
            href="https://wiki.openshock.org"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            class="h-11 w-full px-6 text-base sm:w-max"
          >
            Wiki
          </Button>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="https://openshock.app"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col gap-4 rounded-xl bg-card p-4 text-left ring-1 ring-foreground/10 transition duration-300 hover:bg-accent/50"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
              <BrowserIcon class="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 dark:text-white">Easy to Use</h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Simple web UI to control your devices
              </p>
            </div>
          </a>

          <a
            href="https://wiki.openshock.org/guides/diy/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col gap-4 rounded-xl bg-card p-4 text-left ring-1 ring-foreground/10 transition duration-300 hover:bg-accent/50"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
              <DiyIcon class="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 dark:text-white">Do-It-Yourself</h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Build your own hub from cheap ESP32 parts
              </p>
            </div>
          </a>

          <a
            href="https://api.openshock.app/scalar/viewer"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex flex-col gap-4 rounded-xl bg-card p-4 text-left ring-1 ring-foreground/10 transition duration-300 hover:bg-accent/50"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-900/30">
              <CodeIcon class="h-5 w-5 text-violet-500 dark:text-violet-400" />
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 dark:text-white">Developer API</h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Open HTTP API for custom integrations
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Container>
</div>
