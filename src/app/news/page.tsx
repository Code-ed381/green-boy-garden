"use client";

import Link from "next/link";
import Image from "next/image";
import { news } from "@/lib/news";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function NewsPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-16 lg:pt-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Header */}
        <div data-reveal className="mb-16">
          <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em] mb-4">
            updates
          </p>
          <h1
            className="text-[48px] lg:text-[80px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.9] tracking-[-0.02em]"
            style={{ fontFeatureSettings: '"ss01", "cv01"' }}
          >
            News
          </h1>
          <p className="mt-3 text-[11px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.15em]">
            {news.length} update{news.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* News list */}
        <div className="space-y-12">
          {news.map((item, i) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              data-reveal
              style={{ transitionDelay: `${i * 0.1}s` }}
              className="group block border-b border-[#1e1e1e] pb-12 last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* Image */}
                {item.image && (
                  <div className="lg:col-span-2 relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                )}

                {/* Content */}
                <div className={item.image ? "lg:col-span-3" : "lg:col-span-5"}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.12em] bg-[#7aad3a]/10 px-2 py-[2px] rounded-full">
                      {item.category}
                    </span>
                    <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.12em]">
                      {item.date}
                    </span>
                  </div>
                  <h2
                    className="text-[24px] lg:text-[32px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[1.1] group-hover:text-[#7aad3a] transition-colors"
                    style={{ fontFeatureSettings: '"ss01", "cv01"' }}
                  >
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[14px] text-[#6b6b5e] font-[family-name:var(--font-geist-sans)] leading-relaxed max-w-2xl">
                    {item.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em] group-hover:text-[#c8f06a] transition-colors">
                    read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
