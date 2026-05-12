import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <p className="font-mono text-xs text-accent tracking-wide mb-3">
        // 404
      </p>
      <h1 className="text-3xl font-medium text-text mb-4 tracking-tight">
        Page not found.
      </h1>
      <p className="text-text-2 mb-10 max-w-md leading-relaxed">
        That URL didn&apos;t match anything here. It may have moved, or it may
        never have existed.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-accent-dim transition-colors"
        >
          ← Back home
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 border border-border text-text-2 px-5 py-2.5 text-sm font-medium rounded-sm hover:border-border-strong hover:text-text transition-colors"
        >
          See the work
        </Link>
      </div>
    </div>
  );
}
