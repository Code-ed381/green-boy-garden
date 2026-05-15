"use client";

import { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  ExternalLink,
  Repeat,
  Shuffle,
  List,
  Maximize2,
} from "lucide-react";
import { type Release } from "@/lib/releases";
import Image from "next/image";

interface MiniPlayerProps {
  track: Release;
  isPlaying: boolean;
  onTogglePlayPause: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  queue?: Release[];
  currentIndex?: number;
}

export default function MiniPlayer({
  track,
  isPlaying,
  onTogglePlayPause,
  onPrevious,
  onNext,
  queue = [],
  currentIndex = 0,
}: MiniPlayerProps) {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(180); // 3 minutes default
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load last played track from localStorage
  useEffect(() => {
    const savedTrack = localStorage.getItem("lastPlayedTrack");
    if (savedTrack) {
      try {
        const parsed = JSON.parse(savedTrack);
        if (parsed.id === track.id) {
          // Use setTimeout to avoid synchronous setState in effect
          setTimeout(() => {
            setProgress(parsed.progress || 0);
            setCurrentTime(parsed.currentTime || 0);
          }, 0);
        }
      } catch (e) {
        console.error("Failed to load saved track state:", e);
      }
    }
  }, [track.id]);

  // Save current track state to localStorage
  useEffect(() => {
    localStorage.setItem(
      "lastPlayedTrack",
      JSON.stringify({
        id: track.id,
        progress,
        currentTime,
        timestamp: Date.now(),
      }),
    );
  }, [track.id, progress, currentTime]);

  // Simulate playback progress
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 1;
          if (newTime >= duration) {
            // Handle track end
            if (isRepeat) {
              return 0; // Repeat current track
            } else {
              onNext?.(); // Go to next track
              return 0;
            }
          }
          return newTime;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, duration, isRepeat, onNext]);

  // Update progress bar
  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    const timeoutId = setTimeout(() => {
      setProgress((currentTime / duration) * 100);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [currentTime, duration]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't handle shortcuts when user is typing in input fields
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.code) {
        case "Space":
          e.preventDefault();
          onTogglePlayPause();
          break;
        case "ArrowLeft":
          e.preventDefault();
          onPrevious?.();
          break;
        case "ArrowRight":
          e.preventDefault();
          onNext?.();
          break;
        case "ArrowUp":
          e.preventDefault();
          setVolume((prev) => Math.min(1, prev + 0.1));
          break;
        case "ArrowDown":
          e.preventDefault();
          setVolume((prev) => Math.max(0, prev - 0.1));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onTogglePlayPause, onPrevious, onNext]);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickPercentage = clickX / rect.width;
    const newTime = clickPercentage * duration;

    setCurrentTime(newTime);
    setProgress(clickPercentage * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <>
      {/* Main Mini Player */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-[#0c0c0a] border-t border-[#1e1e1e] z-50 transition-all duration-300 ${
          isExpanded ? "h-32" : "h-20"
        }`}
      >
        <div className="flex items-center justify-between h-full px-4 lg:px-6">
          {/* Track Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Album Art */}
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0">
              <Image
                src={track.coverImage}
                alt={`${track.title} Cover`}
                fill
                className="object-cover rounded-lg"
                sizes="56px"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[#7aad3a] rounded-full animate-pulse"
                        style={{
                          height: `${12 + (Math.sin(Date.now() / 1000 + i) * 0.5 + 0.5) * 8}px`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Track Details */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm lg:text-base font-medium text-[#f0f0ec] truncate">
                {track.title}
              </h4>
              <p className="text-xs lg:text-sm text-[#888] truncate">
                {track.artist}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Shuffle */}
            <button
              onClick={() => setIsShuffle(!isShuffle)}
              className={`p-2 rounded-full transition-colors ${
                isShuffle
                  ? "text-[#7aad3a]"
                  : "text-[#666] hover:text-[#f0f0ec]"
              }`}
              aria-label="Toggle shuffle"
            >
              <Shuffle size={16} />
            </button>

            {/* Previous */}
            <button
              onClick={onPrevious}
              className="p-2 text-[#888] hover:text-[#f0f0ec] transition-colors"
              aria-label="Previous track"
            >
              <SkipBack size={18} />
            </button>

            {/* Play/Pause */}
            <button
              onClick={onTogglePlayPause}
              className="w-10 h-10 lg:w-12 lg:h-12 bg-[#7aad3a] rounded-full flex items-center justify-center hover:bg-[#8abd4a] transition-colors shadow-lg"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={18} className="text-[#0a0a0a]" />
              ) : (
                <Play size={18} className="text-[#0a0a0a] ml-0.5" />
              )}
            </button>

            {/* Next */}
            <button
              onClick={onNext}
              className="p-2 text-[#888] hover:text-[#f0f0ec] transition-colors"
              aria-label="Next track"
            >
              <SkipForward size={18} />
            </button>

            {/* Repeat */}
            <button
              onClick={() => setIsRepeat(!isRepeat)}
              className={`p-2 rounded-full transition-colors ${
                isRepeat ? "text-[#7aad3a]" : "text-[#666] hover:text-[#f0f0ec]"
              }`}
              aria-label="Toggle repeat"
            >
              <Repeat size={16} />
            </button>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Volume */}
            <div className="hidden sm:flex items-center gap-2">
              <Volume2 size={16} className="text-[#888]" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-[#2a2a2a] rounded-full appearance-none cursor-pointer accent-[#7aad3a]"
                aria-label="Volume"
              />
            </div>

            {/* Queue */}
            {queue.length > 0 && (
              <button
                onClick={() => setShowQueue(!showQueue)}
                className="p-2 text-[#888] hover:text-[#f0f0ec] transition-colors relative"
                aria-label="Toggle queue"
              >
                <List size={16} />
                {queue.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#7aad3a] text-[#0a0a0a] text-xs rounded-full flex items-center justify-center font-medium">
                    {queue.length}
                  </span>
                )}
              </button>
            )}

            {/* Expand */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-[#888] hover:text-[#f0f0ec] transition-colors"
              aria-label="Expand player"
            >
              <Maximize2 size={16} className={isExpanded ? "rotate-180" : ""} />
            </button>

            {/* External Links */}
            <div className="hidden lg:flex items-center gap-2">
              {track.spotifyUrl && (
                <a
                  href={track.spotifyUrl}
                  className="p-2 text-[#888] hover:text-[#7aad3a] transition-colors"
                  aria-label="Open in Spotify"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div
            ref={progressBarRef}
            className="relative h-1 bg-[#1e1e1e] cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-[#7aad3a] transition-all duration-100 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#7aad3a] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Time Display */}
          <div className="flex justify-between px-4 lg:px-6 py-1 text-xs text-[#666]">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* Queue Sidebar */}
      {showQueue && queue.length > 0 && (
        <div className="fixed right-0 bottom-20 top-0 w-80 bg-[#0c0c0a] border-l border-[#1e1e1e] z-40 overflow-hidden">
          <div className="p-4 border-b border-[#1e1e1e]">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#f0f0ec]">Queue</h3>
              <button
                onClick={() => setShowQueue(false)}
                className="p-1 text-[#888] hover:text-[#f0f0ec]"
              >
                ×
              </button>
            </div>
          </div>

          <div className="overflow-y-auto h-full pb-32">
            {queue.map((queueTrack, index) => (
              <div
                key={queueTrack.id}
                className={`flex items-center gap-3 p-3 hover:bg-white/5 transition-colors ${
                  index === currentIndex ? "bg-[#7aad3a]/10" : ""
                }`}
              >
                <div className="text-xs text-[#666] w-4">
                  {index === currentIndex && isPlaying ? "▶" : index + 1}
                </div>
                <div className="w-10 h-10 relative flex-shrink-0">
                  <Image
                    src={queueTrack.coverImage}
                    alt={`${queueTrack.title} Cover`}
                    fill
                    className="object-cover rounded"
                    sizes="40px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#f0f0ec] truncate">
                    {queueTrack.title}
                  </p>
                  <p className="text-xs text-[#888] truncate">
                    {queueTrack.artist}
                  </p>
                </div>
                <div className="text-xs text-[#666]">
                  {queueTrack.duration || "3:24"}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
