<script>
  import Container from './Container.svelte';
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              class="relative size-4 text-primary dark:text-white"
            >
              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z"
              />
            </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                class="h-5 w-5 text-indigo-500 dark:text-indigo-400"
              >
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM96 208c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L112 224c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm224-64c0-8.8 7.2-16 16-16l64 0 0-64-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                class="h-5 w-5 text-teal-600 dark:text-teal-400"
              >
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
                class="h-5 w-5 text-violet-500 dark:text-violet-400"
              >
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                />
              </svg>
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
