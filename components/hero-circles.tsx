import React from "react";

export function HeroCircles() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-purple-500/20 animate-pulse"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full border border-purple-500/30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full border border-purple-500/30"></div>
      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-l border-white/20 h-full"></div>
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-6 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-t border-white/20 w-full"></div>
        ))}
      </div>
    </div>
  );
} 