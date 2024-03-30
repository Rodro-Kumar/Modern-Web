import React from "react";

const Btn2 = ({ className, BtnTitle }) => {
  return (
    <button
      className={`btn2 py-[5px] px-[14px] bg-transparent text-base text-black border-2 border-black rounded-full font-['Neue_Montreal'] font-normal uppercase ${className}`}
    >
      <a href="#">{BtnTitle ? BtnTitle : "button"}</a>
    </button>
  );
};

export default Btn2;
