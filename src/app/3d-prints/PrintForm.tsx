"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function PrintForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      return;
    }

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-surface border border-border rounded-sm p-8 max-w-xl">
        <p className="font-mono text-xs text-accent mb-2">// submitted</p>
        <p className="text-text-2 leading-relaxed">
          Got it. I&apos;ll come back within 48 hours with a quote and any
          clarifying questions. Check your inbox — replies sometimes land in
          spam.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs text-text-dim">
          What are you trying to make? *
        </span>
        <textarea
          name="description"
          required
          rows={4}
          className="bg-surface-2 border border-border rounded-sm px-3 py-2.5 text-sm text-text placeholder:text-text-dim focus:outline-none focus:border-border-strong resize-none"
          placeholder="Describe your part, project, or idea. The more detail the better."
        />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-text-dim">Quantity</span>
          <input
            type="number"
            name="quantity"
            min={1}
            defaultValue={1}
            className="bg-surface-2 border border-border rounded-sm px-3 py-2.5 text-sm text-text focus:outline-none focus:border-border-strong"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-text-dim">
            Material preference
          </span>
          <select
            name="material"
            className="bg-surface-2 border border-border rounded-sm px-3 py-2.5 text-sm text-text focus:outline-none focus:border-border-strong"
          >
            <option value="not-sure">Not sure, recommend one</option>
            <option value="PLA">PLA</option>
            <option value="PETG">PETG</option>
            <option value="ABS">ABS</option>
            <option value="TPU">TPU</option>
            <option value="Resin">Resin</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-text-dim">Timeline</span>
          <select
            name="timeline"
            className="bg-surface-2 border border-border rounded-sm px-3 py-2.5 text-sm text-text focus:outline-none focus:border-border-strong"
          >
            <option value="no-rush">No rush</option>
            <option value="2-weeks">Within 2 weeks</option>
            <option value="1-week">Within 1 week</option>
            <option value="asap">ASAP</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-text-dim">
            Shipping preference
          </span>
          <select
            name="shipping"
            className="bg-surface-2 border border-border rounded-sm px-3 py-2.5 text-sm text-text focus:outline-none focus:border-border-strong"
          >
            <option value="ship">Ship to me</option>
            <option value="pickup">Local pickup</option>
            <option value="either">Either works</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs text-text-dim">
          Budget (optional)
        </span>
        <input
          type="text"
          name="budget"
          className="bg-surface-2 border border-border rounded-sm px-3 py-2.5 text-sm text-text placeholder:text-text-dim focus:outline-none focus:border-border-strong"
          placeholder="e.g. under $50, around $200"
        />
      </label>

      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-text-dim">
          Files (optional)
        </span>
        <p className="text-xs text-text-muted leading-relaxed">
          Have an STL, STEP, OBJ, or 3MF? Email them to{" "}
          <a
            href="mailto:hello@psyborgvision.com"
            className="text-accent hover:text-accent-dim transition-colors"
          >
            hello@psyborgvision.com
          </a>{" "}
          along with your name, or mention them in the description above.
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Try emailing hello@psyborgvision.com directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 bg-accent text-bg px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-accent-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-start"
      >
        {status === "submitting" ? "Sending…" : "Request a quote →"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs text-text-dim">
        {label} {required && "*"}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="bg-surface-2 border border-border rounded-sm px-3 py-2.5 text-sm text-text placeholder:text-text-dim focus:outline-none focus:border-border-strong"
      />
    </label>
  );
}
