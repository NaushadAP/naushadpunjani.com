<script>
  // ── Edit / add plates here. `diagram` is inline SVG (trusted, your own content).
  // Status options: 'live' | 'shipped' | 'build' | 'ongoing'
  const projects = [
    {
      fig: '01',
      kicker: 'SaaS · PLATFORM',
      category: 'Point-of-Sale · Retail',
      name: 'Sauda',
      status: 'build',
      sub: 'Offline-first POS for corner-shop retail.',
      desc: `A progressive web app that keeps selling when the network drops. Inventory is an
             append-only <b>stock-movement ledger</b> with ULID keys, so counts reconcile
             deterministically once the device is back online. Barcode scanning runs off
             keyboard-wedge burst detection — no native app required.`,
      stack: ['Laravel', 'Vue', 'PWA', 'Docker', 'SQLite→Postgres'],
      annot: 'the ledger never mutates — every sale is a new row',
      links: [
        { label: 'Case study', href: '#', lead: true },
        { label: 'Live demo', href: '#' }
      ],
      diagram: `
        <svg viewBox="0 0 300 150" fill="none" stroke="var(--ink)" stroke-width="1.4">
          <rect x="26" y="42" width="66" height="66" rx="3"/>
          <line x1="26" y1="56" x2="92" y2="56"/>
          <rect x="34" y="64" width="20" height="10" fill="var(--red)" stroke="none"/>
          <line x1="60" y1="66" x2="84" y2="66" stroke-width="1"/>
          <line x1="60" y1="72" x2="84" y2="72" stroke-width="1"/>
          <line x1="34" y1="84" x2="84" y2="84" stroke-width="1"/>
          <path d="M104 62 h34" stroke="var(--blue)" stroke-dasharray="3 3"/>
          <path d="M132 60 l6 2 l-6 2" stroke="var(--blue)"/>
          <path d="M138 84 h-34" stroke="var(--blue)" stroke-dasharray="3 3"/>
          <path d="M110 82 l-6 2 l6 2" stroke="var(--blue)"/>
          <rect x="150" y="40" width="120" height="16" rx="2"/>
          <rect x="150" y="60" width="120" height="16" rx="2"/>
          <rect x="150" y="80" width="120" height="16" rx="2"/>
          <text x="158" y="52" font-family="var(--mono)" font-size="8" fill="var(--ink)" stroke="none">stock_movements +1</text>
          <text x="158" y="72" font-family="var(--mono)" font-size="8" fill="var(--ink)" stroke="none">stock_movements +1</text>
          <text x="158" y="92" font-family="var(--mono)" font-size="8" fill="var(--red)" stroke="none">append-only ▸ ULID</text>
        </svg>`
    },
    {
      // TODO: unconfirmed — verify client/context, real stack, and links before publishing.
      fig: '02',
      kicker: 'CRM · INTERNAL TOOL',
      category: 'Client Relationship Manager',
      name: 'Ledger CRM',
      status: 'shipped',
      sub: 'Pipeline + reminders for a professional-services firm.',
      desc: `Built to replace spreadsheet chaos: contacts move through a drag-and-drop pipeline,
             a reminder engine surfaces follow-ups before they slip, and a document vault ties
             every file to the right account. Role-based access keeps partner and associate
             views separate.`,
      stack: ['Laravel', 'Livewire', 'MySQL', 'Alpine.js', 'RBAC'],
      annot: 'reminders fire before things slip, not after',
      links: [
        { label: 'Case study', href: '#', lead: true },
        { label: 'Repo', href: '#' }
      ],
      diagram: `
        <svg viewBox="0 0 300 150" fill="none" stroke="var(--ink)" stroke-width="1.4">
          <rect x="24" y="30" width="56" height="92" rx="2"/>
          <rect x="94" y="30" width="56" height="92" rx="2"/>
          <rect x="164" y="30" width="56" height="92" rx="2"/>
          <rect x="234" y="30" width="42" height="92" rx="2"/>
          <text x="30" y="24" font-family="var(--mono)" font-size="7" fill="var(--blue)" stroke="none">LEAD</text>
          <text x="100" y="24" font-family="var(--mono)" font-size="7" fill="var(--blue)" stroke="none">ACTIVE</text>
          <text x="170" y="24" font-family="var(--mono)" font-size="7" fill="var(--blue)" stroke="none">REVIEW</text>
          <text x="240" y="24" font-family="var(--mono)" font-size="7" fill="var(--green)" stroke="none">WON</text>
          <rect x="30" y="38" width="44" height="14" fill="var(--ink)" fill-opacity=".1"/>
          <rect x="30" y="56" width="44" height="14" fill="var(--ink)" fill-opacity=".1"/>
          <rect x="100" y="38" width="44" height="14" fill="var(--ink)" fill-opacity=".1"/>
          <rect x="170" y="38" width="44" height="14" fill="var(--ink)" fill-opacity=".1"/>
          <rect x="240" y="38" width="30" height="14" fill="var(--red)" fill-opacity=".25" stroke="var(--red)"/>
          <path d="M74 45 h20" stroke="var(--red)" stroke-dasharray="2 2"/>
          <path d="M144 45 h20" stroke="var(--red)" stroke-dasharray="2 2"/>
        </svg>`
    },
    {
      // TODO: unconfirmed project — do not link a live demo until the author confirms this exists.
      fig: '03',
      kicker: 'SUPPORT · SYSTEM',
      category: 'Ticket Management',
      name: 'Relay',
      status: 'live',
      sub: 'SLA-aware support desk with live queues.',
      desc: `Tickets arrive from multiple channels, get routed by priority, and are held to
             per-tier SLA timers that escalate on breach. Assignment rules balance load across
             agents, and a full audit trail records every status change — built for teams that
             answer to an SLA, not a whim.`,
      stack: ['Node.js', 'React', 'WebSockets', 'PostgreSQL', 'Redis'],
      annot: 'every state change is logged — nothing disappears',
      links: [
        { label: 'Case study', href: '#', lead: true },
        { label: 'Live demo', href: '#' }
      ],
      diagram: `
        <svg viewBox="0 0 300 150" fill="none" stroke="var(--ink)" stroke-width="1.4">
          <path d="M18 40 h40" stroke="var(--blue)"/><path d="M52 38 l6 2 l-6 2" stroke="var(--blue)"/>
          <path d="M18 60 h40" stroke="var(--blue)"/><path d="M52 58 l6 2 l-6 2" stroke="var(--blue)"/>
          <path d="M18 80 h40" stroke="var(--blue)"/><path d="M52 78 l6 2 l-6 2" stroke="var(--blue)"/>
          <rect x="64" y="50" width="52" height="40" rx="3"/>
          <text x="70" y="66" font-family="var(--mono)" font-size="7" fill="var(--ink)" stroke="none">ROUTE</text>
          <text x="70" y="78" font-family="var(--mono)" font-size="7" fill="var(--ink)" stroke="none">by SLA</text>
          <rect x="150" y="26" width="120" height="18" rx="2"/>
          <rect x="150" y="52" width="120" height="18" rx="2"/>
          <rect x="150" y="78" width="120" height="18" rx="2"/>
          <circle cx="160" cy="35" r="4" fill="var(--red)" stroke="none"/>
          <circle cx="160" cy="61" r="4" fill="var(--amber)" stroke="none"/>
          <circle cx="160" cy="87" r="4" fill="var(--green)" stroke="none"/>
          <text x="172" y="38" font-family="var(--mono)" font-size="7" fill="var(--ink)" stroke="none">P1 · breach 15m</text>
          <text x="172" y="64" font-family="var(--mono)" font-size="7" fill="var(--ink)" stroke="none">P2 · breach 2h</text>
          <text x="172" y="90" font-family="var(--mono)" font-size="7" fill="var(--ink)" stroke="none">P3 · queue</text>
          <path d="M116 70 h32" stroke="var(--red)" stroke-dasharray="2 2"/>
        </svg>`
    },
    {
      fig: '04',
      kicker: 'WEB · BUILDS',
      category: 'Websites · Front-end',
      name: 'Web Builds',
      status: 'ongoing',
      sub: 'Marketing sites, portfolios & super-app surfaces.',
      desc: `Front-end work across SvelteKit and React — from this notebook itself to product
             landing pages and the web surfaces of a super-app serving millions of subscribers.
             Fast, accessible, and served behind Nginx / F5 with an eye on Core Web Vitals.`,
      stack: ['SvelteKit', 'React', 'TypeScript', 'Nginx', 'F5'],
      annot: 'this very page is fig. 04',
      links: [
        { label: 'Gallery', href: '#', lead: true },
        { label: 'naushadpunjani.com', href: 'https://naushadpunjani.com' }
      ],
      diagram: `
        <svg viewBox="0 0 300 150" fill="none" stroke="var(--ink)" stroke-width="1.4">
          <rect x="40" y="26" width="220" height="98" rx="4"/>
          <line x1="40" y1="42" x2="260" y2="42"/>
          <circle cx="50" cy="34" r="2.4"/><circle cx="59" cy="34" r="2.4"/><circle cx="68" cy="34" r="2.4"/>
          <rect x="86" y="30" width="150" height="8" rx="4" stroke-width="1"/>
          <rect x="52" y="52" width="90" height="60" fill="var(--red)" fill-opacity=".14" stroke="var(--red)"/>
          <rect x="152" y="52" width="96" height="26" fill="var(--ink)" fill-opacity=".1"/>
          <rect x="152" y="86" width="96" height="26" fill="var(--ink)" fill-opacity=".1"/>
          <line x1="60" y1="66" x2="120" y2="66" stroke="var(--red)" stroke-width="1"/>
          <line x1="60" y1="76" x2="112" y2="76" stroke="var(--red)" stroke-width="1"/>
          <line x1="60" y1="98" x2="100" y2="98" stroke-width="1"/>
        </svg>`
    }
  ];
  const statusLabel = { live: 'LIVE', shipped: 'SHIPPED', build: 'IN BUILD', ongoing: 'ONGOING' };
</script>

<section class="showcase" id="showcase">
  <header class="masthead">
    <div class="tag-row">
      <span>NAUSHAD PUNJANI</span><span class="dot">◆</span>
      <span>SELECTED WORK / LOGBOOK</span><span class="dot">◆</span>
      <span>REV. 2026.02</span>
    </div>
    <h1 class="title">Showcase <span class="amp">&amp;</span> Field Notes</h1>
    <p class="lede">
      A working logbook of systems I've designed and shipped — from
      <em>offline-first retail software</em> to relationship and support tooling.
      Each plate is a build, not a mockup.
    </p>
    <div class="legend">
      <span><b>STATUS:</b></span>
      <span><i class="stamp s-live">LIVE</i> in production</span>
      <span><i class="stamp s-ship">SHIPPED</i> delivered</span>
      <span><i class="stamp s-build">IN&nbsp;BUILD</i> active dev</span>
      <span><i class="stamp s-ongoing">ONGOING</i> continuous</span>
    </div>
  </header>

  <div class="plates">
    {#each projects as p, i}
      <article class="plate" style="--d:{0.05 + i * 0.1}s">
        <div class="plate-top"><span class="fig">FIG. {p.fig}</span><span>{p.kicker}</span></div>
        <div class="schematic">
          <span class="corner c-tl"></span><span class="corner c-tr"></span>
          <span class="corner c-bl"></span><span class="corner c-br"></span>
          {@html p.diagram}
        </div>
        <div class="plate-body">
          <span class="cat">{p.category}</span>
          <div class="name-row">
            <h3 class="name">{p.name}</h3>
            <i class="stamp s-{p.status}">{statusLabel[p.status]}</i>
          </div>
          <p class="sub">{p.sub}</p>
          <p class="desc">{@html p.desc}</p>
          <div class="stack">
            {#each p.stack as s}<span class="chip">{s}</span>{/each}
          </div>
          <p class="annot">{p.annot}</p>
          <div class="plate-foot">
            {#each p.links as l}
              <a href={l.href}>{#if l.lead}<span class="arw">→</span> {/if}{l.label}</a>
            {/each}
          </div>
        </div>
      </article>
    {/each}
  </div>

  <p class="endnote">— END OF SECTION · plates continue overleaf —</p>
</section>

<style>
  .showcase {
    /* Reconciled to the site's existing theme tokens (src/app.css) so this
       section flips with the global light/dark toggle instead of staying
       fixed-light. --grid/--grid-strong/--blue/--amber/--green have no site
       equivalent and get dark-mode overrides just below. */
    --paper: var(--bg);
    --paper-2: var(--bg-card);
    --ink-soft: var(--muted);
    --red: var(--accent);
    --grid: #c9bfa8;
    --grid-strong: #b9ac8e;
    --grid-tint: rgba(185, 172, 142, 0.4);
    --shadow-color: rgba(20, 17, 13, 0.16);
    --blue: #2c5c8f;
    --amber: #b07d1f;
    --green: #3f6d42;
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
  :global(html[data-theme='dark']) .showcase {
    --grid: #36302a;
    --grid-strong: #453d31;
    --grid-tint: rgba(90, 80, 60, 0.45);
    --shadow-color: rgba(0, 0, 0, 0.5);
    --blue: #6ea8d8;
    --amber: #d9a548;
    --green: #6fae74;
  }
  .showcase :where(*){box-sizing:border-box;margin:0;padding:0}
  .masthead{
    max-width:1120px;margin:0 auto;border:1.5px solid var(--ink);
    background:var(--paper-2);padding:26px 30px;position:relative;
    box-shadow:6px 6px 0 var(--shadow-color);
  }
  .masthead::after{content:"";position:absolute;top:8px;right:8px;width:14px;height:14px;border-top:1.5px solid var(--red);border-right:1.5px solid var(--red)}
  .masthead::before{content:"";position:absolute;bottom:8px;left:8px;width:14px;height:14px;border-bottom:1.5px solid var(--red);border-left:1.5px solid var(--red)}
  .tag-row{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-soft);display:flex;gap:18px;flex-wrap:wrap;margin-bottom:14px}
  .tag-row .dot{color:var(--red)}
  .title{font-family:var(--mono);font-weight:700;font-size:clamp(30px,5vw,52px);letter-spacing:-.01em;line-height:1;margin-bottom:14px}
  .title .amp{color:var(--red)}
  .lede{font-size:18px;max-width:60ch;color:var(--ink-soft)}
  .lede em{color:var(--ink);font-style:italic}
  .legend{margin-top:22px;padding-top:16px;border-top:1px dashed var(--grid-strong);display:flex;gap:26px;flex-wrap:wrap;font-family:var(--mono);font-size:11px;letter-spacing:.06em;color:var(--ink-soft)}
  .legend span{display:inline-flex;align-items:center;gap:7px}
  .stamp{display:inline-block;padding:2px 7px;border:1.3px solid;border-radius:2px;font-weight:700;font-size:10px;letter-spacing:.1em;font-family:var(--mono);font-style:normal}
  .s-live{color:var(--green);border-color:var(--green)}
  .s-build{color:var(--amber);border-color:var(--amber)}
  .s-ship,.s-shipped{color:var(--blue);border-color:var(--blue)}
  .s-ongoing{color:var(--ink-soft);border-color:var(--ink-soft)}
  .plates{max-width:1120px;margin:48px auto 0;display:grid;grid-template-columns:repeat(2,1fr);gap:30px}
  @media(max-width:820px){.plates{grid-template-columns:1fr}.showcase{padding:44px 20px 72px}}
  .plate{border:1.5px solid var(--ink);background:var(--paper-2);position:relative;display:flex;flex-direction:column;opacity:0;transform:translateY(16px);animation:rise .6s cubic-bezier(.2,.7,.2,1) forwards;animation-delay:var(--d);transition:box-shadow .25s,transform .25s}
  .plate:hover{box-shadow:7px 7px 0 var(--shadow-color);transform:translateY(-2px)}
  @keyframes rise{to{opacity:1;transform:translateY(0)}}
  @media(prefers-reduced-motion:reduce){.plate{animation:none;opacity:1;transform:none}}
  .plate-top{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid var(--grid-strong);font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-soft)}
  .fig{color:var(--red);font-weight:700}
  .schematic{height:150px;border-bottom:1px dashed var(--grid-strong);position:relative;overflow:hidden;background:repeating-linear-gradient(90deg,transparent 0 23px,var(--grid-tint) 23px 24px),repeating-linear-gradient(0deg,transparent 0 23px,var(--grid-tint) 23px 24px)}
  .schematic :global(svg){position:absolute;inset:0;width:100%;height:100%}
  .corner{position:absolute;width:9px;height:9px;border:1.2px solid var(--ink-soft)}
  .c-tl{top:8px;left:8px;border-right:0;border-bottom:0}
  .c-tr{top:8px;right:8px;border-left:0;border-bottom:0}
  .c-bl{bottom:8px;left:8px;border-right:0;border-top:0}
  .c-br{bottom:8px;right:8px;border-left:0;border-top:0}
  .plate-body{padding:20px 18px 18px;display:flex;flex-direction:column;gap:12px;flex:1}
  .cat{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--blue)}
  .name-row{display:flex;align-items:center;justify-content:space-between;gap:10px}
  .name{font-family:var(--mono);font-weight:700;font-size:24px;letter-spacing:-.01em;line-height:1.05}
  .sub{font-size:16px;color:var(--ink);font-style:italic;margin-top:-6px}
  .desc{font-size:15.5px;color:var(--ink-soft);line-height:1.5}
  .stack{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}
  .chip{font-family:var(--mono);font-size:10.5px;letter-spacing:.03em;padding:3px 8px;border:1px solid var(--grid-strong);border-radius:2px;color:var(--ink-soft);background:rgba(127,127,127,.12)}
  .annot{font-family:var(--hand);color:var(--red);font-size:19px;line-height:1.15;transform:rotate(-1.4deg);padding-left:20px;position:relative;margin-top:2px}
  .annot::before{content:"↳";position:absolute;left:2px;top:1px;font-family:var(--mono);font-size:13px}
  .plate-foot{margin-top:auto;padding-top:14px;border-top:1px dashed var(--grid-strong);display:flex;gap:16px;font-family:var(--mono);font-size:12px;letter-spacing:.04em}
  .plate-foot a{color:var(--ink);text-decoration:none;border-bottom:1.5px solid var(--red);padding-bottom:1px;transition:color .2s}
  .plate-foot a:hover{color:var(--red)}
  .plate-foot a .arw{color:var(--red)}
  .endnote{max-width:1120px;margin:44px auto 0;font-family:var(--mono);font-size:11px;color:var(--ink-soft);letter-spacing:.04em;text-align:center;border-top:1px dashed var(--grid-strong);padding-top:18px}
</style>
