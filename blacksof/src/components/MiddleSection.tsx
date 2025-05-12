import React, { useRef } from "react";
import CarBody from "../assets/cardBody.svg";
// import { motion } from "framer-motion";
import { motion, type MotionValue, useScroll,useTransform } from "motion/react"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}


export const MiddleSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress,-150)
  return (
    <div
    ref={ref}
      className="h-screen flex flex-col justify-center text-center text-white bg-black" // Added text-white class
    >
      <p 
        className="font-manrope text-[48px] text-center"
        style={{ fontWeight: 300 }}
      >
        Evolving the drive with <strong>360-degree</strong>
        <br /> nonwoven solutions
      </p>

      <motion.div
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        className=" flex flex-row justify-evenly items-center text-center text-white " // Added text-white class
        style={{ y }}
      >
        <div>
          <p
            className="text-[28px] font-normal mb-4 text-left"
            style={{ fontWeight: 700 }}
          >
            Passenger vehicles
          </p>
          <p className="text-[18px] text-left">
            Revving up Nonwoven innovation from <br /> interior to exterior.
          </p>
        </div>

        <img
          src={CarBody}
          alt="car"
          style={{ width: "1063px", height: "540px" }}
        />
      </motion.div>
    </div>
  );
};
