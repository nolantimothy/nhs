import Link from "next/link";
import { vehicles, testimonials } from "@/lib/data";
import VehicleCard from "@/components/VehicleCard";

export default function Home() {
  const featuredVehicles = vehicles.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-light backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-light animate-pulse" />
                Seattle&apos;s #1 Car Sharing Platform
              </span>
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Share the ride.
              <br />
              <span className="gradient-text">Own the experience.</span>
            </h1>

            <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Rent premium vehicles from trusted local owners, or earn by sharing yours.
              Peer-to-peer car sharing that&apos;s secure, sustainable, and community-driven.
            </p>

            {/* Search Bar */}
            <div className="animate-fade-in-up animation-delay-300 mt-10">
              <div className="flex flex-col gap-3 rounded-2xl bg-white/5 p-2 backdrop-blur-md border border-white/10 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-3 glass-input rounded-xl px-4 py-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <input
                    type="text"
                    placeholder="City, airport, or address"
                    className="w-full border-0 bg-transparent text-sm text-foreground placeholder:text-slate-500 focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="flex flex-1 items-center gap-3 glass-input rounded-xl px-4 py-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Pick-up date"
                    className="w-full border-0 bg-transparent text-sm text-foreground placeholder:text-slate-500 focus:ring-0 focus:outline-none"
                  />
                </div>
                <Link
                  href="/vehicles"
                  className="btn-primary flex items-center justify-center gap-2 rounded-xl px-8 py-3 text-sm"
                >
                  <span className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    Search
                  </span>
                </Link>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-in-up animation-delay-400 mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                $1M insurance included
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Instant booking
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                24/7 roadside assistance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-white/5 bg-surface-light">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { value: "2,500+", label: "Active Vehicles" },
            { value: "50,000+", label: "Happy Renters" },
            { value: "4.9", label: "Average Rating" },
            { value: "$2.5M+", label: "Earned by Hosts" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold gradient-text-static sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Get on the road in three simple steps
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Find your car",
                description: "Browse hundreds of vehicles near you. Filter by type, price, features, and availability. Every car is verified and inspected.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Book instantly",
                description: "Reserve in seconds with Instant Book, or send a request to the host. Flexible cancellation and transparent pricing, always.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <polyline points="9 16 11 18 15 14" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Hit the road",
                description: "Pick up from the host or use contactless unlock. Drive with confidence — insurance, roadside assistance, and support included.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0013.7 5H8.3a2 2 0 00-1.6.9L4 9.5 1.5 11.1A2 2 0 000 13v3c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative glass-card rounded-2xl p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </div>
                <div className="absolute right-6 top-6 text-5xl font-bold text-white/5 transition-colors group-hover:text-primary/10">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="bg-surface-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured vehicles
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Hand-picked premium rides from top-rated hosts
              </p>
            </div>
            <Link
              href="/vehicles"
              className="hidden items-center gap-2 text-sm font-semibold text-primary-light transition-colors hover:text-primary sm:flex"
            >
              View all cars
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/vehicles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light"
            >
              View all cars
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Become a Host CTA */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/5">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80"
                alt=""
                className="h-full w-full object-cover opacity-15"
              />
              <div className="absolute inset-0 mesh-gradient" />
            </div>

            <div className="relative grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Turn your car into a revenue stream
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-400">
                  Earn an average of $800/month by sharing your car when you&apos;re not using it.
                  You set the price, the schedule, and the rules. We handle the rest.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/host"
                    className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm"
                  >
                    <span className="flex items-center gap-2">
                      Start earning
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="btn-ghost inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "$800", label: "Avg monthly earnings" },
                    { value: "$1M", label: "Insurance coverage" },
                    { value: "24/7", label: "Dedicated support" },
                    { value: "3 min", label: "To list your car" },
                  ].map((item) => (
                    <div key={item.label} className="glass-card rounded-xl p-5">
                      <div className="text-2xl font-bold text-foreground">{item.value}</div>
                      <div className="mt-1 text-sm text-slate-500">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Loved by our community
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Hear from hosts and renters who are part of the RevdCars family
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="glass-card card-hover rounded-2xl p-6"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
                  />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-slate-500">
                      {t.role === "host" ? "Host" : "Renter"} &middot; {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Join thousands of people sharing rides across Seattle and the Pacific Northwest.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/vehicles"
              className="btn-primary w-full rounded-xl px-8 py-3.5 text-sm text-center sm:w-auto"
            >
              <span>Browse cars</span>
            </Link>
            <Link
              href="/host"
              className="btn-ghost w-full rounded-xl px-8 py-3.5 text-sm text-center sm:w-auto"
            >
              List your car
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
