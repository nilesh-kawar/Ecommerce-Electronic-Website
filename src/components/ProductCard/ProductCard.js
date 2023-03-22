import React from "react";
import { AiOutlineStar, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FaBalanceScaleLeft, FaBan } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import Tooltip from "./ToolTip";

const ProductCard = ({ img1, img2, isSoldOut, name, price, prevPrice }) => {
  return (
    <div className="relative w-max m-2 pb-5 px-1 bg-white border border-gray-200 rounded-lg shadow-xl group duration-1000 overflow-hidden">
      <img
        className="p-2 absolute rounded-t-lg w-64 group-hover:scale-110 transition-all duration-1000 group-hover:opacity-1"
        src={img1}
        alt="product"
      />
      <img
        className="p-2  rounded-t-lg w-64 group-hover:scale-110 transition-all"
        src={img2}
        alt="product"
      />
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2  flex justify-center items-center space-x-2 mb-4 opacity-0 group-hover:opacity-100 duration-300">
        {isSoldOut ? (
          <Tooltip text="Soldout">
            <div className="p-3 shadow-xl bg-secondary text-white text-lg inline-table hover:bg-primary rounded-full duration-200 ">
              <FaBan />
            </div>
          </Tooltip>
        ) : (
          <Tooltip text="Add to Cart">
            <div className="p-3 shadow-xl bg-secondary text-white text-lg inline-table hover:bg-primary rounded-full duration-200 cursor-pointer">
              <BsBag />
            </div>
          </Tooltip>
        )}
        <Tooltip text="Add to Wishlist">
          <div className="p-3 shadow-xl bg-secondary text-white text-lg inline-table hover:bg-primary rounded-full duration-200 cursor-pointer">
            <AiOutlineHeart />
          </div>
        </Tooltip>
        <Tooltip text="Compare">
          <div className="p-3 shadow-xl bg-secondary text-white text-lg inline-table hover:bg-primary rounded-full duration-200 cursor-pointer">
            <FaBalanceScaleLeft />
          </div>
        </Tooltip>
      </div>

      <div className="relative z-50 mt-2 flex items-center justify-center space-x-1 text-xl text-yellow-500">
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
      <h5 className="text-lg font-bold text-slate-600 text-center pt-3 pb-2 group-hover:text-primary">
        {name}
      </h5>
      <div className="flex items-center justify-center space-x-5">
        <h6 className="font-black text-primary text-xl"> ${price}</h6>
        {prevPrice ? (
          <h5 className="font-bold text-slate-700 text-lg line-through">
            ${prevPrice}
          </h5>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductCard;
