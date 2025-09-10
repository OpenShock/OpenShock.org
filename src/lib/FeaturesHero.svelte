<script>
import Container from './Container.svelte';
</script>

<div id="integrations-hero" class="!mt-14">
  <Container>
    <div>
      <h2 class="text-center font-bold text-gray-800 dark:text-white md:text-4xl">
        Popular Integrations
      </h2>
      <p class="mx-auto text-center mt-8 text-gray-700 dark:text-gray-300">
        These are some of the popular game / platform integrations that
        OpenShock supports.
      </p>
      <p class="mx-auto text-center text-sm text-gray-500 dark:text-gray-800">
        Note that these brands / games / platforms are not officially affiliated
        with OpenShock.
      </p>
      <div class="mt-12 grid grid-cols-2 sm:grid-cols-4">
        <a class="p-4" target="_blank" href="https://github.com/OpenShock/ShockOSC">
          <img src="./images/games/VRC_Logo.png" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
        </a>
        <a class="p-4 grayscale" target="_blank" href="https://github.com/OpenShock/ShockOSC">
          <img src="./images/games/CVR-white-small.png" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
        </a>
        <a class="p-4 flex grayscale transition duration-200 hover:grayscale-0" target="_blank" href="https://modrinth.com/mod/shockcraft">
          <img src="./images/games/Minecraft_franchise_logo.svg" class="h-9 w-auto m-auto" loading="lazy" alt="client logo" />
        </a>
        <a class="p-4 flex" target="_blank" href="https://github.com/OpenShock/DiscordBot">
          <img src="./images/games/discord-logo-white.svg" class="h-8 w-auto m-auto" loading="lazy" alt="client logo" />
        </a>
      </div>
    </div>
  </Container>
</div>
