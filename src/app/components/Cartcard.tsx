import React from "react";
import Image from "next/image";

interface CartcardProps {
  src: string;
  title: string;
  price: number;
  onAddToCart: () => void;
}

const Cartcard: React.FC<CartcardProps> = ({ src, title, price, onAddToCart }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap">
      <div className="w-[350px] h-[35rem] p-4 mx-auto shadow-md group rounded relative">
        <div className="block h-[23rem] overflow-hidden">
          <Image alt={title} className="object-cover w-full h-full" src={src} />
        </div>
        <div className="mt-4">
          <h2 className="mr-2 font-semibold text-lg">{title}</h2>
          <p className="mr-2 text-sm">{title} description</p>
          <p className="mr-2 font-semibold text-md text-slate-700 mt-2">${price}</p>
        </div>
        <div>
          <button
            onClick={onAddToCart} // Call the passed in function when clicked
            className="bg-black text-white flex gap-2 text-xs p-3 hover:bg-transparent hover:text-black duration-300 rounded-xl absolute bottom-2 right-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;
