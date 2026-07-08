<script>
  const projects = [
    {
      name: 'job-portal',
      description: 'Laravel-based job board with employer and candidate flows, email notifications, and applicant tracking.',
      stack: ['Laravel', 'MySQL', 'Tailwind', 'Blade'],
      href: 'https://github.com/NaushadAP/job-portal',
      demo: null,
      status: 'shipped'
    },
    {
      name: 'api-contract-monitor',
      description: 'Self-hosted service for catching when vendor APIs drift from their documented contracts. Born from real production pain.',
      stack: ['Laravel', 'React', 'Docker', 'Nginx'],
      href: null,
      demo: null,
      status: 'in progress'
    },
    {
      name: 'laravel-production-stack',
      description: 'Opinionated Docker + Nginx + CI setup for shipping Laravel apps that hold up under real traffic.',
      stack: ['Laravel', 'Docker', 'Nginx', 'GitHub Actions'],
      href: null,
      demo: null,
      status: 'planned'
    },
    {
      name: 'ai-augmented-workflow',
      description: 'How I actually use Claude Code and Cursor day-to-day: configs, prompts, custom commands, MCP setups.',
      stack: ['Documentation', 'Configs'],
      href: null,
      demo: null,
      status: 'planned'
    }
  ];

  const statusColor = {
    shipped: 'bg-green-100 text-green-800',
    'in progress': 'bg-yellow-100 text-yellow-800',
    planned: 'bg-ink-100 text-ink-700'
  };
</script>

<svelte:head>
  <title>Projects — Naushad Punjani</title>
  <meta name="description" content="Projects and open-source work by Naushad Punjani." />
</svelte:head>

<section class="container-prose">
  <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h1>
  <p class="mt-4 text-[color:var(--muted)]">
    A mix of shipped work and current builds. Some are extractions from real production problems; others are sandboxes for ideas worth exploring.
  </p>

  <div class="mt-12 grid gap-6">
    {#each projects as project}
      <article class="card">
        <div class="flex items-start justify-between gap-4">
          <h2 class="font-semibold text-xl">
            {#if project.href}
              <a href={project.href} class="hover:text-[color:var(--accent)]">{project.name}</a>
            {:else}
              {project.name}
            {/if}
          </h2>
          <span class="text-xs px-2 py-1 rounded font-medium whitespace-nowrap {statusColor[project.status]}">
            {project.status}
          </span>
        </div>
        <p class="mt-2 text-[color:var(--muted)] leading-relaxed">{project.description}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          {#each project.stack as tech}
            <span class="tag">{tech}</span>
          {/each}
        </div>
        {#if project.href || project.demo}
          <div class="mt-4 flex gap-4 text-sm">
            {#if project.href}<a href={project.href} class="link">GitHub</a>{/if}
            {#if project.demo}<a href={project.demo} class="link">Live demo</a>{/if}
          </div>
        {/if}
      </article>
    {/each}
  </div>
</section>
