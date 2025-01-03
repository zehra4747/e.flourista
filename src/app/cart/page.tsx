"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cartcard from "../components/Cartcard";

// Define a type for the cart items
interface CartItem {
  title: string;
  price: number;
  src: string;
  qty: number;
}

const Page = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Handle adding item to the cart
  const handleAddToCart = (item: Omit<CartItem, "qty">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.title === item.title);

      if (existingItem) {
        // Update the quantity for existing items
        const updatedCart = prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        // Add a new item to the cart
        const updatedCart = [...prevCart, { ...item, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="mt-20 mb-20">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="col-span-2">
            <Cartcard
              src={"/pexels-cottonbro-4153146.jpg"}
              title="Minimal Pot"
              price={599}
              onAddToCart={() =>
                handleAddToCart({
                  src: "/pexels-cottonbro-4153146.jpg",
                  title: "Minimal Pot",
                  price: 599,
                })
              }
            />
          </div>
          <div className="bg-slate-950/5 p-5 rounded-lg">
            <h2 className="text-lg uppercase font-semibold tracking-tight">Order Summary</h2>
            <div className="divider mt-2 mb-2 bg-black">
              <hr className="bg-black" />
            </div>
            <div className="text-sm font-medium uppercase text-slate-800 tracking-tight">
              <div className="flex items-center justify-between capitalize gap-5">
                <h2>Sub Total</h2>
                <h2>${cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}</h2>
              </div>
              <div className="flex items-center justify-between capitalize gap-5">
                <h2>Delivery Charges</h2>
                <h2>TBD</h2>
              </div>
              <div className="divider mt-2 mb-2 bg-black">
                <hr className="bg-black" />
              </div>
              <div className="flex items-center justify-between text-lg uppercase font-semibold">
                <h2>Total</h2>
                <h2>${cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}</h2>
              </div>
              <div className="divider mt-2 mb-2 bg-black">
                <hr className="bg-black" />
              </div>
              <div className="flex items-center justify-center w-full">
                <button className="bg-black text-white mt-4 rounded hover:bg-transparent hover:text-black duration-300 p-3 text-md w-full">
                  Proceed to Checkout
                </button>
              </div>
            </div>
            <p className="text-xs tracking-tight italic text-center mt-4 font-semibold">
              Delivery charges will be calculated on the checkout page.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
