import React from "react";
import Btn2 from "./Common/Btn2";

const Feature = () => {
  return (
    <>
      <div className="py-28">
        <div className="container">
          <h3 className="text-[52px] font-['Neue_Montreal'] font-normal pb-8">
            Featured projects
          </h3>
        </div>
        <div className="border-t border-[#0000007c] py-12">
          <div className="container">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                  <p className="text-base font-['Neue_Montreal'] font-normal">
                    FYDE
                  </p>
                </div>
                <div className="group relative w-[629px] h-[500px] rounded-2xl cursor-pointer">
                  <div className="w-full h-full bg-green-800 overflow-hidden rounded-2xl">
                    <img
                      className="bg-cover h-full w-full bg-center"
                      src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                      alt=""
                    />
                  </div>
                  <h2 className="absolute left-full text-9xl z-20 top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-[#cdea68] font-FamiljenGrotesk tracking-tight">
                    {"FYDE".split("").map((item, index) => (
                      <span>{item}</span>
                    ))}
                  </h2>
                  <div className="flex items-center gap-x-3 pt-4">
                    <Btn2 BtnTitle={"audit"} />
                    <Btn2 BtnTitle={"copywriting"} />
                    <Btn2 BtnTitle={"sales deck"} />
                    <Btn2 BtnTitle={"slides design"} />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex  gap-x-2 items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                  <p className="text-base font-['Neue_Montreal'] font-normal">
                    VISE
                  </p>
                </div>
                <div className="relative w-[629px] h-[500px] rounded-2xl cursor-pointer">
                  <div className="w-full h-full bg-green-800 rounded-2xl overflow-hidden">
                    <img
                      className="h-full w-full bg-cover bg-center"
                      src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                      alt=""
                    />
                  </div>
                  <h2 className="absolute right-full text-9xl z-30 top-1/2 translate-x-[50%] -translate-y-[50%] font-semibold text-[#cdea68] font-FamiljenGrotesk tracking-tight">
                    {"VISE".split("").map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </h2>
                  <div className="flex items-center gap-x-3 pt-4">
                    <Btn2 BtnTitle={"agency"} />
                    <Btn2 BtnTitle={"company presentation"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-28">
              <div>
                <div className="flex items-center gap-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                  <p className="text-base font-['Neue_Montreal'] font-normal">
                    TRAWA
                  </p>
                </div>
                <div className="group relative w-[629px] h-[500px] rounded-2xl cursor-pointer">
                  <div className="w-full h-full bg-green-800 overflow-hidden rounded-2xl">
                    <img
                      className="bg-cover h-full w-full bg-center"
                      src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                      alt=""
                    />
                  </div>
                  <h2 className="absolute left-full text-9xl z-20 top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-[#cdea68] font-FamiljenGrotesk tracking-tight">
                    {"FYDE".split("").map((item, index) => (
                      <span>{item}</span>
                    ))}
                  </h2>
                  <div className="flex items-center gap-x-3 pt-4">
                    <Btn2 BtnTitle={"audit"} />
                    <Btn2 BtnTitle={"copywriting"} />
                    <Btn2 BtnTitle={"sales deck"} />
                    <Btn2 BtnTitle={"slides design"} />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex  gap-x-2 items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                  <p className="text-base font-['Neue_Montreal'] font-normal">
                    PREMIUM BLEND
                  </p>
                </div>
                <div className="relative w-[629px] h-[500px] rounded-2xl cursor-pointer">
                  <div className="w-full h-full bg-green-800 rounded-2xl overflow-hidden">
                    <img
                      className="h-full w-full bg-cover bg-center"
                      src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                      alt=""
                    />
                  </div>
                  <h2 className="absolute right-full text-9xl z-30 top-1/2 translate-x-[50%] -translate-y-[50%] font-semibold text-[#cdea68] font-FamiljenGrotesk tracking-tight">
                    {"VISE".split("").map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </h2>
                  <div className="flex items-center gap-x-3 pt-4">
                    <Btn2 BtnTitle={"agency"} />
                    <Btn2 BtnTitle={"company presentation"} />
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

export default Feature;
