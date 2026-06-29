<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { config } from '$lib/config.js';
  import { theme } from '$lib/theme.js';

  const nav = [
    { href: '/', label: 'home' },
    { href: '/projects', label: 'work' },
    { href: '/writing', label: 'writing' },
    { href: '/about', label: 'about' }
  ];

  $: currentPath = $page.url.pathname;
</script>

<div class="min-h-screen flex flex-col">
  <header style="border-bottom: 0.5px solid var(--line);">
    <div class="container-prose flex items-center justify-between py-5">
      <a href="/" class="font-serif" style="font-size: 18px; color: var(--ink); text-decoration: none; font-weight: 500;">
        naushad <span style="color: var(--accent);">.</span> punjani
      </a>
      <nav class="flex items-center gap-6">
        {#each nav as item}
          <a
            href={item.href}
            class="nav-link"
            class:active={currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))}
          >
            {item.label}
          </a>
        {/each}

        <button
          class="mode-toggle"
          on:click={() => theme.toggle()}
          aria-label="Toggle dark mode"
        >
          {#if $theme === 'light'}
            <!-- moon -->
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          {:else}
            <!-- sun -->
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
          {/if}
        </button>
      </nav>
    </div>
  </header>

  <main class="flex-1">
    <slot />
  </main>

  <footer style="border-top: 0.5px solid var(--line); margin-top: 4rem;">
    <div class="container-prose flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 font-mono" style="font-size: 12px; color: var(--muted);">
      <span>made by hand in islamabad · {new Date().getFullYear()}</span>
      <div class="flex gap-4">
        <a href={config.github.profileUrl} class="link">github</a>
        <a href={config.contact.linkedinUrl} class="link">linkedin</a>
        <a href={config.devto.profileUrl} class="link">dev.to</a>
        <a href="mailto:{config.contact.email}" class="link">email</a>
      </div>
    </div>
  </footer>
</div>