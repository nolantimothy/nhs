import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="orb orb-cyan -right-40 -top-40 h-96 w-96 opacity-30" />
        <div className="orb orb-purple -left-20 bottom-0 h-72 w-72 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Reimagining how
              <br />
              <span className="gradient-text">cities move</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              RevdCars is building the future of urban mobility. We believe that shared,
              electric transportation can make cities cleaner, communities stronger,
              and car ownership more accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="badge-glow rounded-full px-4 py-1.5 text-sm font-semibold">
                Our Mission
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                Sustainable mobility for everyone
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                We started RevdCars with a simple idea: most cars sit idle 95% of the time.
                What if we could unlock that potential? By connecting car owners with people
                who need a ride, we reduce the number of cars on the road, lower emissions,
                and build stronger communities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                Our platform prioritizes electric vehicles and sustainable transportation,
                making it easier and more affordable to drive electric — whether you own one or not.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80"
                alt="Electric vehicle charging"
                className="aspect-[3/4] rounded-2xl object-cover shadow-lg shadow-black/30 ring-1 ring-white/5"
              />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80"
                alt="Seattle cityscape"
                className="mt-8 aspect-[3/4] rounded-2xl object-cover shadow-lg shadow-black/30 ring-1 ring-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              What drives us
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Community First",
                description: "We're not just a platform — we're a community. Every decision we make starts with the question: does this make our community stronger?",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
              },
              {
                title: "Sustainability",
                description: "Climate action is at our core. We prioritize EVs, offset carbon from every gas-powered trip, and measure our environmental impact transparently.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M2 22L12 2l10 20H2z" />
                    <path d="M12 18v-6" />
                    <path d="M8 14l4-4 4 4" />
                  </svg>
                ),
              },
              {
                title: "Trust & Transparency",
                description: "No hidden fees, no surprises. We verify every user, insure every trip, and make our pricing completely transparent from the start.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div key={value.title} className="glass-card rounded-2xl p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="relative overflow-hidden bg-surface-light py-20">
        <div className="orb orb-cyan left-1/2 top-0 h-96 w-96 -translate-x-1/2 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Our impact so far
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Every shared ride makes a difference
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "50,000+", label: "Trips completed", detail: "And counting every day" },
              { value: "2,500+", label: "Active vehicles", detail: "Across the Pacific Northwest" },
              { value: "850 tons", label: "CO2 offset", detail: "Through shared EV trips" },
              { value: "15,000+", label: "Community members", detail: "Hosts and renters together" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold gradient-text-static">{stat.value}</div>
                <div className="mt-2 text-base font-semibold text-foreground">{stat.label}</div>
                <div className="mt-1 text-sm text-slate-500">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Meet the team
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Passionate about mobility, sustainability, and community
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Nolan Timothy", role: "Founder & CEO", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
              { name: "Sarah Chen", role: "Head of Product", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
              { name: "Marcus Johnson", role: "Head of Engineering", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
              { name: "Elena Rivera", role: "Head of Operations", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80" },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="mx-auto h-32 w-32 rounded-full object-cover shadow-lg shadow-black/30 ring-2 ring-white/10"
                />
                <h3 className="mt-4 font-semibold text-foreground">{person.name}</h3>
                <p className="text-sm text-slate-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-light py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Join the movement
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Be part of a community that&apos;s redefining how cities move.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/vehicles"
              className="btn-primary w-full rounded-xl px-8 py-3.5 text-sm text-center sm:w-auto"
            >
              <span>Start driving</span>
            </Link>
            <Link
              href="/host"
              className="btn-ghost w-full rounded-xl px-8 py-3.5 text-sm text-center sm:w-auto"
            >
              Start earning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
