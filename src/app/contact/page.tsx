import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project, ask a question, or just say hi.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <p className="font-mono text-xs text-accent tracking-wide mb-3">
        // contact
      </p>
      <h1 className="text-3xl font-medium text-text mb-4 tracking-tight">
        Tell me what
        <br />
        you have in mind.
      </h1>
      <p className="text-text-2 mb-14 max-w-xl leading-relaxed">
        I read every inquiry myself. The more you can tell me up front, the
        faster I can come back with something useful.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
        {/* Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-10">
          {/* What to include */}
          <div>
            <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
              // what to include
            </p>
            <h2 className="text-sm font-medium text-text mb-3">
              For the fastest useful reply, mention…
            </h2>
            <ul className="flex flex-col gap-2 text-sm text-text-muted">
              {tips.map((tip) => (
                <li key={tip} className="flex gap-2">
                  <span className="text-accent flex-shrink-0">·</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Other ways */}
          <div>
            <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
              // other ways
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <span className="text-text-dim font-mono text-xs block mb-0.5">
                  email
                </span>
                <a
                  href="mailto:hello@psyborgvision.com"
                  className="text-text-2 hover:text-accent transition-colors"
                >
                  hello@psyborgvision.com
                </a>
              </li>
              <li>
                <span className="text-text-dim font-mono text-xs block mb-0.5">
                  instagram
                </span>
                <a
                  href="https://instagram.com/psyborgvision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-2 hover:text-accent transition-colors"
                >
                  @psyborgvision
                </a>
              </li>
              <li>
                <span className="text-text-dim font-mono text-xs block mb-0.5">
                  github
                </span>
                <a
                  href="https://github.com/psyborgvision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-2 hover:text-accent transition-colors"
                >
                  github.com/psyborgvision
                </a>
              </li>
            </ul>
          </div>

          {/* Response time */}
          <div>
            <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
              // response time
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              First replies typically within 48 hours, usually faster on
              weekdays. Operating from PST (UTC-8).
            </p>
            <p className="text-sm text-text-muted mt-3 leading-relaxed">
              If you haven&apos;t heard back in three business days, try DM-ing{" "}
              <a
                href="https://instagram.com/psyborgvision"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-dim transition-colors"
              >
                @psyborgvision
              </a>{" "}
              on Instagram.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const tips = [
  "What you're trying to build or fix",
  "A rough timeline (or \"no rush\")",
  "A budget range if you have one",
  "Links to anything you like — sites, products, references",
  "Anything you specifically don't want",
  "Whether you're local to SoCal (matters for 3D print pickup)",
];
