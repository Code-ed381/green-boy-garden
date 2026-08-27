"use client";

import { useCallback, useEffect, useId, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { featuredEvent } from "@/lib/events";

const STORAGE_KEY = `event-modal:${featuredEvent.id}`;
const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

function isDismissed() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function EventModal() {
  const dismissed = useSyncExternalStore(subscribe, isDismissed, () => true);
  const open =
    process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION !== "true" && !dismissed;

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* private mode */
    }
    listeners.forEach((listener) => listener());
  }, []);

  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        dismiss();
        return;
      }
      if (e.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const items = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      restoreFocusRef.current?.focus();
    };
  }, [open, dismiss]);

  if (!open) return null;

  const ctaClassName =
    "inline-flex min-h-11 items-center justify-center px-8 py-3 bg-[#7aad3a] text-[#0d0d0d] text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] rounded-sm hover:bg-[#c8f06a] transition-colors btn-press focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8f06a]";

  const cta = isInternalHref(featuredEvent.ticketUrl) ? (
    <Link href={featuredEvent.ticketUrl} className={ctaClassName} onClick={dismiss}>
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
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-8"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-[#0d0d0d]/85"
        aria-hidden="true"
        onClick={dismiss}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-sm bg-[#0d0d0d] shadow-[0_0_0_1px_#7aad3a]"
      >
        <div className="relative aspect-square w-full">
          <Image
            src={featuredEvent.artwork}
            alt=""
            fill
            className="object-cover"
            style={{ filter: "contrast(1.1) saturate(0.9)" }}
            sizes="(max-width: 448px) 100vw, 448px"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(122, 173, 58, 0.2) 0%, transparent 55%)",
              mixBlendMode: "overlay",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
        </div>

        <div className="relative -mt-16 space-y-4 px-6 pb-8 pt-2">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em]">
              next up
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={dismiss}
              className="flex h-11 w-11 items-center justify-center text-[#7aad3a] hover:text-[#f0ede6] transition-colors -mr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8f06a]"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          <h2
            id={titleId}
            className="text-[40px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.9] tracking-[-0.02em]"
            style={{ fontFeatureSettings: '"ss01", "cv01"' }}
          >
            {featuredEvent.title}
          </h2>

          <p className="text-[11px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.12em]">
            {featuredEvent.dateLabel} · {featuredEvent.venue} · {featuredEvent.city}{" "}
            / {featuredEvent.country}
          </p>

          {cta}
        </div>
      </div>
    </div>
  );
}
