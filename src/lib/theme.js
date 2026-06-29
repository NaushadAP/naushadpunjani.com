// Theme management. Reads from <html data-theme="..."> set by the inline
// script in app.html (so there's no flash on load), then exposes a Svelte
// store that pages can subscribe to.

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function createThemeStore() {
  const initial = browser
    ? document.documentElement.getAttribute('data-theme') || 'light'
    : 'light';

  const { subscribe, set } = writable(initial);

  return {
    subscribe,
    toggle: () => {
      if (!browser) return;
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('np-theme', next);
      set(next);
    },
    set: (theme) => {
      if (!browser) return;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('np-theme', theme);
      set(theme);
    }
  };
}

export const theme = createThemeStore();