<script>
  // ── Web Builds gallery. Add new sites here — each entry is one card.
  // `shot` is a screenshot under /static/showcase/; `href` is the demo,
  // a self-hosted mirror under /static/demos/.
  const sites = [
    {
      fig: '01',
      name: 'Artisan Smashed Burgers',
      domain: 'brand concept · demo',
      href: '/demos/burgers',
      kicker: 'MARKETING · FOOD & BEV',
      shot: '/showcase/burgers.png',
      shotAlt: 'Homepage of an artisan smashed burger brand concept site',
      desc: `Marketing and ordering site for an artisan smashed-burger brand with takeaway
             locations in Berlin, London, New York, Sydney and Tokyo. Built on
             <b>Next.js</b> with image-optimized product photography, an ingredient-storytelling
             layout, and per-city location cards.`,
      stack: ['Next.js', 'Image Optimization', 'Responsive'],
      annot: 'hero → ingredients → locations → order'
    },
    {
      fig: '02',
      name: 'Atelier Nord — Architecture Studio',
      domain: 'concept · architecture',
      href: '/demos/atelier',
      kicker: 'EDITORIAL · ARCHITECTURE',
      shot: '/showcase/atelier.png',
      shotAlt: 'Homepage of a Nordic architecture studio concept site',
      desc: `Editorial one-pager for a Nordic architecture studio. Hand-drawn <b>SVG floor
             plans</b> that sketch themselves in, a works index with hover drawing plates,
             and a print-inspired grid over bone-white paper.`,
      stack: ['HTML/CSS', 'SVG line art', 'Scroll reveals'],
      annot: 'plans draw in as you arrive'
    },
    {
      fig: '03',
      name: 'Ember & Husk — Coffee Roastery',
      domain: 'concept · specialty coffee',
      href: '/demos/roastery',
      kicker: 'BRAND · SPECIALTY COFFEE',
      shot: '/showcase/roastery.png',
      shotAlt: 'Homepage of a small-batch coffee roastery concept site',
      desc: `Small-batch roastery brand site in dark-roast tones. CSS-only <b>steam and
             film grain</b>, three bean cards with roast-level dots, and a six-step brew
             ritual on a crema-coloured spread.`,
      stack: ['HTML/CSS', 'CSS grain & steam', 'Wonky serif type'],
      annot: 'steam → beans → six-step ritual'
    },
    {
      fig: '04',
      name: 'Pulseboard — SaaS Analytics',
      domain: 'concept · saas product',
      href: '/demos/pulse',
      kicker: 'PRODUCT · SAAS LANDING',
      shot: '/showcase/pulse.png',
      shotAlt: 'Homepage of a SaaS analytics product concept site',
      desc: `Dark product landing with a working dashboard mock: an <b>interactive SVG
             chart</b> with crosshair tooltip, count-up metrics, and a chart palette
             validated for colour-vision deficiency.`,
      stack: ['HTML/CSS/JS', 'SVG charts', 'CVD-safe palette'],
      annot: 'hover the chart — it answers'
    },
    {
      fig: '05',
      name: 'Southpaw Boxing Club',
      domain: 'concept · fitness brand',
      href: '/demos/southpaw',
      kicker: 'BRAND · FITNESS',
      shot: '/showcase/southpaw.png',
      shotAlt: 'Homepage of a boxing gym concept site',
      desc: `Loud type-driven site for a boxing gym. Outline display type with a
             <b>jab animation</b>, program rows that flood red on hover, and a weekly
             schedule set like a fight card.`,
      stack: ['HTML/CSS', 'Type-driven', 'Micro-interactions'],
      annot: 'outline type, red hook on hover'
    },
    {
      fig: '06',
      name: 'Kestrel Motors — Electric Sports Cars',
      domain: 'concept · automotive',
      href: '/demos/kestrel',
      kicker: 'PRODUCT · AUTOMOTIVE',
      shot: '/showcase/kestrel.png',
      shotAlt: 'Homepage of a lightweight electric sports car concept site',
      desc: `Marque page for a hand-built 895 kg electric sports car. The hero is a
             <b>Three.js spaceframe</b> you can drag and spin, backed by a published
             mass ledger that animates as you read it.`,
      stack: ['Three.js', 'GSAP ScrollTrigger', 'WebGL'],
      annot: 'drag the chassis — it spins'
    },
    {
      fig: '07',
      name: 'Marengo — Cashmere House',
      domain: 'concept · luxury fashion',
      href: '/demos/marengo',
      kicker: 'BRAND · LUXURY FASHION',
      shot: '/showcase/marengo.png',
      shotAlt: 'Homepage of a luxury cashmere house concept site',
      desc: `Quiet-luxury editorial for an Umbrian cashmere house, built around a
             concept <b>AI stylist</b> — a three-question flow that composes a look
             from the collection, entirely client-side.`,
      stack: ['GSAP', 'Interactive flow', 'CSS/SVG garments'],
      annot: 'answer three questions, get a look'
    },
    {
      fig: '08',
      name: 'Thorn — Electric Enduro',
      domain: 'concept · motorcycles',
      href: '/demos/thorn',
      kicker: 'PRODUCT · MOTORCYCLES',
      shot: '/showcase/thorn.png',
      shotAlt: 'Homepage of an electric enduro motorcycle concept site',
      desc: `Launch page for an electric enduro machine. The hero is a <b>Three.js
             procedural trail</b> — low-poly terrain generated and scrolled toward the
             camera — under hi-vis condensed type.`,
      stack: ['Three.js', 'Procedural terrain', 'GSAP'],
      annot: 'the trail is generated, not filmed'
    },
    {
      fig: '09',
      name: 'Slow Play Society — Golf Goods',
      domain: 'concept · apparel',
      href: '/demos/slowplay',
      kicker: 'BRAND · APPAREL',
      shot: '/showcase/slowplay.png',
      shotAlt: 'Homepage of a boutique golf apparel concept site',
      desc: `Small-batch golf apparel brand with a hand-drawn <b>SVG crest</b>, a
             clubhouse palette and a scorecard section where every hole carries a
             house rule instead of a yardage.`,
      stack: ['HTML/CSS', 'SVG crest', 'GSAP carousel'],
      annot: 'slow play isn’t a penalty here'
    },
    {
      fig: '10',
      name: 'Longbow Motors — Recreation Study',
      domain: 'front-end study · credited',
      href: '/demos/longbow-study',
      kicker: 'STUDY · NOT MY DESIGN',
      shot: '/showcase/longbow-study.png',
      shotAlt: 'A front-end recreation study of the Longbow Motors site layout',
      desc: `A technical exercise, not a client build: the layout and scroll
             choreography of <b>Longbow Motors</b>' site rebuilt from an empty file.
             Their design and brand — my code. All artwork original, nothing copied.`,
      stack: ['GSAP', 'Lenis smooth scroll', 'SVG'],
      annot: 'credited study — design not mine'
    }
  ];
</script>

<section class="gallery" id="web-builds-gallery">
  <header class="masthead">
    <div class="tag-row">
      <span>NAUSHAD PUNJANI</span><span class="dot">◆</span>
      <span>WEB BUILDS / GALLERY</span><span class="dot">◆</span>
      <span>REV. 2026.02</span>
    </div>
    <h1 class="title">Web Build <span class="amp">&amp;</span> Site Gallery</h1>
    <p class="lede">
      Marketing sites and front-end builds, one plate per site. Each plate opens a
      working demo build — not a mockup.
    </p>
    <a class="back" href="/work">← back to Work</a>
  </header>

  <div class="plates">
    {#each sites as s, i}
      <article class="plate" style="--d:{0.05 + i * 0.1}s">
        <div class="plate-top"><span class="fig">FIG. {s.fig}</span><span>{s.kicker}</span></div>
        <a class="schematic" href={s.href} target="_blank" rel="noopener noreferrer" aria-label="Open demo of {s.name}">
          <span class="corner c-tl"></span><span class="corner c-tr"></span>
          <span class="corner c-bl"></span><span class="corner c-br"></span>
          <img class="shot" src={s.shot} alt={s.shotAlt} loading="lazy" />
          <span class="peek">VIEW DEMO ↗</span>
        </a>
        <div class="plate-body">
          <span class="domain">{s.domain}</span>
          <h3 class="name">{s.name}</h3>
          <p class="desc">{@html s.desc}</p>
          <div class="stack">
            {#each s.stack as t}<span class="chip">{t}</span>{/each}
          </div>
          <p class="annot">{s.annot}</p>
          <div class="plate-foot">
            <a href={s.href} target="_blank" rel="noopener noreferrer"><span class="arw">→</span> View demo</a>
            <span class="foot-domain">{s.domain}</span>
          </div>
        </div>
      </article>
    {/each}
  </div>

  <p class="endnote">— more plates soon —</p>
</section>

<style>
  .gallery {
    --paper: var(--bg);
    --paper-2: var(--bg-card);
    --ink-soft: var(--muted);
    --red: var(--accent);
    --grid: #c9bfa8;
    --grid-strong: #b9ac8e;
    --grid-tint: rgba(185, 172, 142, 0.4);
    --shadow-color: rgba(20, 17, 13, 0.16);
    --blue: #2c5c8f;
    --mono: 'JetBrains Mono', ui-monospace, monospace;
    --serif: 'Fraunces', Georgia, serif;
    --hand: 'Caveat', cursive;
    background: var(--paper); color: var(--ink);
    font-family: var(--serif); line-height: 1.55;
    padding: 64px 32px 96px;
    background-image:
      linear-gradient(var(--grid) 1px,transparent 1px),
      linear-gradient(90deg,var(--grid) 1px,transparent 1px),
      linear-gradient(var(--grid-strong) 1.4px,transparent 1.4px),
      linear-gradient(90deg,var(--grid-strong) 1.4px,transparent 1.4px);
    background-size:24px 24px,24px 24px,120px 120px,120px 120px;
  }
  :global(html[data-theme='dark']) .gallery {
    --grid: #36302a;
    --grid-strong: #453d31;
    --grid-tint: rgba(90, 80, 60, 0.45);
    --shadow-color: rgba(0, 0, 0, 0.5);
    --blue: #6ea8d8;
  }
  .gallery :where(*){box-sizing:border-box;margin:0;padding:0}
  .masthead{
    max-width:1120px;margin:0 auto;border:1.5px solid var(--ink);
    background:var(--paper-2);padding:26px 30px;position:relative;
    box-shadow:6px 6px 0 var(--shadow-color);
  }
  .masthead::after{content:"";position:absolute;top:8px;right:8px;width:14px;height:14px;border-top:1.5px solid var(--red);border-right:1.5px solid var(--red)}
  .masthead::before{content:"";position:absolute;bottom:8px;left:8px;width:14px;height:14px;border-bottom:1.5px solid var(--red);border-left:1.5px solid var(--red)}
  .tag-row{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-soft);display:flex;gap:18px;flex-wrap:wrap;margin-bottom:14px}
  .tag-row .dot{color:var(--red)}
  .title{font-family:var(--mono);font-weight:700;font-size:clamp(28px,4.6vw,46px);letter-spacing:-.01em;line-height:1;margin-bottom:14px}
  .title .amp{color:var(--red)}
  .lede{font-size:17px;max-width:60ch;color:var(--ink-soft)}
  .back{display:inline-block;margin-top:18px;font-family:var(--mono);font-size:12px;letter-spacing:.06em;color:var(--ink);text-decoration:none;border-bottom:1.5px solid var(--red);padding-bottom:1px}
  .back:hover{color:var(--red)}
  .plates{max-width:1120px;margin:48px auto 0;display:grid;grid-template-columns:repeat(2,1fr);gap:30px}
  @media(max-width:820px){.plates{grid-template-columns:1fr}.gallery{padding:44px 20px 72px}}
  .plate{border:1.5px solid var(--ink);background:var(--paper-2);position:relative;display:flex;flex-direction:column;opacity:0;transform:translateY(16px);animation:rise .6s cubic-bezier(.2,.7,.2,1) forwards;animation-delay:var(--d);transition:box-shadow .25s,transform .25s}
  .plate:hover{box-shadow:7px 7px 0 var(--shadow-color);transform:translateY(-2px)}
  @keyframes rise{to{opacity:1;transform:translateY(0)}}
  @media(prefers-reduced-motion:reduce){.plate{animation:none;opacity:1;transform:none}}
  .plate-top{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid var(--grid-strong);font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-soft)}
  .fig{color:var(--red);font-weight:700}
  .schematic{display:block;height:220px;border-bottom:1px dashed var(--grid-strong);position:relative;overflow:hidden;background:repeating-linear-gradient(90deg,transparent 0 23px,var(--grid-tint) 23px 24px),repeating-linear-gradient(0deg,transparent 0 23px,var(--grid-tint) 23px 24px)}
  .shot{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;filter:saturate(.92);transition:transform .35s cubic-bezier(.2,.7,.2,1)}
  .schematic:hover .shot{transform:scale(1.03)}
  .peek{position:absolute;right:10px;bottom:10px;font-family:var(--mono);font-size:10px;letter-spacing:.12em;font-weight:700;color:var(--paper);background:var(--red);padding:4px 9px;border-radius:2px;opacity:0;transform:translateY(4px);transition:opacity .25s,transform .25s}
  .schematic:hover .peek,.schematic:focus-visible .peek{opacity:1;transform:translateY(0)}
  .corner{position:absolute;width:9px;height:9px;border:1.2px solid var(--ink-soft);z-index:2}
  .c-tl{top:8px;left:8px;border-right:0;border-bottom:0}
  .c-tr{top:8px;right:8px;border-left:0;border-bottom:0}
  .c-bl{bottom:8px;left:8px;border-right:0;border-top:0}
  .c-br{bottom:8px;right:8px;border-left:0;border-top:0}
  .plate-body{padding:20px 18px 18px;display:flex;flex-direction:column;gap:12px;flex:1}
  .domain{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--blue)}
  .name{font-family:var(--mono);font-weight:700;font-size:21px;letter-spacing:-.01em;line-height:1.15}
  .desc{font-size:15.5px;color:var(--ink-soft);line-height:1.5}
  .stack{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}
  .chip{font-family:var(--mono);font-size:10.5px;letter-spacing:.03em;padding:3px 8px;border:1px solid var(--grid-strong);border-radius:2px;color:var(--ink-soft);background:rgba(127,127,127,.12)}
  .annot{font-family:var(--hand);color:var(--red);font-size:19px;line-height:1.15;transform:rotate(-1.4deg);padding-left:20px;position:relative;margin-top:2px}
  .annot::before{content:"↳";position:absolute;left:2px;top:1px;font-family:var(--mono);font-size:13px}
  .plate-foot{margin-top:auto;padding-top:14px;border-top:1px dashed var(--grid-strong);display:flex;gap:16px;font-family:var(--mono);font-size:12px;letter-spacing:.04em}
  .plate-foot a{color:var(--ink);text-decoration:none;border-bottom:1.5px solid var(--red);padding-bottom:1px;transition:color .2s}
  .plate-foot a:hover{color:var(--red)}
  .plate-foot a .arw{color:var(--red)}
  .foot-domain{color:var(--ink-soft)}
  .endnote{max-width:1120px;margin:44px auto 0;font-family:var(--mono);font-size:11px;color:var(--ink-soft);letter-spacing:.04em;text-align:center;border-top:1px dashed var(--grid-strong);padding-top:18px}
</style>
