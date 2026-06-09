<script>
  const featured = [
    {
      name: 'job-portal',
      description: 'Laravel-based job board with employer and candidate flows, email notifications, and applicant tracking.',
      stack: ['Laravel', 'MySQL', 'Tailwind', 'Blade'],
      href: 'https://github.com/NaushadAP/job-portal',
      demo: null
    }
  ];
</script>

<svelte:head>
  <title>Naushad Punjani — Full-stack engineer</title>
  <meta
    name="description"
    content="Full-stack engineer with 5+ years building production systems. Currently at Jazz, Pakistan's largest telecom."
  />
</svelte:head>

<section class="container-prose">
  <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 leading-tight">
    Full-stack engineer<br />
    shipping production systems.
  </h1>

  <p class="mt-6 text-lg text-ink-600 leading-relaxed max-w-2xl">
    I'm Naushad — 5+ years building and operating real systems across Laravel, Node, React, and Linux.
    Currently at <a class="link" href="https://jazz.com.pk">Jazz</a>, Pakistan's largest telecom,
    where I own integrations that touch millions of subscribers.
  </p>

  <div class="mt-8 flex flex-wrap gap-3">
    <a href="/projects" class="btn">See projects</a>
    <a href="mailto:napunjani@gmail.com" class="btn-outline">Get in touch</a>
  </div>
</section>

<section class="container-prose mt-20">
  <div class="flex items-baseline justify-between">
    <h2 class="text-2xl font-semibold tracking-tight">Featured work</h2>
    <a href="/projects" class="text-sm text-ink-500 hover:text-ink-900 transition-colors">
      All projects →
    </a>
  </div>

  <div class="mt-8 grid gap-6">
    {#each featured as project}
      <article class="border border-ink-200 rounded-lg p-6 hover:border-ink-400 transition-colors">
        <h3 class="font-semibold text-lg">
          <a href={project.href} class="hover:text-ink-700">{project.name}</a>
        </h3>
        <p class="mt-2 text-ink-600 leading-relaxed">{project.description}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          {#each project.stack as tech}
            <span class="text-xs px-2 py-1 bg-ink-100 text-ink-700 rounded font-mono">{tech}</span>
          {/each}
        </div>
        <div class="mt-4 flex gap-4 text-sm">
          <a href={project.href} class="link">GitHub</a>
          {#if project.demo}
            <a href={project.demo} class="link">Live demo</a>
          {/if}
        </div>
      </article>
    {/each}
  </div>

  <p class="mt-8 text-sm text-ink-500 italic">
    More repos shipping over the coming weeks — API contract monitor, production-ready Laravel stack, and AI-augmented workflow guide.
  </p>
</section>
