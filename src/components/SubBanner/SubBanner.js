import React from "react";

import sub_banner1 from "../../assets/img/banner/sub-banner-1.webp";
import sub_banner2 from "../../assets/img/banner/sub-banner-2.webp";

const SubBanner = () => {
  return (
    <div className="container mx-auto my-6">
      <div className="flex flex-col mx-2  md:flex-row justify-center items-center md:space-x-6 space-y-5 md:space-y-0">
        <div className="relative group overflow-hidden">
          <img
            src={sub_banner1}
            alt=""
            className="group-hover:scale-110 duration-300"
          />
          <div className="absolute text-center w-max left-[50%] top-[30%] md:top-[25%] space-y-1 -translate-x-[50%] -translate-y-[50%] ">
            <h5 className="uppercase text-slate-600 text-lg">
              SECURITY SMART CAMERA
            </h5>
            <h4 className="capitalize  text-slate-800 text-2xl font-semibold">
              Just Starting at $850
            </h4>
            <button className="btn m-auto bg-primary hover:bg-secondary py-2 px-5 text-base text-white">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <img
            src={sub_banner2}
            alt=""
            className="group-hover:scale-110 duration-300"
          />
          <div className="absolute text-center w-max left-[50%] top-[30%] md:top-[25%] space-y-1 -translate-x-[50%] -translate-y-[50%] ">
            <h5 className="uppercase text-slate-600 text-lg">
              ENTERTAINMENT & GAMES
            </h5>
            <h4 className="capitalize  text-slate-800 text-2xl font-semibold">
              Just Starting at $850 Hurry up!
            </h4>
            <button className="btn m-auto bg-primary hover:bg-secondary py-2 px-5 text-base text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
