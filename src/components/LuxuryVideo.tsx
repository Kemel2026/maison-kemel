"use client";

import { useEffect, useRef } from "react";

type LuxuryVideoProps = {
  src: string;
  className?: string;
  playbackRate?: number;
};

export default function LuxuryVideo({
  src,
  className = "",
  playbackRate = 0.5,
}: LuxuryVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/15 to-white/20" />
    </div>
  );
}