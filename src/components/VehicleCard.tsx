import Link from "next/link";
import type { Vehicle } from "@/lib/data";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link href={`/vehicles/${vehicle.id}`} className="group block">
      <div className="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={vehicle.image}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Badges */}
          <div className="absolute left-3 top-3 flex gap-2">
            {vehicle.instantBook && (
              <span className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-white shadow-lg">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Instant
              </span>
            )}
            {vehicle.fuelType === "electric" && (
              <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white shadow-lg">
                EV
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h3>
              <p className="mt-0.5 text-sm text-muted">{vehicle.location}</p>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="font-medium">{vehicle.rating}</span>
              <span className="text-muted">({vehicle.reviewCount})</span>
            </div>
          </div>

          {/* Features pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {vehicle.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
            <div className="flex items-center gap-2">
              <img
                src={vehicle.hostAvatar}
                alt={vehicle.hostName}
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="text-xs text-muted">{vehicle.hostName}</span>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-foreground">${vehicle.pricePerDay}</span>
              <span className="text-sm text-muted">/day</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
