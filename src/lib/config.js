// Centralized config. Reads from env vars and validates required values.
// Import from here instead of accessing env vars directly throughout the app.
//
// SvelteKit splits env vars by visibility:
//   $env/static/public  → bundled into client code, PUBLIC_* prefix
//   $env/static/private → server-only, no prefix needed
//
// We're using `static` (build-time) imports. For runtime/dynamic env vars,
// use $env/dynamic/* instead — but static is faster and tree-shakeable.

import {
  PUBLIC_GITHUB_USERNAME,
  PUBLIC_DEVTO_USERNAME,
  PUBLIC_LINKEDIN_URL,
  PUBLIC_CONTACT_EMAIL,
  PUBLIC_SITE_URL
} from '$env/static/public';

export const config = {
  github: {
    username: PUBLIC_GITHUB_USERNAME,
    profileUrl: `https://github.com/${PUBLIC_GITHUB_USERNAME}`
  },
  devto: {
    username: PUBLIC_DEVTO_USERNAME,
    profileUrl: `https://dev.to/${PUBLIC_DEVTO_USERNAME}`
  },
  contact: {
    email: PUBLIC_CONTACT_EMAIL,
    linkedinUrl: PUBLIC_LINKEDIN_URL
  },
  site: {
    url: PUBLIC_SITE_URL,
    name: 'Naushad Punjani'
  }
};