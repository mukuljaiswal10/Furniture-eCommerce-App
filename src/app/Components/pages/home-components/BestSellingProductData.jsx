"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ================= DATA ================= */
export const BestSellingProductData = [
  {
    id: 1,
    category: "Coffee Table Sets",
    title: "Godfrey Coffee Table Set",
    oldPrice: 3000,
    price: 2200,
    image: "/image/bs1.jpg",
  },
  {
    id: 2,
    category: "Coffee Tables",
    title: "Evan Coffee Table",
    oldPrice: 2600,
    price: 2300,
    image: "/image/bs2.jpg",
  },
  {
    id: 3,
    category: "Prayer Units",
    title: "Hardwell Temple Prayer Unit",
    oldPrice: 10000,
    price: 9400,
    image: "/image/bs3.jpg",
  },
  {
    id: 4,
    category: "Display Unit",
    title: "Dorian Shoe Rack",
    oldPrice: 3500,
    price: 2800,
    image: "/image/bs4.jpg",
  },
  {
    id: 5,
    category: "Shoe Racks",
    title: "Gloria Shoe Racks",
    oldPrice: 3400,
    price: 2900,
    image: "/image/bs5.jpg",
  },
  {
    id: 6,
    category: "Chest Of Drawers",
    title: "Isaac Chest Of Drawer",
    oldPrice: 32000,
    price: 25000,
    image: "/image/bs6.jpg",
  },
  {
    id: 7,
    category: "Cabinets And Sideboard",
    title: "Louise Cabinet",
    oldPrice: 28000,
    price: 23000,
    image: "/image/bs7.jpg",
  },
  {
    id: 8,
    category: "Bookshelves",
    title: "Erica Bookshelfs",
    oldPrice: 38000,
    price: 30000,
    image: "/image/bs8.jpg",
  },
  {
    id: 9,
    category: "Side And End Tables",
    title: "Hrithvik Stool",
    oldPrice: 7000,
    price: 6000,
    image: "/image/bs9.jpg",
  },
  {
    id: 10,
    category: "Nest Of Tables",
    title: "Caroline Study Tables",
    oldPrice: 3000,
    price: 2500,
    image: "/image/bs10.jpg",
  },
];

/* ================= CARD ================= */
export function BestSellingProductCard({ item }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="shadow-2xl cursor-pointer bg-[#faf7f2]  text-center group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={220}
          className="mx-auto h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <p className="text-gray-500 mt-4 text-sm">{item.category}</p>
      <h4 className="font-medium mt-1 py-2">{item.title}</h4>
      <hr className="text-[grey]" />
      {/* Price */}
      <p className="mt-2">
        <del className="text-gray-400 mr-2">Rs. {item.oldPrice}</del>
        <span className="font-semibold text-[#C09578]">Rs. {item.price}</span>
      </p>

      {/* Actions */}
      <div className="mt-4 flex justify-center gap-5 py-2">
        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="text-2xl transition-transform duration-300 hover:scale-110 cursor-pointer bg-[#c6c6c6] p-1 hover:bg-[#C09578]"
        >
          {liked ? "❤️" : "🤍"}
        </button>

        {/* Cart */}
        <Link href={"#"}>
          <button className="text-sm border-b border-transparent transition-all duration-300 bg-[#c6c6c6] p-2 cursor-pointer hover:bg-[#C09578] hover:text-white">
            Add To Cart
          </button>
        </Link>
      </div>
    </div>
  );
}
