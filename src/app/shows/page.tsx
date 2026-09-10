"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Show {
  date: string;
  venue: string;
  city: string;
  country: string;
  time: string;
  ticketUrl?: string;
}

const shows: Show[] = [
  {
    date: "20 NOV 2026",
    venue: "National Theatre",
    city: "Accra",
    country: "Ghana",
    time: "Gates 6PM · Show 8PM",
    ticketUrl: "https://app.chaleapp.org/checkout/242",
  },
];

export default function ShowsPage() {
  useScrollReveal();

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

        {/* Show list */}
        <div className="space-y-1" data-reveal data-reveal-delay="2">
          {shows.map((show, i) => (
            <article
              key={i}
              className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-6 px-4 -mx-4 rounded-sm hover:bg-[#1a1a1a]/50 transition-all duration-200"
            >
              {/* Date */}
              <div className="w-28 flex-shrink-0">
                <span className="text-[11px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.12em]">
                  {show.date}
                </span>
              </div>

              {/* Venue */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-[24px] lg:text-[32px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-none tracking-[-0.01em] group-hover:text-[#7aad3a] transition-colors"
                  style={{ fontFeatureSettings: '"ss01", "cv01"' }}
                >
                  {show.venue}
                </h3>
                <p className="mt-1 text-[10px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.12em]">
                  {show.time}
                </p>
              </div>

              {/* Location */}
              <div className="hidden sm:block w-40 flex-shrink-0 text-right">
                <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.12em]">
                  {show.city}, {show.country}
                </span>
              </div>

              {/* Tickets link */}
              <div className="flex-shrink-0">
                {show.ticketUrl ? (
                  <a
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center px-8 py-3 bg-[#7aad3a] text-[#0d0d0d] text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] rounded-sm hover:bg-[#c8f06a] transition-colors btn-press"
                  >
                    get tickets ↗
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
