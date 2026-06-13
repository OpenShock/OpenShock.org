<script>
  import { assets } from '$app/paths';
  import Container from './Container.svelte';
  import ArrowRightIcon from './icons/ArrowRightIcon.svelte';
  import SparklesIcon from './icons/SparklesIcon.svelte';
</script>

<div id="features">
  <Container>
    <div class="md:w-2/3 lg:w-1/2">
      <SparklesIcon class="w-6 h-6 text-secondary" />

      <h2 class="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
        Safety and Security at the top most priority
      </h2>
      <p class="text-gray-600 dark:text-gray-300">
        Safety and security settings are the top most priority for us, to make sure that you have
        control and safety you need.
        <br /><br />
        On that basis, we have some key features to ensure you can control your shockers how you like!
      </p>
    </div>
    <div
      class="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
    >
      <div
        class="group relative bg-white dark:bg-gray-800 transition hover:z-1 hover:shadow-2xl hover:shadow-gray-600/10"
      >
        <div class="relative space-y-8 py-12 p-8">
          <img
            src="{assets}/images/features/speed-64.png"
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-primary"
            >
              Ultra low latency
            </h5>
            <p class="text-gray-600 dark:text-gray-300">
              Our software architecture is designed to provide ultra low latency.
            </p>
          </div>
          <!-- <a
            href="#"
            class="flex items-center justify-between group-hover:text-gray-400"
          >
            <span class="text-sm">Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <path
                fill-rule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clip-rule="evenodd"></path>
            </svg>
          </a>-->
        </div>
      </div>
      <div
        class="group relative bg-white dark:bg-gray-800 transition hover:z-1 hover:shadow-2xl hover:shadow-gray-600/10"
      >
        <div class="relative space-y-8 py-12 p-8">
          <img
            src="{assets}/images/features/dashboard-96.png"
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-primary"
            >
              Control Web UI
            </h5>
            <p class="text-gray-600 dark:text-gray-300">
              You have full control over your shockers and its limits via the web interface.
            </p>
          </div>
          <a
            href="https://openshock.app"
            target="_blank"
            class="flex items-center justify-between group-hover:text-gray-400"
          >
            <span class="text-sm">Check it out</span>
            <ArrowRightIcon
              class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
      <div
        class="group relative bg-white dark:bg-gray-800 transition hover:z-1 hover:shadow-2xl hover:shadow-gray-600/10"
      >
        <div class="relative space-y-8 py-12 p-8">
          <img
            src="{assets}/images/features/controller-96.png"
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-primary"
            >
              Game Integrations
            </h5>
            <p class="text-gray-600 dark:text-gray-300">
              VRChat, ChilloutVR, Minecraft, Lethal Company and more.
            </p>
          </div>
          <a
            href="https://github.com/OpenShock/awesome-openshock"
            target="_blank"
            class="flex items-center justify-between group-hover:text-gray-400"
          >
            <span class="text-sm">Awesome OpenShock Integrations</span>
            <ArrowRightIcon
              class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
      <div
        class="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-1 hover:shadow-2xl hover:shadow-gray-600/10"
      >
        <div
          class="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-primary"
            >
              More features
            </h5>
            <p class="text-gray-600 dark:text-gray-300">
              Explore out docs or GitHub repostory for more features and integrations.
            </p>
          </div>
          <a
            href="https://github.com/orgs/OpenShock/repositories"
            class="flex items-center justify-between group-hover:text-gray-400"
          >
            <span class="text-sm">Read more</span>
            <ArrowRightIcon
              class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </div>
  </Container>
</div>
