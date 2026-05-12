import Link from "next/link";
import { getFeaturedProjects } from "@/content/work";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <p className="font-mono text-xs text-accent tracking-wide mb-6">
          // freelance studio · inland empire, ca
        </p>
        <h1 className="text-4xl md:text-5xl font-medium text-text leading-tight tracking-tight mb-6">
          One-person studio.
          <br />
          Code, web, and 3D prints. SoCal.
        </h1>
        <p className="text-lg text-text-2 max-w-xl mb-10 leading-relaxed">
          Web design, custom apps, ongoing site care, and made-to-order 3D
          printing. Working with clients across the country.
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-accent-dim transition-colors"
          >
            See the work →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-border text-text-2 px-5 py-2.5 text-sm font-medium rounded-sm hover:border-border-strong hover:text-text transition-colors"
          >
            Start a project
          </Link>
        </div>
        <p className="font-mono text-xs text-text-dim">
          stack: next.js · vercel&nbsp;&nbsp;&nbsp;based: fawnskin, ca&nbsp;&nbsp;&nbsp;status: open for work
        </p>
      </section>

      {/* What I build */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
            // services
          </p>
          <h2 className="text-2xl font-medium text-text mb-10">
            What I build.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ num, title, desc, href, cta }) => (
              <div
                key={num}
                className="bg-surface border border-border rounded-sm p-6 flex flex-col gap-3 hover:border-border-strong transition-colors"
              >
                <span className="font-mono text-xs text-accent">// {num}</span>
                <h3 className="text-base font-medium text-text">{title}</h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {desc}
                </p>
                <Link
                  href={href}
                  className="text-sm text-accent hover:text-accent-dim transition-colors font-mono"
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
            // recent work
          </p>
          <h2 className="text-2xl font-medium text-text mb-10">
            A few things I&apos;ve shipped.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="bg-surface border border-border rounded-sm p-6 flex flex-col gap-3 hover:border-border-strong transition-colors group"
              >
                <span className="font-mono text-xs text-text-dim">
                  // {project.year} · {project.client}
                </span>
                <h3 className="text-base font-medium text-text group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-text-dim border border-border px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/work"
              className="text-sm text-accent hover:text-accent-dim transition-colors font-mono"
            >
              See everything →
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
            // about the studio
          </p>
          <div className="max-w-2xl flex flex-col gap-4">
            <p className="text-text-2 leading-relaxed">
              PsyborgVision is one person operating out of the SoCal mountains.
              I do the design, the code, and the printing — start to finish, no
              handoffs, no offshoring, no agency markup.
            </p>
            <p className="text-text-2 leading-relaxed">
              The combo&apos;s the point: most web devs don&apos;t print, most
              print services don&apos;t code. I do both, which means I can take
              a project from &ldquo;I need a site&rdquo; all the way to
              &ldquo;I need a site and a custom-printed kiosk to put next to
              it&rdquo; — and not lose anything in translation.
            </p>
            <Link
              href="/about"
              className="text-sm text-accent hover:text-accent-dim transition-colors font-mono"
            >
              More about the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
            // start something
          </p>
          <h2 className="text-2xl font-medium text-text mb-4">
            Have something to build?
          </h2>
          <p className="text-text-2 max-w-xl mb-8 leading-relaxed">
            I read every inquiry myself. Tell me what you have in mind —
            domain, deadline, budget if you have one — and I&apos;ll come back
            with a real estimate, usually within a day or two.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-6">
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
          <p className="font-mono text-xs text-text-dim">
            typical response: within 48 hours · pst (UTC-8)
          </p>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    num: "01",
    title: "Custom websites",
    desc: "Marketing sites, landing pages, portfolios. Fast, accessible, easy to update.",
    href: "/services#custom-websites",
    cta: "Learn more →",
  },
  {
    num: "02",
    title: "Custom web apps",
    desc: "Dashboards, internal tools, SaaS-style builds. Whatever you wish existed.",
    href: "/services#custom-web-apps",
    cta: "Learn more →",
  },
  {
    num: "03",
    title: "Site management",
    desc: "Ongoing care for sites I built or didn't. Updates, fixes, hosting, keeping things alive.",
    href: "/services#site-management",
    cta: "Learn more →",
  },
  {
    num: "04",
    title: "Custom 3D printing",
    desc: "Bring an idea, a sketch, or an STL. I'll print it, finish it, and send it.",
    href: "/services#custom-3d-printing",
    cta: "Learn more →",
  },
  {
    num: "05",
    title: "Print catalog",
    desc: "Pre-designed pieces ready to ship. Small, growing, sometimes weird.",
    href: "/3d-prints",
    cta: "Browse →",
  },
];
