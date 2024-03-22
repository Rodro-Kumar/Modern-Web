import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-[#cdea68] rounded-xl py-20">
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
      </div>
    </>
  );
};

export default About;
