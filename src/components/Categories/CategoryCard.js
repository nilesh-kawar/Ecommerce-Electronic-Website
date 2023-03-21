import React from "react";

const CategoryCard = ({ img, category }) => {
  return (
    <div className="w-[200px]  m-2 bg-white border border-gray-200 rounded-lg shadow group overflow-hidden cursor-pointer">
      <img
        className="px-7 py-2 rounded-t-lg w-48 group-hover:scale-110 transition-all duration-500 "
        src={img}
        alt="product"
      />
      <p className="text-lg text-slate-600 text-center py-3 group-hover:text-primary">
        {category}
      </p>
    </div>
  );
};

export default CategoryCard;
