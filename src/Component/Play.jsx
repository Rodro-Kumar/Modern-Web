import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Play = () => {
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
    <Fade duration={"600"}>
      <div className="relative cursor-pointer">
        <div className=" w-full">
          <div className=" -z-20">
            <img
              className="w-full h-full"
              src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="z-20 gap-x-9 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-28 sm:w-52 h-28 sm:h-52 bg-white rounded-full flex items-center justify-center max-[375px]:w-28 max-[375px]:h-28">
            <div className="w-16 sm:w-32 h-16 sm:h-32 bg-black rounded-full relative max-[375px]:w-14 max-[375px]:h-14">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className="w-full h-4 rotate-45 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <p className="text-white text-lg font-normal absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] max-[375px]:text-sm">
                PLAY
              </p>
            </div>
          </div>
          <div className="w-28 sm:w-52 h-28 sm:h-52 bg-white rounded-full flex items-center justify-center max-[375px]:w-28 max-[375px]:h-28">
            <div className="w-16 sm:w-32 h-16 sm:h-32 bg-black rounded-full relative max-[375px]:w-14 max-[375px]:h-14">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className="w-full h-4 rotate-45 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <p className="text-white text-lg font-normal absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] max-[375px]:text-sm">
                PLAY
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Play;
