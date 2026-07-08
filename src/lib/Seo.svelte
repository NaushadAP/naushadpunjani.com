<script>
  import { config } from '$lib/config.js';

  export let title;
  export let description;
  export let path = '/';
  export let type = 'website';

  $: url = `${config.site.url}${path}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={url} />

  <meta property="og:type" content={type} />
  <meta property="og:site_name" content={config.site.name} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
</svelte:head>
