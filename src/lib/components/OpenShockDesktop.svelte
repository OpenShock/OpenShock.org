<script lang="ts">
  import { ArrowRight, Download, Monitor } from '@lucide/svelte';
  import { Button } from '$lib/components/ui/button';
  import Container from './Container.svelte';
  import OpenShockDesktopMock from './OpenShockDesktopMock.svelte';
</script>

<div id="desktop">
  <Container>
    <div class="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
      <!-- Left: text content -->
      <div class="flex flex-col gap-6 lg:w-5/12">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30"
        >
          <Monitor class="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            One app. All your integrations.
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-300">
            OpenShock Desktop is a unified, module-based application for Windows. Instead of
            installing and managing separate tools, you install modules — like ShockOSC — directly
            inside one place, keeping everything in sync and easy to manage.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <Button
            href="https://github.com/OpenShock/Desktop/releases/latest"
            target="_blank"
            size="lg"
          >
            <Download class="size-4" />
            Download for Windows
          </Button>
          <Button
            href="https://github.com/OpenShock/Desktop"
            target="_blank"
            variant="link"
            size="lg"
          >
            View on GitHub
            <ArrowRight class="size-4" />
          </Button>
        </div>
      </div>

      <!-- Right: mock app window -->
      <div class="relative lg:w-7/12">
        <div
          aria-hidden="true"
          class="absolute inset-0 -z-10 scale-90 bg-gradient-to-br from-primary/40 to-purple-500/30 opacity-50 blur-[80px] dark:opacity-40"
        ></div>
        <OpenShockDesktopMock />
      </div>
    </div>
  </Container>
</div>
