"use client";

import { useState, useEffect } from "react";
import { Play, ExternalLink, Sparkles } from "lucide-react";
import { type Release } from "@/lib/releases";
import Image from "next/image";

interface HeroSectionProps {
  featuredRelease: Release;
  onPlay: (release: Release) => void;
}

export default function HeroSection({
  featuredRelease,
  onPlay,
}: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return; // Disable parallax on mobile

      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isMobile]);

  return (
    <div className="relative min-h-[80vh] overflow-hidden rounded-3xl mb-12">
      {/* Animated gradient background with parallax */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at ${isMobile ? "30% 50%" : `${mousePosition.x}% ${mousePosition.y}%`}, 
              rgba(122, 173, 58, ${isMobile ? "0.2" : "0.3"}) 0%, 
              rgba(15, 18, 8, 0.8) 40%, 
              rgba(10, 10, 10, 1) 100%),
            linear-gradient(135deg, 
              rgba(122, 173, 58, 0.1) 0%, 
              rgba(10, 10, 10, 0.9) 50%)
          `,
          transition: "all 0.3s ease-out",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#7aad3a] rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] p-8 lg:p-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Album artwork */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#7aad3a]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative aspect-square max-w-md lg:mx-auto lg:max-w-none mr-auto lg:mr-0">
              <Image
                src={featuredRelease.coverImage}
                alt={`${featuredRelease.title} Cover`}
                fill
                className="object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Floating play button */}
              <button
                onClick={() => onPlay(featuredRelease)}
                className="absolute bottom-6 right-6 w-16 h-16 bg-[#7aad3a] rounded-full flex items-center justify-center hover:bg-[#8abd4a] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 group-hover:bottom-8"
                aria-label={`Play ${featuredRelease.title}`}
              >
                <Play size={28} className="text-[#0a0a0a] ml-1" />
              </button>

              {/* Featured badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#0a0a0a]/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Sparkles size={14} className="text-[#7aad3a]" />
                <span className="text-xs font-medium text-[#7aad3a]">
                  FEATURED
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Release info */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#888] uppercase">
                <div className="w-2 h-2 bg-[#7aad3a] rounded-full animate-pulse" />
                New Release
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f0f0ec] leading-tight">
                {featuredRelease.title}
              </h1>

              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-[#7aad3a] font-medium">
                  {featuredRelease.artist}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#888]">
                  <span>{featuredRelease.year}</span>
                  <span>•</span>
                  <span>{featuredRelease.streams} streams</span>
                  {featuredRelease.duration && (
                    <>
                      <span>•</span>
                      <span>{featuredRelease.duration}</span>
                    </>
                  )}
                  {featuredRelease.genre && (
                    <>
                      <span>•</span>
                      <span>{featuredRelease.genre}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onPlay(featuredRelease)}
                className="px-8 py-4 bg-[#7aad3a] text-[#0a0a0a] font-semibold rounded-full hover:bg-[#8abd4a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                aria-label={`Play ${featuredRelease.title}`}
              >
                <Play size={20} />
                Play Now
              </button>

              <div className="flex gap-2">
                <a
                  href={featuredRelease.spotifyUrl || "#"}
                  className="px-6 py-4 bg-transparent border border-[#2a2a2a] text-[#888] rounded-full hover:border-[#7aad3a] hover:text-[#7aad3a] transition-all duration-300 flex items-center gap-2"
                  aria-label="Listen on Spotify"
                >
                  <ExternalLink size={16} />
                  <span className="hidden sm:inline">Spotify</span>
                </a>
                <a
                  href={featuredRelease.appleUrl || "#"}
                  className="px-6 py-4 bg-transparent border border-[#2a2a2a] text-[#888] rounded-full hover:border-[#7aad3a] hover:text-[#7aad3a] transition-all duration-300 flex items-center gap-2"
                  aria-label="Listen on Apple Music"
                >
                  <ExternalLink size={16} />
                  <span className="hidden sm:inline">Apple</span>
                </a>
                <a
                  href={featuredRelease.youtubeUrl || "#"}
                  className="px-6 py-4 bg-transparent border border-[#2a2a2a] text-[#888] rounded-full hover:border-[#7aad3a] hover:text-[#7aad3a] transition-all duration-300 flex items-center gap-2"
                  aria-label="Listen on YouTube Music"
                >
                  <ExternalLink size={16} />
                  <span className="hidden sm:inline">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
