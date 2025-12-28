"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <>
      {/* desktop-header */}

      <header className={`bg-white lg:block hidden`}>
        {/* first row */}
        <div
          className={`max-w-[1320px] mx-auto grid grid-cols-2 justify-content-between items-center py-2 px-5`}
        >
          <div className="text-[12px]">
            Contact us 24/7 : +91-98745612330 / &nbsp;
            <Link
              href={"mailto:furnitureinfo@gmail.com"}
              className="hover:text-[#C09578]"
            >
              furnitureinfo@gmail.com
            </Link>
          </div>

          <div className="text-[12px] text-right">
            <Link href={"/login-register"} className="hover:text-[#C09578]">
              Login
            </Link>

            <span>&nbsp;/&nbsp;</span>

            <Link href={"/login-register"} className="hover:text-[#C09578]">
              Register
            </Link>
          </div>
        </div>
        {/* end */}

        <hr className="text-[#d2d1d1]" />

        {/* second row */}
        <div
          className={`max-w-[1320px] mx-auto grid grid-cols-2 justify-content-between items-center py-5 px-5`}
        >
          <div>
            <Link href={"/"}>
              <Image src="/image/logo.png" alt="logo" width={165} height={55} />
            </Link>
          </div>

          <div className="flex ml-auto gap-5">
            <div className="flex items-center px-1 border border-1 border-[#d2d1d1] py-2 px-4">
              <input
                type="search"
                placeholder="Search product..."
                className="outline-none focus:outline-none focus-within:ring-0"
                autoFocus
              />
              <FaMagnifyingGlass className="hover:text-[#C09578] cursor-pointer" />
            </div>

            <div className="border rounded border-1 border-[#d2d1d1] flex justify-content-center items-center px-4 group">
              <Link href={"#"}>
                <FaHeart className="group-hover:text-[#C09578] duration-75 cursor-pointer" />
              </Link>
            </div>

            {/* add to cart button */}

            <div className="relative flex items-center gap-3 border border-[#e6e6e6] px-6 py-2 rounded-md cursor-pointer group">
              {/* COUNT on LEFT BORDER */}
              <span
                className="absolute left-0 top-1/2  -translate-x-1/2
                    -translate-y-1/2
                    bg-[#c1a27a]
                    text-white
                    text-[10px]
                    w-5
                    h-5
                    flex
                    items-center
                    justify-center
                    rounded-full"
              >
                0
              </span>

              {/* Cart icon */}
              <FaShoppingCart className="text-[16px] text-black group-hover:text-[#C09578] duration-[1s]" />

              {/* Price */}
              <span className="text-[12px] font-medium text-black group-hover:text-[#C09578] duration-[1s]">
                Rs. 0.00
              </span>

              {/* Arrow */}
              <IoChevronDown className="text-[16px] text-black group-hover:text-[#C09578] duration-[1s]" />
            </div>

            {/* end */}
          </div>
        </div>
        {/* end */}

        <hr className="text-[#d2d1d1]" />
      </header>

      {/* third row */}
      <nav
        className={`lg:block hidden bg-[rgba(255,255,255,0.74)] transition-all duration-300 sticky top-0 z-[999] `}
      >
        <div className="max-w-[1320px] mx-auto py-5">
          <ul className="flex justify-center gap-12 text-[14px] font-medium uppercase relative">
            {/* home-menu */}
            <li
              className="relative cursor-pointer
            after:content-['']
            after:absolute after:left-0 after:-bottom-2
            after:w-full after:h-[2px]
            after:bg-[#c1a27a]
            after:scale-x-100
          "
            >
              <Link href={"/"}>Home</Link>
            </li>

            <li
              className="relative cursor-pointer
            after:content-['']
            after:absolute after:left-0 after:-bottom-2
            after:w-full after:h-[2px]
            after:bg-[#c1a27a]
            after:scale-x-0 after:origin-left
            after:transition-transform after:duration-300
            hover:after:scale-x-100
          "
            >
              <Link href={"/product"}>Product</Link>
            </li>

            {/* living-menu*/}
            <li
              className="relative group cursor-pointer flex items-center gap-1
            after:content-['']
            after:absolute after:left-0 after:-bottom-2
            after:w-full after:h-[2px]
            after:bg-[#c1a27a]
            after:scale-x-0 after:origin-left
            after:transition-transform after:duration-300
            hover:after:scale-x-100
          "
            >
              <span className="hover:text-[#c1a27a]">Living</span>
              <span className="transition-transform duration-300 group-hover:rotate-180">
                ▾
              </span>

              {/* Mega-Menu */}
              <div
                className="absolute left-1/2 top-full -translate-x-1/2 mt-6
              w-[900px] bg-white border shadow-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-500 ease-out z-50
            "
              >
                <div className="grid grid-cols-3 gap-10 p-8 text-[14px]">
                  <div>
                    <h4 className="font-semibold mb-3">Tables</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>Side & End Tables</li>
                      <li>Nest of Tables</li>
                      <li>Coffee Table Sets</li>
                      <li>Coffee Tables</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Mirror</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>Wooden Mirrors</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Living Storage</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>Prayer Units</li>
                      <li>Display Unit</li>
                      <li>Shoe Racks</li>
                      <li>Chest of Drawers</li>
                      <li>TV Units</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* sofa-menu */}
            <li
              className="relative group cursor-pointer flex items-center gap-1
            after:content-['']
            after:absolute after:left-0 after:-bottom-2
            after:w-full after:h-[2px]
            after:bg-[#c1a27a]
            after:scale-x-0 after:origin-left
            after:transition-transform after:duration-300
            hover:after:scale-x-100
          "
            >
              <span className="hover:text-[#c1a27a]">Sofa</span>
              <span className="transition-transform duration-300 group-hover:rotate-180">
                ▾
              </span>

              {/* Mega Menu */}
              <div
                className="absolute left-1/2 top-full -translate-x-1/2 mt-6
              w-[900px] bg-white border shadow-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-500 ease-out z-50
            "
              >
                <div className="grid grid-cols-3 gap-10 p-8 text-[14px]">
                  <div>
                    <h4 className="font-semibold mb-3">Sofa Type</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>3 Seater Sofa</li>
                      <li>2 Seater Sofa</li>
                      <li>Sectional Sofa</li>
                      <li>Sofa Cum Bed</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Material</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>Fabric Sofa</li>
                      <li>Leather Sofa</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Collections</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>Modern Sofa</li>
                      <li>Classic Sofa</li>
                      <li>Luxury Sofa</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* page-menu */}
            <li
              className="relative group cursor-pointer flex items-center gap-1
            after:content-['']
            after:absolute after:left-0 after:-bottom-2
            after:w-full after:h-[2px]
            after:bg-[#c1a27a]
            after:scale-x-0 after:origin-left
            after:transition-transform after:duration-300
            hover:after:scale-x-100
          "
            >
              <span className="hover:text-[#c1a27a]">Pages</span>
              <span className="transition-transform duration-300 group-hover:rotate-180">
                ▾
              </span>

              {/* Mega Menu */}
              <div
                className="absolute left-1/2 top-full -translate-x-1/2 mt-6
              w-[200px] bg-white border shadow-lg
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-500 ease-out z-50
            "
              >
                <div className="p-2 text-[14px]">
                  <div>
                    {/* <h4 className="font-semibold mb-3">Shop Pages</h4> */}
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        <Link href={"/about-us"}>About US</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Cart</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Checkout</Link>
                      </li>
                      <li>
                        <Link href={"#"}>Frequently Question</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* contact-menu */}
            <li
              className="relative cursor-pointer
            after:content-['']
            after:absolute after:left-0 after:-bottom-2
            after:w-full after:h-[2px]
            after:bg-[#c1a27a]
            after:scale-x-0 after:origin-left
            after:transition-transform after:duration-300
            hover:after:scale-x-100
          "
            >
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <hr className="text-[#d2d1d1]" />
      </nav>
      {/* end */}

      {/* desktop-header-end */}

      {/* mobile-header + tablet-header*/}
      <MobileHeader />
      {/* end */}
    </>
  );
}
