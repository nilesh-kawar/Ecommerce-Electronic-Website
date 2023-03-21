import React, { useState, useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import CategoryCard from "./CategoryCard";
import { categoriesData } from "./CategoryData";

const Categories = () => {
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

  const handlePreviousClick = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const handleNextClick = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  return (
    <div className=" container mx-auto my-16">
      <h4 className="font-bold text-3xl mx-5 md:mx-2 text-slate-800">
        Trending Categories
      </h4>
      <div className="relative">
        <div
          id="content"
          className=" py-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide "
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <button
            className="z-50 absolute top-0 left-0 w-12 text-slate-600 hover:text-primary h-full flex items-center justify-center"
            onClick={handlePreviousClick}
          >
            <BsFillArrowLeftCircleFill size={"2em"} />
          </button>
          <button
            className="z-50 absolute top-0 right-0 w-12 text-slate-600 hover:text-primary h-full flex items-center justify-center"
            onClick={handleNextClick}
          >
            <BsFillArrowRightCircleFill size={"2em"} />
          </button>

          {categoriesData.map(item => (
            <div>
              <CategoryCard img={item.imgUrl} category={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
