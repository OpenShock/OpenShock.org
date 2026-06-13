<script>
  import Container from './Container.svelte';
  import BrowserIcon from './icons/BrowserIcon.svelte';
  import CodeIcon from './icons/CodeIcon.svelte';
  import DiyIcon from './icons/DiyIcon.svelte';
  import StoreIcon from './icons/StoreIcon.svelte';
</script>

<div id="home">
  <div
    aria-hidden="true"
    class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
  >
    <div
      class="blur-[106px] h-56 bg-linear-to-br from-primary to-purple-400 dark:from-blue-700"
    ></div>
    <div class="blur-[106px] h-32 bg-linear-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
  </div>
  <Container>
    <div class="relative pt-40 ml-auto">
      <div class="lg:w-2/3 text-center mx-auto">
        <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
          The <span class="text-primary">Shocking</span> experience.
        </h1>
        <p class="mt-8 text-gray-700 dark:text-gray-300">
          OpenShock is an open-source platform designed to control various shocking devices over the
          internet, catering to all your masochistic needs!
        </p>

        <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
          <a
            href="https://wiki.openshock.org/vendors/hardware/"
            target="_blank"
            class="relative flex h-11 w-full items-center justify-center gap-2 px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary before:bg-linear-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <StoreIcon class="relative size-4 text-primary dark:text-white" />
            <span class="relative text-base font-semibold text-primary dark:text-white"
              >Buy Hardware</span
            >
          </a>
          <a
            href="https://wiki.openshock.org"
            class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-linear-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 sm:w-max"
          >
            <span class="relative text-base font-semibold text-primary dark:text-white">Wiki</span>
          </a>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="https://openshock.app"
            target="_blank"
            class="group flex flex-col gap-4 rounded-2xl border border-gray-200/60 bg-white/5 p-4 text-left backdrop-blur-sm transition duration-300 hover:border-indigo-300/60 hover:bg-white/10 dark:border-gray-700/30 dark:bg-transparent dark:hover:border-indigo-700/60"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30"
            >
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
            class="group flex flex-col gap-4 rounded-2xl border border-gray-200/60 bg-white/5 p-4 text-left backdrop-blur-sm transition duration-300 hover:border-teal-300/60 hover:bg-white/10 dark:border-gray-700/30 dark:bg-transparent dark:hover:border-teal-700/60"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30"
            >
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
            class="group flex flex-col gap-4 rounded-2xl border border-gray-200/60 bg-white/5 p-4 text-left backdrop-blur-sm transition duration-300 hover:border-violet-300/60 hover:bg-white/10 dark:border-gray-700/30 dark:bg-transparent dark:hover:border-violet-700/60"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-900/30"
            >
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
