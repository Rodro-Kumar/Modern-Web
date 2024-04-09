import React, { useEffect, useState } from "react";

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
    <>
      <div className="relative cursor-pointer h-screen">
        <div className="w-full">
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.7"
            className='absolute -z-20 bg-[url("src/assets/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center w-full h-full'
          ></div>
        </div>

        <div className="gap-x-9 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-40 sm:w-52 h-40 sm:h-52 bg-white rounded-full flex items-center justify-center max-[360px]:w-32 max-[360px]:h-32">
            <div className="w-24 sm:w-32 h-24 sm:h-32 bg-black rounded-full relative max-[360px]:w-16 max-[360px]:h-16">
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
          <div className="w-40 sm:w-52 h-40 sm:h-52 bg-white rounded-full flex items-center justify-center max-[360px]:w-32 max-[360px]:h-32">
            <div className="w-24 sm:w-32 h-24 sm:h-32 bg-black rounded-full relative max-[360px]:w-16 max-[360px]:h-16">
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
    </>
  );
};

export default Play;
