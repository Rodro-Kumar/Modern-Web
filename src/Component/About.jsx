import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import approachImg from "../assets/approch-img.jpg";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const [hovering, sethovering] = useState(false);

  return (
    <>
      <div
        // data-scroll
        // data-scroll-section
        // data-scroll-speed="-.3"
        className="bg-[#cdea68] rounded-xl pt-20 pb-4 about"
      >
        <div className="pb-14 border-b border-[#00000048]">
          <Fade direction="up" className="container px-4 xl:px-0">
            <h1 className="max-w-[1088px] text-[30px] sm:text-[40px] md:text-[52px] text-black font-normal font-['Neue_Montreal'] leading-[30px] sm:leading-[52px]">
              Ochi is a strategic partner for fast-grow­ing tech businesses that
              need to{" "}
              <span className=" cursor-pointer under-hover">raise funds,</span>{" "}
              <span className=" cursor-pointer under-hover">
                sell prod­ucts,
              </span>{" "}
              <span className="cursor-pointer under-hover">
                ex­plain com­plex ideas,
              </span>{" "}
              and{" "}
              <span className=" cursor-pointer under-hover">
                hire great peo­ple.
              </span>
            </h1>
          </Fade>
        </div>
        <div className="border-b border-[#00000048] pt-4 pb-28 common">
          <Fade direction="up">
            <div className="container flex justify-between flex-col sm:flex-row px-4 xl:px-0">
              <div>
                <p className="font-['Neue_Montreal'] text-base font-normal text-black">
                  What you can expect:
                </p>
              </div>
              <div className="flex gap-y-10 flex-col sm:flex-row sm:gap-x-28">
                <div className="flex flex-col gap-y-12">
                  <p className="font-['Neue_Montreal'] text-base font-normal text-black max-w-[274px]">
                    We create tailored presentations to help you persuade your
                    colleagues, clients, or investors. Whether it’s live or
                    digital, delivered for one or a hundred people.
                  </p>
                  <p className="font-['Neue_Montreal'] text-base font-normal text-black max-w-[275px]">
                    We believe the mix of strategy and design (with a bit of
                    coffee) is what makes your message clear, convincing, and
                    captivating.
                  </p>
                </div>
                <ul className="flex flex-col justify-end">
                  <p className="font-['Neue_Montreal'] text-base font-normal text-black pb-5 ">
                    S:
                  </p>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="font-['Neue_Montreal'] text-base font-normal text-black "
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-['Neue_Montreal'] text-base font-normal text-black "
                    >
                      Behance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-['Neue_Montreal'] text-base font-normal text-black "
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-['Neue_Montreal'] text-base font-normal text-black "
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
        </div>
        <div className="overflow-hidden">
          <div className="container">
            <div className="approach  flex justify-between pb-4 sm:pb-12 flex-col md:flex-row px-4 xl:px-0">
              <div>
                <Fade
                  direction="up"
                  className="text-[40px] lg:text-[52px] font-['Neue_Montreal'] font-normal leading-none mb-7 "
                >
                  Our approach:
                </Fade>
                <Fade direction="up">
                  <button
                    onMouseEnter={() => sethovering(true)}
                    onMouseLeave={() => sethovering(false)}
                    className="group readMoreBtn flex items-center bg-black py-3 pl-5 pr-2 rounded-full hover:bg-[#1d1d1d] sm:mb-7 md:mb-0"
                  >
                    <a
                      href="#"
                      className="text-sm sm:text-base font-normal text-white font-['Neue_Montreal'] inline-block"
                    >
                      READ MORE
                    </a>
                    <div className=" w-7 lg:w-10 h-7 lg:h-10 scale-[0.3] bg-white rounded-full flex items-center justify-center text-xl ml-7 group-hover:scale-[1] transition-all">
                      <GoArrowUpRight className="hidden group-hover:block" />
                    </div>
                  </button>
                </Fade>
              </div>
              <Fade
                direction="up"
                duration={"800"}
                className={`imgContainer sm:h-[420px] h-[260px] max-w-[587px] sm:mt-3 mt-10 bg-red-700 rounded-xl overflow-hidden ${
                  hovering ? "scale-95" : null
                }`}
              >
                <img
                  src={approachImg}
                  alt={approachImg}
                  className={`w-full h-full ${hovering ? "scale-110" : null}`}
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
