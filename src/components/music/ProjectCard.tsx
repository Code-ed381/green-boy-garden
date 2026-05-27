"use client";

import { useState } from "react";
import { type Project } from "@/lib/releases";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

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
            src={project.coverImage}
            alt={`${project.title} cover art`}
            fill
            className={`object-cover transition-all duration-500 ${
              isHovered ? "opacity-60 scale-105" : ""
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Year tag */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[10px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.12em] bg-[#0d0d0d]/80 px-2 py-1">
              {project.year}
            </span>
          </div>

          {/* EP/Album badge */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#c8f06a] uppercase tracking-[0.12em] bg-[#0d0d0d]/80 px-2 py-1 border border-[#c8f06a]/30">
              {project.type} · {project.trackCount} tracks
            </span>
          </div>

          {/* "Play on" streaming row */}
          <div
            className={`absolute bottom-0 left-0 right-0 z-10 transition-transform duration-300 ease-out ${
              isHovered ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="flex items-center justify-center gap-3 bg-gradient-to-t from-[#0d0d0d]/90 via-[#0d0d0d]/70 to-transparent px-4 py-3">
              <span className="text-[8px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.12em] mr-auto">
                listen on
              </span>
              {project.spotifyUrl && (
                <a
                  href={project.spotifyUrl}
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
              {project.appleUrl && (
                <a
                  href={project.appleUrl}
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
              {project.audiomackUrl && (
                <a
                  href={project.audiomackUrl}
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

        {/* Info */}
        <div className="p-4 space-y-1.5">
          <h3
            className="text-[18px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-none group-hover:text-[#7aad3a] transition-colors truncate"
            style={{ fontFeatureSettings: '"ss01", "cv01"' }}
          >
            {project.title}
          </h3>
          <p className="text-[9px] font-[family-name:var(--font-mono)] text-[#6b6b5e] truncate">
            {project.label}
          </p>
          {project.features.length > 0 && (
            <p className="text-[9px] font-[family-name:var(--font-mono)] text-[#3a3a2e] truncate">
              feat. {project.features.join(", ")}
            </p>
          )}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#c8f06a] uppercase tracking-[0.12em] bg-[#c8f06a]/10 px-2 py-[2px] rounded-full">
              {project.totalStreams}
            </span>
            <span className="text-[9px] font-[family-name:var(--font-mono)] text-[#3a3a2e]">
              {project.totalDuration}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
