"use client";

import { Camera, Video, Music, Play, Radio } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", href: "#", icon: Camera },
    { name: "Spotify", href: "#", icon: Radio },
    { name: "YouTube", href: "#", icon: Video },
    { name: "Apple Music", href: "#", icon: Music },
    { name: "TikTok", href: "#", icon: Play },
  ];

  const tickerItems = [
    "OliveTheBoy — Avana EP — Out Now",
    "OliveTheBoy — 10M+ streams worldwide",
    "Green Boy Records — Accra, Ghana",
    "New music coming soon",
  ];

  return (
    <>
      {/* Live Ticker */}
      <div className="bg-[#0f0f0b] border-t border-b border-[#1a1a1a] py-[10px] overflow-hidden">
        <div className="relative w-full">
          <div
            className="flex whitespace-nowrap animate-marquee"
            style={{
              width: "fit-content",
              animation: "marquee 20s linear infinite",
              display: "inline-block",
            }}
          >
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span
                key={index}
                className="text-[10px] text-[#808080] mx-8 inline-block"
              >
                {item}
                {index < tickerItems.length * 2 - 1 && " · "}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#060606] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Left side - Copyright */}
            <div className="mb-4 sm:mb-0">
              <p className="text-[10px] text-[#404038] tracking-[0.06em]">
                © 2025 GREEN BOY RECORDS · ACCRA, GHANA
              </p>
            </div>

            {/* Right side - Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-[10px] text-[#404038] hover:text-[#7aad3a] transition-colors duration-150 flex items-center space-x-1"
                    aria-label={social.name}
                  >
                    <IconComponent size={16} />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
