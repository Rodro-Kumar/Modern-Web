import React from "react";
import Btn1 from "./Common/Btn1";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div id="hero" className="mt-[112px]">
        <div className="container">
          {/* =============== */}
          <div className="heading px-4 xl:0 block sm:hidden">
            {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map(
              (item, index) => {
                return (
                  <div key={index}>
                    <div className="flex items-start flex-col md:flex-row md:items-center">
                      {index === 1 && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "150px" }}
                          transition={{
                            ease: [0.76, 0, 0.24, 1],
                            duration: 1,
                          }}
                          className="w-[50px] sm:w-36 h-[60px] md:h-[96px] bg-[url('./src/assets/content-image01.jpg')] bg-cover bg-center mb-2 rounded-lg mr-3"
                        ></motion.div>
                      )}
                      <motion.h1
                        initial={{ transform: "translateX(-250px)" }}
                        animate={{ transform: "translateX(0)" }}
                        transition={{
                          ease: [0.76, 0, 0.24, 1],
                          duration: 1,
                        }}
                        className="font-FjallaOne text-[40px] sm:text-[60px] md:text-[100px] lg:text-[108px] leading-[8vw] lg:leading-7 font-semibold text-black max-[480px]:leading-[10vw] max-[370px]:leading-[12vw] max-[315px]:leading-[15vw]"
                      >
                        {item}
                      </motion.h1>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          {/* ================== */}
          <div className="heading px-4 xl:0 hidden sm:block">
            {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map(
              (item, index) => {
                return (
                  <div key={index}>
                    <div className="flex items-center">
                      {index === 1 && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "150px" }}
                          transition={{
                            ease: [0.76, 0, 0.24, 1],
                            duration: 1,
                          }}
                          className="w-[50px] sm:w-36 h-[60px] md:h-[96px] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center mb-2 rounded-lg mr-3"
                        ></motion.div>
                      )}
                      <motion.h1 className="font-FjallaOne text-[40px] sm:text-[60px] md:text-[100px] lg:text-[108px] leading-[12vw] lg:leading-[8.5vw] font-semibold text-black">
                        {item}
                      </motion.h1>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          {/* ====================== */}
        </div>
        <div className="hero-line border-t-[1px] border-[#00000044] mt-[100px] py-4 md:mt-[256px]">
          <div className="container px-4 xl:px-0 gap-y-6 sm:gap-y-0 flex justify-between items-start flex-col sm:flex-row sm:items-center">
            {[
              "For public and private companies",
              "From the first pitch to IPO",
            ].map((item, index) => {
              return (
                <p key={index} className="text-[16px] font-normal">
                  {item}
                </p>
              );
            })}
            <div>
              <Btn1></Btn1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
