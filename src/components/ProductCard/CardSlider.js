import React, { useState, useRef } from "react";

const ProductSlider = ({ products }) => {
  const sliderRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = e => {
    setDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = e => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // adjust scroll speed here
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const productCards = products.map(product => (
    <div key={product.id} className="flex-shrink-0 w-64 p-4">
      <div className="h-40 bg-gray-200 mb-4 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>
      <h3 className="text-lg font-medium">{product.name}</h3>
    </div>
  ));
  return (
    <div
      className="flex flex-nowrap overflow-x-auto"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {productCards}
    </div>
  );
};

export default ProductSlider;
