import React from "react";
import Btn1 from "./Common/Btn1";

const Hero = () => {
  return (
    <>
      <div className="mt-[112px]">
        <div className="container">
          <div className="heading">
            {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map(
              (item, index) => {
                return (
                  <div key={index}>
                    <div className="flex items-center">
                      {index === 1 && (
                        <div className="w-36 h-[96px] bg-red-500 mb-2 rounded-lg mr-3"></div>
                      )}
                      <h1 className="font-FjallaOne text-[108px] leading-[8.5vw] font-semibold text-black ">
                        {item}
                      </h1>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="border-t-[1px] border-[#00000044] mt-[256px] py-4">
          <div className="container flex justify-between items-center">
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
            <div className="">
              <Btn1></Btn1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
