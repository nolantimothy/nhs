"use client";

import { use, useState } from "react";
import Link from "next/link";
import { getVehicleById, vehicles } from "@/lib/data";
import VehicleCard from "@/components/VehicleCard";

export default function VehicleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const vehicle = getVehicleById(id);
  const [selectedDays, setSelectedDays] = useState(3);

  if (!vehicle) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Vehicle not found</h1>
          <p className="mt-2 text-muted">The vehicle you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/vehicles" className="mt-4 inline-block text-sm font-semibold text-primary hover:text-primary-dark">
            Browse all vehicles
          </Link>
        </div>
      </div>
    );
  }

  const tripTotal = vehicle.pricePerDay * selectedDays;
  const serviceFee = Math.round(tripTotal * 0.1);
  const insuranceFee = selectedDays * 15;
  const total = tripTotal + serviceFee + insuranceFee;

  const similarVehicles = vehicles
    .filter((v) => v.id !== vehicle.id && v.type === vehicle.type)
    .slice(0, 3);

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/vehicles" className="hover:text-primary">Vehicles</Link>
            <span>/</span>
            <span className="text-foreground">{vehicle.year} {vehicle.make} {vehicle.model}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-10">
          {/* Left Column */}
          <div>
            {/* Hero Image */}
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={vehicle.image}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            {/* Title & Meta */}
            <div className="mt-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h1>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted">
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {vehicle.location}
                    </span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      {vehicle.rating} ({vehicle.reviewCount} reviews)
                    </span>
                    <span>&middot;</span>
                    <span>{vehicle.reviewCount}+ trips</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {vehicle.instantBook && (
                    <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                      Instant Book
                    </span>
                  )}
                  {vehicle.fuelType === "electric" && (
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                      100% Electric
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-foreground">About this vehicle</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{vehicle.description}</p>
            </div>

            {/* Specs Grid */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-foreground">Specifications</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  {
                    label: "Fuel Type",
                    value: vehicle.fuelType.charAt(0).toUpperCase() + vehicle.fuelType.slice(1),
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    ),
                  },
                  {
                    label: "Transmission",
                    value: vehicle.transmission.charAt(0).toUpperCase() + vehicle.transmission.slice(1),
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <circle cx="12" cy="12" r="2" />
                        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                      </svg>
                    ),
                  },
                  {
                    label: "Seats",
                    value: `${vehicle.seats} seats`,
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                        <path d="M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    ),
                  },
                  {
                    label: "Mileage",
                    value: vehicle.mileageLimit,
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    ),
                  },
                ].map((spec) => (
                  <div key={spec.label} className="rounded-xl border border-slate-200 p-4 text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-muted">
                      {spec.icon}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-foreground">{spec.value}</div>
                    <div className="text-xs text-muted">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-foreground">Features</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {vehicle.features.map((feature) => (
                  <span
                    key={feature}
                    className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Host */}
            <div className="mt-8 rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-foreground">Hosted by</h2>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={vehicle.hostAvatar}
                  alt={vehicle.hostName}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <div className="text-lg font-semibold text-foreground">{vehicle.hostName}</div>
                  <div className="text-sm text-muted">
                    {vehicle.hostTrips} trips &middot; Joined {vehicle.hostJoined}
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="text-sm font-medium">{vehicle.rating}</span>
                    <span className="text-sm text-muted">rating</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">All-Star Host</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Fast Responder</span>
              </div>
            </div>

            {/* Guidelines */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-foreground">Trip guidelines</h2>
              <div className="mt-4 space-y-3">
                {[
                  { rule: "Mileage limit", detail: vehicle.mileageLimit + " included" },
                  { rule: "Fuel policy", detail: vehicle.fuelType === "electric" ? "Return with at least 20% charge" : "Return with same fuel level" },
                  { rule: "Cleanliness", detail: "Return the car in the same condition" },
                  { rule: "No smoking", detail: "Smoking is not allowed in the vehicle" },
                  { rule: "Pet policy", detail: "Pets allowed with prior approval" },
                ].map((item) => (
                  <div key={item.rule} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" className="mt-0.5 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <span className="text-sm font-medium text-foreground">{item.rule}:</span>{" "}
                      <span className="text-sm text-muted">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Booking Widget */}
          <div className="mt-8 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">${vehicle.pricePerDay}</span>
                  <span className="text-muted">/day</span>
                </div>

                {/* Date Inputs */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-muted">TRIP START</label>
                    <input
                      type="date"
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted">TRIP END</label>
                    <input
                      type="date"
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm"
                    />
                  </div>
                </div>

                {/* Trip Duration */}
                <div className="mt-4">
                  <label className="text-xs font-medium text-muted">TRIP DURATION</label>
                  <div className="mt-1 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedDays(Math.max(1, selectedDays - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 text-sm hover:bg-slate-50"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">{selectedDays} {selectedDays === 1 ? "day" : "days"}</span>
                    <button
                      onClick={() => setSelectedDays(selectedDays + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 text-sm hover:bg-slate-50"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="mt-6 space-y-3 border-t border-slate-100 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">${vehicle.pricePerDay} x {selectedDays} days</span>
                    <span className="text-foreground">${tripTotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Service fee</span>
                    <span className="text-foreground">${serviceFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Insurance</span>
                    <span className="text-foreground">${insuranceFee}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-100 pt-3 text-base font-semibold">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>

                {/* Book Button */}
                <button className="mt-6 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25">
                  {vehicle.instantBook ? "Book instantly" : "Request to book"}
                </button>

                <p className="mt-3 text-center text-xs text-muted">
                  {vehicle.instantBook
                    ? "Instant confirmation. Free cancellation up to 24h before."
                    : "The host will respond within 1 hour. Free cancellation up to 24h before."}
                </p>
              </div>

              {/* Protection Plan */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-foreground">Protection included</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "$1M liability insurance",
                    "24/7 roadside assistance",
                    "Damage protection plan",
                    "Theft coverage",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Vehicles */}
        {similarVehicles.length > 0 && (
          <div className="mt-16 border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Similar vehicles
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similarVehicles.map((v) => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
