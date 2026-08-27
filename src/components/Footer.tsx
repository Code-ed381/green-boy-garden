"use client";

import { Camera, Radio, Video, Music, Play } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/olivetheboy?igsi=MTd1a3dkMTFxNnRpcg==",
    icon: Camera,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/6yCYm86uDrfUteHNs6zcg1?si=CJ8Ea7zuQaycy3j_SA0j-Q",
    icon: Radio,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@olivetheboyy?si=SJgpeVtzrpfa8T9-",
    icon: Video,
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/us/artist/olivetheboy/1573112719",
    icon: Music,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@olivetheboy_?_r=1&_t=ZS-99EvEXUkxaW",
    icon: Play,
  },
];

const tickerItems = [
  "olivetheboy — new music out STOPIT ft. MDK",
  "olivetheboy — singer · songwriter · performer · Accra, Ghana",
  "↓ press play — latest drop out now",
  "the music speaks. everything else is noise.",
];

export default function Footer() {
  return (
    <>
      {/* Marquee ticker */}
      <div className="bg-[#0f0f0b] border-t border-b border-[#1a1a1a] py-[10px] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee" style={{ width: "fit-content" }}>
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={index}
              className="text-[10px] font-[family-name:var(--font-mono)] text-[#6b6b5e] mx-8 inline-block uppercase tracking-[0.12em]"
            >
              {item}
              {index < tickerItems.length * 2 - 1 && " · "}
            </span>
          ))}
        </div>
      </div>

      <footer className="bg-[#060606] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Left */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-[18px] font-[family-name:var(--font-display)] text-[#3a3a2e] tracking-wide leading-none"
              >
                olivetheboy.
              </Link>
              <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.12em]">
                Accra, Ghana
              </span>
            </div>

            {/* Social links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-[10px] font-[family-name:var(--font-mono)] text-[#3a3a2e] hover:text-[#7aad3a] transition-colors duration-150 flex items-center space-x-1 uppercase tracking-[0.12em]"
                    aria-label={social.name}
                  >
                    <IconComponent size={14} />
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
