"use client";

import { useState } from "react";
import Link from "next/link";

export default function HostPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    type: "sedan",
    transmission: "automatic",
    fuelType: "electric",
    seats: "5",
    pricePerDay: "",
    location: "",
    description: "",
    mileageLimit: "unlimited",
    instantBook: true,
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449965408869-ebd3fee7230f?w=1920&q=80"
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Start earning with your car
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              List your vehicle and earn an average of $800/month. You set the price, availability, and rules.
              We handle insurance, payments, and 24/7 support.
            </p>
            <div className="mt-8 flex items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                $1M insurance
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                Weekly payouts
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Free to list
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1fr_400px] lg:gap-16">
          {/* Form */}
          <div>
            {/* Progress Steps */}
            <div className="mb-10 flex items-center gap-4">
              {[
                { num: 1, label: "Vehicle Details" },
                { num: 2, label: "Pricing & Rules" },
                { num: 3, label: "Review & Submit" },
              ].map((s, i) => (
                <div key={s.num} className="flex items-center gap-4">
                  <button
                    onClick={() => setStep(s.num)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      step >= s.num
                        ? "bg-primary text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {step > s.num ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      s.num
                    )}
                  </button>
                  <span className={`hidden text-sm font-medium sm:block ${step >= s.num ? "text-foreground" : "text-muted"}`}>
                    {s.label}
                  </span>
                  {i < 2 && <div className={`h-px w-8 ${step > s.num ? "bg-primary" : "bg-slate-200"}`} />}
                </div>
              ))}
            </div>

            {/* Step 1: Vehicle Details */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Tell us about your vehicle</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-foreground">Make</label>
                    <input
                      type="text"
                      placeholder="e.g. Tesla"
                      value={formData.make}
                      onChange={(e) => updateField("make", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Model</label>
                    <input
                      type="text"
                      placeholder="e.g. Model 3"
                      value={formData.model}
                      onChange={(e) => updateField("model", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Year</label>
                    <input
                      type="number"
                      placeholder="e.g. 2024"
                      value={formData.year}
                      onChange={(e) => updateField("year", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Vehicle Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => updateField("type", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                    >
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="truck">Truck</option>
                      <option value="coupe">Coupe</option>
                      <option value="convertible">Convertible</option>
                      <option value="van">Van</option>
                      <option value="electric">Electric</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Fuel Type</label>
                    <select
                      value={formData.fuelType}
                      onChange={(e) => updateField("fuelType", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                    >
                      <option value="electric">Electric</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="gasoline">Gasoline</option>
                      <option value="diesel">Diesel</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Transmission</label>
                    <select
                      value={formData.transmission}
                      onChange={(e) => updateField("transmission", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                    >
                      <option value="automatic">Automatic</option>
                      <option value="manual">Manual</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Number of Seats</label>
                    <input
                      type="number"
                      value={formData.seats}
                      onChange={(e) => updateField("seats", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Pickup Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Capitol Hill, Seattle"
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Tell renters what makes your car special..."
                    value={formData.description}
                    onChange={(e) => updateField("description", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Vehicle Photos</label>
                  <div className="mt-1 flex items-center justify-center rounded-xl border-2 border-dashed border-slate-300 py-12 transition-colors hover:border-primary">
                    <div className="text-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" className="mx-auto">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <p className="mt-2 text-sm text-muted">Drag photos here or click to upload</p>
                      <p className="mt-1 text-xs text-slate-400">PNG, JPG up to 10MB each</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark sm:w-auto sm:px-8"
                >
                  Continue to Pricing
                </button>
              </div>
            )}

            {/* Step 2: Pricing & Rules */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Set your pricing & rules</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-foreground">Daily Price ($)</label>
                    <input
                      type="number"
                      placeholder="e.g. 89"
                      value={formData.pricePerDay}
                      onChange={(e) => updateField("pricePerDay", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                    />
                    <p className="mt-1 text-xs text-muted">Similar cars in your area earn $75-$120/day</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Mileage Limit</label>
                    <select
                      value={formData.mileageLimit}
                      onChange={(e) => updateField("mileageLimit", e.target.value)}
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm"
                    >
                      <option value="unlimited">Unlimited</option>
                      <option value="100">100 miles/day</option>
                      <option value="150">150 miles/day</option>
                      <option value="200">200 miles/day</option>
                      <option value="250">250 miles/day</option>
                    </select>
                  </div>
                </div>

                {/* Instant Book Toggle */}
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                        <span className="text-sm font-semibold text-foreground">Instant Book</span>
                      </div>
                      <p className="mt-1 text-xs text-muted">Allow renters to book instantly without approval</p>
                    </div>
                    <button
                      onClick={() => updateField("instantBook", !formData.instantBook)}
                      className={`relative h-6 w-11 rounded-full transition-colors ${
                        formData.instantBook ? "bg-primary" : "bg-slate-300"
                      }`}
                    >
                      <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                        formData.instantBook ? "translate-x-5" : ""
                      }`} />
                    </button>
                  </div>
                </div>

                {/* Earnings Estimate */}
                <div className="rounded-xl bg-primary/5 p-6">
                  <h3 className="font-semibold text-foreground">Estimated earnings</h3>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">${formData.pricePerDay ? Math.round(Number(formData.pricePerDay) * 10 * 0.85) : "---"}</div>
                      <div className="mt-1 text-xs text-muted">10 days/month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">${formData.pricePerDay ? Math.round(Number(formData.pricePerDay) * 15 * 0.85) : "---"}</div>
                      <div className="mt-1 text-xs text-muted">15 days/month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">${formData.pricePerDay ? Math.round(Number(formData.pricePerDay) * 20 * 0.85) : "---"}</div>
                      <div className="mt-1 text-xs text-muted">20 days/month</div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-muted">Estimated after 15% platform fee. Actual earnings may vary.</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
                  >
                    Continue to Review
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Review your listing</h2>
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">
                    {formData.year} {formData.make} {formData.model}
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div><span className="text-muted">Type:</span> <span className="font-medium">{formData.type}</span></div>
                    <div><span className="text-muted">Fuel:</span> <span className="font-medium">{formData.fuelType}</span></div>
                    <div><span className="text-muted">Transmission:</span> <span className="font-medium">{formData.transmission}</span></div>
                    <div><span className="text-muted">Seats:</span> <span className="font-medium">{formData.seats}</span></div>
                    <div><span className="text-muted">Location:</span> <span className="font-medium">{formData.location || "Not set"}</span></div>
                    <div><span className="text-muted">Mileage:</span> <span className="font-medium">{formData.mileageLimit}</span></div>
                    <div><span className="text-muted">Price:</span> <span className="font-medium">${formData.pricePerDay || "0"}/day</span></div>
                    <div><span className="text-muted">Instant Book:</span> <span className="font-medium">{formData.instantBook ? "Yes" : "No"}</span></div>
                  </div>
                  {formData.description && (
                    <div className="mt-4 border-t border-slate-100 pt-4">
                      <span className="text-sm text-muted">Description:</span>
                      <p className="mt-1 text-sm">{formData.description}</p>
                    </div>
                  )}
                </div>

                <div className="rounded-xl bg-emerald-50 p-4">
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" className="mt-0.5 shrink-0">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-emerald-800">You&apos;re covered</p>
                      <p className="mt-1 text-xs text-emerald-700">$1M liability insurance, damage protection, and 24/7 roadside assistance are included at no cost to you.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25">
                    Submit Listing
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Why Host */}
          <aside className="mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-foreground">Why host on RevdCars?</h3>
                <div className="mt-4 space-y-4">
                  {[
                    { title: "Top earnings", desc: "Hosts earn an average of $800/month with competitive pricing tools." },
                    { title: "Full protection", desc: "$1M insurance policy, damage coverage, and 24/7 roadside assistance." },
                    { title: "You're in control", desc: "Set your own price, availability, and trip rules. Accept or decline any request." },
                    { title: "Easy payouts", desc: "Get paid via direct deposit every week. Track earnings in real-time." },
                    { title: "Dedicated support", desc: "24/7 host support team ready to help with any issue." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" className="mt-0.5 shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{item.title}</div>
                        <div className="text-xs text-muted">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-foreground">Need help?</h3>
                <p className="mt-2 text-xs text-muted">Our team can help you create the perfect listing. Call us or chat anytime.</p>
                <Link href="/how-it-works" className="mt-3 inline-block text-sm font-semibold text-primary hover:text-primary-dark">
                  Learn how hosting works
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
