import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "PsyborgVision — Code, Web & 3D Prints. SoCal.",
    template: "%s — PsyborgVision",
  },
  description:
    "One-person studio. Web design, custom apps, ongoing site care, and made-to-order 3D printing. Fawnskin, CA. Ships anywhere.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Left — brand */}
          <div className="flex flex-col gap-3">
            <Link href="/">
              <Image
                src="/logo-wordmark-dark.svg"
                alt="psyborgvision_"
                width={160}
                height={21}
              />
            </Link>
            <p className="text-sm text-text-muted">One-person studio. SoCal.</p>
            <a
              href="mailto:hello@psyborgvision.com"
              className="text-sm text-accent hover:text-accent-dim transition-colors"
            >
              hello@psyborgvision.com
            </a>
          </div>

          {/* Middle — sitemap */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-text-dim tracking-wide">
              // navigate
            </span>
            <ul className="flex flex-col gap-2 text-sm text-text-muted">
              {[
                ["/work", "Work"],
                ["/services", "Services"],
                ["/3d-prints", "3D Prints"],
                ["/about", "About"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-text transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — elsewhere */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-text-dim tracking-wide">
              // elsewhere
            </span>
            <ul className="flex flex-col gap-2 text-sm text-text-muted">
              <li>
                <a
                  href="https://instagram.com/psyborgvision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/psyborgvision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <span className="text-text-dim">LinkedIn —</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Status strip */}
        <div className="border-t border-border pt-6">
          <p className="font-mono text-xs text-text-dim">
            © psyborgvision · made in fawnskin, ca · status: open for work
          </p>
        </div>
      </div>
    </footer>
  );
}
