import React from "react";
import ProductCard from "./Productcard";

// Define a type for the cart item
interface CartItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  qty: number;
}

const Productlist = () => {
  const bestSell = [
    {
      id: "1",
      src: "/pexels-cottonbro-4153146.jpg",
      alt: "product",
      title: "Minimal Pot",
      description: "Elegant minimal pot, perfect for modern spaces and vibrant blooms.",
      price: 599,
    },
    {
      id: "2",
      src: "/pexels-darya-grey_owl-132130036-21581346.jpg",
      alt: "product",
      title: "Signature Rose Bouquet",
      description: "Hand-selected roses, elegantly crafted to leave a lasting impression",
      price: 999,
    },
    {
      id: "3",
      src: "/pexels-voltaccess-48169519-7556738 (1).jpg",
      alt: "product",
      title: "Floral Arrangement",
      description: "Elegant floral designs crafted to brighten any space or occasion",
      price: 3500,
    },
  ];

  const addToCart = (item: CartItem) => {
    console.log("Item added to cart:", item);
    // Handle the add to cart logic, e.g., display a notification or update the UI
  };

  return (
    <div className="mt-10">
      <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap">
        {bestSell.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
            price={item.price}
            onAddToCart={() =>
              addToCart({
                ...item,
                qty: 1,
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Productlist;
