<script>
  /** @type {import('./$types').PageData} */
  export let data;

  $: posts = data.posts;
  $: usingLiveData = data.source === 'devto';

  function formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>Writing — Naushad Punjani</title>
  <meta name="description" content="Essays and notes on engineering, architecture, and shipping software." />
</svelte:head>

<section class="container-prose">
  <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">Writing</h1>
  <p class="mt-4 text-[color:var(--muted)]">
    Mostly engineering reflection — what I'm learning as I move between code, systems, and product work.
    Published on <a href="https://dev.to/naushadap" class="link">Dev.to</a>.
  </p>

  <div class="mt-12 space-y-10">
    {#each posts as post}
      <article class="pb-8 last:border-b-0" style="border-bottom: 1px solid var(--line);">
        <div class="flex items-center gap-3 text-xs font-mono" style="color: var(--muted);">
          {#if post.published_at}
            <span>{formatDate(post.published_at)}</span>
          {/if}
          {#if post.reading_time_minutes}
            <span>·</span>
            <span>{post.reading_time_minutes} min read</span>
          {/if}
        </div>

        <h2 class="mt-2 font-semibold text-xl">
          <a href={post.url} class="hover:text-[color:var(--accent)]">{post.title}</a>
        </h2>

        {#if post.description}
          <p class="mt-2 text-[color:var(--muted)] leading-relaxed">{post.description}</p>
        {/if}

        {#if post.tag_list && post.tag_list.length > 0}
          <div class="mt-3 flex flex-wrap gap-2">
            {#each post.tag_list as tag}
              <span class="tag">#{tag}</span>
            {/each}
          </div>
        {/if}
      </article>
    {/each}
  </div>

  {#if !usingLiveData}
    <p class="mt-12 text-xs italic" style="color: var(--muted);">
      Posts manually maintained. Dev.to API not connected.
    </p>
  {/if}
</section>