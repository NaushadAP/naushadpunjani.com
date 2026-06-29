import { fetchRepos } from '$lib/github.js';
import { fetchArticles } from '$lib/devto.js';

const FEATURED_REPOS = [
  'wso2-integrator-cheatsheet',
  'job-portal'
  // Add as repos ship:
  // 'api-contract-monitor',
  // 'laravel-production-stack',
  // 'ai-augmented-workflow'
];

const MANUAL = {
  'wso2-integrator-cheatsheet': {
    short:
      'A practical reference for WSO2 EI and Micro Integrator. Patterns, gotchas, and recipes from telecom production.',
    stack: ['wso2', 'integration', 'docs']
  },
  'job-portal': {
    short:
      'Laravel job board with employer and candidate flows, email notifications, and applicant tracking.',
    stack: ['Laravel', 'MySQL', 'Tailwind']
  },
  'api-contract-monitor': {
    short:
      'Self-hosted service that catches when vendor APIs drift from their documented contracts.',
    stack: ['Laravel', 'React', 'Docker', 'Nginx']
  },
  'laravel-production-stack': {
    short:
      'Opinionated Docker + Nginx + CI setup for shipping Laravel apps that hold up.',
    stack: ['Laravel', 'Docker', 'Nginx', 'GitHub Actions']
  },
  'ai-augmented-workflow': {
    short:
      'How I actually use Claude Code and Cursor: configs, prompts, custom commands, MCP setups.',
    stack: ['Documentation', 'Configs']
  }
};

export async function load({ fetch, setHeaders }) {
  setHeaders({
    'cache-control': 'public, max-age=0, s-maxage=3600'
  });

  // Fetch both in parallel
  const [repos, articleData] = await Promise.all([
    fetchRepos(fetch, FEATURED_REPOS),
    fetchArticles(fetch)
  ]);

  const featured = repos.map((repo) => ({
    ...repo,
    description: MANUAL[repo.name]?.short || repo.description,
    stack: MANUAL[repo.name]?.stack || (repo.language ? [repo.language] : [])
  }));

  const lastPost = articleData.posts && articleData.posts.length > 0 ? articleData.posts[0] : null;

  return { featured, lastPost };
}