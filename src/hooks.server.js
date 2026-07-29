// The burgers demo (static/demos/burgers) is a mirrored Next.js site whose HTML,
// chunks, and client router all use root-absolute URLs (/_next/..., /img/...,
// /menu). None of those exist on this site, so rewrite them onto the mirror
// with redirects. /_next/image stays with its own route
// (src/routes/_next/image/+server.js), which maps optimizer URLs to originals.
//
// NOTE: /menu, /spices, and /contact are claimed by the demo here. If the
// portfolio ever adds its own pages at those paths, remove them from
// demoPages and demo navigation will break gracefully (404) instead.
const DEMO_ROOT = '/demos/burgers';

const assetPrefixes = ['/_next/', '/img/', '/img-webp/', '/burgers/'];

const demoPages = {
  '/menu': 'menu.html',
  '/spices': 'spices.html',
  '/contact': 'contact.html',
  '/manifest.webmanifest': 'manifest.webmanifest'
};

export function handle({ event, resolve }) {
  const { pathname } = event.url;

  // Bare demo roots (no filename) — static hosting only resolves real files,
  // so send /demos/<slug> and /demos/<slug>/ to that demo's index.html.
  const demoRoot = pathname.match(/^\/demos\/([\w-]+)\/?$/);
  if (demoRoot) {
    return Response.redirect(new URL(`/demos/${demoRoot[1]}/index.html`, event.url.origin), 302);
  }

  if (!pathname.startsWith('/_next/image')) {
    if (assetPrefixes.some((p) => pathname.startsWith(p))) {
      return Response.redirect(new URL(DEMO_ROOT + pathname, event.url.origin), 302);
    }
    const page = demoPages[pathname.replace(/\/+$/, '') || pathname];
    if (page) {
      return Response.redirect(new URL(`${DEMO_ROOT}/${page}`, event.url.origin), 302);
    }
  }

  return resolve(event);
}
