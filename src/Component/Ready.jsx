import React, { useEffect, useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Fade } from "react-awesome-reveal";

const Ready = () => {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);
    });
  });

  return (
    <>
      <div
        id="start"
        className="bg-[#cdea68] py-44 cursor-text rounded-tr-xl rounded-tl-xl sm:rounded-none"
      >
        <div className="container">
          <div className="flex flex-col items-center justify-center relative">
            <h2 className="overflow-hidden text-[60px] sm:text-[100px] lg:text-[160px] xl:text-[220px] font-semibold font-FjallaOne text-[#212121] text-center leading-none">
              <Fade triggerOnce="true" direction="up">
                READY{" "}
              </Fade>

              <Fade triggerOnce="true" direction="up">
                TO START
              </Fade>
              <Fade triggerOnce="true" direction="up">
                THE PROJECT?
              </Fade>
            </h2>
            <div className="flex items-center gap-x-9 absolute lg:top-[65%] sm:top-[135%] top-[160%] left-1/2 -translate-x-1/2 -translate-y-[65%]">
              <div className="w-28 h-28 lg:w-52 lg:h-52 rounded-full bg-white flex items-center justify-center">
                <div
                  className="lg:w-[130px] w-16
                 lg:h-[130px] h-16 bg-black rounded-full relative"
                >
                  <div
                    style={{
                      transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                    }}
                    className="w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"
                  >
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="w-28 h-28 lg:w-52 lg:h-52 rounded-full bg-white flex items-center justify-center">
                <div
                  className="lg:w-[130px] w-16
                  lg:h-[130px] h-16 bg-black rounded-full relative overflow-hidden"
                >
                  <div
                    style={{
                      transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                    }}
                    className="w-full  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"
                  >
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 mt-[190px] lg:mt-8">
            <button className="z-10 relative group start-project-btn text-white bg-[#272727] rounded-full py-[10px] pl-6 uppercase text-sm sm:text-base font-normal flex items-center gap-x-[17px] overflow-hidden">
              <a href="#">start the project</a>
              <div className="round w-8 h-8 lg:w-12 lg:h-12 bg-white scale-[0.3] rounded-full mr-3 flex items-center justify-center text-black text-2xl  group-hover:scale-[1]">
                <RxArrowTopRight className="opacity-0 group-hover:opacity-[1] icon" />
              </div>
            </button>
            <p className="text-base font-normal font-['Neue_Montreal'] uppercase">
              or
            </p>
            <button className="z-10 relative group start-project-btn text-black border-[1.5px] sm:border-2 border-black bg-transparent rounded-full py-[8px] lg:py-[10px] pl-6 uppercase text-sm lg:text-base font-normal flex items-center gap-x-[17px] overflow-hidden hover:text-white">
              <a href="#">hello@ochi.design</a>
              <div className="round w-8 h-8 lg:w-12 lg:h-12 bg-black scale-[0.3] rounded-full mr-3 flex items-center justify-center text-black text-2xl group-hover:scale-[1] group-hover:bg-white">
                <RxArrowTopRight className="opacity-0 group-hover:opacity-[1] icon" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ready;
