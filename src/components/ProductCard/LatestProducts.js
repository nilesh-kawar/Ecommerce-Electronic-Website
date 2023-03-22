import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ProductSlider from "../Slider/ProductSlider";
import ProductCardSlider from "./ProductCardSlider";

const LatestProducts = () => {
  return (
    <div className=" container mx-auto my-16">
      <div className="flex justify-between">
        <h4 className="font-bold text-2xl md:text-3xl ml-5 md:mx-2 text-slate-800">
          Latest Products
        </h4>
        <h6 className="text-base font-bold text-slate-900 hover:text-primary duration-150 flex items-center pr-3">
          View all products &nbsp;
          <BsArrowRight />
        </h6>
      </div>
      <ProductSlider showArrow={true} component={<ProductCardSlider />} />
    </div>
  );
};

export default LatestProducts;
