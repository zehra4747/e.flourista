import React from "react";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  src,
  alt,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="bg-white p-4  w-[350px] h-[35rem] hover:scale-105 transition-transform duration-300 ease-in-out rounded shadow-md">
      <div className="block h-[23rem] overflow-hidden rounded mb-4">
        <Image
          alt={alt}
          src={src}
          width={400}
          height={4000}
         
          loading="lazy" // Improves performance
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm mb-2 text-gray-600">{description}</p>
      <p className="text-lg font-bold mb-2 text-gray-900">${price.toFixed(2)}</p>
      <button
        onClick={onAddToCart}
        className="bg-black text-white px-4 py-2 rounded text-xs mb-2 hover:bg-zinc-800 transition duration-300"
        aria-label={`Add ${title} to cart`} // Improves accessibility
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
