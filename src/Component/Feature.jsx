import React from "react";

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
                  <p className="text-sm font-['Neue_Montreal'] font-normal">
                    FYDE
                  </p>
                </div>
                <div className="relative w-[581px] h-[485px] bg-red-600 rounded-2xl  overflow-hidden cursor-pointer">
                  <div className="w-full h-full bg-green-800 ">
                    <img
                      className="bg-cover h-full w-full bg-center"
                      src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                      alt=""
                    />
                  </div>
                  <h2 className="absolute text-8xl text-red-600 z-10 top-0 left-0">
                    FYDE
                  </h2>
                </div>
              </div>
              <div>
                <div className="flex  gap-x-2 items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                  <p className="text-sm font-['Neue_Montreal'] font-normal">
                    VISE
                  </p>
                </div>
                <div className="w-[581px] h-[485px] bg-red-600 rounded-2xl overflow-hidden cursor-pointer">
                  <div className="w-full h-full bg-green-800">
                    <img
                      className="h-full w-full bg-cover bg-center"
                      src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                      alt=""
                    />
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
