import { config } from '$lib/config.js';

const routes = ['/', '/about', '/projects', '/work', '/work/web-builds', '/writing'];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((path) => `  <url><loc>${config.site.url}${path}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'cache-control': 'public, max-age=0, s-maxage=3600'
    }
  });
}
