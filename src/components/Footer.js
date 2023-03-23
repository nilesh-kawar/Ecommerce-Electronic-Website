import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import logo from "../assets/img/logo/logo.png";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-gray-300">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            href="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center">
              <img src={logo} alt="" srcset="" />
            </div>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-lg font-semibold text-slate-800">
              Information
            </h3>
            <ul className="space-y-1 text-base">
              <li className="hover:text-primary">
                <a href="/">Product Support</a>
              </li>
              <li className="hover:text-primary">
                <a href="/">Checkout</a>
              </li>
              <li className="hover:text-primary">
                <a href="/">License Policy</a>
              </li>
              <li className="hover:text-primary">
                <a href="/">Affiliate</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-lg font-semibold text-slate-800">
              Customer Service
            </h3>
            <ul className="space-y-1 text-base">
              <li className="hover:text-primary">
                <a href="/">Help Center</a>
              </li>
              <li className="hover:text-primary">
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-lg font-semibold text-slate-800">
              Affiliate
            </h3>
            <ul className="space-y-1 text-base">
              <li className="hover:text-primary">
                <a href="/">Products Supported</a>
              </li>
              <li className="hover:text-primary">
                <a href="/">Usage</a>
              </li>
              <li className="hover:text-primary">
                <a href="/">Enroll</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-2xl">
            <div className="uppercase text-lg font-semibold text-slate-800">
              Social media
            </div>
            <div className="flex justify-start space-x-3">
              <a
                href="/"
                title="Facebook"
                className="hover:text-primary flex items-center p-1"
              >
                <BsFacebook />
              </a>
              <a
                href="/"
                title="Twitter"
                className="hover:text-primary flex items-center p-1"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="/"
                title="Instagram"
                className="hover:text-primary flex items-center p-1"
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 2023 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
