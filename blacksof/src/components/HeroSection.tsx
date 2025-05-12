import React from "react";

export const HeroSection = () => {
  
  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-center px-4 text-white" // Added text-white class

      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} 
    >
      <p
        className="font-manrope text-[22px] font-normal leading-[100%] mb-4"
        style={{ fontWeight: 400 }}
      >
        Performance in motion
      </p>

      {/* Second text block */}
      <p
        className="font-manrope text-[48px] font-semibold  text-center"
        style={{ fontWeight: 600 }}
      >
        Soft Trims and NVH Solutions
      </p>

      {/* Third text block */}
      <p
        className="font-manrope text-[48px] font-light text-center"
        style={{ fontWeight: 300 }}
      >
        for seamless rides
      </p>
    </div>
  );
};
