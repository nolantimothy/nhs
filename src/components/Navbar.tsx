"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-electric transition-transform group-hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-electric opacity-50 blur-lg transition-opacity group-hover:opacity-80" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-foreground">Revd</span><span className="gradient-text-static">Cars</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {[
              { href: "/vehicles", label: "Browse Cars" },
              { href: "/how-it-works", label: "How It Works" },
              { href: "/host", label: "Become a Host" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:bg-white/5 hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/dashboard" className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-foreground">
              Sign In
            </Link>
            <Link href="/host" className="btn-primary px-5 py-2 text-sm">
              <span>List Your Car</span>
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/5 md:hidden" aria-label="Toggle menu">
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="glass border-t border-white/5 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {[
              { href: "/vehicles", label: "Browse Cars" },
              { href: "/how-it-works", label: "How It Works" },
              { href: "/host", label: "Become a Host" },
              { href: "/about", label: "About" },
              { href: "/dashboard", label: "Sign In" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-foreground" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/host" className="btn-primary block px-4 py-2.5 text-center text-sm" onClick={() => setMobileOpen(false)}>
                <span>List Your Car</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
