"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0013.7 5H8.3a2 2 0 00-1.6.9L4 9.5 1.5 11.1A2 2 0 000 13v3c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Revd<span className="text-primary">Cars</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/vehicles"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-foreground"
            >
              Browse Cars
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="/host"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-foreground"
            >
              Become a Host
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-foreground"
            >
              About
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/dashboard"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-foreground"
            >
              Sign In
            </Link>
            <Link
              href="/host"
              className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
            >
              List Your Car
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-3">
            <Link href="/vehicles" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              Browse Cars
            </Link>
            <Link href="/how-it-works" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              How It Works
            </Link>
            <Link href="/host" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              Become a Host
            </Link>
            <Link href="/about" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/dashboard" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              Sign In
            </Link>
            <div className="pt-2">
              <Link href="/host" className="block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary-dark" onClick={() => setMobileOpen(false)}>
                List Your Car
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
