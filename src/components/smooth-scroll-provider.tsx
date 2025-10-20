// components/SmoothScrollProvider.jsx
'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, 
      easing: (t) => Math.min(1, 8.001 - Math.pow(2, -10 * t)), 
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;