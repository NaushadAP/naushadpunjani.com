# naushadpunjani.com

Personal site and portfolio. SvelteKit + Tailwind + mdsvex, deployed on Vercel.

## Local dev (Docker)

No Node install needed on your host machine.

```bash
docker compose up
```

Site runs at `http://localhost:5173`.

To stop: `Ctrl+C` in the terminal, then `docker compose down` to remove the container.

To add a dependency:
```bash
docker compose exec dev npm install <package-name>
```

## Local dev (native)

If you do have Node 18+ and npm installed:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Stack

- [SvelteKit](https://kit.svelte.dev/) — framework
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [mdsvex](https://mdsvex.pngwn.io/) — markdown-in-Svelte
- [Vercel](https://vercel.com/) — hosting

## Structure

```
src/
  routes/
    +layout.svelte    # shared header/footer
    +page.svelte      # /
    projects/         # /projects
    writing/          # /writing
    about/            # /about
  app.html            # html shell
  app.css             # global styles + Tailwind directives
static/
  favicon.svg
docker-compose.yml    # local dev environment
```
