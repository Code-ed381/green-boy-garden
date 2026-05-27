"use client";

import { useMemo } from "react";
import { releases, projects } from "@/lib/releases";
import ReleaseCard from "@/components/music/ReleaseCard";
import ProjectCard from "@/components/music/ProjectCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MusicPage() {
  useScrollReveal();

  const featuredRelease = useMemo(
    () => releases.find((r) => r.featured) || releases[0],
    []
  );

  const singleReleases = useMemo(
    () => releases.filter((r) => r.role === "primary" && r.id !== featuredRelease.id),
    [featuredRelease]
  );

  const featuredOn = useMemo(
    () => releases.filter((r) => r.role === "feature"),
    []
  );

  const totalItems = releases.length;

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Header */}
        <div data-reveal className="mb-16">
          <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em] mb-4">
            discography
          </p>
          <h1
            className="text-[48px] lg:text-[80px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.9] tracking-[-0.02em]"
            style={{ fontFeatureSettings: '"ss01", "cv01"' }}
          >
            Music
          </h1>
          <p className="mt-3 text-[11px] font-[family-name:var(--font-mono)] text-[#6b6b5e] uppercase tracking-[0.15em]">
            {totalItems} item{totalItems !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Featured release */}
        <div data-reveal className="mb-16" style={{ transitionDelay: "0.1s" }}>
          <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.12em] mb-4">
            featured
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <ReleaseCard release={featuredRelease} />
          </div>
        </div>

        {/* Projects (EPs) */}
        {projects.length > 0 && (
          <div className="mb-16">
            <div data-reveal className="mb-6" style={{ transitionDelay: "0.2s" }}>
              <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em]">
                EPs & projects
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
              {projects.map((project, i) => (
                <div key={project.id} data-reveal style={{ transitionDelay: `${0.3 + i * 0.1}s` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Releases */}
        {singleReleases.length > 0 && (
          <div className="mb-16">
            <div data-reveal className="mb-6" style={{ transitionDelay: `${0.3 + projects.length * 0.1}s` }}>
              <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em]">
                releases
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
              {singleReleases.map((release, i) => (
                <div key={release.id} data-reveal style={{ transitionDelay: `${0.4 + (projects.length + i) * 0.1}s` }}>
                  <ReleaseCard release={release} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured on */}
        {featuredOn.length > 0 && (
          <div>
            <div data-reveal className="mb-6" style={{ transitionDelay: `${0.4 + (projects.length + singleReleases.length) * 0.1}s` }}>
              <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#c8f06a] uppercase tracking-[0.15em]">
                featured on
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
              {featuredOn.map((release, i) => (
                <div key={release.id} data-reveal style={{ transitionDelay: `${0.5 + (projects.length + singleReleases.length + i) * 0.1}s` }}>
                  <ReleaseCard release={release} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
