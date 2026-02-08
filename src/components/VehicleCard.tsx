import Link from "next/link";
import type { Vehicle } from "@/lib/data";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link href={`/vehicles/${vehicle.id}`} className="group block">
      <div className="glass-card glow-border overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={vehicle.image} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute left-3 top-3 flex gap-2">
            {vehicle.instantBook && (
              <span className="badge-glow flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur-md">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                Instant
              </span>
            )}
            {vehicle.fuelType === "electric" && (
              <span className="badge-electric flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur-md">EV</span>
            )}
          </div>
          <div className="absolute bottom-3 right-3">
            <div className="rounded-xl bg-black/50 px-3 py-1.5 backdrop-blur-md">
              <span className="text-lg font-bold text-white">${vehicle.pricePerDay}</span>
              <span className="text-xs text-slate-300">/day</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary-light">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
            <div className="flex items-center gap-1 text-sm">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <span className="font-medium text-foreground">{vehicle.rating}</span>
              <span className="text-slate-500">({vehicle.reviewCount})</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-slate-500">{vehicle.location}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {vehicle.features.slice(0, 3).map((feature) => (
              <span key={feature} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-slate-400">{feature}</span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-3">
            <img src={vehicle.hostAvatar} alt={vehicle.hostName} className="h-6 w-6 rounded-full object-cover ring-1 ring-white/10" />
            <span className="text-xs text-slate-500">{vehicle.hostName}</span>
            <span className="ml-auto text-xs text-slate-600">{vehicle.hostTrips} trips</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
