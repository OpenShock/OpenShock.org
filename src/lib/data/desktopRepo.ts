const REPO_URL = 'https://repo.openshock.org/1';

export interface RepoModuleVersion {
  url: string;
  sha256Hash: string;
  changelogUrl: string | null;
  releaseUrl: string;
}

export interface RepoModule {
  id: string;
  name: string;
  description: string;
  sourceUrl: string;
  iconUrl: string;
  versions: Record<string, RepoModuleVersion>;
  /** Highest version, preferring stable releases over pre-releases. */
  latestVersion?: string;
}

interface RepoResponse {
  name: string;
  id: string;
  author: string;
  homepage: string;
  modules: Record<string, Omit<RepoModule, 'id' | 'latestVersion'>>;
}

function parseVersion(v: string): { nums: number[]; pre: string } {
  const [core, pre] = v.split('-');
  const nums = core.split('.').map((n) => parseInt(n, 10) || 0);
  while (nums.length < 3) nums.push(0);
  return { nums, pre: pre ?? '' };
}

/** Semver-ish compare: a stable release ranks above a pre-release of the same core. */
function compareVersions(a: string, b: string): number {
  const pa = parseVersion(a);
  const pb = parseVersion(b);
  for (let i = 0; i < 3; i++) {
    if (pa.nums[i] !== pb.nums[i]) return pa.nums[i] - pb.nums[i];
  }
  if (!pa.pre && pb.pre) return 1;
  if (pa.pre && !pb.pre) return -1;
  return pa.pre.localeCompare(pb.pre);
}

function pickLatestVersion(versions: string[]): string | undefined {
  if (versions.length === 0) return undefined;
  return [...versions].sort(compareVersions).at(-1);
}

export async function fetchDesktopModules(fetchFn: typeof fetch = fetch): Promise<RepoModule[]> {
  const res = await fetchFn(REPO_URL);
  if (!res.ok) throw new Error(`Module repository responded with ${res.status}`);
  const data: RepoResponse = await res.json();
  return Object.entries(data.modules)
    .map(([id, mod]) => ({
      id,
      ...mod,
      latestVersion: pickLatestVersion(Object.keys(mod.versions)),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
