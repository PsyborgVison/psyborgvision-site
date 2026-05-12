import type { Metadata } from "next";
import Link from "next/link";
import PrintForm from "./PrintForm";

export const metadata: Metadata = {
  title: "3D Prints",
  description:
    "Custom 3D prints from your file or mine. Ships from Big Bear, CA. Local pickup available.",
};

export default function PrintsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <p className="font-mono text-xs text-accent tracking-wide mb-3">
        // 3d printing
      </p>
      <h1 className="text-3xl font-medium text-text mb-4 tracking-tight">
        Made-to-order, or
        <br />
        ready-to-ship.
      </h1>
      <p className="text-text-2 mb-10 max-w-2xl leading-relaxed">
        Custom 3D prints from your file or mine. Plus a small catalog of
        pre-designed pieces. Ships from Big Bear, CA. Local pickup for Inland
        Empire / Big Bear customers.
      </p>
      <div className="flex flex-wrap gap-4 mb-20">
        <a
          href="#catalog"
          className="inline-flex items-center gap-2 border border-border text-text-2 px-5 py-2.5 text-sm font-medium rounded-sm hover:border-border-strong hover:text-text transition-colors"
        >
          ▸ Browse the catalog
        </a>
        <a
          href="#custom"
          className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-accent-dim transition-colors"
        >
          ▸ Request a custom print
        </a>
      </div>

      {/* Catalog */}
      <section id="catalog" className="border-t border-border pt-14 mb-20 scroll-mt-20">
        <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
          // catalog
        </p>
        <h2 className="text-2xl font-medium text-text mb-8">Ready to ship.</h2>
        <div className="bg-surface border border-border rounded-sm p-8 max-w-xl">
          <p className="font-mono text-xs text-text-dim mb-2">
            // catalog status
          </p>
          <p className="text-text-muted text-sm leading-relaxed">
            Catalog&apos;s small right now and growing. Custom orders open
            below.
          </p>
          <a
            href="#custom"
            className="inline-block mt-4 text-sm text-accent hover:text-accent-dim transition-colors font-mono"
          >
            Request a custom print →
          </a>
        </div>
      </section>

      {/* Custom orders */}
      <section id="custom" className="border-t border-border pt-14 mb-20 scroll-mt-20">
        <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
          // custom
        </p>
        <h2 className="text-2xl font-medium text-text mb-4">
          Need something specific?
        </h2>
        <p className="text-text-2 mb-10 max-w-xl leading-relaxed">
          Send what you have — a description, sketches, photos, an STL, or a
          STEP file. I&apos;ll come back within 48 hours with a quote covering
          material, print time, finishing, and shipping.
        </p>
        <PrintForm />
      </section>

      {/* Capabilities */}
      <section className="border-t border-border pt-14 mb-20">
        <p className="font-mono text-xs text-text-dim tracking-wide mb-6">
          // capabilities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-mono text-xs text-text-muted mb-4 tracking-wide uppercase">
              Printers
            </h3>
            <dl className="space-y-2 text-sm">
              {printers.map(({ name, spec }) => (
                <div key={name} className="flex justify-between gap-4">
                  <dt className="text-text-2 font-mono">{name}</dt>
                  <dd className="text-text-dim text-right">{spec}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="font-mono text-xs text-text-muted mb-4 tracking-wide uppercase">
              Materials
            </h3>
            <dl className="space-y-2 text-sm">
              {materials.map(({ name, desc }) => (
                <div key={name} className="flex gap-3">
                  <dt className="text-accent font-mono w-12 flex-shrink-0">
                    {name}
                  </dt>
                  <dd className="text-text-dim">{desc}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <h3 className="font-mono text-xs text-text-muted mb-3 tracking-wide uppercase">
                Finishing
              </h3>
              <ul className="text-sm text-text-dim space-y-1">
                {["Sanding (standard on most orders)", "Priming and painting", "Acetone smoothing (ABS only)", "Custom color match on request"].map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-accent">·</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 p-4 bg-surface border border-border rounded-sm max-w-xl">
          <p className="font-mono text-xs text-text-dim mb-2">
            // what i can&apos;t do (yet)
          </p>
          <ul className="text-sm text-text-muted space-y-1">
            {["Metal printing", "Food-safe parts (use a dedicated food-safe service)", "FDA / medical-grade parts", "Large runs have longer lead times — ask before committing"].map((item) => (
              <li key={item} className="flex gap-2">
                <span>·</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border pt-14 mb-20">
        <p className="font-mono text-xs text-text-dim tracking-wide mb-6">
          // process
        </p>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {printProcess.map(({ step, title, desc }) => (
            <li key={step} className="flex flex-col gap-2">
              <span className="font-mono text-xs text-accent">step {step}</span>
              <h3 className="text-sm font-medium text-text">{title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Shipping */}
      <section className="border-t border-border pt-14 mb-20">
        <p className="font-mono text-xs text-text-dim tracking-wide mb-3">
          // shipping
        </p>
        <p className="font-mono text-xs text-text-muted mb-6">
          SHIPS FROM: Fawnskin, CA · 92333
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
          <div>
            <h3 className="font-mono text-xs text-text-muted mb-3 tracking-wide uppercase">
              US Shipping
            </h3>
            <dl className="space-y-2">
              {shipping.map(({ method, price, eta }) => (
                <div key={method} className="flex justify-between gap-4">
                  <dt className="text-text-2">{method}</dt>
                  <dd className="text-text-dim text-right">
                    {price} · {eta}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="font-mono text-xs text-text-muted mb-3 tracking-wide uppercase">
              Turnaround
            </h3>
            <dl className="space-y-2">
              {turnaround.map(({ type, time }) => (
                <div key={type} className="flex justify-between gap-4">
                  <dt className="text-text-2">{type}</dt>
                  <dd className="text-text-dim text-right">{time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 text-text-dim">
              <p>
                <span className="text-text-muted">Defects:</span> Free reprint
                within 14 days. Just send a photo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-border pt-14">
        <h2 className="text-2xl font-medium text-text mb-4">
          Got an STL waiting on you?
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#custom"
            className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-accent-dim transition-colors"
          >
            Request a quote
          </a>
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

const printers = [
  { name: "Snapmaker U1", spec: "270×270×270mm · 0.08–0.24mm" },
  { name: "AD5M Pro", spec: "220×220×220mm · 0.1–0.4mm" },
  { name: "AD5X", spec: "220×220×220mm · 0.1–0.4mm" },
  { name: "Entina Tina2", spec: "100×120×100mm · 0.1–0.4mm" },
];

const materials = [
  { name: "PLA", desc: "Standard. Good for decorative work, prototyping." },
  { name: "PETG", desc: "Stronger, durable. Outdoor-friendly, slightly flexible." },
  { name: "ABS", desc: "High strength, heat-resistant. For functional parts." },
  { name: "TPU", desc: "Flexible. For grips, gaskets, anything that bends." },
  { name: "Resin", desc: "High-detail. For miniatures, jewelry. Ask first." },
];

const printProcess = [
  { step: "01", title: "Submit your job", desc: "Form above, or email hello@psyborgvision.com with files attached." },
  { step: "02", title: "Quote within 48hrs", desc: "Material, print time, finish, shipping — line-itemed. No surprise charges." },
  { step: "03", title: "Approve and pay", desc: "Half down for jobs over $500. Smaller jobs paid up front. Stripe." },
  { step: "04", title: "Print and finish", desc: "Most jobs print within 3–7 days. Bigger jobs longer. Status updates along the way." },
  { step: "05", title: "Ship or pickup", desc: "Tracked shipping anywhere in the US. Local pickup in Big Bear by appointment." },
];

const shipping = [
  { method: "USPS Ground Advantage", price: "$8–$15", eta: "3–6 days" },
  { method: "USPS Priority", price: "$10–$18", eta: "2–3 days" },
  { method: "UPS Ground", price: "$12–$22", eta: "3–5 days" },
  { method: "Local pickup", price: "Free", eta: "Big Bear, by appt." },
  { method: "Local delivery", price: "Free (orders $250+)", eta: "Big Bear area" },
];

const turnaround = [
  { type: "Catalog items", time: "Ships within 2 business days" },
  { type: "Custom (small)", time: "5–10 days from approval" },
  { type: "Custom (large)", time: "2–4 weeks from approval" },
];
