import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-surface">
      <div className="orb orb-cyan -left-40 -top-40 h-80 w-80 opacity-30" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-electric">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-foreground">Revd</span><span className="gradient-text-static">Cars</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Seattle&apos;s premier peer-to-peer car sharing platform. Secure, sustainable, and community-driven.
            </p>
          </div>
          {[
            { title: "Explore", links: [{ href: "/vehicles", label: "Browse Cars" }, { href: "/how-it-works", label: "How It Works" }, { href: "/host", label: "Become a Host" }, { href: "/about", label: "About Us" }] },
            { title: "Community", links: [{ href: "#", label: "Trust & Safety" }, { href: "#", label: "Insurance" }, { href: "#", label: "Host Resources" }, { href: "#", label: "Guidelines" }] },
            { title: "Support", links: [{ href: "#", label: "Help Center" }, { href: "#", label: "Contact Us" }, { href: "#", label: "Cancellation" }, { href: "#", label: "Report Issue" }] },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}><Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-primary-light">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="section-divider mt-12" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} RevdCars. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-xs text-slate-600 transition-colors hover:text-slate-400">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
