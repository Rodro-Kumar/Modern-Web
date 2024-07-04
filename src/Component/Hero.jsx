import React from "react";
import Btn1 from "./Common/Btn1";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div id="hero" className="mt-[112px]">
        <div className="container">
          {/* =============== */}
          <div className="heading xl:0 block px-4 sm:hidden">
            {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map(
              (item, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-col items-start md:flex-row md:items-center">
                      {index === 1 && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "150px" }}
                          transition={{
                            ease: [0.76, 0, 0.24, 1],
                            duration: 1,
                          }}
                          className="heroOchi mb-2 mr-3 h-[60px] w-[50px] rounded-lg bg-cover bg-center sm:w-36 md:h-[96px]"
                        ></motion.div>
                      )}
                      <motion.h1
                        initial={{ transform: "translateX(-250px)" }}
                        animate={{ transform: "translateX(0)" }}
                        transition={{
                          ease: [0.76, 0, 0.24, 1],
                          duration: 1,
                        }}
                        className="font-FjallaOne text-[40px] font-semibold leading-[8vw] text-black max-[480px]:leading-[10vw] max-[370px]:leading-[12vw] max-[315px]:leading-[15vw] sm:text-[60px] md:text-[100px] lg:text-[108px] lg:leading-7"
                      >
                        {item}
                      </motion.h1>
                    </div>
                  </div>
                );
              },
            )}
          </div>
          {/* ================== */}
          <div className="heading xl:0 hidden px-4 sm:block">
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
                          className="mb-2 mr-3 h-[60px] w-[50px] rounded-lg bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center sm:w-36 md:h-[96px]"
                        ></motion.div>
                      )}
                      <motion.h1 className="font-FjallaOne text-[40px] font-semibold leading-[12vw] text-black sm:text-[60px] md:text-[100px] lg:text-[108px] lg:leading-[8.5vw]">
                        {item}
                      </motion.h1>
                    </div>
                  </div>
                );
              },
            )}
          </div>
          {/* ====================== */}
        </div>
        <div className="hero-line mt-[100px] border-t-[1px] border-[#00000044] py-4 md:mt-[256px]">
          <div className="container flex flex-col items-start justify-between gap-y-6 px-4 sm:flex-row sm:items-center sm:gap-y-0 xl:px-0">
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
