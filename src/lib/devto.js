// Reusable Dev.to article fetcher.
// No auth needed for public articles.

import { config } from './config.js';

const FALLBACK = [
  {
    title: 'Posts coming soon',
    description: 'Articles will appear here once published on Dev.to.',
    url: config.devto.profileUrl,
    published_at: null,
    reading_time_minutes: null,
    tag_list: [],
    cover_image: null
  }
];

/**
 * Fetch all published articles for the configured Dev.to user.
 * Returns the fallback list on failure.
 */
export async function fetchArticles(fetch) {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${config.devto.username}&per_page=30`
    );

    if (!res.ok) {
      console.warn(`Dev.to API returned ${res.status}, using fallback`);
      return { posts: FALLBACK, source: 'fallback' };
    }

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      return { posts: FALLBACK, source: 'fallback' };
    }

    const posts = data.map((post) => ({
      title: post.title,
      description: post.description,
      url: post.url,
      published_at: post.published_at,
      reading_time_minutes: post.reading_time_minutes,
      tag_list: post.tag_list || [],
      cover_image: post.cover_image
    }));

    return { posts, source: 'devto' };
  } catch (err) {
    console.error('Dev.to fetch failed:', err);
    return { posts: FALLBACK, source: 'fallback' };
  }
}