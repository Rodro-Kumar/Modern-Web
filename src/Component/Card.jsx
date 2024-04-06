import React from "react";
import Button from "./Common/Btn2";

const Card = () => {
  return (
    <>
      <div className="pb-60">
        <div className="container">
          <div className="flex gap-x-5">
            <div className="relative h-[380px] w-1/2 bg-[#004d43] rounded-xl flex items-center justify-center flex-col">
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
            <div className="w-1/2 h-[380px] flex gap-x-5">
              <div className="relative h-full w-1/2 bg-[#212121] rounded-xl flex items-center justify-center">
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
              <div className="relative h-full w-1/2 bg-[#212121] rounded-xl flex items-center justify-center">
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
    </>
  );
};

export default Card;
