import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0013.7 5H8.3a2 2 0 00-1.6.9L4 9.5 1.5 11.1A2 2 0 000 13v3c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">
                Revd<span className="text-primary">Cars</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Seattle&apos;s premier peer-to-peer car sharing platform. Secure, sustainable, and community-driven.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/vehicles" className="text-sm text-muted transition-colors hover:text-primary">Browse Cars</Link></li>
              <li><Link href="/how-it-works" className="text-sm text-muted transition-colors hover:text-primary">How It Works</Link></li>
              <li><Link href="/host" className="text-sm text-muted transition-colors hover:text-primary">Become a Host</Link></li>
              <li><Link href="/about" className="text-sm text-muted transition-colors hover:text-primary">About Us</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Community
            </h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-sm text-muted transition-colors hover:text-primary">Trust & Safety</a></li>
              <li><a href="#" className="text-sm text-muted transition-colors hover:text-primary">Insurance</a></li>
              <li><a href="#" className="text-sm text-muted transition-colors hover:text-primary">Host Resources</a></li>
              <li><a href="#" className="text-sm text-muted transition-colors hover:text-primary">Community Guidelines</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-sm text-muted transition-colors hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-sm text-muted transition-colors hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="text-sm text-muted transition-colors hover:text-primary">Cancellation Policy</a></li>
              <li><a href="#" className="text-sm text-muted transition-colors hover:text-primary">Report an Issue</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} RevdCars. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted transition-colors hover:text-primary">Privacy</a>
            <a href="#" className="text-xs text-muted transition-colors hover:text-primary">Terms</a>
            <a href="#" className="text-xs text-muted transition-colors hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
