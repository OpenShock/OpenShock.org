/// <reference types="vitest/config" />
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    build: {
      target: 'es2022',
    },
    plugins: [sveltekit()],
    test: { include: ['src/**/*.{test,spec}.{js,ts}'] },
    esbuild: {
      legalComments: 'none',
      banner: '/*! For licenses information, see LICENSES.txt */',
      drop: isProduction ? ['debugger'] : [],
      pure: isProduction ? ['console.log', 'console.debug', 'console.trace'] : [],
    },
  };
});