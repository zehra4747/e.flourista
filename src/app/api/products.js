// /pages/api/products.js
export default function handler(req, res) {
    const products = [
      {
        id: 1,
        name: "Rose",
        price: 599,
        image: "/pexels-afiqah-ct-774928673-29658176.jpg"
      },
      {
        id: 2,
        name: "Lily",
        price: 799,
        image: "/pexels-afiqah-ct-774928673-29658176.jpg"
      },
      {
        id: 3,
        name: "Rosilaa",
        price: 399,
        image: "/pexels-afiqah-ct-774928673-29658176.jpg"
      },
    ];
  
    res.status(200).json(products);
  }
  