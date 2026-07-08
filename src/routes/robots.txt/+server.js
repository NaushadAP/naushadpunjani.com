import { config } from '$lib/config.js';

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${config.site.url}/sitemap.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
