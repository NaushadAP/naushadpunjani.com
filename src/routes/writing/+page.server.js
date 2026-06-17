import { fetchArticles } from '$lib/devto.js';

export async function load({ fetch, setHeaders }) {
  setHeaders({
    'cache-control': 'public, max-age=0, s-maxage=3600'
  });

  return await fetchArticles(fetch);
}