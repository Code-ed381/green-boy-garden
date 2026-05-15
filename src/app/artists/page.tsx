"use client";

import { useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Music,
  User,
  Heart,
  Repeat,
  Shuffle,
  Volume2,
  MessageCircle,
  Video,
  Feather,
  Users,
  Briefcase,
  Code,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
} from "lucide-react";
import { artists, type Artist } from "@/lib/artists";

export default function ArtistsPage() {
  // Display first artist as featured artist
  const featuredArtist = artists[0];

  // Player state
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Video state
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Mock video data with mixed content types and categories
  const videos = [
    {
      id: "bhYlgOnd-Ro",
      title: "Asylum Official Music Video",
      category: "music-video",
      thumbnail: "https://img.youtube.com/vi/bhYlgOnd-Ro/hqdefault.jpg",
      duration: "3:45",
      views: "1.2M",
      description: "Official music video of single 'Asylum'",
    },
    {
      id: "xdtEM6El9K0",
      title: "Live Performance - Tidal Rave 2025",
      category: "live-performance",
      thumbnail: "https://img.youtube.com/vi/xdtEM6El9K0/hqdefault.jpg",
      duration: "5:12",
      views: "856K",
      description:
        "Electric live performance at Tidal Rave 2025 held at La Palm Royal Beach Hotel",
    },
    {
      id: "mamXmuO_rtQ",
      title: "Behind the Scenes - Studio Session",
      category: "behind-scenes",
      thumbnail: "https://img.youtube.com/vi/mamXmuO_rtQ/hqdefault.jpg",
      duration: "8:30",
      views: "423K",
      description: "Exclusive look into the creative process",
    },
    {
      id: "5YIc1wIDDa4",
      title: "Interview - Out Of The Blue Ep Media Tour",
      category: "interview",
      thumbnail: "https://img.youtube.com/vi/5YIc1wIDDa4/hqdefault.jpg",
      duration: "12:15",
      views: "234K",
      description: "Deep dive into inspiration and artistic vision",
    },
    {
      id: "n_xpLOG5HnY",
      title: "Acoustic Session - Glitch Africa",
      category: "music-video",
      thumbnail: "https://img.youtube.com/vi/n_xpLOG5HnY/hqdefault.jpg",
      duration: "4:20",
      views: "567K",
      description: "Intimate acoustic performance of 'Glitch Africa'",
    },
    {
      id: "tVEr2vwyAqs",
      title: "Festival Highlights - Summer Tour",
      category: "live-performance",
      thumbnail: "https://img.youtube.com/vi/tVEr2vwyAqs/hqdefault.jpg",
      duration: "6:45",
      views: "789K",
      description: "Best moments from the summer festival tour",
    },
  ];

  const categories = [
    { id: "all", name: "All Videos" },
    { id: "music-video", name: "Music Videos" },
    { id: "live-performance", name: "Live Performances" },
    { id: "interview", name: "Interviews" },
    { id: "behind-scenes", name: "Behind the Scenes" },
  ];

  // Filter videos based on selected category
  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  // Mock track data with additional song info
  const tracks = featuredArtist.releases.map((release, index) => ({
    ...release,
    duration: "3:24",
    album: release.title,
    artist: featuredArtist.name,
    image:
      index === 0
        ? "/olive/tangareen.png"
        : index === 1
          ? "/olive/olive3.png"
          : index === 2
            ? "/olive/asylum.png"
            : "/olive/lala.png",
  }));

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const currentTrack = tracks[currentTrackIndex];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section with Artist Image */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src="/olive/1.jpeg"
          alt={featuredArtist.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

        {/* Artist Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-10 lg:px-20 pb-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#7aad3a] animate-pulse" />
              <span className="text-sm text-[#7aad3a] tracking-[0.2em] font-medium">
                {featuredArtist.genre}
              </span>
            </div>
            <h1 className="text-[48px] sm:text-[64px] lg:text-[72px] font-medium text-[#f0f0ec] tracking-[-0.02em] mb-3">
              {featuredArtist.name}
            </h1>
            <p className="text-[18px] text-[#888880] mb-4">
              {featuredArtist.city} • {featuredArtist.streams} streams
            </p>
          </div>
        </div>
      </div>

      {/* Artist Details Section */}
      <div className="px-5 sm:px-10 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Bio */}
          <div className="mb-16">
            <h2 className="text-[24px] font-medium text-[#f0f0ec] mb-6">
              About
            </h2>
            <p className="text-[16px] text-[#888880] leading-relaxed max-w-3xl">
              {featuredArtist.bio}
            </p>
          </div>

          {/* Compact Spotify-Style Player */}
          <div className="mb-16">
            <h2 className="text-[24px] font-medium text-[#f0f0ec] mb-6">
              Discography
            </h2>

            {/* 2-Column Layout */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Player Interface - Left Column */}
              <div className="bg-[#181818] rounded-xl p-4 flex-1 lg:max-w-md">
                {/* Current Track Image */}
                <div className="mb-4">
                  <img
                    src={currentTrack.image}
                    alt={currentTrack.title}
                    className="w-full h-48 object-cover rounded-md shadow"
                  />
                </div>

                {/* Song Title and Favorite */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[16px] font-bold text-[#f0f0ec] truncate">
                      {currentTrack.title}
                    </h3>
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className="text-[#888880] hover:text-[#7aad3a] transition-colors"
                    >
                      <Heart
                        size={16}
                        fill={isLiked ? "currentColor" : "none"}
                      />
                    </button>
                  </div>
                  <p className="text-[13px] text-[#888880] truncate">
                    {currentTrack.artist}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-[11px] text-[#888880] mb-1">
                    <span>0:45</span>
                    <span>{currentTrack.duration}</span>
                  </div>
                  <div className="relative h-1 bg-[#404040] rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#1db954] rounded-full transition-all duration-300"
                      style={{ width: "35%" }}
                    />
                  </div>
                </div>

                {/* Compact Player Controls */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={handlePrevious}
                    className="text-[#888880] hover:text-[#f0f0ec] transition-colors"
                  >
                    <SkipBack size={18} />
                  </button>
                  <button
                    onClick={handlePlayPause}
                    className="w-10 h-10 bg-[#1db954] rounded-full flex items-center justify-center text-[#181818] hover:scale-105 transition-transform"
                  >
                    {isPlaying ? (
                      <Pause size={16} className="text-[#181818]" />
                    ) : (
                      <Play size={16} className="text-[#181818] ml-0.5" />
                    )}
                  </button>
                  <button
                    onClick={handleNext}
                    className="text-[#888880] hover:text-[#f0f0ec] transition-colors"
                  >
                    <SkipForward size={18} />
                  </button>
                </div>
              </div>

              {/* Compact Playlist - Right Column */}
              <div className="bg-[#181818] rounded-xl p-3 flex-1 lg:max-w-md">
                <h3 className="text-[14px] font-medium text-[#f0f0ec] mb-3">
                  Playlist
                </h3>
                <div className="space-y-1 max-h-64 lg:max-h-80 overflow-y-auto">
                  {tracks.map((track, index) => (
                    <div
                      key={`${track.title}-${index}`}
                      onClick={() => handleTrackSelect(index)}
                      className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-all ${
                        currentTrackIndex === index
                          ? "bg-[#282828]"
                          : "hover:bg-[#282828]"
                      }`}
                    >
                      <img
                        src={track.image}
                        alt={track.title}
                        className="w-8 h-8 rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[13px] text-[#f0f0ec] truncate">
                            {track.title}
                          </span>
                          <span className="text-[11px] text-[#888880]">
                            {track.duration}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#888880] truncate">
                          {track.year}
                        </div>
                      </div>
                      {currentTrackIndex === index && isPlaying && (
                        <div className="flex items-center gap-0.5 ml-2">
                          <div className="w-0.5 h-0.5 bg-[#1db954] rounded-full animate-pulse" />
                          <div className="w-0.5 h-0.5 bg-[#1db954] rounded-full animate-pulse" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <h2 className="text-[24px] font-medium text-[#f0f0ec] mb-6">
              Videos
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-[#7aad3a] text-[#0a0a0a]"
                      : "bg-[#1a1a1a] text-[#888880] hover:text-[#f0f0ec] hover:bg-[#2a2a2a]"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Single Column Video Section */}
            <div className="bg-[#181818] rounded-xl overflow-hidden">
              {/* Video Player */}
              <div className="relative w-full h-100">
                {isVideoPlaying && filteredVideos[currentVideoIndex] ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${filteredVideos[currentVideoIndex].id}?autoplay=1&rel=0`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-64 bg-[#1a1a1a]">
                    {filteredVideos[currentVideoIndex] && (
                      <div className="relative w-full h-full">
                        <img
                          src={filteredVideos[currentVideoIndex].thumbnail}
                          alt={filteredVideos[currentVideoIndex].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <button
                            onClick={() => setIsVideoPlaying(true)}
                            className="w-12 h-12 bg-[#7aad3a]/90 rounded-full flex items-center justify-center hover:bg-[#7aad3a] hover:scale-110 transition-all"
                          >
                            <Play size={18} className="text-[#0a0a0a] ml-0.5" />
                          </button>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <h2 className="text-[14px] font-bold text-white mb-1 truncate">
                            {filteredVideos[currentVideoIndex].title}
                          </h2>
                          <p className="text-[11px] text-white/80">
                            {filteredVideos[currentVideoIndex].views} views •{" "}
                            {filteredVideos[currentVideoIndex].duration}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {isVideoPlaying && (
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="absolute top-3 right-3 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors text-sm"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Video Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-[16px] font-bold text-[#f0f0ec] mb-1">
                      {filteredVideos[currentVideoIndex]?.title}
                    </h4>
                    <p className="text-[12px] text-[#888880] mb-2">
                      {filteredVideos[currentVideoIndex]?.description}
                    </p>
                    <div className="flex items-center gap-4 text-[11px] text-[#888880]">
                      <span>
                        {filteredVideos[currentVideoIndex]?.views} views
                      </span>
                      <span>•</span>
                      <span>{filteredVideos[currentVideoIndex]?.duration}</span>
                      <span>•</span>
                      <span className="capitalize">
                        {
                          categories.find(
                            (c) =>
                              c.id ===
                              filteredVideos[currentVideoIndex]?.category,
                          )?.name
                        }
                      </span>
                    </div>
                  </div>
                </div>

                {/* Video Carousel */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-3 mt-10">
                    <h3 className="text-[14px] font-medium text-[#f0f0ec]">
                      More Videos
                    </h3>
                    <div className="flex gap-1">
                      <button
                        onClick={() =>
                          setCurrentVideoIndex(
                            (prev) =>
                              (prev - 1 + filteredVideos.length) %
                              filteredVideos.length,
                          )
                        }
                        className="w-6 h-6 bg-[#2a2a2a] rounded-full flex items-center justify-center text-[#888880] hover:text-[#f0f0ec] hover:bg-[#3a3a3a] transition-all"
                      >
                        <ChevronLeft size={12} />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentVideoIndex(
                            (prev) => (prev + 1) % filteredVideos.length,
                          )
                        }
                        className="w-6 h-6 bg-[#2a2a2a] rounded-full flex items-center justify-center text-[#888880] hover:text-[#f0f0ec] hover:bg-[#3a3a3a] transition-all"
                      >
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Thumbnail Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {filteredVideos.map((video, index) => (
                      <div
                        key={video.id}
                        onClick={() => {
                          setCurrentVideoIndex(index);
                          setIsVideoPlaying(true);
                        }}
                        className={`cursor-pointer group rounded overflow-hidden transition-all ${
                          currentVideoIndex === index
                            ? "ring-2 ring-[#7aad3a]"
                            : ""
                        }`}
                      >
                        <div className="relative aspect-video">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <PlayCircle
                              size={20}
                              className="text-white opacity-0 group-hover:opacity-90 transition-opacity"
                            />
                          </div>
                          <div className="absolute bottom-1 right-1 bg-black/70 px-1 py-0.5 rounded text-[9px] text-white">
                            {video.duration}
                          </div>
                        </div>
                        <div className="p-1">
                          <h5 className="text-[10px] font-medium text-[#f0f0ec] truncate leading-tight">
                            {video.title}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-[24px] font-medium text-[#f0f0ec] mb-6">
              Connect
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                aria-label="Instagram"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 opacity-100 drop-shadow-lg text-white"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                aria-label="Twitter"
              >
                <img
                  src="/icons/twitter.png"
                  alt="Twitter"
                  className="w-6 h-6 opacity-100 drop-shadow-lg"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                aria-label="Facebook"
              >
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 opacity-100 drop-shadow-lg"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                aria-label="Threads"
              >
                <img
                  src="/icons/threads.png"
                  alt="Threads"
                  className="w-6 h-6 opacity-100 drop-shadow-lg"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                aria-label="TikTok"
              >
                <img
                  src="/icons/tiktok.png"
                  alt="TikTok"
                  className="w-6 h-6 opacity-100 drop-shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
