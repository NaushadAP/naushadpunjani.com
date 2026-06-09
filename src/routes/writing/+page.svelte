<script>
  const posts = [
    {
      title: 'Architecture Over Thinking Loop',
      blurb: 'On the trap of designing endlessly when the right move is to ship and learn.',
      href: 'https://dev.to/',
      published: '2025'
    }
  ];
</script>

<svelte:head>
  <title>Writing — Naushad Punjani</title>
  <meta name="description" content="Essays and notes on engineering, architecture, and shipping software." />
</svelte:head>

<section class="container-prose">
  <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">Writing</h1>
  <p class="mt-4 text-ink-600">
    Mostly engineering reflection — what I'm learning as I move between code, systems, and product work. Published on <a href="https://dev.to/" class="link">Dev.to</a>.
  </p>

  <div class="mt-12 space-y-8">
    {#each posts as post}
      <article>
        <p class="text-xs text-ink-500 font-mono">{post.published}</p>
        <h2 class="mt-1 font-semibold text-xl">
          <a href={post.href} class="hover:text-ink-700">{post.title}</a>
        </h2>
        <p class="mt-2 text-ink-600 leading-relaxed">{post.blurb}</p>
      </article>
    {/each}
  </div>
</section>
