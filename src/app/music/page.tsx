"use client";

import { useState, useEffect, useMemo } from "react";
import { releases, type Release } from "@/lib/releases";
import MusicSplashScreen from "@/components/MusicSplashScreen";
import HeroSection from "@/components/music/HeroSection";
import DiscoveryControls from "@/components/music/DiscoveryControls";
import ReleaseCard from "@/components/music/ReleaseCard";
import MiniPlayer from "@/components/music/MiniPlayer";
import Visualizer from "@/components/music/Visualizer";
import StatPills from "@/components/music/StatPills";

interface FilterState {
  search: string;
  artist: string;
  genre: string;
  type: string;
  year: string;
  explicit: boolean;
  sortBy: string;
}

export default function MusicPage() {
  const [currentTrack, setCurrentTrack] = useState<Release | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [queue, setQueue] = useState<Release[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    artist: "All",
    genre: "All",
    type: "All",
    year: "All",
    explicit: false,
    sortBy: "popular",
  });

  // Handle splash screen completion
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Get featured release (first featured or first release)
  const featuredRelease = useMemo(() => {
    return releases.find((r) => r.featured) || releases[0];
  }, []);

  // Filter and sort releases
  const filteredReleases = useMemo(() => {
    let filtered = releases.filter((release) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        if (
          !release.title.toLowerCase().includes(searchLower) &&
          !release.artist.toLowerCase().includes(searchLower) &&
          !release.genre?.toLowerCase().includes(searchLower)
        ) {
          return false;
        }
      }

      // Artist filter
      if (filters.artist !== "All" && release.artist !== filters.artist) {
        return false;
      }

      // Genre filter
      if (filters.genre !== "All" && release.genre !== filters.genre) {
        return false;
      }

      // Type filter
      if (filters.type !== "All" && release.type !== filters.type) {
        return false;
      }

      // Year filter
      if (filters.year !== "All" && release.year.toString() !== filters.year) {
        return false;
      }

      // Explicit filter
      if (filters.explicit && !release.explicit) {
        return false;
      }

      return true;
    });

    // Sort releases
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "popular":
          // Sort by streams (convert to number for comparison)
          const aStreams = parseFloat(a.streams.replace(/[^0-9.]/g, ""));
          const bStreams = parseFloat(b.streams.replace(/[^0-9.]/g, ""));
          return bStreams - aStreams;
        case "newest":
          return b.year - a.year;
        case "oldest":
          return a.year - b.year;
        case "a-z":
          return a.title.localeCompare(b.title);
        case "z-a":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters]);

  // Calculate stats for stat pills
  const stats = useMemo(() => {
    const totalStreams = releases.reduce((sum, release) => {
      const streams = parseFloat(release.streams.replace(/[^0-9.]/g, ""));
      return sum + streams;
    }, 0);

    const genreCount = releases.reduce(
      (acc, release) => {
        if (release.genre) {
          acc[release.genre] = (acc[release.genre] || 0) + 1;
        }
        return acc;
      },
      {} as Record<string, number>,
    );

    const topGenre =
      Object.entries(genreCount).sort(([, a], [, b]) => b - a)[0]?.[0] ||
      "Afrobeats";
    const uniqueArtists = new Set(releases.map((r) => r.artist)).size;

    return {
      totalReleases: releases.length,
      totalStreams:
        totalStreams >= 1000000
          ? `${(totalStreams / 1000000).toFixed(1)}M+`
          : `${Math.floor(totalStreams / 1000)}K+`,
      topGenre,
      totalArtists: uniqueArtists,
    };
  }, []);

  // Play track
  const playTrack = (release: Release) => {
    setCurrentTrack(release);
    setIsPlaying(true);

    // Add to queue if not already there
    if (!queue.find((r) => r.id === release.id)) {
      setQueue([...queue, release]);
    }
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    if (currentTrack) {
      setIsPlaying(!isPlaying);
    }
  };

  // Add to queue
  const addToQueue = (release: Release) => {
    setQueue([...queue, release]);
  };

  // Previous track
  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setCurrentTrack(queue[newIndex]);
      setIsPlaying(true);
    }
  };

  // Next track
  const handleNext = () => {
    if (currentIndex < queue.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setCurrentTrack(queue[newIndex]);
      setIsPlaying(true);
    }
  };

  // Update current index when track changes
  useEffect(() => {
    if (currentTrack) {
      const index = queue.findIndex((r) => r.id === currentTrack.id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [currentTrack, queue]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Splash Screen */}
      {showSplash && <MusicSplashScreen onComplete={handleSplashComplete} />}

      {/* Main Content */}
      <main className="pb-20">
        <div className="p-6 lg:p-12 xl:p-16">
          {/* Hero Section */}
          <HeroSection featuredRelease={featuredRelease} onPlay={playTrack} />

          {/* Visualizer */}
          <div className="h-16 mb-8">
            <Visualizer isPlaying={isPlaying} />
          </div>

          {/* Stat Pills */}
          <StatPills
            totalReleases={stats.totalReleases}
            totalStreams={stats.totalStreams}
            topGenre={stats.topGenre}
            totalArtists={stats.totalArtists}
          />

          {/* Discovery Controls */}
          <DiscoveryControls
            filters={filters}
            onFiltersChange={setFilters}
            resultCount={filteredReleases.length}
          />

          {/* Release Grid */}
          {filteredReleases.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredReleases.map((release) => (
                <ReleaseCard
                  key={release.id}
                  release={release}
                  onPlay={playTrack}
                  onPause={togglePlayPause}
                  isActive={currentTrack?.id === release.id}
                  isPlaying={isPlaying && currentTrack?.id === release.id}
                  onAddToQueue={addToQueue}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-[#f0f0ec] mb-2">
                No releases found
              </h3>
              <p className="text-[#888] mb-6">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() =>
                  setFilters({
                    search: "",
                    artist: "All",
                    genre: "All",
                    type: "All",
                    year: "All",
                    explicit: false,
                    sortBy: "popular",
                  })
                }
                className="px-6 py-2 bg-[#7aad3a] text-[#0a0a0a] rounded-full hover:bg-[#8abd4a] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Mini Player */}
      {currentTrack && (
        <MiniPlayer
          track={currentTrack}
          isPlaying={isPlaying}
          onTogglePlayPause={togglePlayPause}
          onPrevious={handlePrevious}
          onNext={handleNext}
          queue={queue}
          currentIndex={currentIndex}
        />
      )}
    </div>
  );
}
