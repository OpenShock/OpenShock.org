<script>
  import { assets } from '$app/paths';
  import Container from './Container.svelte';
  import ArrowRightIcon from './icons/ArrowRightIcon.svelte';
  import DiyIcon from './icons/DiyIcon.svelte';
  import StoreIcon from './icons/StoreIcon.svelte';
</script>

<div id="hardware">
  <Container>
    <img src="{assets}/icons/chip.webp" alt="chip" class="w-6 h-6" />

    <div
      class="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center"
    >
      <div class="md:5/12 lg:w-1/2 transition duration-700 hover:scale-105">
        <img
          src="{assets}/images/OpenShockCoreV2CasePink.webp"
          alt="OpenShock hub"
          loading="lazy"
          width=""
          height=""
          class="w-full"
        />
      </div>
      <div class="md:7/12 lg:w-1/2">
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          DIY Hardware (OpenShock Hub)
        </h2>
        <p class="my-8 text-gray-600 dark:text-gray-300">
          OpenShock supports various types of ESP-32's, which are low-cost, low-power
          microcontrollers that can combied with a 443Mhz Transmitter to be used to control
          shockers.
          <br /><br />
          You can build your own OpenShock Hub and integrate them with OpenShock by using our custom firmware.

          <br /><br />
          Our community also provides pre-built OpenShock Hubs for sale. Checkout the
          <a class="text-primary" href="https://wiki.openshock.org/vendors/hardware/"
            >community vendors</a
          > for more information.
        </p>
        <div class="space-y-4">
          <a
            target="_blank"
            href="https://wiki.openshock.org/guides/diy/"
            class="cursor-pointer my-4 flex gap-4 md:items-center hover:text-primary transition duration-300"
          >
            <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
              <DiyIcon class="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400" />
            </div>
            <div class="w-5/6 flex">
              <h3 class="font-semibold text-lg grow">Do-It-Yourself Guides</h3>
              <ArrowRightIcon
                class="w-7 h-7 -translate-x-4 text-2xl transition duration-300 group/a-hover:text-primary"
              />
            </div>
          </a>

          <div class="border border-gray-100 dark:border-gray-800"></div>

          <a
            target="_blank"
            href="https://wiki.openshock.org/vendors/hardware/"
            class="cursor-pointer my-4 flex gap-4 md:items-center hover:text-primary transition duration-300"
          >
            <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
              <StoreIcon class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400" />
            </div>
            <div class="w-5/6 flex">
              <h3 class="font-semibold text-lg grow">Prebuilt Vendor List</h3>
              <ArrowRightIcon
                class="w-7 h-7 -translate-x-4 text-2xl transition duration-300 group/b-hover:text-primary"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </Container>
</div>
