import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CartPopup = () => {
  return (
    <div >
      <div className="absolute top-20 -right-12 md:right-3 hidden group-hover:block hover:block">
        <div className="bg-white  p-3 md:p-5 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none capitalize">
          <div className="max-h-72 overflow-auto">
            <div className="flex w-max py-4 border-b border-slate-600">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/1130/3412/products/p8_523c97c7-2aa2-47e8-8b17-5a3c05a66db3_1024x1024_crop_center.jpg?v=1674275335"
                  className="w-24 relative"
                  alt=""
                />
                <span className="absolute bg-primary rounded-full w-6 h-6 text-white text-xs leading-6 text-center font-bold top-11">
                  <small>x</small> 1
                </span>
              </div>
              <div className="text-left max-w-[9rem]">
                <h6 className="text-base font-bold text-slate-700">
                  IPhone 14 Pro Max - Red
                </h6>
                <h4 className="text-primary text-xl font-bold mt-1">$999.00</h4>
              </div>
              <div className="px-2 text-slate-600 flex items-center cursor-pointer hover:text-primary">
                <AiOutlineCloseCircle />
              </div>
            </div>
          </div>
          <div className="my-2 flex justify-between px-5 py-3">
            <h5 className="text-slate-600 text-lg font-semibold">Total:</h5>
            <h5 className="text-primary font-bold text-xl">$1,498.00 USD</h5>
          </div>
          <div className="flex justify-between">
            <button className="btn bg-secondary text-white hover:bg-primary">
              View Cart
            </button>
            <button className="btn bg-secondary text-white hover:bg-primary">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
