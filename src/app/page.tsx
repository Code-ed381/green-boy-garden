"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { releases } from "@/lib/releases";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EventModal } from "@/components/EventModal";
import { EventCountdown } from "@/components/EventCountdown";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const latestRelease = releases.find((r) => r.featured) || releases[0];

  useScrollReveal();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      hero.style.setProperty("--scroll-progress", String(progress));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <EventModal />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden bg-[#0d0d0d]"
      >
        {/* Background image with parallax */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              transform:
                "translateY(calc(var(--scroll-progress, 0) * -60px))",
              willChange: "transform",
            }}
          >
            <Image
              src="/olive/new.jpg"
              alt="olivetheboy"
              fill
              className="object-cover"
              style={{
                filter: "contrast(1.1) saturate(0.9)",
                objectPosition: "center 40%",
              }}
              priority
              sizes="100vw"
            />
          {/* Olive tint overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(122, 173, 58, 0.25) 0%, rgba(13, 13, 13, 0.7) 50%, rgba(13, 13, 13, 0.95) 100%)",
              mixBlendMode: "overlay",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d]" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-12 max-w-7xl mx-auto">
          <div data-reveal className="max-w-4xl">
            {/* Artist name - color split */}
            <h1
              className="font-[family-name:var(--font-display)] text-[clamp(80px,18vw,180px)] leading-[0.85] tracking-[-0.02em]"
              style={{ fontFeatureSettings: '"ss01", "cv01"' }}
            >
              <span className="text-[#7aad3a]">olive</span>
              <br />
              <span className="text-[#f0ede6]">theboy</span>
            </h1>

            {/* Tagline */}
            <p
              className="mt-4 text-[11px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.15em] bg-[#0d0d0d]/70 backdrop-blur-sm px-3 py-2 inline-block rounded-sm"
              data-reveal
              data-reveal-delay="1"
            >
              Afrobeats · songwriter · <span className="text-[#7aad3a]">gh</span>
            </p>
          </div>

          {/* Rotating badge - kinetic element */}
          <div
            className="absolute bottom-8 right-6 lg:right-12"
            data-reveal
            data-reveal-delay="3"
          >
            <div className="relative w-20 h-20 lg:w-24 lg:h-24">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full animate-spin"
                style={{ animationDuration: "12s" }}
              >
                <defs>
                  <path
                    id="badge-circle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text
                  fontSize="8"
                  letterSpacing="6"
                  fill="#7aad3a"
                  className="font-[family-name:var(--font-mono)]"
                >
                  <textPath href="#badge-circle" startOffset="0%">
                    ● GREENGO ● GREENGO
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#7aad3a]" />
              </div>
            </div>
          </div>

          {/* Latest release teaser - bottom left */}
          <div
            className="absolute bottom-8 left-6 lg:left-12"
            data-reveal
            data-reveal-delay="4"
          >
            <Link
              href="/music"
              className="group flex items-center gap-3"
            >
              <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.15em] group-hover:text-[#7aad3a] transition-colors">
                ↓ new music
              </span>
              <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.12em]">
                {latestRelease.title} ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      <EventCountdown />

      {/* About preview section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#1e1e1e]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/olive/1.jpeg"
                alt="olivetheboy"
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
              about
            </p>
            <h2
              className="text-[40px] lg:text-[60px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.9] tracking-[-0.02em]"
              style={{ fontFeatureSettings: '"ss01", "cv01"' }}
            >
              The music speaks.
              <br />
              <span className="text-[#7aad3a]">everything else</span> is noise.
            </h2>
            <p className="text-[14px] text-[#6b6b5e] leading-relaxed max-w-md font-[family-name:var(--font-geist-sans)]">
              Ghanaian singer and songwriter Olivetheboy is a pioneering voice in modern Afrobeats, blending
              traditional Ghanaian rhythms with contemporary Pop, R&B, Alt influences.
            </p>
            <Link
              href="/about"
              className="inline-block text-[11px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em] hover:text-[#c8f06a] transition-colors btn-press"
            >
              read more →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest release section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#1e1e1e]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Artwork */}
          <div data-reveal>
            <div className="relative aspect-square overflow-hidden rounded-sm max-w-md mx-auto lg:mx-0">
              <Image
                src={latestRelease.coverImage}
                alt={`${latestRelease.title} cover art`}
                fill
                className="object-cover"
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

          {/* Info + CTA */}
          <div className="space-y-6" data-reveal data-reveal-delay="1">
            <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em]">
              latest release
            </p>
            <h2
              className="text-[40px] lg:text-[80px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.9] tracking-[-0.02em]"
              style={{ fontFeatureSettings: '"ss01", "cv01"' }}
            >
              {latestRelease.title}
            </h2>
            <p className="text-[11px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.15em]">
              {latestRelease.type} · {latestRelease.year} · {latestRelease.streams} streams
            </p>
            <Link
              href="/music"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#7aad3a] text-[#0d0d0d] text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] rounded-sm hover:bg-[#c8f06a] transition-colors btn-press"
            >
              listen now ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
