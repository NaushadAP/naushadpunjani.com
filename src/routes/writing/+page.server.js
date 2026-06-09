// Fetches your Dev.to articles via the public API.
// Runs server-side on each page request (or at build time on Vercel).
// If the API call fails or returns empty, we fall back to a hardcoded list.

const DEV_TO_USERNAME = 'naushadap';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, setHeaders }) {
  // Cache the response for an hour at the edge — Dev.to data doesn't change often,
  // and we don't want to hit the API on every page view.
  setHeaders({
    'cache-control': 'public, max-age=0, s-maxage=3600'
  });

  const fallback = [
    {
      title: 'Architecture Over Thinking Loop',
      description: 'On the trap of designing endlessly when the right move is to ship and learn.',
      url: 'https://dev.to/',
      published_at: '2025-01-01',
      reading_time_minutes: 4,
      tag_list: ['architecture', 'productivity'],
      cover_image: null
    }
  ];

  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${DEV_TO_USERNAME}&per_page=30`
    );

    if (!res.ok) {
      console.warn(`Dev.to API returned ${res.status}, using fallback`);
      return { posts: fallback, source: 'fallback' };
    }

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      return { posts: fallback, source: 'fallback' };
    }

    // Normalize the response — strip fields we don't need
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
    return { posts: fallback, source: 'fallback' };
  }
}