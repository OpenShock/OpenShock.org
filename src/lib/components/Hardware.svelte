<script>
import Container from '$lib/components/Container.svelte';
</script>

<div id="hardware">
  <Container>
    <img src="/icons/chip.webp" alt="chip" class="w-6 h-6" />

    <div class="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
      <div class="md:5/12 lg:w-1/2 transition duration-700 hover:scale-105">
        <img
          src="/images/OpenShockCoreV2CasePink.webp"
          alt="OpenShock Hub"
          class="w-full"
        />
      </div>
      <div class="md:7/12 lg:w-1/2">
        <h2
          class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
        >
          DIY Hardware (OpenShock Hub)
        </h2>
        <p class="my-8 text-gray-600 dark:text-gray-300">
          OpenShock supports various types of ESP-32's, which are low-cost,
          low-power microcontrollers that can be combined with a 443Mhz Transmitter
          to control shockers.
        </p>
        <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
          <a
            target="_blank"
            href="https://wiki.openshock.org/diy/assembling/"
            class="cursor-pointer mt-8 flex gap-4 md:items-center hover:text-primary transition duration-300"
          >
            <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
              <svg
                fill="currentColor"
                class="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z" />
              </svg>
            </div>
            <div class="w-5/6 flex">
              <h3 class="font-semibold text-lg flex-grow">
                Do-It-Yourself Guides
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Container>
</div>
