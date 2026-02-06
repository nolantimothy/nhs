"use client";

import { useState } from "react";
import Link from "next/link";

const mockTrips = [
  { id: 1, car: "Tesla Model 3", dates: "Jan 15 - Jan 18", status: "completed", total: 267, host: "Sarah K." },
  { id: 2, car: "Rivian R1S", dates: "Feb 2 - Feb 5", status: "upcoming", total: 477, host: "Marcus T." },
  { id: 3, car: "Hyundai IONIQ 6", dates: "Dec 20 - Dec 23", status: "completed", total: 207, host: "Amy L." },
  { id: 4, car: "BMW i4 M50", dates: "Nov 10 - Nov 12", status: "completed", total: 258, host: "David L." },
];

const mockListings = [
  { id: 1, car: "Tesla Model Y", status: "active", trips: 23, earnings: 4560, rating: 4.9 },
  { id: 2, car: "Ford F-150 Lightning", status: "active", trips: 15, earnings: 2850, rating: 4.7 },
];

const mockEarnings = {
  thisMonth: 1240,
  lastMonth: 980,
  total: 12450,
  pendingPayout: 620,
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"renter" | "host">("renter");

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome back, Alex</h1>
              <p className="text-sm text-muted">Manage your trips, listings, and earnings</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 flex gap-1">
            <button
              onClick={() => setActiveTab("renter")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "renter"
                  ? "bg-primary text-white"
                  : "text-muted hover:bg-slate-100 hover:text-foreground"
              }`}
            >
              My Trips
            </button>
            <button
              onClick={() => setActiveTab("host")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "host"
                  ? "bg-primary text-white"
                  : "text-muted hover:bg-slate-100 hover:text-foreground"
              }`}
            >
              Host Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Renter Dashboard */}
        {activeTab === "renter" && (
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="grid gap-4 sm:grid-cols-3">
              <Link href="/vehicles" className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <h3 className="mt-3 font-semibold text-foreground">Browse Cars</h3>
                <p className="mt-1 text-sm text-muted">Find your next ride</p>
              </Link>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                <h3 className="mt-3 font-semibold text-foreground">Favorites</h3>
                <p className="mt-1 text-sm text-muted">3 saved vehicles</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                <h3 className="mt-3 font-semibold text-foreground">Messages</h3>
                <p className="mt-1 text-sm text-muted">2 unread messages</p>
              </div>
            </div>

            {/* Trips */}
            <div>
              <h2 className="text-xl font-bold text-foreground">Your trips</h2>
              <div className="mt-4 space-y-3">
                {mockTrips.map((trip) => (
                  <div key={trip.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-all hover:shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round">
                          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0013.7 5H8.3a2 2 0 00-1.6.9L4 9.5 1.5 11.1A2 2 0 000 13v3c0 .6.4 1 1 1h2" />
                          <circle cx="7" cy="17" r="2" />
                          <circle cx="17" cy="17" r="2" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{trip.car}</div>
                        <div className="text-sm text-muted">{trip.dates} &middot; {trip.host}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">${trip.total}</div>
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                        trip.status === "upcoming"
                          ? "bg-primary/10 text-primary"
                          : "bg-slate-100 text-slate-500"
                      }`}>
                        {trip.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Host Dashboard */}
        {activeTab === "host" && (
          <div className="space-y-8">
            {/* Earnings Overview */}
            <div className="grid gap-4 sm:grid-cols-4">
              {[
                { label: "This Month", value: `$${mockEarnings.thisMonth}`, change: "+26%" },
                { label: "Last Month", value: `$${mockEarnings.lastMonth}`, change: "" },
                { label: "Total Earnings", value: `$${mockEarnings.total.toLocaleString()}`, change: "" },
                { label: "Pending Payout", value: `$${mockEarnings.pendingPayout}`, change: "Next Tuesday" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-sm text-muted">{item.label}</div>
                  <div className="mt-1 text-2xl font-bold text-foreground">{item.value}</div>
                  {item.change && <div className="mt-1 text-xs text-primary">{item.change}</div>}
                </div>
              ))}
            </div>

            {/* Listings */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Your listings</h2>
                <Link href="/host" className="text-sm font-semibold text-primary hover:text-primary-dark">
                  + Add vehicle
                </Link>
              </div>
              <div className="mt-4 space-y-3">
                {mockListings.map((listing) => (
                  <div key={listing.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round">
                          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.6A2 2 0 0013.7 5H8.3a2 2 0 00-1.6.9L4 9.5 1.5 11.1A2 2 0 000 13v3c0 .6.4 1 1 1h2" />
                          <circle cx="7" cy="17" r="2" />
                          <circle cx="17" cy="17" r="2" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{listing.car}</div>
                        <div className="text-sm text-muted">
                          {listing.trips} trips &middot; {listing.rating} rating
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">${listing.earnings.toLocaleString()}</div>
                      <span className="inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
                        {listing.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-xl font-bold text-foreground">Recent activity</h2>
              <div className="mt-4 space-y-3">
                {[
                  { text: "New booking request for Tesla Model Y", time: "2 hours ago", type: "booking" },
                  { text: "Payout of $620 processed", time: "1 day ago", type: "payout" },
                  { text: "5-star review from Alex T.", time: "3 days ago", type: "review" },
                  { text: "Trip completed: Ford F-150 Lightning", time: "5 days ago", type: "trip" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      activity.type === "booking" ? "bg-blue-50 text-blue-500" :
                      activity.type === "payout" ? "bg-emerald-50 text-emerald-500" :
                      activity.type === "review" ? "bg-amber-50 text-amber-500" :
                      "bg-slate-100 text-slate-500"
                    }`}>
                      {activity.type === "booking" && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                        </svg>
                      )}
                      {activity.type === "payout" && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                        </svg>
                      )}
                      {activity.type === "review" && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      )}
                      {activity.type === "trip" && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">{activity.text}</div>
                      <div className="text-xs text-muted">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
