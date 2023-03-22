import React from "react";
import ProductSlider from "../Slider/ProductSlider";
import CategoryCard from "./CategoryCard";

const TrendingCategories = () => {
  return (
    <div className=" container mx-auto my-16">
      <h4 className="font-bold text-2xl md:text-3xl mx-5 md:mx-2 text-slate-800">
        Trending Categories
      </h4>
      <ProductSlider showArrow={true} component={<CategoryCard />} />
    </div>
  );
};

export default TrendingCategories;
