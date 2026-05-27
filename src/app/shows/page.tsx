"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

interface Show {
  date: string;
  venue: string;
  city: string;
  country: string;
  ticketUrl?: string;
  past: boolean;
}

const shows: Show[] = [
  {
    date: "14 JUN 2026",
    venue: "Tidal Rave Festival",
    city: "Accra",
    country: "Ghana",
    ticketUrl: "#",
    past: false,
  },
  {
    date: "28 JUN 2026",
    venue: "Afro Nation",
    city: "Portimão",
    country: "Portugal",
    ticketUrl: "#",
    past: false,
  },
  {
    date: "12 JUL 2026",
    venue: "The Jazz Cafe",
    city: "London",
    country: "UK",
    ticketUrl: "#",
    past: false,
  },
  {
    date: "02 AUG 2026",
    venue: "New Africa Festival",
    city: "Berlin",
    country: "Germany",
    ticketUrl: "#",
    past: false,
  },
  {
    date: "15 MAR 2026",
    venue: "La Palm Royal Beach",
    city: "Accra",
    country: "Ghana",
    ticketUrl: "#",
    past: true,
  },
  {
    date: "08 FEB 2026",
    venue: "Alliance Française",
    city: "Lagos",
    country: "Nigeria",
    past: true,
  },
  {
    date: "22 DEC 2025",
    venue: "Independence Square",
    city: "Accra",
    country: "Ghana",
    past: true,
  },
  {
    date: "10 NOV 2025",
    venue: "The Bassment",
    city: "Nairobi",
    country: "Kenya",
    past: true,
  },
];

export default function ShowsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  useScrollReveal();

  const upcoming = shows.filter((s) => !s.past);
  const past = shows.filter((s) => s.past);

  const filtered =
    filter === "all" ? shows : filter === "upcoming" ? upcoming : past;

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-16 lg:pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Header */}
        <div data-reveal className="mb-16">
          <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em] mb-4">
            live
          </p>
          <h1
            className="text-[48px] lg:text-[80px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.9] tracking-[-0.02em]"
            style={{ fontFeatureSettings: '"ss01", "cv01"' }}
          >
            Shows
          </h1>
        </div>

        {/* Filter tabs */}
        <div
          className="flex gap-4 mb-12 border-b border-[#1e1e1e] pb-4"
          data-reveal
          data-reveal-delay="1"
        >
          {(["all", "upcoming", "past"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] transition-colors ${
                filter === f
                  ? "text-[#7aad3a]"
                  : "text-[#3a3a2e] hover:text-[#6b6b5e]"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-[10px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.12em]">
            {filtered.length} show{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Show list */}
        {filtered.length > 0 ? (
          <div className="space-y-1" data-reveal data-reveal-delay="2">
            {filtered.map((show, i) => (
              <article
                key={i}
                className={`group flex items-center gap-4 lg:gap-8 py-4 px-4 -mx-4 rounded-sm transition-all duration-200 ${
                  show.past
                    ? "opacity-40 hover:opacity-60"
                    : "hover:bg-[#1a1a1a]/50"
                }`}
              >
                {/* Date */}
                <div className="w-28 flex-shrink-0">
                  <span
                    className={`text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.12em] ${
                      show.past ? "line-through" : ""
                    } ${show.past ? "text-[#3a3a2e]" : "text-[#6b6b5e]"}`}
                  >
                    {show.date}
                  </span>
                </div>

                {/* Venue */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-[18px] lg:text-[22px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-none tracking-[-0.01em] group-hover:text-[#7aad3a] transition-colors ${
                      show.past ? "line-through" : ""
                    }`}
                    style={{ fontFeatureSettings: '"ss01", "cv01"' }}
                  >
                    {show.venue}
                  </h3>
                </div>

                {/* Location */}
                <div className="hidden sm:block w-40 flex-shrink-0 text-right">
                  <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.12em]">
                    {show.city}, {show.country}
                  </span>
                </div>

                {/* Tickets link */}
                <div className="w-20 flex-shrink-0 text-right">
                  {show.ticketUrl && !show.past ? (
                    <a
                      href={show.ticketUrl}
                      className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.12em] hover:text-[#c8f06a] transition-colors"
                    >
                      Tickets →
                    </a>
                  ) : (
                    <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.12em]">
                      {show.past ? "past" : ""}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty state for upcoming when there are none */
          <div className="text-center py-20" data-reveal data-reveal-delay="2">
            <p className="text-[11px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.15em]">
              nothing on the calendar yet. stay locked.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
