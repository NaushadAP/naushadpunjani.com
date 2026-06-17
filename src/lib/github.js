// Reusable GitHub repo fetcher — used by home and projects pages.
// No auth needed for public repos.

import { config } from './config.js';

/**
 * Fetch metadata for a single public repo.
 * Returns null on failure so the caller can skip gracefully.
 */
export async function fetchRepo(fetch, repoName) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${config.github.username}/${repoName}`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    );

    if (!res.ok) {
      console.warn(`GitHub API: ${repoName} returned ${res.status}`);
      return null;
    }

    const data = await res.json();

    return {
      name: data.name,
      description: data.description,
      url: data.html_url,
      homepage: data.homepage,
      language: data.language,
      stars: data.stargazers_count,
      forks: data.forks_count,
      pushed_at: data.pushed_at,
      topics: data.topics || []
    };
  } catch (err) {
    console.error(`GitHub fetch failed for ${repoName}:`, err);
    return null;
  }
}

/**
 * Fetch multiple repos in parallel. Skips any that fail.
 */
export async function fetchRepos(fetch, repoNames) {
  const results = await Promise.all(repoNames.map((name) => fetchRepo(fetch, name)));
  return results.filter(Boolean);
}