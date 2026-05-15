"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Music, Users, Play } from "lucide-react";

interface StatPillsProps {
  totalReleases: number;
  totalStreams: string;
  topGenre: string;
  totalArtists: number;
}

export default function StatPills({
  totalReleases,
  totalStreams,
  topGenre,
  totalArtists,
}: StatPillsProps) {
  const [counts, setCounts] = useState({
    releases: 0,
    streams: 0,
    artists: 0,
  });

  useEffect(() => {
    // Animate counters on mount
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        releases: Math.floor(totalReleases * easeOutQuart),
        streams: Math.floor(
          parseFloat(totalStreams.replace(/[^0-9.]/g, "")) * easeOutQuart,
        ),
        artists: Math.floor(totalArtists * easeOutQuart),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts({
          releases: totalReleases,
          streams: parseFloat(totalStreams.replace(/[^0-9.]/g, "")),
          artists: totalArtists,
        });
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [totalReleases, totalStreams, totalArtists]);

  const formatNumber = (num: number, suffix = "") => {
    if (suffix === "M") {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (suffix === "K") {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const streamSuffix = totalStreams.includes("M")
    ? "M"
    : totalStreams.includes("K")
      ? "K"
      : "";

  const pills = [
    {
      icon: Music,
      label: "Releases",
      value: counts.releases.toLocaleString(),
      total: totalReleases,
      color: "from-[#7aad3a] to-[#5a8028]",
    },
    {
      icon: TrendingUp,
      label: "Streams",
      value: formatNumber(counts.streams, streamSuffix),
      total: totalStreams,
      color: "from-[#7aad3a] to-[#5a8028]",
    },
    {
      icon: Users,
      label: "Artists",
      value: counts.artists.toLocaleString(),
      total: totalArtists,
      color: "from-[#7aad3a] to-[#5a8028]",
    },
    {
      icon: Play,
      label: "Top Genre",
      value: topGenre,
      total: topGenre,
      color: "from-[#7aad3a] to-[#5a8028]",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {pills.map((pill, index) => {
        const Icon = pill.icon;
        const isAnimated = index < 3; // Only animate numbers, not text

        return (
          <div
            key={pill.label}
            className="relative group"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300" />

            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${pill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={18} className="text-white" />
              </div>

              {/* Label */}
              <div className="text-xs text-[#888] uppercase tracking-wider mb-1">
                {pill.label}
              </div>

              {/* Value */}
              <div
                className={`text-xl lg:text-2xl font-bold text-[#f0f0ec] ${
                  isAnimated ? "transition-all duration-300" : ""
                }`}
              >
                {isAnimated ? pill.value : pill.total}
              </div>

              {/* Progress indicator for animated values */}
              {isAnimated && (
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#7aad3a] to-[#5a8028] rounded-full transition-all duration-300"
                    style={{
                      width: `${(parseFloat(String(pill.value).replace(/[^0-9.]/g, "")) / parseFloat(String(pill.total).replace(/[^0-9.]/g, ""))) * 100}%`,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
