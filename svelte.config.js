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
function getGitBranch() {
  if (isGithubActions) return process.env.GITHUB_REF_NAME;
  if (isCloudflare) return process.env.CF_BRANCH;
  if (isDocker) return process.env.GIT_BRANCH;

  return child_process.execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
}

const commitHash = getGitHash();
const branchName = getGitBranch();

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  },
  vitePlugin: {
    inspector: mode === 'development',
  },
  csp: {
    mode: 'hash',
    directives: {
      'default-src': ['self'],
      'connect-src': ['self', 'https://cloudflareinsights.com'],
      'script-src': ['self', 'https://static.cloudflareinsights.com'],
    },
  },
  version: {
    name: commitHash,
  },
};

export default config;
