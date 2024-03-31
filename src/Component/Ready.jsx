import React, { useEffect, useState } from "react";

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
      <div className="bg-[#cdea68] py-44 cursor-text">
        <div className="container">
          <div className="flex flex-col items-center justify-center relative">
            <h2 className="text-[220px] font-semibold font-FjallaOne text-[#212121] text-center leading-none">
              READY <br />
              TO START <br />
              THE PROJECT?
            </h2>
            <div className="flex items-center gap-x-9 absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-[65%]">
              <div className="w-52 h-52 rounded-full bg-white flex items-center justify-center">
                <div
                  className="w-[130px]
                 h-[130px] bg-black rounded-full relative"
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
              <div className="w-52 h-52 rounded-full bg-white flex items-center justify-center">
                <div
                  className="w-[130px]
                 h-[130px] bg-black rounded-full relative overflow-hidden"
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
        </div>
      </div>
    </>
  );
};

export default Ready;
