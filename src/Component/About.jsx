import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import approachImg from "../assets/approch-img.jpg";

const About = () => {
  return (
    <>
      <div className="bg-[#cdea68] rounded-xl pt-20 pb-4">
        <div className="pb-14 border-b border-[#00000048]">
          <div className="container">
            <h1 className="max-w-[1088px] text-[52px] text-black font-normal font-['Neue_Montreal'] leading-[52px]">
              Ochi is a strategic partner for fast-grow­ing tech businesses that
              need to{" "}
              <span className="border-b-4 border-black cursor-pointer">
                raise funds,
              </span>{" "}
              <span className="border-b-4 border-black cursor-pointer">
                sell prod­ucts,
              </span>{" "}
              <span className="border-b-4 border-black cursor-pointer">
                ex­plain com­plex ideas,
              </span>{" "}
              and{" "}
              <span className="border-b-4 border-black cursor-pointer">
                hire great peo­ple.
              </span>
            </h1>
          </div>
        </div>
        <div className="border-b border-[#00000048] pt-4 pb-28">
          <div className="container flex justify-between">
            <div>
              <p className="font-['Neue_Montreal'] text-base font-normal text-black">
                What you can expect:
              </p>
            </div>
            <div className="flex gap-x-28">
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
              <div className="flex flex-col justify-end">
                <p className="font-['Neue_Montreal'] text-base font-normal text-black pb-5 ">
                  S:
                </p>
                <a
                  href="#"
                  className="font-['Neue_Montreal'] text-base font-normal text-black border-b border-black "
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="font-['Neue_Montreal'] text-base font-normal text-black border-b border-black"
                >
                  Behance
                </a>
                <a
                  href="#"
                  className="font-['Neue_Montreal'] text-base font-normal text-black border-b border-black"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="font-['Neue_Montreal'] text-base font-normal text-black border-b border-black "
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="flex justify-between pb-12">
              <div>
                <h4 className="text-[52px] font-['Neue_Montreal'] font-normal leading-none mb-7">
                  Our approach:
                </h4>
                <button className="group readMoreBtn flex items-center bg-black py-3 pl-5 pr-2 rounded-full hover:bg-[#1d1d1d]">
                  <a
                    href="#"
                    className="text-base font-normal text-white font-['Neue_Montreal']"
                  >
                    READ MORE
                  </a>
                  <div className=" w-10 h-10 scale-[0.3] bg-white rounded-full flex items-center justify-center text-xl ml-7 group-hover:scale-[1] transition-all">
                    <GoArrowUpRight className="hidden group-hover:block" />
                  </div>
                </button>
              </div>
              <div className="max-w-[587px] mt-3">
                <img
                  src={approachImg}
                  alt={approachImg}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
