import React, { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { productData } from '../Data/ProductData'


const PopularProducts = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  const filteredProducts = selectedCategory
    ? productData.filter((item) => item.categoryId === selectedCategory)
    : [];


  return (
    <div className="container mx-auto my-16">
      <div className="block md:flex justify-between mb-9">
        <div>
          <h4 className="font-bold text-2xl md:text-3xl ml-5 md:mx-2 text-slate-800">
            Latest Products
          </h4>

        </div>
        <div className='flex justify-center mt-3 md:mt-0 md:justify-end space-x-4'>
          <button onClick={() => handleCategoryClick(1)} className="text-base font-bold text-slate-900 hover:text-primary duration-150 flex items-center pr-3">
            Accessories
          </button>
          <button onClick={() => handleCategoryClick(2)} className="text-base font-bold text-slate-900 hover:text-primary duration-150 flex items-center pr-3">
            iPhone
          </button>
          <button onClick={() => handleCategoryClick(3)} className="text-base font-bold text-slate-900 hover:text-primary duration-150 flex items-center pr-3">
            Laptop
          </button>
        </div>
      </div>
      {
        selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-4 place-items-center ">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                img1={item.img1}
                img2={item.img2}
                isSoldOut={item.isSoldOut}
                name={item.name}
                price={item.price}
                prevPrice={item.prevPrice}
              />
            ))}
          </div>
        )
      }
    </div>
  )
}

export default PopularProducts