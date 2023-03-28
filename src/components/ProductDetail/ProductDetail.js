import React, { useEffect, useState } from "react";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import { productData } from "../Data/ProductData";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productData.find(prod => prod.id === Number(productId));
  console.log(product);
  console.log(product.name);
  let [quantity, setQuantity] = useState(1);
  const [img, setImg] = useState(product.img1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const increaseQuantity = () => {
    if (quantity < 10) {
      quantity = quantity + 1;
    }
    setQuantity(quantity);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      quantity = quantity - 1;
    }
    setQuantity(quantity);
  };

  return (
    <div className="container mx-auto max-w-screen-lg">
      <main class="w-full flex flex-col lg:flex-row">
        {/* <!-- Gallery --> */}
        <section class="h-fit flex-col gap-8 mt-16 sm:flex sm:flex-row sm:gap-4 sm:h-full sm:mt-24 sm:mx-2 md:gap-8 md:mx-4 lg:flex-col lg:mx-0 lg:mt-10">
          <picture class="relative flex items-center bg-orange sm:bg-transparent border-2 border-gray-100 shadow max-w-2xl max-h-2xl">
            <button
              class="bg-white w-10 h-10 flex items-center justify-center pr-1 rounded-full absolute left-6 z-10 sm:hidden"
              id="previous-mobile"
            >
              <svg
                width="12"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                id="previous-mobile"
              >
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                  id="previous-mobile"
                />
              </svg>
            </button>
            <img
              src={img}
              alt="sneaker"
              class="block sm:rounded-xl xl:w-[70%] xl:rounded-xl m-auto pointer-events-none transition duration-300 lg:w-3/4 lg:pointer-events-auto lg:cursor-pointer"
              id="hero"
            />
            <button
              class="bg-white w-10 h-10 flex items-center justify-center pl-1 rounded-full absolute right-6 z-10 sm:hidden"
              id="next-mobile"
            >
              <svg
                width="13"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                id="next-mobile"
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                  id="next-mobile"
                />
              </svg>
            </button>
          </picture>

          <div class="thumbnails hidden gap-4 m-auto sm:flex sm:flex-col sm:justify-start sm:items-center sm:h-fit md:gap-5 lg:flex-row">
            <div
              id="1"
              class="w-1/5 cursor-pointer rounded-xl sm:w-28 md:w-32 lg:w-[72px] xl:w-[78px] ring-active border-2 border-gray-100 "
              onClick={() => setImg(product.img1)}
            >
              <img
                src={product.img1}
                alt="thumbnail"
                class="rounded-xl hover:opacity-50 transition active"
                id="thumb-1"
              />
            </div>

            <div
              id="2"
              class="w-1/5 cursor-pointer rounded-xl sm:w-28 md:w-32 lg:w-[72px] xl:w-[78px] border-2 border-gray-100 "
              onClick={() => setImg(product.img2)}
            >
              <img
                src={product.img2}
                alt="thumbnail"
                class="rounded-xl hover:opacity-50 transition"
                id="thumb-2"
              />
            </div>

            <div
              id="3"
              class="w-1/5 cursor-pointer rounded-xl sm:w-28 md:w-32 lg:w-[72px] xl:w-[78px] border-2 border-gray-100 "
              onClick={() => setImg(product.img1)}
            >
              <img
                src={product.img1}
                alt="thumbnail"
                class="rounded-xl hover:opacity-50 transition"
                id="thumb-3"
              />
            </div>
          </div>
        </section>

        {/* <!-- Text --> */}
        <section class="w-full p-6 lg:pr-20 lg:py-10 2xl:pr-40 ">
          <h4 class="font-bold text-primary mb-2 uppercase text-xs tracking-widest">
            {product.category}
          </h4>
          <h1 class="text-slate-900 mb-4 font-bold text-3xl lg:text-4xl">
            {product.name}
          </h1>
          <div className="relative z-50 my-2 flex items-center justify-start space-x-1 text-xl text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <p class="text-slate-600 mb-6 text-base sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            tempore accusantium ab dignissimos odit sunt pariatur, nesciunt fuga
            obcaecati amet. Facere amet dignissimos ullam deserunt illum
            quisquam eveniet rem consequatur?
          </p>

          <div class="flex items-center justify-between mb-6 sm:flex-col sm:items-start">
            <div class="flex items-center gap-4">
              <h3 class="text-very-dark font-bold text-3xl inline-block">
                ${product.price}
              </h3>
              <span class="inline-block h-fit py-0.5 px-2 font-bold bg-green-400 text-black rounded-lg text-sm">
                50%
              </span>
            </div>
            <p class="text-slate-600 w-fit line-through decoration-slate-600 decoration-1 my-auto">
              ${product.prevPrice}
            </p>
          </div>

          <div class="flex flex-col justify-center items-center gap-5 mb-16 sm:flex-row lg:mb-0">
            <div class="custom-number-input h-10 w-32">
              <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button
                  data-action="decrement"
                  class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  onClick={decreaseQuantity}
                >
                  <span class="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  type="number"
                  class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
                  name="custom-input-number"
                  value={quantity}
                  readOnly
                />
                <button
                  data-action="increment"
                  class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  onClick={increaseQuantity}
                >
                  <span class="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
            <div className="w-full flex items-center">
              <button
                class="btn w-full  bg-primary text-white flex items-center justify-center font-bold hover:bg-secondary "
                id="add-cart"
              >
                <AiOutlineShoppingCart />
                <span className="mx-2">Add to cart</span>
              </button>
              <button className="text-4xl ml-3 text-gray-500 hover:text-primary duration-150 ">
                <AiFillHeart />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
