"use client";

import { useState, useMemo } from "react";
import VehicleCard from "@/components/VehicleCard";
import { vehicles, vehicleTypes, locations, sortOptions, getFilteredVehicles } from "@/lib/data";

export default function VehiclesPage() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("recommended");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [instantBookOnly, setInstantBookOnly] = useState(false);

  const filteredVehicles = useMemo(() => {
    let results = getFilteredVehicles(
      selectedType,
      selectedLocation,
      priceRange[0],
      priceRange[1],
      sortBy
    );
    if (instantBookOnly) {
      results = results.filter((v) => v.instantBook);
    }
    return results;
  }, [selectedType, selectedLocation, sortBy, priceRange, instantBookOnly]);

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Browse vehicles
          </h1>
          <p className="mt-2 text-muted">
            {vehicles.length} cars available near Seattle
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="mb-8 lg:mb-0">
            <div className="sticky top-24 space-y-6 rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-foreground">Filters</h2>

              {/* Vehicle Type */}
              <div>
                <label className="text-sm font-medium text-foreground">Vehicle Type</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {vehicleTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setSelectedType(type.value)}
                      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                        selectedType === type.value
                          ? "bg-primary text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="text-sm font-medium text-foreground">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-foreground"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="text-sm font-medium text-foreground">
                  Daily Price: ${priceRange[0]} &ndash; ${priceRange[1]}
                </label>
                <input
                  type="range"
                  min={0}
                  max={300}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="mt-3 w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted">
                  <span>$0</span>
                  <span>$300+</span>
                </div>
              </div>

              {/* Instant Book */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">Instant Book only</label>
                <button
                  onClick={() => setInstantBookOnly(!instantBookOnly)}
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    instantBookOnly ? "bg-primary" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                      instantBookOnly ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  setSelectedType("all");
                  setSelectedLocation("All Locations");
                  setPriceRange([0, 300]);
                  setInstantBookOnly(false);
                  setSortBy("recommended");
                }}
                className="w-full rounded-lg border border-slate-300 py-2 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary"
              >
                Reset filters
              </button>
            </div>
          </aside>

          {/* Results */}
          <div>
            {/* Sort Bar */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted">
                <span className="font-semibold text-foreground">{filteredVehicles.length}</span>{" "}
                {filteredVehicles.length === 1 ? "car" : "cars"} found
              </p>
              <div className="flex items-center gap-2">
                <label className="text-sm text-muted">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-foreground"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Vehicle Grid */}
            {filteredVehicles.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" className="mx-auto">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <h3 className="mt-4 text-lg font-semibold text-foreground">No cars found</h3>
                <p className="mt-2 text-sm text-muted">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
