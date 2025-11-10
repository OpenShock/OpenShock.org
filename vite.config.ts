/// <reference types="vitest/config" />
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    build: {
      target: 'es2022',
    },
    plugins: [tailwindcss(), sveltekit()],
    test: {
      expect: { requireAssertions: true },
      projects: [
        {
          extends: './vite.config.ts',
          test: {
            name: 'client',
            browser: {
              enabled: true,
              provider: playwright(),
              instances: [{ browser: 'chromium', headless: true }],
            },
            include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
            exclude: ['src/lib/server/**'],
          },
        },
        {
          extends: './vite.config.ts',
          test: {
            name: 'server',
            environment: 'node',
            include: ['src/**/*.{test,spec}.{js,ts}'],
            exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
          },
        },
      ],
    },
    esbuild: {
      legalComments: 'none',
      banner: '/*! For licenses information, see LICENSES.txt */',
      drop: isProduction ? ['debugger'] : [],
      pure: isProduction ? ['console.log', 'console.debug', 'console.trace'] : [],
    },
  };
});
