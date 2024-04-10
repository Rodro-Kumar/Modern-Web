import { motion } from "framer-motion";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Marquee = () => {
  return (
    <Fade duration={"1000"}>
      <div className="bg-[#004d43] w-full py-10 sm:py-24 mt-10 sm:mt-40 rounded-tl-lg rounded-tr-lg">
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
                    duration: 10,
                  }}
                  className="text-white max-[346px]:text-[50px] text-[100px] sm:text-[150px] md:text-[300px] font-['Founders_Grotesk_X-Condensed] font-bold leading-none tracking-tighter"
                >
                  {item}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
};

export default Marquee;
