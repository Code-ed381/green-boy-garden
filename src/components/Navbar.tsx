"use client";

import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Music", href: "/music" },
  { name: "News", href: "/news" },
  { name: "Shows", href: "/shows" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d0d0d]/80 backdrop-blur-[12px]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-[28px] font-[family-name:var(--font-display)] text-[#7aad3a] tracking-[0.04em] leading-none"
              style={{ fontFeatureSettings: '"ss01", "cv01"' }}
            >
              olivetheboy.
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="nav-link relative text-[14px] font-[family-name:var(--font-mono)] text-[#7aad3a] hover:text-[#c8f06a] transition-colors duration-200 uppercase tracking-[0.18em] font-bold"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden text-[#7aad3a] hover:text-[#f0ede6] transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ overscrollBehavior: "contain", touchAction: "none" }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0d0d0d]/95 backdrop-blur-lg"
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Close button */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="absolute top-5 right-6 z-10 text-[#7aad3a] hover:text-[#f0ede6] transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {/* Links */}
        <div className="relative h-full flex flex-col items-center justify-center gap-10 px-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-[48px] sm:text-[64px] font-[family-name:var(--font-display)] text-[#f0ede6] transition-all duration-300 hover:text-[#7aad3a] leading-none"
              style={{
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease-out ${0.1 + i * 0.1}s, transform 0.4s ease-out ${0.1 + i * 0.1}s, color 0.3s`,
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
