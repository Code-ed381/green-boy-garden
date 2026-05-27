"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-16 lg:pt-20">
      {/* Hero photo - full bleed */}
      <div className="relative h-[50vh] lg:h-[70vh] overflow-hidden" data-reveal>
        <Image
          src="/olive/olive123.jpg"
          alt="olivetheboy"
          fill
          className="object-cover"
          style={{
            filter: "contrast(1.1) saturate(0.9)",
            objectPosition: "top",
          }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(122, 173, 58, 0.2) 0%, transparent 50%, rgba(13, 13, 13, 0.6) 100%)",
            mixBlendMode: "overlay",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Name + origin */}
        <div className="-mt-16 relative z-10 mb-16" data-reveal data-reveal-delay="1">
          <h1
            className="text-[56px] lg:text-[100px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.85] tracking-[-0.02em]"
            style={{ fontFeatureSettings: '"ss01", "cv01"' }}
          >
            <span className="text-[#7aad3a]">olive</span>theboy
          </h1>
          <p className="mt-2 text-[10px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.15em]">
            Accra, Ghana
          </p>
        </div>

        {/* Facts table */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24"
          data-reveal
          data-reveal-delay="2"
        >
          <div>
            <dl className="space-y-6">
              {[
                { label: "born", value: "Accra, Ghana" },
                { label: "sound", value: "Afrobeats · R&B · alt" },
                { label: "active", value: "2021 - Present" },
              ].map((fact) => (
                <div key={fact.label} className="flex items-baseline gap-4">
                  <dt className="text-[10px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.15em] w-24 flex-shrink-0">
                    {fact.label}
                  </dt>
                  <dd className="text-[14px] text-[#f0ede6] font-[family-name:var(--font-geist-sans)]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="text-[14px] text-[#6b6b5e] leading-relaxed font-[family-name:var(--font-geist-sans)]">
              olivetheboy is an artist, performer and songwriter from Kumasi,
              Ashanti Region, Ghana. His work sits at the intersection of
              traditional West African rhythm and contemporary R&B raw,
              grounded, and unapologetically real.
            </p>
          </div>
        </div>

        {/* Pull Quote — breaks the grid */}
        <div
          className="relative mb-24 -ml-6 lg:-ml-12"
          data-reveal
          data-reveal-delay="3"
        >
          <blockquote
            className="text-[40px] lg:text-[72px] font-[family-name:var(--font-geist-sans)] italic text-[#f0ede6] leading-[1.1] tracking-[-0.02em] max-w-4xl"
            style={{ fontFeatureSettings: '"ss01", "cv01"' }}
          >
            &ldquo;the music speaks.
            <br />
            <span className="text-[#7aad3a]">everything else</span> is noise.&rdquo;
          </blockquote>
        </div>

        {/* Awards */}
        <div className="mb-24" data-reveal data-reveal-delay="4">
          <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em] mb-8">
            awards
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* 2023 */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/olive/award2023.JPG"
                  alt="TGMA 2023 — Afrobeats Song of the Year"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
              <div className="mt-4">
                <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#c8f06a] uppercase tracking-[0.15em]">
                  2023
                </p>
                <h3 className="text-[22px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-tight mt-1">
                  Afrobeats Song of the Year
                </h3>
                <p className="text-[13px] text-[#6b6b5e] font-[family-name:var(--font-geist-sans)] mt-2 leading-relaxed">
                  GoodSin swept the awards circuit, winning Afrobeats Song of the
                  Year at the TGMA and establishing OliveTheBoy as a defining voice
                  in Ghanaian music.
                </p>
              </div>
            </div>

            {/* 2024 */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/olive/tgma2025.jpeg"
                  alt="Award ceremony 2024 — Afrobeats Song of the Year"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
              <div className="mt-4">
                <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#c8f06a] uppercase tracking-[0.15em]">
                  2024
                </p>
                <h3 className="text-[22px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-tight mt-1">
                  Afrobeats Song of the Year
                </h3>
                <p className="text-[13px] text-[#6b6b5e] font-[family-name:var(--font-geist-sans)] mt-2 leading-relaxed">
                  Following the massive success of Asylum and GoodSin (Remix),
                  OliveTheBoy took home Afrobeats Song of the Year again, securing
                  back-to-back wins and cementing his legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
