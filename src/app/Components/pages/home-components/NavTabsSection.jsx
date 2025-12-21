"use client";

import { useState } from "react";
import { products, ProductCard } from "./ProductData";

export default function NavTabsSection() {
  const [activeTab, setActiveTab] = useState("featured");

  const filteredProducts = products.filter((item) => item.type === activeTab);

  return (
    <>
      {/* ===== NAV TABS ===== */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-5 py-[40px] px-5">
        {["featured", "new", "onsale"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 cursor-pointer border border-1 border-[#C09578] text-sm sm:text-base transition ${
              activeTab === tab
                ? "bg-[#C09578] text-white"
                : "bg-white text-black hover:bg-[#C09578] hover:text-white"
            }`}
          >
            {tab === "featured"
              ? "Featured"
              : tab === "new"
              ? "New Arrivals"
              : "Onsale"}
          </button>
        ))}
      </div>

      {/* ===== PRODUCTS GRID ===== */}
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
