import React from "react";
import Button from "./Common/Btn2";
import { Fade } from "react-awesome-reveal";

const Card = () => {
  return (
    <Fade triggerOnce="true" direction="up">
      <div className="pb-40 lg:pb-60 overflow-hidden" id="card">
        <div className="container">
          <div className="flex gap-x-5 flex-col lg:flex-row px-4 xl:px-0 gap-y-4 lg:gap-y-0">
            <div className="relative md:h-[380px] h-[300px] w-full lg:w-[40%] xl:w-1/2 bg-[#004d43] rounded-xl flex items-center justify-center flex-col">
              <img
                src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                alt=""
              />
              <div>
                <button className="absolute bottom-8 left-8 py-[6px] px-4 rounded-full border-2 border-[#cdea68]">
                  <a
                    href="#"
                    className="text-[#cdea68] text-sm font-normal font-FjallaOne"
                  >
                    <span>&#169;</span>
                    2019-2022
                  </a>
                </button>
              </div>
            </div>

            <div className="w-full sm:w-full lg:w-[100%] xl:w-1/2 sm:h-[380px] flex gap-x-5 flex-col sm:flex-row gap-y-4 sm:gap-y-0">
              <div className="relative h-[300px] sm:h-full w-full sm:w-1/2 lg:w-[50%] bg-[#212121] rounded-xl flex items-center justify-center">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                  alt=""
                />
                <div className="absolute bottom-8 left-8">
                  <Button
                    className={"text-white border-white card-btn"}
                    BtnTitle={"rating 5.0 on clutch"}
                  />
                </div>
              </div>
              <div className="relative h-[300px] sm:h-full w-full sm:w-1/2 lg:w-[50%] xl:w-1/2 bg-[#212121] rounded-xl flex items-center justify-center">
                <img
                  className="max-w-28"
                  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                  alt=""
                />
                <div className="absolute bottom-8 left-8">
                  <Button
                    className={"text-white border-white card-btn"}
                    BtnTitle={"business bootcamp alumni"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Card;
