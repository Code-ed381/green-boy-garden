"use client";

import { useEffect } from "react";

export function UnderConstruction() {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-label="Site under construction"
      className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-auto under-construction-backdrop"
    >
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center max-w-4xl">
        <p
          className="font-[family-name:var(--font-display)] text-[#7aad3a] text-5xl sm:text-6xl font-features animate-fade-up opacity-0"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          olive.
        </p>

        <div className="relative w-20 h-20 sm:w-24 sm:h-24 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full animate-spin-slow"
            aria-hidden="true"
          >
            <defs>
              <path
                id="construction-badge-circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text
              fontSize="8"
              letterSpacing="4"
              fill="#7aad3a"
              className="font-[family-name:var(--font-mono)]"
            >
              <textPath href="#construction-badge-circle" startOffset="0%">
                ● UNDER CONSTRUCTION ● UNDER CONSTRUCTION
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#7aad3a] animate-pulse-dot" />
          </div>
        </div>

        <h1
          className="font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.95] font-features animate-clip-reveal"
          style={{
            fontSize: "clamp(48px, 10vw, 120px)",
          }}
        >
          SITE UNDER
          <br />
          CONSTRUCTION
        </h1>

        <p
          className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[#7aad3a] animate-fade-up opacity-0"
          style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
        >
          check back soon · olivetheboy
        </p>
      </div>
    </div>
  );
}
