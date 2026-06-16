import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import * as child_process from 'node:child_process';

const mode = process.env.NODE_ENV;
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isCloudflare = process.env.CF_PAGES === '1';
const isDocker = process.env.DOCKER === 'true';

// Use the appropriate adapter
const adapter = isCloudflare ? adapterCloudflare : adapterNode;

function getGitHash() {
  if (isGithubActions) return process.env.GITHUB_SHA;
  if (isCloudflare) return process.env.CF_COMMIT_SHA;
  if (isDocker) return process.env.GIT_COMMIT_SHA;

  return child_process.execSync('git rev-parse HEAD').toString().trim();
}

const commitHash = getGitHash();

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    csp: {
      mode: 'hash',
      directives: {
        'default-src': ['self'],

        'connect-src': [
          'self',
          'https://*.openshock.app',
          'https://*.openshock.org',
          'https://github.com',
          'https://api.github.com',
          'https://cloudflareinsights.com',
          'https://modrinth.com',
        ],

        'img-src': [
          'self',
          'data:',
          'https://*.openshock.app',
          'https://openshock.org',
          'https://*.openshock.org',
          'https://cdn-icons-png.flaticon.com',
          'https://github.com',
          'https://avatars.githubusercontent.com',
        ],

        'script-src': ['self', 'https://static.cloudflareinsights.com'],

        'style-src': [
          'self',
          `'unsafe-inline'`, // inline style attributes (e.g. data-sveltekit wrapper)
        ],

        'font-src': ['self'],
      },
    },
  },
  vitePlugin: {
    inspector: mode === 'development',
  },
  compilerOptions: {
    runes: true,
    modernAst: true,
  },
  version: {
    name: commitHash,
  },
};

export default config;
