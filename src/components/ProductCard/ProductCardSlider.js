import React from "react";
import ProductCard from "./ProductCard";
import { productData } from "../Data/ProductData";

const ProductCardSlider = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center md:justify-start">
        <div className="flex">
          {productData.map((item, i) => (
            <div key={i}>
              <ProductCard
                item={item}
                id={item.id}
                img1={item.img1}
                img2={item.img2}
                isSoldOut={item.isSoldOut}
                name={item.name}
                price={item.price}
                prevPrice={item.prevPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCardSlider;
