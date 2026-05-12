import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "One-person studio operating out of Fawnskin, CA. Code, web, and 3D prints.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <p className="font-mono text-xs text-accent tracking-wide mb-3">
        // about
      </p>
      <h1 className="text-3xl font-medium text-text mb-4 tracking-tight">
        One person.
        <br />
        Code, web, and 3D prints.
      </h1>
      <p className="text-text-2 mb-20 max-w-2xl leading-relaxed">
        PsyborgVision is a one-person studio operating out of Fawnskin, CA — a
        small mountain town on the north shore of Big Bear Lake. I make
        websites, web apps, and 3D-printed parts for people who&apos;d rather
        talk to the builder than a sales team.
      </p>

      {/* How it works */}
      <section className="border-t border-border pt-14 mb-14">
        <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
          // how it works
        </p>
        <div className="max-w-2xl flex flex-col gap-6">
          <div>
            <h2 className="text-base font-medium text-text mb-2">
              No middle layer
            </h2>
            <p className="text-text-2 leading-relaxed">
              When you hire PsyborgVision, you talk to me. The same person
              doing the build is the one who answered your first email and will
              be the one shipping the final files. There&apos;s no project
              manager translating, no junior dev quietly outsourcing, no agency
              overhead baked into the quote.
            </p>
          </div>
          <div>
            <h2 className="text-base font-medium text-text mb-2">
              One scope, one price
            </h2>
            <p className="text-text-2 leading-relaxed">
              I quote per project, not per hour. You get a fixed number, a
              clear scope, and a delivery window. Anything outside scope gets
              discussed before it gets billed.
            </p>
          </div>
          <div>
            <h2 className="text-base font-medium text-text mb-2">
              Code-to-plastic
            </h2>
            <p className="text-text-2 leading-relaxed">
              Most freelancers do one thing. I do two: web (sites, apps,
              ongoing maintenance) and 3D printing (custom or catalog). Some
              clients want both. Most want one. Either works — but if
              you&apos;ve ever needed a website AND a physical thing for the
              same launch and had to coordinate two separate vendors, you know
              why this combo exists.
            </p>
          </div>
        </div>
      </section>

      {/* The stack */}
      <section className="border-t border-border pt-14 mb-14">
        <p className="font-mono text-xs text-text-dim tracking-wide mb-6">
          // the stack
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-mono text-xs text-text-muted mb-4 tracking-wide uppercase">
              Web / Code
            </h2>
            <dl className="space-y-2">
              {webStack.map(({ label, value }) => (
                <div key={label} className="flex gap-4 text-sm">
                  <dt className="text-text-dim w-24 flex-shrink-0 font-mono">
                    {label}
                  </dt>
                  <dd className="text-text-2">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="font-mono text-xs text-text-muted mb-4 tracking-wide uppercase">
              3D Printing
            </h2>
            <dl className="space-y-2">
              {printStack.map(({ label, value }) => (
                <div key={label} className="flex gap-4 text-sm">
                  <dt className="text-text-dim w-28 flex-shrink-0 font-mono">
                    {label}
                  </dt>
                  <dd className="text-text-2">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* What I'm here for */}
      <section className="border-t border-border pt-14 mb-14">
        <p className="font-mono text-xs text-text-dim tracking-wide mb-6">
          // what i&apos;m here for
        </p>
        <ul className="flex flex-col gap-4">
          {values.map((v) => (
            <li key={v} className="flex gap-3 text-text-2 leading-relaxed">
              <span className="text-accent flex-shrink-0 mt-0.5">·</span>
              {v}
            </li>
          ))}
        </ul>
      </section>

      {/* Location */}
      <section className="border-t border-border pt-14 mb-14">
        <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
          // location
        </p>
        <h2 className="text-xl font-medium text-text mb-4">
          Fawnskin, CA · 92333
        </h2>
        <p className="text-text-2 max-w-xl leading-relaxed">
          The studio runs out of a small workspace in Fawnskin, on the north
          shore of Big Bear Lake. Most work happens remotely — the web stuff
          doesn&apos;t care where I am, and 3D prints ship anywhere in the US.
          If you&apos;re local to Big Bear, San Bernardino, or anywhere in the
          Inland Empire, in-person hand-off is on the table for the right
          project.
        </p>
      </section>

      {/* CTA */}
      <div className="border-t border-border pt-14">
        <h2 className="text-2xl font-medium text-text mb-3">Want to talk?</h2>
        <p className="text-text-2 mb-8">
          Drop a line. I read every inquiry myself.
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

const webStack = [
  { label: "Frontend", value: "Next.js · React · TypeScript · Tailwind" },
  { label: "Hosting", value: "Vercel · Cloudflare · Netlify" },
  { label: "Backend", value: "Node · Postgres · Supabase" },
  { label: "CMS", value: "Sanity · Contentful · Markdown/MDX" },
  { label: "Payments", value: "Stripe · Stripe Payment Links" },
];

const printStack = [
  {
    label: "Printers",
    value:
      "Snapmaker U1 · Flashforge AD5M Pro · Flashforge AD5X · Entina Tina2",
  },
  { label: "Materials", value: "PLA · PETG · ABS · TPU · Resin (on request)" },
  { label: "Build vol.", value: "up to 270×270×270mm" },
  {
    label: "Finishing",
    value: "Sanding, priming, painting, post-processing on request",
  },
  { label: "Formats", value: "STL · STEP · OBJ · 3MF" },
];

const values = [
  "Small businesses that need a real website, not a SaaS template.",
  "Solo founders shipping their first app and don't want to learn React this month.",
  "Agencies that need overflow help and don't want to teach a contractor their stack.",
  "Makers and individuals who need one-off prints done right.",
  "Anyone who's been burned by an agency, an offshore \"team,\" or a builder who ghosted.",
];
