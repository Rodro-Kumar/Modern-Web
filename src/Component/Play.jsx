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
      <div className="relative cursor-pointer">
        <div className=' bg-[url("src/assets/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center h-screen w-full'></div>
        <div className="gap-x-9 flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-52 h-52 bg-white rounded-full flex items-center justify-center">
            <div className="w-32 h-32 bg-black rounded-full relative">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className="w-full h-4 rotate-45 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <p className="text-white text-lg font-normal absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                PLAY
              </p>
            </div>
          </div>
          <div className="w-52 h-52 bg-white rounded-full flex items-center justify-center">
            <div className="w-32 h-32 bg-black rounded-full relative">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className="w-full h-4 rotate-45 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <p className="text-white text-lg font-normal absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
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
