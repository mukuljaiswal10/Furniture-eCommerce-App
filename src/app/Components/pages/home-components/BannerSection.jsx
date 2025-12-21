"use client";

import React from "react";
import Image from "next/image";
import "./Banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BannerSection() {
  let settings = {
    dots: true,
    fade:true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    // slider ke liye package lgana padta hai react-slick
    // npm i react-slick
    // npm install slick-carousel

    // top me css import krna hai :-

    // import "slick-carousel/slick/slick.css";
    // import "slick-carousel/slick/slick-theme.css";
    // import Slider from "react-slick";

    // kuch setting karna padta hai return ke upar :-

    //     let settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    <>
      <div className="overflow-hidden" id="banner-slider">
        <Slider {...settings}>
          <div>
            <img src="image/banner-1.jpg"/>
          </div>
          <div>
            <img src="image/banner-2.jpg"/>
          </div>
          <div>
            <img src="image/banner-3.jpg"/>
          </div>
        </Slider>
      </div>
    </>
  );
}
