"use client";

import { useEffect, useRef, useState } from "react";

interface VisualizerProps {
  isPlaying: boolean;
  className?: string;
}

export default function Visualizer({
  isPlaying,
  className = "",
}: VisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Use setTimeout to avoid synchronous setState in effect
    const timeoutId = setTimeout(() => {
      setReducedMotion(mediaQuery.matches);
    }, 0);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation variables
    let time = 0;
    const bars = 32;
    const barWidth = canvas.width / (bars * window.devicePixelRatio);

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isPlaying && !reducedMotion) {
        time += 0.05;

        // Draw frequency bars
        for (let i = 0; i < bars; i++) {
          const x = i * barWidth;
          const height =
            Math.abs(Math.sin(time + i * 0.3)) * 30 + Math.random() * 10;
          const y = canvas.height / (2 * window.devicePixelRatio) - height / 2;

          // Create gradient for bars
          const gradient = ctx.createLinearGradient(0, y, 0, y + height);
          gradient.addColorStop(0, "#7aad3a");
          gradient.addColorStop(1, "#5a8028");

          ctx.fillStyle = gradient;
          ctx.fillRect(x, y, barWidth - 2, height);
        }

        // Draw waveform
        ctx.beginPath();
        ctx.strokeStyle = "#7aad3a";
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.6;

        for (let i = 0; i < canvas.width / window.devicePixelRatio; i++) {
          const y =
            canvas.height / (2 * window.devicePixelRatio) +
            Math.sin(time * 2 + i * 0.02) * 20 * Math.sin(time + i * 0.01);

          if (i === 0) {
            ctx.moveTo(i, y);
          } else {
            ctx.lineTo(i, y);
          }
        }

        ctx.stroke();
        ctx.globalAlpha = 1;
      } else {
        // Draw static bars when not playing
        for (let i = 0; i < bars; i++) {
          const x = i * barWidth;
          const height = 5;
          const y = canvas.height / (2 * window.devicePixelRatio) - height / 2;

          ctx.fillStyle = "#7aad3a";
          ctx.globalAlpha = 0.3;
          ctx.fillRect(x, y, barWidth - 2, height);
        }
        ctx.globalAlpha = 1;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ width: "100%", height: "100%" }}
      aria-label="Audio visualizer"
    />
  );
}
