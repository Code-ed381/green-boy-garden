"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onHoverIn = () => {
      if (dot.current) {
        dot.current.style.width = "40px";
        dot.current.style.height = "40px";
        dot.current.style.margin = "-16px 0 0 -16px";
      }
    };

    const onHoverOut = () => {
      if (dot.current) {
        dot.current.style.width = "8px";
        dot.current.style.height = "8px";
        dot.current.style.margin = "-4px 0 0 -4px";
      }
    };

    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onHoverIn);
      el.addEventListener("mouseleave", onHoverOut);
    });

    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverIn);
        el.removeEventListener("mouseleave", onHoverOut);
      });
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={dot}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        width: 8,
        height: 8,
        margin: "-4px 0 0 -4px",
        borderRadius: "50%",
        background: "#f0ede6",
        willChange: "transform",
        transition: "width 0.2s ease-out, height 0.2s ease-out, margin 0.2s ease-out",
      }}
    />
  );
}
