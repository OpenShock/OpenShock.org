/// <reference types="vitest/config" />
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { playwright } from '@vitest/browser-playwright';
import license from 'rollup-plugin-license';
import { type PluginOption, defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    build: {
      target: 'es2022',
    },
    plugins: [
      enhancedImages(),
      tailwindcss(),
      sveltekit(),
      license({
        thirdParty: {
          includePrivate: true,
          includeSelf: true,
          multipleVersions: true,
          output: {
            file: './.svelte-kit/output/client/LICENSES.txt', // TODO: This seems like a hack, check if theres a better way...
          },
        },
      }) as PluginOption,
    ],
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
