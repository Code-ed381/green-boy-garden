"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredEvent } from "@/lib/events";

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getRemaining(startsAt: string): Remaining | null {
  const diff = new Date(startsAt).getTime() - Date.now();
  if (diff <= 0) return null;
  const totalSec = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSec / 86400),
    hours: Math.floor((totalSec % 86400) / 3600),
    minutes: Math.floor((totalSec % 3600) / 60),
    seconds: totalSec % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

const units: { key: keyof Remaining; label: string }[] = [
  { key: "days", label: "days" },
  { key: "hours", label: "hrs" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "sec" },
];

export function EventCountdown() {
  const [remaining, setRemaining] = useState<Remaining | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const tick = () => {
      setRemaining(getRemaining(featuredEvent.startsAt));
      setReady(true);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const ctaClassName =
    "inline-flex min-h-11 items-center justify-center px-8 py-3 bg-[#7aad3a] text-[#0d0d0d] text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] rounded-sm hover:bg-[#c8f06a] transition-colors btn-press focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8f06a]";

  const cta = isInternalHref(featuredEvent.ticketUrl) ? (
    <Link href={featuredEvent.ticketUrl} className={ctaClassName}>
      {featuredEvent.ctaLabel} ↗
    </Link>
  ) : (
    <a
      href={featuredEvent.ticketUrl}
      className={ctaClassName}
      target="_blank"
      rel="noopener noreferrer"
    >
      {featuredEvent.ctaLabel} ↗
    </a>
  );

  return (
    <section
      className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto"
      aria-label={`${featuredEvent.title}, ${featuredEvent.dateLabel}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div data-reveal>
          <div className="relative aspect-square overflow-hidden rounded-sm max-w-md mx-auto lg:mx-0">
            <Image
              src={featuredEvent.artwork}
              alt={`${featuredEvent.title} artwork`}
              fill
              className="object-cover"
              style={{ filter: "contrast(1.1) saturate(0.9)" }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(122, 173, 58, 0.15) 0%, transparent 60%)",
                mixBlendMode: "overlay",
              }}
            />
          </div>
        </div>

        <div className="space-y-6" data-reveal data-reveal-delay="1">
          <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em]">
            next up
          </p>
          <h2
            className="text-[40px] lg:text-[80px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.9] tracking-[-0.02em]"
            style={{ fontFeatureSettings: '"ss01", "cv01"' }}
          >
            {featuredEvent.title}
          </h2>
          <p className="text-[11px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.15em]">
            {featuredEvent.dateLabel} · {featuredEvent.venue} · {featuredEvent.city}{" "}
            / {featuredEvent.country}
          </p>

          {!ready || remaining ? (
            <div className="flex gap-4 sm:gap-6">
              {units.map((unit) => (
                <div key={unit.key} className="flex flex-col gap-1 min-w-[3.5rem]">
                  <span
                    className="text-[32px] lg:text-[48px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-none tracking-[-0.02em] tabular-nums"
                    style={{ fontFeatureSettings: '"ss01", "cv01"' }}
                  >
                    {pad(remaining?.[unit.key] ?? 0)}
                  </span>
                  <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em]">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[11px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em]">
              happening now
            </p>
          )}

          {cta}
        </div>
      </div>
    </section>
  );
}
