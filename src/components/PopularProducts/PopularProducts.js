import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productData } from "../Data/ProductData";

const PopularProducts = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState();

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  const filteredProducts = selectedCategory
    ? productData.filter(item => item.categoryId === selectedCategory)
    : productData.slice(0, 4)


  return (
    <div className="container mx-auto my-16">
      <div className="block md:flex justify-between mb-9">
        <div>
          <h4 className="font-bold text-2xl md:text-3xl ml-5 md:mx-2 text-slate-800">
            Popular Products
          </h4>
        </div>
        <div className="flex justify-center mt-3 md:mt-0 md:justify-end space-x-4">
          <button
            onClick={() => handleCategoryClick(1)}
            className="text-base font-bold text-slate-900 hover:text-primary duration-150 flex items-center pr-3"
          >
            Accessories
          </button>
          <button
            onClick={() => handleCategoryClick(2)}
            className="text-base font-bold text-slate-900 hover:text-primary duration-150 flex items-center pr-3"
          >
            iPhone
          </button>
          <button
            onClick={() => handleCategoryClick(3)}
            className="text-base font-bold text-slate-900 hover:text-primary duration-150 flex items-center pr-3"
          >
            Laptop
          </button>
        </div>
      </div>
      {
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 place-items-center ">
          {
            filteredProducts.map(item => (
              <ProductCard
                product={item}
                key={item.id}
                img1={item.img1}
                img2={item.img2}
                isSoldOut={item.isSoldOut}
                name={item.name}
                price={item.price}
                prevPrice={item.prevPrice}
                addToCart={addToCart}
              />
            ))}
        </div>
      }
    </div>
  );
};

export default PopularProducts;
