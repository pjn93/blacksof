import React from "react";

export const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center px-4 bg-first-part">
      <p className="text-xl font-normal leading-[100%] mb-4">
        Performance in motion
      </p>

      {/* Second text block */}
      <p className="text-4xl font-semibold">Soft Trims and NVH Solutions</p>

      {/* Third text block */}
      <p className="text-4xl font-light">for seamless rides</p>
    </div>
  );
};
