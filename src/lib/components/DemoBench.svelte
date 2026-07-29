<script>
  // Homepage "demo bench" — a full-bleed strip of the five demo builds,
  // leading to /work/web-builds. Animated with GSAP (entrance stagger,
  // per-card scroll drift, pointer-follow tilt); falls back to a static
  // scrollable row when reduced motion is requested or JS fails.
  import { onMount } from 'svelte';

  const demos = [
    { href: '/demos/burgers',  shot: '/showcase/burgers.png',  name: 'Artisan Smashed Burgers', tag: 'food & bev',  note: 'GSAP + Lenis' },
    { href: '/demos/atelier',  shot: '/showcase/atelier.png',  name: 'Atelier Nord',            tag: 'architecture', note: 'SVG line art' },
    { href: '/demos/roastery', shot: '/showcase/roastery.png', name: 'Ember & Husk',            tag: 'coffee',       note: 'CSS steam' },
    { href: '/demos/pulse',    shot: '/showcase/pulse.png',    name: 'Pulseboard',              tag: 'saas',         note: 'live chart' },
    { href: '/demos/southpaw', shot: '/showcase/southpaw.png', name: 'Southpaw Boxing',         tag: 'fitness',      note: 'type-driven' }
  ];

  let bench;
  let row;

  onMount(async () => {
    // Start the strip centered: middle card in the middle of the viewport.
    row.scrollLeft = (row.scrollWidth - row.clientWidth) / 2;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);
    // Keep scroll-scrubbed tweens true to the scrollbar after main-thread
    // stalls instead of easing back into place.
    gsap.ticker.lagSmoothing(0);

    const cards = row.querySelectorAll('.bench-card');

    // Entrance: cards rise onto the bench with their resting tilt.
    // Uses yPercent/autoAlpha so it never fights the y-based drift below.
    gsap.from(cards, {
      yPercent: 16,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.09,
      scrollTrigger: { trigger: bench, start: 'top 85%', once: true }
    });

    // Slow alternating drift while the section passes through the viewport.
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: i % 2 ? -14 : 10,
        ease: 'none',
        scrollTrigger: { trigger: bench, start: 'top bottom', end: 'bottom top', scrub: 1.2 }
      });
    });

    // Pointer-follow tilt on each card.
    cards.forEach((card) => {
      const rx = gsap.quickTo(card, 'rotationX', { duration: 0.45, ease: 'power2.out' });
      const ry = gsap.quickTo(card, 'rotationY', { duration: 0.45, ease: 'power2.out' });
      const lift = gsap.quickTo(card, 'scale', { duration: 0.35, ease: 'power2.out' });
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        ry(((e.clientX - r.left) / r.width - 0.5) * 10);
        rx(((e.clientY - r.top) / r.height - 0.5) * -8);
        lift(1.025);
      });
      card.addEventListener('pointerleave', () => { rx(0); ry(0); lift(1); });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  });
</script>

<section class="bench" bind:this={bench} aria-labelledby="bench-title">
  <div class="container-prose">
    <div class="flex items-baseline justify-between mb-2">
      <div>
        <div class="label-mono mb-3">the demo bench</div>
        <h2 id="bench-title" class="font-serif" style="font-size: 24px; font-weight: 500;">
          Concept sites, built for sport.
        </h2>
      </div>
      <a href="/work/web-builds" class="nav-link">browse the gallery →</a>
    </div>
    <div class="font-hand mb-7" style="color: var(--muted); font-size: 18px;">
      click one — they're <span style="color: var(--accent);">real working sites</span>, not mockups
    </div>
  </div>

  <div class="bench-strip">
    <div class="bench-row" bind:this={row}>
      {#each demos as d, i}
        <a
          class="bench-card"
          href={d.href}
          target="_blank"
          rel="noopener noreferrer"
          style="--tilt: {[-2.2, 1.6, -1.2, 2, -1.8][i]}deg"
          aria-label="Open demo: {d.name}"
        >
          <span class="bench-tape" aria-hidden="true"></span>
          <img src={d.shot} alt="" loading="lazy" />
          <span class="bench-meta">
            <span class="bench-name font-serif">{d.name}</span>
            <span class="bench-tags font-mono">{d.tag} · {d.note}</span>
          </span>
          <span class="bench-open font-mono" aria-hidden="true">open ↗</span>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .bench {
    padding: 3rem 0 3.5rem;
    overflow: hidden;
  }

  /* Full-bleed strip that escapes the prose column */
  .bench-strip {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    perspective: 1200px;
  }
  .bench-row {
    display: flex;
    gap: 22px;
    padding: 30px max(calc(50vw - 24rem), 1.5rem) 52px;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    scrollbar-width: none;
  }
  .bench-row::-webkit-scrollbar {
    display: none;
  }
  /* Center the row when it fits; auto margins collapse to 0 on overflow. */
  .bench-card:first-child {
    margin-left: auto;
  }
  .bench-card:last-child {
    margin-right: auto;
  }

  .bench-card {
    position: relative;
    flex: 0 0 clamp(240px, 26vw, 320px);
    scroll-snap-align: center;
    background: var(--bg-card);
    border: 0.5px solid var(--line);
    border-radius: 6px;
    padding: 10px 10px 12px;
    text-decoration: none;
    color: inherit;
    transform: rotate(var(--tilt));
    transform-style: preserve-3d;
    box-shadow: 0 14px 30px -18px rgba(0, 0, 0, 0.35);
    transition: border-color 0.25s ease, box-shadow 0.35s ease;
  }
  .bench-card:hover {
    border-color: var(--accent);
    box-shadow: 0 24px 44px -20px rgba(0, 0, 0, 0.45);
    z-index: 2;
  }

  .bench-tape {
    position: absolute;
    top: -9px;
    left: 50%;
    width: 58px;
    height: 18px;
    transform: translateX(-50%) rotate(calc(var(--tilt) * -1.4));
    background: var(--accent-soft);
    opacity: 0.9;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
  }

  .bench-card img {
    display: block;
    width: 100%;
    aspect-ratio: 8 / 5;
    object-fit: cover;
    object-position: top center;
    border-radius: 3px;
    border: 0.5px solid var(--line);
    filter: saturate(0.95);
  }

  .bench-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 10px;
    padding: 0 2px;
  }
  .bench-name {
    font-size: 15px;
    font-weight: 500;
  }
  .bench-tags {
    font-size: 10.5px;
    color: var(--muted);
    letter-spacing: 0.04em;
  }

  .bench-open {
    position: absolute;
    right: 12px;
    bottom: 12px;
    font-size: 10.5px;
    color: var(--accent);
    opacity: 0;
    transform: translateY(3px);
    transition: opacity 0.25s ease, transform 0.25s ease;
  }
  .bench-card:hover .bench-open {
    opacity: 1;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .bench-card {
      transform: none;
    }
  }
</style>
