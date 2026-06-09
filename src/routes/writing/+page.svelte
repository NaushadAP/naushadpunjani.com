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
  <p class="mt-4 text-ink-600">
    Mostly engineering reflection — what I'm learning as I move between code, systems, and product work.
    Published on <a href="https://dev.to/naushadap" class="link">Dev.to</a>.
  </p>

  <div class="mt-12 space-y-10">
    {#each posts as post}
      <article class="border-b border-ink-200 pb-8 last:border-b-0">
        <div class="flex items-center gap-3 text-xs text-ink-500 font-mono">
          {#if post.published_at}
            <span>{formatDate(post.published_at)}</span>
          {/if}
          {#if post.reading_time_minutes}
            <span>·</span>
            <span>{post.reading_time_minutes} min read</span>
          {/if}
        </div>

        <h2 class="mt-2 font-semibold text-xl">
          <a href={post.url} class="hover:text-ink-700">{post.title}</a>
        </h2>

        {#if post.description}
          <p class="mt-2 text-ink-600 leading-relaxed">{post.description}</p>
        {/if}

        {#if post.tag_list && post.tag_list.length > 0}
          <div class="mt-3 flex flex-wrap gap-2">
            {#each post.tag_list as tag}
              <span class="text-xs px-2 py-0.5 bg-ink-100 text-ink-700 rounded font-mono">
                #{tag}
              </span>
            {/each}
          </div>
        {/if}
      </article>
    {/each}
  </div>

  {#if !usingLiveData}
    <p class="mt-12 text-xs text-ink-400 italic">
      Posts manually maintained. Dev.to API not connected.
    </p>
  {/if}
</section>