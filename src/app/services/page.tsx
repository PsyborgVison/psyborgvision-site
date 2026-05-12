import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, web apps, site management, and 3D printing. Quote-based, scoped per project.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <p className="font-mono text-xs text-accent tracking-wide mb-3">
        // services
      </p>
      <h1 className="text-3xl font-medium text-text mb-4 tracking-tight">
        Five things I build.
        <br />
        Pick one, or pick a few.
      </h1>
      <p className="text-text-2 mb-20 max-w-2xl leading-relaxed">
        Web, apps, ongoing site care, custom 3D prints, and a small catalog of
        pre-made pieces. Each can stand alone or stack.
      </p>

      {/* Service blocks */}
      <div className="flex flex-col divide-y divide-border">
        {/* 01 */}
        <div id="custom-websites" className="py-14 scroll-mt-20">
          <span className="font-mono text-xs text-accent mb-3 block">
            // 01
          </span>
          <h2 className="text-2xl font-medium text-text mb-3">
            Custom websites
          </h2>
          <p className="text-text-2 mb-6 leading-relaxed max-w-2xl">
            Marketing sites, landing pages, portfolios, and small business sites
            built fast and built to last.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-mono text-xs text-text-dim mb-3 tracking-wide">
                // includes
              </h3>
              <ul className="text-sm text-text-2 space-y-2 leading-relaxed">
                {[
                  "Design and build (Next.js, Tailwind, deployed on Vercel)",
                  "Mobile-first, accessibility-aware, fast (Lighthouse 95+)",
                  "Basic SEO setup, sitemap, OG images",
                  "CMS or markdown-based content if you want to update it yourself",
                  "Custom domain setup, email forwarding, analytics",
                  "One round of revisions baked in",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent flex-shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs text-text-dim mb-3 tracking-wide">
                // good fit for
              </h3>
              <p className="text-sm text-text-2 leading-relaxed">
                Small businesses, solo founders, restaurants, contractors,
                creators — anyone who needs a real site and doesn&apos;t want
                to wrestle with Squarespace.
              </p>
              <div className="mt-6">
                <p className="text-sm text-text-muted leading-relaxed">
                  Quote-based. Price depends on scope — a single-page site and
                  a full app build are different conversations. Tell me what you
                  need and I&apos;ll come back with a real number.
                </p>
              </div>
            </div>
          </div>
          <CtaButton href="/contact" label="Get a quote" />
        </div>

        {/* 02 */}
        <div id="custom-web-apps" className="py-14 scroll-mt-20">
          <span className="font-mono text-xs text-accent mb-3 block">
            // 02
          </span>
          <h2 className="text-2xl font-medium text-text mb-3">
            Custom web apps
          </h2>
          <p className="text-text-2 mb-6 leading-relaxed max-w-2xl">
            Dashboards, internal tools, MVPs, and SaaS-style builds for
            products you wish existed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-mono text-xs text-text-dim mb-3 tracking-wide">
                // includes
              </h3>
              <ul className="text-sm text-text-2 space-y-2 leading-relaxed">
                {[
                  "Full-stack build (frontend, backend, database)",
                  "Auth, user management, payments if needed",
                  "Admin tools and dashboards",
                  "Deployment, environment setup, CI/CD",
                  "Documentation so you can hand off or maintain",
                  "One round of revisions, plus 30 days post-launch fixes",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent flex-shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs text-text-dim mb-3 tracking-wide">
                // good fit for
              </h3>
              <p className="text-sm text-text-2 leading-relaxed">
                Founders shipping a v1, internal teams that need a real tool,
                anyone whose problem doesn&apos;t fit an off-the-shelf SaaS.
              </p>
              <p className="text-sm text-text-muted mt-4 leading-relaxed">
                Quote-based, scoped per project.
              </p>
            </div>
          </div>
          <CtaButton href="/contact" label="Get a quote" />
        </div>

        {/* 03 */}
        <div id="site-management" className="py-14 scroll-mt-20">
          <span className="font-mono text-xs text-accent mb-3 block">
            // 03
          </span>
          <h2 className="text-2xl font-medium text-text mb-3">
            Ongoing site management
          </h2>
          <p className="text-text-2 mb-6 leading-relaxed max-w-2xl">
            Care for sites I built or didn&apos;t. Updates, fixes, hosting,
            content changes, and keeping things alive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-mono text-xs text-text-dim mb-3 tracking-wide">
                // includes
              </h3>
              <ul className="text-sm text-text-2 space-y-2 leading-relaxed">
                {[
                  "Monthly content updates (new pages, image swaps, copy edits)",
                  "Plugin/dependency updates and security patches",
                  "Hosting and DNS management",
                  "Performance monitoring, uptime checks, backups",
                  "A standing Slack/email channel for small requests",
                  "Quarterly check-in to flag bigger issues",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent flex-shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs text-text-dim mb-3 tracking-wide">
                // good fit for
              </h3>
              <p className="text-sm text-text-2 leading-relaxed">
                Small businesses who need a site to stay current but
                don&apos;t want to hire in-house, or anyone whose previous
                &ldquo;developer cousin&rdquo; went silent.
              </p>
              <p className="text-sm text-text-muted mt-4 leading-relaxed">
                Monthly retainer, quote-based. Tell me what your site needs
                and I&apos;ll scope a plan that fits.
              </p>
            </div>
          </div>
          <CtaButton href="/contact" label="Get a retainer quote" />
        </div>

        {/* 04 */}
        <div id="custom-3d-printing" className="py-14 scroll-mt-20">
          <span className="font-mono text-xs text-accent mb-3 block">
            // 04
          </span>
          <h2 className="text-2xl font-medium text-text mb-3">
            Custom 3D printing
          </h2>
          <p className="text-text-2 mb-6 leading-relaxed max-w-2xl">
            Bring an idea, a sketch, or an STL. I&apos;ll print it, finish it,
            and ship it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-mono text-xs text-text-dim mb-3 tracking-wide">
                // process
              </h3>
              <ol className="text-sm text-text-2 space-y-2 leading-relaxed">
                {[
                  "You send: a description, photos, sketches, or an STL file.",
                  "I send back: a quote (material, time, finish) within 24–48 hours.",
                  "You approve. I print.",
                  "Ships out, or local pickup if you're in Big Bear / Inland Empire.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-mono text-accent flex-shrink-0">
                      0{i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="font-mono text-xs text-text-dim mb-3 tracking-wide">
                // what i print
              </h3>
              <ul className="text-sm text-text-2 space-y-2 leading-relaxed">
                {[
                  "Functional parts and replacements",
                  "Decor, desk pieces, signage",
                  "Cosplay props, wearables",
                  "Tabletop and gaming accessories",
                  "Custom signs, nameplates, gifts",
                  "Whatever else you can describe — I'll tell you if it's possible",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent flex-shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text-muted mt-4">
                Starts at $3. Quoted per job.
              </p>
            </div>
          </div>
          <CtaButton href="/contact" label="Request a quote" />
        </div>

        {/* 05 */}
        <div id="print-catalog" className="py-14 scroll-mt-20">
          <span className="font-mono text-xs text-accent mb-3 block">
            // 05
          </span>
          <h2 className="text-2xl font-medium text-text mb-3">Print catalog</h2>
          <p className="text-text-2 mb-4 leading-relaxed max-w-2xl">
            A small, growing catalog of pre-designed pieces ready to ship.
          </p>
          <p className="text-sm text-text-muted mb-8 leading-relaxed max-w-xl">
            Per item, listed with each piece. Starts at $3 — price depends on
            size, material, and quantity. Free local pickup in Big Bear;
            shipping anywhere in the US from $8.
          </p>
          <Link
            href="/3d-prints"
            className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-accent-dim transition-colors"
          >
            Browse the catalog →
          </Link>
        </div>
      </div>

      {/* Process strip */}
      <div className="border-t border-border pt-16 mt-4">
        <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
          // process
        </p>
        <h2 className="text-2xl font-medium text-text mb-10">How it works.</h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map(({ step, title, desc }) => (
            <li key={step} className="flex flex-col gap-2">
              <span className="font-mono text-xs text-accent">
                step {step}
              </span>
              <h3 className="text-sm font-medium text-text">{title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* CTA */}
      <div className="border-t border-border pt-16 mt-16">
        <h2 className="text-2xl font-medium text-text mb-4">
          Sound about right?
        </h2>
        <p className="text-text-2 max-w-xl mb-8 leading-relaxed">
          Tell me what you have in mind. I&apos;ll come back with a real
          estimate, usually within a day or two.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-accent-dim transition-colors"
          >
            Start a project
          </Link>
          <a
            href="mailto:hello@psyborgvision.com"
            className="text-sm text-text-2 hover:text-text transition-colors"
          >
            hello@psyborgvision.com
          </a>
        </div>
      </div>
    </div>
  );
}

function CtaButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-accent-dim transition-colors"
    >
      {label}
    </Link>
  );
}

const process = [
  {
    step: "01",
    title: "Inquiry",
    desc: "You send a description, links, references, or whatever you have. Plus your timeline and budget if you have one.",
  },
  {
    step: "02",
    title: "Quote",
    desc: "I come back with a real number, scope, and timeline. Usually within 48 hours.",
  },
  {
    step: "03",
    title: "Kickoff",
    desc: "Half down to start. We agree on milestones, then I get to work.",
  },
  {
    step: "04",
    title: "Build",
    desc: "Regular check-ins (Slack, email, or call — your preference). Drafts shared as they're ready.",
  },
  {
    step: "05",
    title: "Delivery",
    desc: "Final delivery. Files, deployment, walkthrough, or shipped product — depending on the job. Half due on completion.",
  },
  {
    step: "06",
    title: "After",
    desc: "Web projects: 30 days of bug fixes included. Prints: replacement on print defects within 14 days. Retainer clients: ongoing care.",
  },
];
