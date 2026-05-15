"use client";

import { useState } from "react";
import { Play, Pause, Plus, Heart, MoreHorizontal } from "lucide-react";
import { type Release } from "@/lib/releases";
import Image from "next/image";

interface ReleaseCardProps {
  release: Release;
  onPlay: (release: Release) => void;
  onPause: () => void;
  isActive: boolean;
  isPlaying: boolean;
  onAddToQueue?: (release: Release) => void;
}

export default function ReleaseCard({
  release,
  onPlay,
  onPause,
  isActive,
  isPlaying,
  onAddToQueue,
}: ReleaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isActive && isPlaying) {
      onPause();
    } else {
      onPlay(release);
    }
  };

  const handleAddToQueue = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToQueue?.(release);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const formatStreamCount = (streams: string) => {
    if (streams.includes("M")) {
      const millions = parseFloat(streams.replace("M+", ""));
      return millions >= 1 ? `${millions}M` : `${millions * 1000}K`;
    }
    if (streams.includes("K")) {
      const thousands = parseFloat(streams.replace("K", ""));
      return `${thousands}K`;
    }
    return streams;
  };

  return (
    <div
      className="group relative cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative bg-[#0f0f0f] rounded-2xl overflow-hidden border border-[#1a1a1a] hover:border-[#7aad3a]/30 transition-all duration-300">
        {/* Cover Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={release.coverImage}
            alt={`${release.title} Cover`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Quick Actions Overlay */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4 transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Main Play/Pause Button */}
            <button
              onClick={handlePlay}
              className="w-16 h-16 bg-[#7aad3a] rounded-full flex items-center justify-center hover:bg-[#8abd4a] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110"
              aria-label={isActive && isPlaying ? "Pause" : "Play"}
            >
              {isActive && isPlaying ? (
                <Pause size={28} className="text-[#0a0a0a]" />
              ) : (
                <Play size={28} className="text-[#0a0a0a] ml-1" />
              )}
            </button>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleLike}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 border border-white/20"
                aria-label="Like"
              >
                <Heart
                  size={16}
                  className={`transition-colors ${isLiked ? "text-red-500 fill-red-500" : "text-white"}`}
                />
              </button>

              <button
                onClick={handleAddToQueue}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 border border-white/20"
                aria-label="Add to queue"
              >
                <Plus size={16} className="text-white" />
              </button>

              <button
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 border border-white/20"
                aria-label="More options"
              >
                <MoreHorizontal size={16} className="text-white" />
              </button>
            </div>

            {/* Streaming Links */}
            <div className="flex gap-2 mt-2">
              {release.spotifyUrl && (
                <a
                  href={release.spotifyUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all duration-200"
                  title="Listen on Spotify"
                  aria-label="Listen on Spotify"
                >
                  <Image
                    src="/icons/spotify (1).png"
                    alt="Spotify"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
              )}
              {release.appleUrl && (
                <a
                  href={release.appleUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all duration-200"
                  title="Listen on Apple Music"
                  aria-label="Listen on Apple Music"
                >
                  <Image
                    src="/icons/music (1).png"
                    alt="Apple Music"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
              )}
              {release.youtubeUrl && (
                <a
                  href={release.youtubeUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all duration-200"
                  title="Listen on YouTube Music"
                  aria-label="Listen on YouTube Music"
                >
                  <Image
                    src="/icons/youtube (1).png"
                    alt="YouTube Music"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
              )}
            </div>
          </div>

          {/* Active Indicator */}
          {isActive && (
            <div className="absolute top-3 right-3 flex items-center gap-2 bg-[#7aad3a] px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-xs font-medium text-[#0a0a0a]">
                NOW PLAYING
              </span>
            </div>
          )}

          {/* Featured Badge */}
          {release.featured && !isActive && (
            <div className="absolute top-3 left-3 bg-[#7aad3a]/20 backdrop-blur-sm px-2 py-1 rounded-full border border-[#7aad3a]/30">
              <span className="text-xs font-medium text-[#7aad3a]">
                FEATURED
              </span>
            </div>
          )}

          {/* Explicit Badge */}
          {release.explicit && (
            <div className="absolute bottom-3 left-3 bg-red-500/80 backdrop-blur-sm px-2 py-1 rounded">
              <span className="text-xs font-medium text-white">E</span>
            </div>
          )}
        </div>

        {/* Release Info */}
        <div className="p-4 space-y-3">
          {/* Title and Artist */}
          <div className="space-y-1">
            <h3 className="font-semibold text-[#f0f0ec] text-sm lg:text-base truncate group-hover:text-[#7aad3a] transition-colors duration-200">
              {release.title}
            </h3>
            <p className="text-[#888] text-xs lg:text-sm truncate">
              {release.artist}
            </p>
          </div>

          {/* Metadata */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-[#666]">
              <span className="bg-white/5 px-2 py-1 rounded-full">
                {release.type}
              </span>
              {release.year && <span>{release.year}</span>}
              {release.streams && (
                <span className="flex items-center gap-1">
                  <span>{formatStreamCount(release.streams)}</span>
                </span>
              )}
            </div>

            {/* Duration or Track Count */}
            <div className="text-xs text-[#666]">
              {release.duration ||
                (release.trackCount && `${release.trackCount} tracks`)}
            </div>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#7aad3a]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  );
}
