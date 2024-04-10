import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

const Reviews = () => {
  return (
    <>
      <div>
        <div className="container px-4 xl:px-0 overflow-hidden">
          <Fade
            direction="left"
            duration={"800"}
            className="font-['Neue_Montreal'] text-[32px] sm:text-[52px] font-normal pb-10"
          >
            Clients’ reviews
          </Fade>
        </div>
        <div className="border-t-2 border-[#00000081] common">
          <Fade
            direction="up"
            duration={"600"}
            className="container px-4 xl:px-0"
          >
            <div className="hidden sm:block">
              <div className="flex items-center lg:items-center sm:items-start justify-between pt-4 ">
                <ul className="flex sm:items-start lg:items-center">
                  <div className="sm:flex sm:flex-col lg:flex-row sm:gap-y-7 lg:gap-y-0">
                    <a
                      href="#"
                      className="Karman relative font-['Neue_Montreal'] text-base font-normal whitespace-nowrap"
                    >
                      Karman Ventures
                    </a>
                    <p className="font-['Neue_Montreal'] text-base font-normal lg:ml-[50px] xl:ml-[180px]">
                      Services:
                    </p>
                  </div>

                  <p className="whitespace-nowrap font-['Neue_Montreal'] text-base font-normal lg:ml-[260px] xl:ml-[260px] sm:ml-[210px]">
                    William Barnes
                  </p>
                </ul>

                <div>
                  <a
                    href=""
                    className="font-['Neue_Montreal'] text-base font-medium text-[#0000004b]"
                  >
                    READ
                  </a>
                </div>
              </div>
            </div>

            <div className="block sm:hidden">
              <div className="flex items-start justify-between pt-4">
                <ul className="flex items-start flex-col sm:flex-row w-full">
                  <div className="flex items-start justify-between w-full">
                    <div>
                      <a
                        href="#"
                        className="Karman relative font-['Neue_Montreal'] text-base font-normal"
                      >
                        Karman Ventures
                      </a>
                    </div>
                    <div>
                      <a
                        href=""
                        className="font-['Neue_Montreal'] text-base font-medium text-[#0000004b]"
                      >
                        READ
                      </a>
                    </div>
                  </div>

                  <p className="font-['Neue_Montreal'] text-base font-normal sm:ml-[180px] ml-0 mt-5">
                    Services:
                  </p>
                </ul>
              </div>
            </div>

            <div className="py-7 sm:py-12 flex justify-center gap-x-32 flex-col sm:flex-row">
              <div className="flex flex-row gap-x-3 sm:gap-y-3 sm:flex-col">
                <div className="group flex items-center gap-x-2">
                  <button className="text-[12px] whitespace-nowrap sm:text-base py-[6px] px-4 border-[1.5px] sm:border-[3px] bg-[#0000] border-[#00000067] rounded-full text-black font-['Neue_Montreal'] hover:bg-[#000] hover:text-white transition-all cursor-pointer">
                    <a href="#">INVESTOR DECK</a>
                  </button>
                  <div className="right-icon relative w-9 h-9 border-2 border-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-[1] overflow-hidden text-white">
                    <GoArrowUpRight className="text-[22px]" />
                    <div className="circle w-full h-full bg-black absolute top-0 left-0 -z-10 scale-0 group-hover:scale-125 rounded-full"></div>
                  </div>
                </div>
                <div className="group flex items-center gap-x-2">
                  <button className="text-[12px] whitespace-nowrap sm:text-base py-[6px] px-4 border-[1.5px] sm:border-[3px] bg-[#0000] border-[#00000067] rounded-full text-black font-['Neue_Montreal'] hover:bg-[#000] hover:text-white transition-all cursor-pointer">
                    <a href="#">SALES DECK</a>
                  </button>
                  <div className="right-icon relative w-9 h-9 border-2 border-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-[1] overflow-hidden text-white">
                    <GoArrowUpRight className="text-[22px]" />
                    <div className="circle w-full h-full bg-black absolute top-0 left-0 -z-10 scale-0 group-hover:scale-125 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-10">
                <p className="font-['Neue_Montreal'] text-base font-normal pb-4 block sm:hidden">
                  William Barnes
                </p>
                <Fade
                  direction="left"
                  className="mb-7 w-[100px] h-[100px] overflow-hidden rounded-lg"
                >
                  <img
                    className="object-cover w-full h-full"
                    src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                    alt=""
                  />
                </Fade>
                <Fade
                  direction="right"
                  className="overflow-hidden font-['Neue_Montreal'] text-base font-normal max-w-[373px] max-[346px]:text-xs"
                >
                  They were transparent about the time and the stages of the
                  project. The end product is high quality, and I feel confident
                  about how they were handholding the client through the
                  process. I feel like I can introduce them to someone who needs
                  to put a sales deck together from scratch, and they would be
                  able to handhold the client experience from 0 to 100 very
                  effectively from story to design. 5/5
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
        <div className="pb-24">
          <div className="border-t-2 border-[#00000062] common">
            <div className="container px-4 xl:px-0">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal hidden sm:block">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container px-4 xl:px-0">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal hidden sm:block">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container px-4 xl:px-0">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal hidden sm:block">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container px-4 xl:px-0">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal hidden sm:block">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container px-4 xl:px-0">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal hidden sm:block">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container px-4 xl:px-0">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal hidden sm:block">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container px-4 xl:px-0">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal hidden sm:block">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-y-2 border-[#00000062] common">
            <div className="container px-4 xl:px-0">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal hidden sm:block">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
