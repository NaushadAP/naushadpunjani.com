<script>
  import { config } from '$lib/config.js';
  import Seo from '$lib/Seo.svelte';
  import DemoBench from '$lib/components/DemoBench.svelte';

  export let data;
  $: featured = data.featured;

  // Public booking link for the get-in-touch section.
  const calendlyUrl = 'https://calendly.com/napunjani/30min';

  // Easily editable "this week" status — change one line and the home updates.
  const thisWeek = {
    text: 'Writing a WSO2 cheatsheet from years of production scars.',
    highlight: 'WSO2 cheatsheet',
    updatedAgo: '2h ago'
  };

  function formatRelativeDate(iso) {
    if (!iso) return '';
    const date = new Date(iso);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 30) return `${diffDays}d ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
    return `${Math.floor(diffDays / 365)}y ago`;
  }

  function splitHighlight(text, phrase) {
    if (!phrase) return [{ t: text, h: false }];
    const i = text.indexOf(phrase);
    if (i < 0) return [{ t: text, h: false }];
    return [
      { t: text.slice(0, i), h: false },
      { t: phrase, h: true },
      { t: text.slice(i + phrase.length), h: false }
    ];
  }

  $: nowParts = splitHighlight(thisWeek.text, thisWeek.highlight);
</script>

<Seo
  title="Naushad Punjani — Full-stack engineer & digital solutions provider"
  description="Remote full-stack engineer and digital solutions provider. Five years deep in Laravel, Node, and the in-between, building SaaS products for clients worldwide."
  path="/"
/>

<!-- ─── Hero ─────────────────────────────────────────────────────────────── -->
<section class="container-prose pt-16 pb-8">
  <div class="grid gap-8 items-start" style="grid-template-columns: minmax(0, 1fr) 240px;">
    <div>
      <div class="label-mono mb-4">
        <span class="status-dot"></span>available for remote work · saas &amp; digital solutions
      </div>

      <h1 class="font-serif" style="font-size: 46px; line-height: 1.05; margin: 0 0 6px; font-weight: 500;">
        Full-stack engineer &amp; digital solutions provider. Five years deep in <span class="marker">Laravel, Node</span>, and the in-between.
      </h1>

      <div class="font-hand" style="color: var(--accent); font-size: 22px; margin: 6px 0 24px; transform: rotate(-1.5deg); display: inline-block;">
        ...and a 1987 Honda Civic, on weekends.
      </div>

      <p style="font-size: 16px; line-height: 1.7; max-width: 540px;">
        I build and ship SaaS products and digital solutions for teams that need things to work in production, not just in the demo. Day-to-day, that means backend systems, API integrations, and the connective tissue between what a spec promises and what the software actually does — for remote clients as much as for the enterprise systems I work on by day. That's where I live.
      </p>

      <div class="flex gap-4 mt-7 font-mono" style="font-size: 13px;">
        <a href="/work" class="link">see the work →</a>
        <a href="mailto:{config.contact.email}" class="link">say hi</a>
      </div>
    </div>

    <!-- this-week card -->
    <div class="hidden md:block mt-8">
      <div class="now-card">
        <div class="now-pin"></div>
        <div class="label-mono mb-2 mt-1">this week</div>
        <div style="font-size: 13px; line-height: 1.55;">
          {#each nowParts as p}{#if p.h}<span class="marker">{p.t}</span>{:else}{p.t}{/if}{/each}
        </div>
        <div class="font-mono mt-2" style="font-size: 10px; color: var(--muted);">
          updated {thisWeek.updatedAgo}
        </div>
      </div>
    </div>
  </div>
</section>

<div class="container-prose">
  <div style="height: 1px; background: var(--line);"></div>
</div>

<!-- ─── Demo bench ───────────────────────────────────────────────────────── -->
<DemoBench />

<div class="container-prose">
  <div style="height: 1px; background: var(--line);"></div>
</div>

<!-- ─── Featured work ────────────────────────────────────────────────────── -->
<section class="container-prose py-12">
  <div class="flex items-baseline justify-between mb-2">
    <h2 class="font-serif" style="font-size: 24px; font-weight: 500;">Things I've shipped</h2>
    <a href="/work" class="nav-link">all of it →</a>
  </div>
  <div class="font-hand mb-6" style="color: var(--muted); font-size: 18px;">selected · recent first</div>

  <div class="grid gap-4">
    {#each featured as project}
      <a href={project.url} class="card block" style="text-decoration: none; color: inherit;">
        <div class="flex items-baseline justify-between gap-3">
          <div class="flex items-baseline gap-2.5 min-w-0">
            <span class="font-serif" style="font-size: 17px; font-weight: 500;">{project.name}</span>
          </div>
          <span class="font-mono whitespace-nowrap" style="font-size: 11px; color: var(--muted);">
            {#if project.stars > 0}★ {project.stars} · {/if}
            {formatRelativeDate(project.pushed_at)}
          </span>
        </div>

        <p style="font-size: 14px; line-height: 1.6; color: var(--muted); margin: 6px 0 10px;">
          {project.description}
        </p>

        {#if project.stack && project.stack.length > 0}
          <div class="flex flex-wrap gap-1.5">
            {#each project.stack as tech}
              <span class="tag">{tech}</span>
            {/each}
          </div>
        {/if}
      </a>
    {/each}
  </div>
</section>

<div class="container-prose">
  <div style="height: 1px; background: var(--line);"></div>
</div>

<!-- ─── Last writing ────────────────────────────────────────────────────── -->
{#if data.lastPost}
  <section class="container-prose py-10">
    <div class="label-mono mb-4">last thing I wrote</div>
    <a href={data.lastPost.url} class="block" style="text-decoration: none; color: inherit;">
      <div class="flex items-baseline justify-between gap-6">
        <div class="flex-1 min-w-0">
          <div class="font-serif mb-1.5" style="font-size: 19px; line-height: 1.3; font-weight: 500;">
            {data.lastPost.title}
          </div>
          <div class="font-mono" style="font-size: 11px; color: var(--muted);">
            {#if data.lastPost.published_at}{new Date(data.lastPost.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {/if}
            {#if data.lastPost.reading_time_minutes}{data.lastPost.reading_time_minutes} min read{/if}
            {#if data.lastPost.tag_list && data.lastPost.tag_list.length}
              · {data.lastPost.tag_list.slice(0, 3).map((t) => '#' + t).join(' ')}
            {/if}
          </div>
        </div>
        <span class="font-mono whitespace-nowrap" style="font-size: 12px; color: var(--accent);">read →</span>
      </div>
    </a>
  </section>
{/if}

<div class="container-prose">
  <div style="height: 1px; background: var(--line);"></div>
</div>

<!-- ─── Get in touch ────────────────────────────────────────────────────── -->
<section class="container-prose py-14" id="contact">
  <div class="label-mono mb-4">
    <span class="status-dot"></span>get in touch
  </div>

  <h2 class="font-serif" style="font-size: clamp(28px, 4.5vw, 40px); line-height: 1.12; font-weight: 500; max-width: 20ch; margin: 0 0 4px;">
    Have something that needs to <span class="marker">actually ship</span>?
  </h2>

  <div class="font-hand mb-5" style="color: var(--muted); font-size: 19px; transform: rotate(-1deg); display: inline-block;">
    a SaaS idea, an integration mess, or a site that should feel alive
  </div>

  <p style="font-size: 15px; line-height: 1.7; max-width: 520px; margin-bottom: 26px;">
    Tell me what you're building and where it hurts. I'll reply with an honest take —
    even if the honest take is that you don't need me for it.
  </p>

  <div class="flex items-center gap-5 flex-wrap">
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="font-mono"
      style="font-size: 13px; padding: 12px 22px; border-radius: 8px; background: var(--accent-soft); border: 1px solid var(--accent); color: var(--accent); text-decoration: none;"
    >
      book a 30-min call →
    </a>
    <a href="mailto:{config.contact.email}" class="link font-mono" style="font-size: 13px;">email me</a>
    <a href={config.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" class="link font-mono" style="font-size: 13px;">linkedin</a>
    <a href={config.github.profileUrl} target="_blank" rel="noopener noreferrer" class="link font-mono" style="font-size: 13px;">github</a>
  </div>

  <div class="font-mono mt-5" style="font-size: 11px; color: var(--muted);">
    {config.contact.email} · islamabad (gmt+5) · usually replies within a day
  </div>
</section>