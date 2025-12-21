"use client";

import Slider from "react-slick";
import Image from "next/image";
import { CustomerSayData } from "./CustomerSayData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomerSay() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    fade: false, 
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  return (
    <section className=" py-10 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          What Our Customers Say ?
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {CustomerSayData.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col items-center justify-center px-4">
                {/* Review */}
                <p className="max-w-2xl text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.review}
                </p>
                {/* Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 transition-transform duration-300 hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Name */}
                <h4 className="font-semibold tracking-wide">{item.name}</h4>

                {/* Role */}
                <p className="text-gray-500 text-sm mb-3">{item.role}</p>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-[#C09578] text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
