import React, { useState, useRef } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const ProductSlider = ({ showArrow, component }) => {
  const sliderRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = e => {
    setDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft); //offsetLeft returns the position from left
    setScrollLeft(sliderRef.current.scrollLeft); //scrollLeft will return  how much px sllides scrolled left
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

  const handlePreviousClick = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth; //offsetWidth returns width of div
  };

  const handleNextClick = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  return (
    <div className="relative">
      <div
        id="content"
        className=" py-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide "
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {showArrow ? (
          <>
            <button
              className="z-50 text-5xl duration-200 absolute top-0 left-0 w-12 text-gray-200 hover:text-primary h-full flex items-center justify-center"
              onClick={handlePreviousClick}
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button
              className="z-50 text-5xl duration-200 absolute top-0 right-0 w-12 text-gray-200 hover:text-primary h-full flex items-center justify-center"
              onClick={handleNextClick}
            >
              <IoIosArrowDroprightCircle />
            </button>
          </>
        ) : (
          ""
        )}
        {component}
      </div>
    </div>
  );
};

export default ProductSlider;
