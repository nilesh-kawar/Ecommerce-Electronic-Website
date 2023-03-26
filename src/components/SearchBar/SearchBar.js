import React, { useState } from "react";
import { productData } from "../Data/ProductData";
import { AiOutlineCloseCircle } from "react-icons/ai";
import FormInput from "../FormInput/FormInput";

const SearchBar = ({ closeModal }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = event => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredProducts([]);
    } else {
      const filteredProducts = productData.filter(product =>
        product.name.toLowerCase().includes(query)
      );
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <div class="relative bg-white rounded-lg shadow ">
      {/* <!-- Modal header --> */}
      <div class="flex items-center justify-between p-4 border-b rounded-t ">
        <div className="w-[90%]">
          <FormInput
            type="text"
            placeholder="Search Product"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          class="text-slate-800 bg-transparent hover:text-primary  rounded-lg text-2xl p-1.5"
          onClick={closeModal}
        >
          <AiOutlineCloseCircle />
        </button>
      </div>
      {/* <!-- Modal body --> */}
      <div class="p-6 space-y-6 max-h-80 overflow-auto">
        {filteredProducts.length > 0 && (
          <div>
            {filteredProducts.map(product => (
              <div
                key={product.id}
                class="flex items-center space-x-4 bg-gray-200 p-3 my-2 shadow rounded hover:bg-gray-300 duration-200"
              >
                <div class="flex-shrink-0 shadow">
                  <img
                    class="w-12 h-12 rounded"
                    alt={`product${product.id}`}
                    src={product.img1}
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-normal italic text-gray-600 truncate ">
                    {product.category}
                  </p>
                  <p class="text-base font-medium text-slate-900 truncate ">
                    {product.name}
                  </p>
                </div>
                <div class="inline-flex items-center text-lg font-bold text-slate-900 ">
                  ${product.price}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
