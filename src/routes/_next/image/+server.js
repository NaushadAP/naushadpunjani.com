// Image endpoint for the mirrored burgers demo under static/demos/burgers.
// The mirror's HTML still contains Next.js optimizer URLs
// (`/_next/image?url=%2Fimg-webp%2Fberlin.webp&w=1080&q=75`) in preload and
// srcset attributes; there is no optimizer here, but the source images are
// stored in the mirror at their original paths, so redirect every request
// to the unoptimized original.
import { redirect } from '@sveltejs/kit';

export function GET({ url }) {
  const src = url.searchParams.get('url');
  if (!src || !src.startsWith('/') || src.includes('..')) {
    return new Response('Not found', { status: 404 });
  }
  redirect(302, `/demos/burgers${src.split('/').map(encodeURIComponent).join('/')}`);
}
