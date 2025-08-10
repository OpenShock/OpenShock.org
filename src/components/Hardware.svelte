<script>
import Container from './Container.svelte';
</script>

<div id="hardware">
  <Container>
    <img src="/icons/chip.webp" alt="chip" class="w-6 h-6" />

    <div class="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
      <div class="md:5/12 lg:w-1/2 transition duration-700 hover:scale-105">
        <img
          src="/images/OpenShockCoreV2CasePink.webp"
          alt="OpenShock hardware"
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
          OpenShock supports various types of ESP-32's, which are low-cost, low-power microcontrollers that can combied with a 443Mhz Transmitter to be used to control shockers.
          <br /><br />
          You can build your own OpenShock Hub and integrate them with OpenShock by using our custom firmware.

          <br /><br />
          Our community also provides pre-built OpenShock Hubs for sale. Checkout the
          <a class="text-primary" href="https://wiki.openshock.org/vendors/hardware/">community vendors</a> for more information.
        </p>
        <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
          <a
            target="_blank"
            href="https://wiki.openshock.org/diy/assembling/"
            class="cursor-pointer mt-8 flex gap-4 md:items-center hover:text-primary transition duration-300">
            <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
              <svg fill="currentColor" class="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"/></svg>
            </div>
            <div class="w-5/6 flex">
              <h3 class="font-semibold text-lg flex-grow">
                Do-It-Yourself Guides
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[28px] h-[28px] -translate-x-4 text-2xl transition duration-300 group/a-hover:text-primary"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>
            </div>
          </a>

          <a
            target="_blank"
            href="https://wiki.openshock.org/vendors/hardware/"
            class="cursor-pointer pt-4 flex gap-4 md:items-center hover:text-primary transition duration-300">
            <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
              <svg fill="currentColor" class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z"/></svg>
            </div>
            <div class="w-5/6 flex">
              <h3 class="font-semibold text-lg flex-grow">
                Prebuilt Vendor List
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[28px] h-[28px] -translate-x-4 text-2xl transition duration-300 group/b-hover:text-primary"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Container>
</div>
