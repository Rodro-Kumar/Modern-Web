import React from "react";

import { MdArrowOutward } from "react-icons/md";

const Btn1 = ({ className, title }) => {
  return (
    <>
      <div className="group flex items-center gap-x-2 cursor-pointer">
        <a
          href="#"
          className={`uppercase text-[16px] font-normal py-1 px-3 rounded-full border-[1.5px] border-[#000] group-hover:bg-black group-hover:text-white group-hover:transition ease  ${className}`}
        >
          {title ? title : "Start the Project"}
        </a>
        <div className="arrow w-[32px] h-[32px] border-2 border-black rounded-full flex items-center justify-center cursor-pointer group-hover:bg-black group-hover:text-white group-hover:transition-colors sm:hidden md:flex">
          <MdArrowOutward className="text-xl " />
        </div>
      </div>
    </>
  );
};

export default Btn1;
