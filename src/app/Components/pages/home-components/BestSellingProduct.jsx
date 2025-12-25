// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {
//   BestSellingProductCard,
//   BestSellingProductData,
// } from "./BestSellingProductData";

// /* ========== ARROWS ========== */
// function NextArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="border w-8 h-8 flex items-center justify-center hover:bg-[#C09578] cursor-pointer hover:text-white transition"
//     >
//       ❯
//     </button>
//   );
// }

// function PrevArrow({ onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="border w-8 h-8 flex items-center justify-center hover:bg-[#C09578] cursor-pointer hover:text-white transition"
//     >
//       ❮
//     </button>
//   );
// }

// let sliderRef = null;

// /* ========== COMPONENT ========== */
// export default function BestSellingProduct() {
//   const Desktopsettings = {
//     dots: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 5,
//     slidesToScroll: 1,

//     autoplay: true,
//     autoplaySpeed: 2500,
//     pauseOnHover: true,
//     swipe: true,
//     arrows: false,
//   };

//   const Tabletsettings = {
//     dots: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,

//     autoplay: true,
//     autoplaySpeed: 2500,
//     pauseOnHover: true,
//     swipe: true,
//     arrows: false,
//   };

//   const Mobilesettings = {
//     dots: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,

//     autoplay: true,
//     autoplaySpeed: 2500,
//     pauseOnHover: true,
//     swipe: true,
//     arrows: false,
//   };

//   return (
//     <section className="py-16">
//       <div className="w-full max-w-[1320px] mx-auto px-4">
//         {/* Heading + line + arrows */}
//         <div className="flex items-center gap-4 mb-10">
//           <h2 className="text-xl md:text-2xl font-semibold whitespace-nowrap">
//             Bestselling Products
//           </h2>

//           <div className="flex-1 h-[1px] bg-gray-300"></div>

//           <div className="flex gap-2">
//             <PrevArrow onClick={() => sliderRef?.slickPrev()} />
//             <NextArrow onClick={() => sliderRef?.slickNext()} />
//           </div>
//         </div>

//         {/* Slider */}

//         {/* desktops */}
//         <div className="hidden lg:block">
//           <Slider
//             ref={(ref) => (sliderRef = ref)}
//             {...Desktopsettings}
//             className="w-full"
//           >
//             {BestSellingProductData.map((item) => (
//               <div key={item.id} className="px-3">
//                 <BestSellingProductCard item={item} />
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* tablets */}
//         <div className="hidden md:block lg:hidden">
//           <Slider
//             ref={(ref) => (sliderRef = ref)}
//             {...Tabletsettings}
//             className="w-full"
//           >
//             {BestSellingProductData.map((item) => (
//               <div key={item.id} className="px-3">
//                 <BestSellingProductCard item={item} />
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* mobile */}
//         <div className="block md:hidden">
//           <Slider
//             ref={(ref) => (sliderRef = ref)}
//             {...Mobilesettings}
//             className="w-full"
//           >
//             {BestSellingProductData.map((item) => (
//               <div key={item.id} className="px-3">
//                 <BestSellingProductCard item={item} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
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
      type="button"
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
      type="button"
      onClick={onClick}
      className="border w-8 h-8 flex items-center justify-center hover:bg-[#C09578] cursor-pointer hover:text-white transition"
    >
      ❮
    </button>
  );
}

/* ========== COMPONENT ========== */
export default function BestSellingProduct() {
  // ✅ 3 different refs
  const desktopRef = useRef(null);
  const tabletRef = useRef(null);
  const mobileRef = useRef(null);

  // ✅ detect current device
  const [device, setDevice] = useState("mobile");

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setDevice("desktop");
      else if (w >= 768) setDevice("tablet");
      else setDevice("mobile");
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ active slider ref
  const getActiveSlider = () => {
    if (device === "desktop") return desktopRef.current;
    if (device === "tablet") return tabletRef.current;
    return mobileRef.current;
  };

  // ✅ arrows handlers
  const handlePrev = () => {
    getActiveSlider()?.slickPrev?.();
  };

  const handleNext = () => {
    getActiveSlider()?.slickNext?.();
  };

  const Desktopsettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    swipe: true,
    arrows: false,
  };

  const Tabletsettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    swipe: true,
    arrows: false,
  };

  const Mobilesettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    swipe: true,
    arrows: false,
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
            <PrevArrow onClick={handlePrev} />
            <NextArrow onClick={handleNext} />
          </div>
        </div>

        {/* ✅ Slider */}

        {/* desktops */}
        <div className="hidden lg:block">
          <Slider ref={desktopRef} {...Desktopsettings} className="w-full">
            {BestSellingProductData.map((item) => (
              <div key={item.id} className="px-3">
                <BestSellingProductCard item={item} />
              </div>
            ))}
          </Slider>
        </div>

        {/* tablets */}
        <div className="hidden md:block lg:hidden">
          <Slider ref={tabletRef} {...Tabletsettings} className="w-full">
            {BestSellingProductData.map((item) => (
              <div key={item.id} className="px-3">
                <BestSellingProductCard item={item} />
              </div>
            ))}
          </Slider>
        </div>

        {/* mobile */}
        <div className="block md:hidden">
          <Slider ref={mobileRef} {...Mobilesettings} className="w-full">
            {BestSellingProductData.map((item) => (
              <div key={item.id} className="px-3">
                <BestSellingProductCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
