<script lang="ts">
  import { ArrowRight, Monitor } from '@lucide/svelte';
  import { resolve } from '$app/paths';
  import { Button } from '$lib/components/ui/button';
  import Container from './Container.svelte';
  import DesktopDownloadButton from './DesktopDownloadButton.svelte';
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
          <DesktopDownloadButton />
          <Button href={resolve('/desktop')} variant="link" size="lg">
            Learn more
            <ArrowRight class="size-4" />
          </Button>
        </div>
      </div>

      <!-- Right: mock app window -->
      <div class="relative lg:w-7/12">
        <div
          aria-hidden="true"
          class="absolute inset-0 -z-10 scale-90 bg-linear-to-br from-primary/40 to-purple-500/30 opacity-50 blur-[80px] dark:opacity-40"
        ></div>
        <OpenShockDesktopMock />
      </div>
    </div>
  </Container>
</div>
