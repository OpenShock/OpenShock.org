<script>
import Container from './Container.svelte';
const year = new Date().getFullYear();
</script>

<h2 class="mx-auto text-center text-xl text-zinc-500">This site is WIP, please share feedback with us if you have any!</h2>
<footer class="py-20 md:py-40">
  <Container>
    <div class="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
      <div class="flex flex-wrap items-center justify-between md:flex-nowrap">
        <div class="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start">
          <ul class="list-inside list-disc space-y-8">
            <li><a href="#" class="transition hover:text-primary">Home</a></li>
            <li>
              <a href="https://wiki.openshock.org" class="transition hover:text-primary">Docs</a>
            </li>
          </ul>
          <ul role="list" class="space-y-8">
            <li>
              <a target="_blank" href="https://github.com/OpenShock" class="flex items-center space-x-3 transition hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://discord.gg/OpenShock" class="flex items-center space-x-3 transition hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5" width="16" height="16" viewBox="0 0 127.14 96.36"><path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
                <span>Discord</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://x.com/OpenShockORG" class="flex items-center space-x-3 transition hover:text-primary">
                <svg class="w-5" width="16" height="16" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>
                <span>X (formally Twitter)</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left">
          <span class="block text-gray-500 dark:text-gray-400">OpenShock is an open-source platform designed to control various shocking devices over the internet, catering to all your masochistic needs!</span>
          <span class="block text-gray-500 dark:text-gray-400">OpenShock Team {year}</span>
          <span class="flex justify-between text-gray-600 dark:text-white">
            <a target="_blank" href="https://openshock.org/tos" class="font-medium">Terms of Use</a>
            <a target="_blank" href="https://wiki.openshock.org/legal/license/" class="font-medium">AGPL-3.0 License</a>
            <a target="_blank" href="https://openshock.org/pp" class="font-medium">Privacy Policy</a>
          </span>
          <span class="block text-gray-500 dark:text-gray-400">Need help? <a href="mailto:admin@openshock.org" class="font-semibold text-gray-600 dark:text-white">Contact Us</a></span>
        </div>
      </div>
    </div>
  </Container>
</footer>
