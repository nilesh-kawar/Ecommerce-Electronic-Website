import React, { useState } from "react";

import Logo from "../../assets/img/logo.webp";
import NavLinks from "./NavLinks";
import CartPopup from "./CartPopup";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className={`bg-white sticky top-0  ${sticky ? "shadow-lg" : ""}`}>
      <div className="flex font-medium justify-between items-center py-2 px-3 md:px-6 md:py-0 ">
        {/* Logo  */}
        <div className="z-50 md:py-5 px-3 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
        </div>
        {/* Web Menu Content  */}
        <ul className="md:flex hidden uppercase items-center gap-8 ">
          <NavLinks />
        </ul>
        {/* Right Side Icons  */}
        <div className="flex items-center text-3xl space-x-4 font-semibold">
          <button className="hover:text-primary duration-300">
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <button className="hover:text-primary duration-300">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
          <button className="relative group py-7">
            <ion-icon name="bag-outline"></ion-icon>
            <span className="absolute bg-primary rounded-full w-6 h-6 text-white text-xs leading-6 text-center font-bold -right-2 top-11">
              1
            </span>
            {/* Cart Popup  */}
            <CartPopup />
          </button>
          {/* Hamberger  */}
          <div
            className="text-3xl md:hidden z-50 pr-2 hover:text-primary duration-300"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
