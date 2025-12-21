"use client";

import Image from "next/image";
import { useState } from "react";

/* ===== PRODUCTS DATA ===== */
export const products = [
  {
    id: 1,
    category: "Nest Of Tables",
    title: "Caroline Study Tables",
    oldPrice: 3000,
    price: 2500,
    image: "/image/f1.jpg",
    type: "featured",
  },
  {
    id: 2,
    category: "Coffee Tables",
    title: "Evan Coffee Table",
    oldPrice: 2600,
    price: 2300,
    image: "/image/f2.jpg",
    type: "featured",
  },
  {
    id: 3,
    category: "Shoe Racks",
    title: "Gloria Shoe Racks",
    oldPrice: 3400,
    price: 2900,
    image: "/image/f3.jpg",
    type: "featured",
  },
  {
    id: 4,
    category: "Bookshelves",
    title: "Erica Bookshelfs",
    oldPrice: 38000,
    price: 30000,
    image: "/image/f4.jpg",
    type: "featured",
  },
  {
    id: 5,
    category: "Wooden Sofa Cum Bed",
    title: "Sapien Sofa Cum Bed",
    oldPrice: 64000,
    price: 54000,
    image: "/image/f5.jpg",
    type: "featured",
  },
  {
    id: 6,
    category: "2 Seater Sofa",
    title: "Ganthur Sheesham Wood Sofa Set",
    oldPrice: 8000,
    price: 7600,
    image: "/image/f6.jpg",
    type: "featured",
  },
  {
    id: 7,
    category: "Wooden Jhula",
    title: "Calina Swing Jhula",
    oldPrice: 65000,
    price: 58000,
    image: "/image/f7.jpg",
    type: "featured",
  },
  {
    id: 8,
    category: "Side And End Tables",
    title: "Hrithvik Stool",
    oldPrice: 7000,
    price: 6000,
    image: "/image/a1.jpg",
    type: "new",
  },
  {
    id: 9,
    category: "Coffee Table Sets",
    title: "Godfrey Coffee Table Set",
    oldPrice: 3000,
    price: 2200,
    image: "/image/a2.jpg",
    type: "new",
  },
  {
    id: 10,
    category: "Display Unit",
    title: "Dorian Shoe Rack",
    oldPrice: 3500,
    price: 2800,
    image: "/image/a3.jpg",
    type: "new",
  },
  {
    id: 11,
    category: "Cabinets And Sideboard",
    title: "Louise Cabinet",
    oldPrice: 28000,
    price: 23000,
    image: "/image/a4.jpg",
    type: "new",
  },
  {
    id: 12,
    category: "Wooden Mirrors",
    title: "Winona Mirror",
    oldPrice: 2000,
    price: 1500,
    image: "/image/a5.jpg",
    type: "new",
  },
  {
    id: 13,
    category: "1 Seater Sofa",
    title: "Yuvi Sheesham Wood Sofa Set",
    oldPrice: 10000,
    price: 7600,
    image: "/image/a6.jpg",
    type: "new",
  },
  {
    id: 14,
    category: "Wooden Sofa Sets",
    title: "Grace Sheesham Wood Sofa Set",
    oldPrice: 90000,
    price: 72000,
    image: "/image/a7.jpg",
    type: "new",
  },
  {
    id: 15,
    category: "Prayer Units",
    title: "Hardwell Temple Prayer Unit",
    oldPrice: 10000,
    price: 9400,
    image: "/image/s1.jpg",
    type: "onsale",
  },
  {
    id: 16,
    category: "Chest Of Drawers",
    title: "isaae Chest Of Drawer",
    oldPrice: 32000,
    price: 25000,
    image: "/image/s2.jpg",
    type: "onsale",
  },
  {
    id: 17,
    category: "TV Units",
    title: "Leo TV Cabinets",
    oldPrice: 26000,
    price: 21000,
    image: "/image/s3.jpg",
    type: "new",
  },
  {
    id: 18,
    category: "L Shape Sofa",
    title: "Harper L Shaped Wooden Sofa With Drawer",
    oldPrice: 85000,
    price: 76000,
    image: "/image/s4.jpg",
    type: "onsale",
  },
  {
    id: 19,
    category: "3 Seater Sofa",
    title: "Victoria Sheesham Wood Sofa Set",
    oldPrice: 8000,
    price: 7000,
    image: "/image/s5.jpg",
    type: "onsale",
  },
];

/* ===== PRODUCT CARD ===== */
export function ProductCard({ item }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="cursor-pointer group border border-gray-200 shadow-2xl mb-[20px] text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={220}
          className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <p className="text-gray-500 mt-4 text-sm">{item.category}</p>
      <h4 className="font-medium mt-1 py-2">{item.title}</h4>
      <hr className="text-[grey]"/>
      {/* Price */}
      <p className="mt-2">
        <del className="text-gray-400 mr-2">Rs. {item.oldPrice}</del>
        <span className="font-semibold text-[#C09578]">Rs. {item.price}</span>
      </p>

      {/* Actions */}
      <div className="mt-4 flex justify-center gap-5 py-2">
        <button
          onClick={() => setLiked(!liked)}
          className="text-2xl transition-transform duration-300 hover:scale-110 cursor-pointer bg-[#c6c6c6] p-1 hover:bg-[#C09578]"
        >
          {liked ? "❤️" : "🤍"}
        </button>

        <button className="text-sm border-b border-transparent transition-all duration-300 bg-[#c6c6c6] p-2 cursor-pointer hover:bg-[#C09578] hover:text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
