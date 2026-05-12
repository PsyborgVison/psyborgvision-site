"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      return;
    }

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
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
      <div className="bg-surface border border-border rounded-sm p-8">
        <p className="font-mono text-xs text-accent mb-2">// sent</p>
        <p className="text-text-2 leading-relaxed">
          Got it. I&apos;ll be in touch within 48 hours, usually faster.
          Replies sometimes land in spam — if you don&apos;t hear back, check
          there before assuming it didn&apos;t go through.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs text-text-dim">
          What&apos;s this about? *
        </span>
        <select
          name="subject"
          required
          className="bg-surface-2 border border-border rounded-sm px-3 py-2.5 text-sm text-text focus:outline-none focus:border-border-strong"
        >
          <option value="">Select one</option>
          <option value="Website project">Website project</option>
          <option value="Web app project">Web app project</option>
          <option value="Site management / retainer">
            Site management / retainer
          </option>
          <option value="Custom 3D print">Custom 3D print</option>
          <option value="Catalog purchase question">
            Catalog purchase question
          </option>
          <option value="Collaboration / subcontract">
            Collaboration / subcontract
          </option>
          <option value="Something else">Something else</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs text-text-dim">
          Tell me about it *
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="bg-surface-2 border border-border rounded-sm px-3 py-2.5 text-sm text-text placeholder:text-text-dim focus:outline-none focus:border-border-strong resize-none"
          placeholder="What you have in mind, when you need it, links to examples or references, and a budget range if you have one. More detail = faster, more useful first reply."
        />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-text-dim">
            Budget (optional)
          </span>
          <select
            name="budget"
            className="bg-surface-2 border border-border rounded-sm px-3 py-2.5 text-sm text-text focus:outline-none focus:border-border-strong"
          >
            <option value="">Not sure / open</option>
            <option value="Under $1k">Under $1k</option>
            <option value="$1k–$5k">$1k–$5k</option>
            <option value="$5k–$15k">$5k–$15k</option>
            <option value="$15k+">$15k+</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs text-text-dim">
            Timeline (optional)
          </span>
          <select
            name="timeline"
            className="bg-surface-2 border border-border rounded-sm px-3 py-2.5 text-sm text-text focus:outline-none focus:border-border-strong"
          >
            <option value="Just exploring / no rush">
              Just exploring / no rush
            </option>
            <option value="1–3 months out">1–3 months out</option>
            <option value="Within a month">Within a month</option>
            <option value="ASAP">ASAP</option>
          </select>
        </label>
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
        {status === "submitting" ? "Sending…" : "Send →"}
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
