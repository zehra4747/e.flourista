"use client";
import React from "react";
import Image from "next/image";

interface ProductCardProps {

  title: string;
  price: number;
  description: string;
  src: string;
  alt: string;
  onAddToCart: () => void;
}

const Card: React.FC<ProductCardProps> = ({ title, price, description, src, alt, onAddToCart }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <div className="bg-white p-4 hover:scale-105 transition-transform duration-300 ease-in-out rounded">
      <Image
        alt={alt}
        src={src}
        width={300}
        height={224}
        className="w-full h-56 object-cover rounded mb-4 hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-lg mb-4 text-gray-800">{formattedPrice}</p>
      <p className="text-sm mb-4 text-gray-500">{description}</p>
      <button
        onClick={onAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded text-lg hover:bg-gray-800 transition duration-300"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
