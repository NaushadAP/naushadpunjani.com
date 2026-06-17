// Vercel Web Analytics integration.
// Runs on every page load via the root layout.
// In dev: events go to a noop endpoint (no tracking).
// In production: events flow to your Vercel Analytics dashboard.

import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

injectAnalytics({ mode: dev ? 'development' : 'production' });