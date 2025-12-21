"use client";

import Image from "next/image";
import Link from "next/link";

export default function NewCollectionBanner() {
  return (
    <section
      className="
        group
        relative w-full overflow-hidden
        h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] my-[40px]
      "
    >
      {/* ===== Background Image ===== */}
      <Image
        src="/image/newcolban.jpg"
        alt="New Trending Collection"
        fill
        priority
        className="object-cover object-right transition-transform duration-700 group-hover:scale-105"
      />

      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* ===== Content ===== */}
      <div
        className="
          relative z-10 h-full
          flex items-center
          px-6 sm:px-10 md:px-16 lg:px-24
        "
      >
        <div
          className="
            max-w-[520px]
            transition-all duration-500
            group-hover:scale-[1.03]
          "
        >
          {/* Heading */}
          <h2
            className="
              font-serif
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-semibold text-black
              leading-tight
            "
          >
            New Trending Collection
          </h2>

          {/* Sub text */}
          <p
            className="
              mt-3
              text-sm sm:text-base
              text-gray-700
            "
          >
            We Believe That Good Design Is Always In Season
          </p>

          {/* Button */}
          <Link href={"#"}>
            <button
              className="
              text-[#c09578]
              font-bold
              cursor-pointer
              mt-6
              px-8 py-3
              border border-[#c09578]
              text-sm tracking-wide
              transition-all duration-300
              hover:bg-[#c09578] hover:text-white
              hover:scale-105
            "
            >
              SHOPPING NOW
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
