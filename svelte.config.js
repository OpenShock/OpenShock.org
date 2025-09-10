import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  kit: {
    adapter: adapter({ mode: 'pages' })
  },
  preprocess: vitePreprocess()
};

export default config;
