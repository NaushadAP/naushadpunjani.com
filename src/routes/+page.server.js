import { fetchRepos } from '$lib/github.js';

const FEATURED_REPOS = [
  'job-portal'
  // Add as repos ship:
  // 'api-contract-monitor',
  // 'laravel-production-stack',
  // 'ai-augmented-workflow'
];

const MANUAL = {
  'job-portal': {
    short: 'Laravel-based job board with employer and candidate flows, email notifications, and applicant tracking.',
    stack: ['Laravel', 'MySQL', 'Tailwind', 'Blade']
  },
  'api-contract-monitor': {
    short: 'Self-hosted service for catching when vendor APIs drift from their documented contracts.',
    stack: ['Laravel', 'React', 'Docker', 'Nginx']
  },
  'laravel-production-stack': {
    short: 'Opinionated Docker + Nginx + CI setup for shipping Laravel apps that hold up.',
    stack: ['Laravel', 'Docker', 'Nginx', 'GitHub Actions']
  },
  'ai-augmented-workflow': {
    short: 'How I actually use Claude Code and Cursor: configs, prompts, custom commands, MCP setups.',
    stack: ['Documentation', 'Configs']
  }
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, setHeaders }) {
  setHeaders({
    'cache-control': 'public, max-age=0, s-maxage=3600'
  });

  const repos = await fetchRepos(fetch, FEATURED_REPOS);

  const featured = repos.map((repo) => ({
    ...repo,
    description: MANUAL[repo.name]?.short || repo.description,
    stack: MANUAL[repo.name]?.stack || (repo.language ? [repo.language] : [])
  }));

  return { featured };
}