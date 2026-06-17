<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { config } from '$lib/config.js';

  const nav = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/writing', label: 'Writing' },
    { href: '/about', label: 'About' }
  ];

  $: currentPath = $page.url.pathname;
</script>

<div class="min-h-screen flex flex-col">
  <header class="border-b border-ink-200">
    <div class="container-prose flex items-center justify-between py-5">
      <a href="/" class="font-semibold tracking-tight text-ink-900 hover:text-ink-700">
        {config.site.name}
      </a>
      <nav class="flex items-center gap-6 text-sm">
        {#each nav as item}
          <a
            href={item.href}
            class="transition-colors {currentPath === item.href
              ? 'text-ink-900 font-medium'
              : 'text-ink-500 hover:text-ink-900'}"
          >
            {item.label}
          </a>
        {/each}
      </nav>
    </div>
  </header>

  <main class="flex-1 py-16">
    <slot />
  </main>

  <footer class="border-t border-ink-200">
    <div class="container-prose flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-8 text-sm text-ink-500">
      <p>© {new Date().getFullYear()} {config.site.name}</p>
      <div class="flex gap-4">
        <a href={config.github.profileUrl} class="hover:text-ink-900 transition-colors">GitHub</a>
        <a href={config.contact.linkedinUrl} class="hover:text-ink-900 transition-colors">LinkedIn</a>
        <a href={config.devto.profileUrl} class="hover:text-ink-900 transition-colors">Dev.to</a>
        <a href="mailto:{config.contact.email}" class="hover:text-ink-900 transition-colors">Email</a>
      </div>
    </div>
  </footer>
</div>