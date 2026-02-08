import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="orb orb-purple -right-20 -top-20 h-80 w-80 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            How RevdCars works
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Whether you&apos;re looking to rent a car or earn money sharing yours,
            we make the process simple, safe, and seamless.
          </p>
        </div>
      </section>

      {/* For Renters */}
      <section className="bg-surface-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="badge-glow rounded-full px-4 py-1.5 text-sm font-semibold">
              For Renters
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Find and book your perfect ride
            </h2>
          </div>

          <div className="mt-16 space-y-16">
            {[
              {
                step: "01",
                title: "Search and discover",
                description: "Browse hundreds of cars in your area. Use filters to narrow by vehicle type, price, features, and availability. Every vehicle is verified and every host is background-checked.",
                image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&q=80",
              },
              {
                step: "02",
                title: "Book with confidence",
                description: "Found the one? Book instantly or send a request. Our transparent pricing shows everything upfront — no hidden fees. Every trip includes $1M insurance, roadside assistance, and damage protection.",
                image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&q=80",
              },
              {
                step: "03",
                title: "Pick up and drive",
                description: "Meet the host at the agreed location or use contactless pickup with our smart lock integration. The car is inspected, fueled, and ready. Just grab the keys and go.",
                image: "https://images.unsplash.com/photo-1449965408869-ebd3fee7230f?w=600&q=80",
              },
              {
                step: "04",
                title: "Return and review",
                description: "Return the car at the end of your trip. Rate your experience and help the community. It's that simple — no paperwork, no lines, no hassle.",
                image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80",
              },
            ].map((item, i) => (
              <div key={item.step} className={`flex flex-col items-center gap-8 lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <div className="text-6xl font-bold text-primary/10">{item.step}</div>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-400">{item.description}</p>
                </div>
                <div className="flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg shadow-black/30 ring-1 ring-white/5"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Hosts */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="badge-electric rounded-full px-4 py-1.5 text-sm font-semibold">
              For Hosts
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Turn your car into income
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "List in minutes",
                description: "Add your car details, set your price, upload photos, and you're live. Our smart pricing tool helps you maximize earnings.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                ),
              },
              {
                title: "Accept bookings",
                description: "Enable Instant Book for hands-free rentals, or review and approve each request. You control who drives your car.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
              },
              {
                title: "Get paid weekly",
                description: "Earnings are deposited directly to your bank every week. Track income, trips, and reviews from your host dashboard.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="bg-surface-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Built on trust and safety
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Every trip is backed by comprehensive protection so you can focus on the drive.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "$1M Insurance", desc: "Liability coverage for every trip, included at no extra cost." },
              { title: "Verified Users", desc: "Every host and renter is identity-verified and background-checked." },
              { title: "24/7 Support", desc: "Our team is available around the clock for emergencies and questions." },
              { title: "Roadside Assistance", desc: "Flat tire, dead battery, lockout — we've got you covered anywhere." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Frequently asked questions
          </h2>

          <div className="mt-12 space-y-4">
            {[
              { q: "What insurance is included?", a: "Every trip includes $1M liability insurance, collision damage protection, and comprehensive theft coverage. You can also upgrade to our Premium Protection plan for zero-deductible coverage." },
              { q: "How do I get paid as a host?", a: "Earnings are deposited directly to your bank account every Tuesday. You can track all your earnings, pending payouts, and trip history from your host dashboard in real-time." },
              { q: "What if the car breaks down?", a: "Every trip includes 24/7 roadside assistance. Whether it's a flat tire, dead battery, or lockout, our partner network will get you back on the road quickly — at no cost to you." },
              { q: "Can I cancel a booking?", a: "Renters can cancel for free up to 24 hours before the trip starts. Hosts can set their own cancellation policies. Late cancellations may incur a fee to protect both parties." },
              { q: "What are the requirements to host?", a: "Your vehicle must be a 2015 model year or newer, have fewer than 130,000 miles, pass our safety inspection, and have a clean title. You must be at least 21 with a valid driver's license." },
              { q: "Is there a mileage limit?", a: "Each host sets their own mileage limit. Many offer unlimited mileage, while others set daily limits (typically 150-250 miles/day). Excess mileage fees are clearly shown before booking." },
            ].map((item) => (
              <details key={item.q} className="group glass-card rounded-xl">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold text-foreground">
                  {item.q}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="shrink-0 transition-transform group-open:rotate-180">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm leading-relaxed text-slate-400">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-light py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Join the RevdCars community today.
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
              Become a host
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
