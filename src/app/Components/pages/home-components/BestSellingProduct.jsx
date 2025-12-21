"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BestSellingProductCard,
  BestSellingProductData,
} from "./BestSellingProductData";

/* ========== ARROWS ========== */
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="border w-8 h-8 flex items-center justify-center hover:bg-[#C09578] cursor-pointer hover:text-white transition"
    >
      ❯
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="border w-8 h-8 flex items-center justify-center hover:bg-[#C09578] cursor-pointer hover:text-white transition"
    >
      ❮
    </button>
  );
}

let sliderRef = null;

/* ========== COMPONENT ========== */
export default function BestSellingProduct() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,

    // 👇 DESKTOP DEFAULT
    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    swipe: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024, // <= 1024px (Tablet)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // <= 640px (Mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="w-full max-w-[1320px] mx-auto px-4">
        {/* Heading + line + arrows */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap">
            Bestselling Products
          </h2>

          <div className="flex-1 h-[1px] bg-gray-300"></div>

          <div className="flex gap-2">
            <PrevArrow onClick={() => sliderRef?.slickPrev()} />
            <NextArrow onClick={() => sliderRef?.slickNext()} />
          </div>
        </div>

        {/* Slider */}
        <Slider ref={(ref) => (sliderRef = ref)} {...settings}className="w-full">
          {BestSellingProductData.map((item) => (
            <div key={item.id} className="px-3">
              <BestSellingProductCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

