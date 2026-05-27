"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { news } from "@/lib/news";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowLeft } from "lucide-react";

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  useScrollReveal();

  const article = useMemo(
    () => news.find((item) => item.slug === slug),
    [slug]
  );

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] pt-16 lg:pt-20 flex items-center justify-center">
        <div className="text-center px-6">
          <h1
            className="text-[48px] lg:text-[80px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.9]"
            style={{ fontFeatureSettings: '"ss01", "cv01"' }}
          >
            Not Found
          </h1>
          <p className="mt-4 text-[13px] text-[#6b6b5e] font-[family-name:var(--font-geist-sans)]">
            This update doesn&apos;t exist.
          </p>
          <Link
            href="/news"
            className="inline-block mt-8 text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em] hover:text-[#c8f06a] transition-colors"
          >
            ← back to news
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-16 lg:pt-20">
      <article className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Back link */}
        <div data-reveal>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[10px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.15em] hover:text-[#7aad3a] transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            back to news
          </Link>
        </div>

        {/* Hero image */}
        {article.image && (
          <div data-reveal className="relative aspect-[16/9] overflow-hidden mb-10">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
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
        )}

        {/* Meta */}
        <div data-reveal data-reveal-delay="1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.12em] bg-[#7aad3a]/10 px-2 py-[2px] rounded-full">
              {article.category}
            </span>
            <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.12em]">
              {article.date}
            </span>
          </div>
          <h1
            className="text-[36px] lg:text-[56px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.95] tracking-[-0.02em]"
            style={{ fontFeatureSettings: '"ss01", "cv01"' }}
          >
            {article.title}
          </h1>
        </div>

        {/* Body */}
        <div data-reveal data-reveal-delay="2" className="mt-12">
          <div className="text-[15px] text-[#b0ada5] font-[family-name:var(--font-geist-sans)] leading-[1.8] space-y-5 whitespace-pre-line">
            {article.content}
          </div>
        </div>

        {/* Back to news */}
        <div data-reveal data-reveal-delay="3" className="mt-16 pt-12 border-t border-[#1e1e1e]">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em] hover:text-[#c8f06a] transition-colors"
          >
            <ArrowLeft size={14} />
            all news
          </Link>
        </div>
      </article>
    </div>
  );
}
