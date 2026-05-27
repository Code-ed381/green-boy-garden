"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { type Release } from "@/lib/releases";
import Image from "next/image";

interface ReleaseCardProps {
  release: Release;
}

function getSpotifyEmbedUrl(url: string): string | null {
  if (!url || url === "#") return null;
  const trackMatch = url.match(/\/track\/([a-zA-Z0-9]+)/);
  if (trackMatch) return `https://open.spotify.com/embed/track/${trackMatch[1]}?utm_source=generator`;
  const albumMatch = url.match(/\/album\/([a-zA-Z0-9]+)/);
  if (albumMatch) return `https://open.spotify.com/embed/album/${albumMatch[1]}?utm_source=generator`;
  return null;
}

export default function ReleaseCard({ release }: ReleaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  const embedUrl = getSpotifyEmbedUrl(release.spotifyUrl ?? "");

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!embedUrl) {
      if (release.spotifyUrl && release.spotifyUrl !== "#") {
        window.open(release.spotifyUrl, "_blank");
      }
      return;
    }

    setShowEmbed((prev) => !prev);
  };

  return (
    <article
      className="group card-hover relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-[#0f0f0f] overflow-hidden border border-[#1a1a1a] transition-all duration-300 group-hover:shadow-[0_0_0_1px_#7aad3a]">
        {/* Artwork */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={release.coverImage}
            alt={`${release.title} cover art`}
            fill
            className={`object-cover transition-all duration-500 ${
              isHovered || showEmbed ? "opacity-60 scale-105" : ""
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Year tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.12em] bg-[#0d0d0d]/80 px-2 py-1">
              {release.year}
            </span>
          </div>

          {/* Playing indicator */}
          {showEmbed && (
            <div className="absolute top-3 right-3 z-10">
              <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#c8f06a] uppercase tracking-[0.12em] bg-[#0d0d0d]/80 px-2 py-1">
                playing
              </span>
            </div>
          )}

          {/* "Play on" streaming row — only visible on hover */}
          <div
            className={`absolute bottom-0 left-0 right-0 z-10 transition-transform duration-300 ease-out ${
              isHovered ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="flex items-center justify-center gap-3 bg-gradient-to-t from-[#0d0d0d]/90 via-[#0d0d0d]/70 to-transparent px-4 py-3">
              <span className="text-[8px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.12em] mr-auto">
                play on
              </span>
              {release.spotifyUrl && (
                <a
                  href={release.spotifyUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7aad3a] transition-colors"
                  aria-label="Listen on Spotify"
                >
                  <Image
                    src="/icons/spotify (1).png"
                    alt="Spotify"
                    width={14}
                    height={14}
                  />
                </a>
              )}
              {release.appleUrl && (
                <a
                  href={release.appleUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7aad3a] transition-colors"
                  aria-label="Listen on Apple Music"
                >
                  <Image
                    src="/icons/music (1).png"
                    alt="Apple Music"
                    width={14}
                    height={14}
                  />
                </a>
              )}
              {release.audiomackUrl && (
                <a
                  href={release.audiomackUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7aad3a] transition-colors"
                  aria-label="Listen on Audiomack"
                >
                  <span className="text-[9px] font-bold text-white">A</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Spotify embed — below artwork, so card adjusts naturally */}
        {showEmbed && embedUrl && (
          <div className="w-full bg-[#0d0d0d] border-t border-[#1a1a1a]">
            <iframe
              src={embedUrl}
              width="100%"
              height="80"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="border-0 block"
            />
          </div>
        )}

        {/* Info */}
        <div className="p-4 space-y-1.5">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlay}
              className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
                showEmbed
                  ? "bg-[#e85d26] hover:bg-[#c8f06a]"
                  : "bg-[#7aad3a] hover:bg-[#c8f06a] hover:scale-110"
              }`}
              aria-label={showEmbed ? "Close player" : `Play ${release.title}`}
            >
              <Play
                size={16}
                className={`text-[#0d0d0d] transition-transform duration-200 ${
                  showEmbed ? "rotate-45" : "ml-0.5"
                }`}
              />
            </button>
            <h3
              className="text-[18px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-none group-hover:text-[#7aad3a] transition-colors truncate min-w-0"
              style={{ fontFeatureSettings: '"ss01", "cv01"' }}
            >
              {release.title}
            </h3>
          </div>
          {release.featuring && (
            <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#6b6b5e] truncate pl-12">
              feat. {release.featuring}
            </p>
          )}
          {release.album && (
            <p className="text-[9px] font-[family-name:var(--font-mono)] text-[#3a3a2e] truncate pl-12">
              from <span className="text-[#6b6b5e]">{release.album}</span>
            </p>
          )}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.12em] bg-[#7aad3a]/10 px-2 py-[2px] rounded-full">
              {release.type}
            </span>
            {release.streams && (
              <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.12em]">
                {release.streams}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
