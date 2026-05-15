"use client";

import { useEffect, useState } from "react";

interface MusicSplashScreenProps {
  onComplete: () => void;
}

export default function MusicSplashScreen({
  onComplete,
}: MusicSplashScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [shouldSkip, setShouldSkip] = useState(false);

  useEffect(() => {
    // Check if this is first visit to music section
    const hasVisitedMusic = localStorage.getItem("hasVisitedMusic");

    if (hasVisitedMusic) {
      // If already visited, skip splash screen entirely
      setShouldSkip(true);
      onComplete();
    } else {
      // First visit - show splash screen
      setIsVisible(true);

      // Show splash screen for 3 seconds
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsVisible(false);
          localStorage.setItem("hasVisitedMusic", "true");
          onComplete();
        }, 500); // Longer fade out for smoother transition
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  if (shouldSkip || !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Music logo with growing effect */}
      <img
        src="/greenboymusic.png"
        alt="Green Boy Music"
        className="w-full h-full object-contain opacity-80 animate-grow"
      />

      {/* Custom styles for growing animation */}
      <style jsx>{`
        @keyframes grow {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 0.8;
          }
        }

        .animate-grow {
          animation: grow 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
