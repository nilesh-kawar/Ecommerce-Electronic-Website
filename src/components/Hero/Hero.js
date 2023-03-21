import React from "react";
import samsung_banner from "../../assets/img/banner/samsung_phone.png";
const Hero = () => {
  return (
    <section className="bg-gray-100">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h5 className="uppercase text-2xl text-primary font-semibold mb-3">
            SALE UPTO 30% OFF
          </h5>
          <h1 className="max-w-2xl mb-5 !leading-tight text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-slate-800">
            Exciting Deals on Samsung
          </h1>
          <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg text-slate-600">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <button className="inline-flex items-center justify-center py-4 px-9 text-white bg-primary hover:bg-secondary btn">
            Shop Now
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={samsung_banner} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
