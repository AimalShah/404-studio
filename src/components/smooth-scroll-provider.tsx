// components/SmoothScrollProvider.jsx
"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    let lenis: Lenis | null = null;
    const timeout = setTimeout(() => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis!.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }, 100); // wait a moment for layout

    return () => {
      clearTimeout(timeout);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
