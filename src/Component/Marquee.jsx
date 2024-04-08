import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <>
      <div
        // data-scroll
        // data-scroll-section
        // data-scroll-speed=".4"
        className="bg-[#004d43] w-full py-10 sm:py-24 mt-24 rounded-tl-lg rounded-tr-lg"
      >
        <div className="flex whitespace-nowrap overflow-hidden items-center">
          {["WE ARE OCHI", "WE ARE OCHI"].map((item, index) => {
            return (
              <div key={index} className="border-[#2e6d65] border">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    ease: "linear",
                    repeat: Infinity,
                    duration: 5,
                  }}
                  className="text-white text-[100px] sm:text-[300px] font-['Founders_Grotesk_X-Condensed] font-bold leading-none tracking-tighter"
                >
                  {item}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Marquee;
