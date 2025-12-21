"use client";

import { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
export default function MobileHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  //   const [living, setLiving] = useState(false);
  //   const [sofa, setSofa] = useState(false);
  //   const [pages, setPages] = useState(false);

  // accordion jaise
  const [opendropdown, setopendropdown] = useState(null);
  const [active, setActive] = useState("home");

  /* ================= BODY SCROLL LOCK ================= */
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [openMenu]);

  /* ================= DROPDOWN HANDLER ================= */
  const toggleDropdown = (name) => {
    setopendropdown(opendropdown === name ? null : name);
    setActive(name);
  };

  return (
    <>
      {/* ================= MOBILE TOP HEADER ================= */}
      <div className="lg:hidden bg-[white] px-4 py-3 flex gap-2 items-center justify-between border-b sticky top-0 z-40">
        {/* LOGO IMAGE */}
        <Link href={"/"}>
          <Image src="/image/logo.png" alt="logo" width={95} height={55} />
        </Link>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4">
          {/* Wishlist */}
          <div className="border border-[#d2d1d1] px-3 py-2 rounded-md group">
            <FaHeart className="group-hover:text-[#C09578] duration-[1s]" />
          </div>

          {/* Cart */}
          <div className="relative flex items-center gap-2 border border-[#d2d1d1] px-4 py-2 rounded-md group">
            {/* Badge */}
            <span
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
              bg-[#c1a27a] text-white text-[10px]
              w-4 h-4 flex items-center justify-center rounded-full"
            >
              0
            </span>

            <FaShoppingCart className="group-hover:text-[#C09578] duration-[1s]" />

            <span className="text-sm text-[14px] font-medium group-hover:text-[#C09578] duration-[1s]">
              Rs.0.00
            </span>
          </div>

          {/* Hamburger */}
          <button
            className="border border-[#d2d1d1] px-3 py-2 rounded-md"
            onClick={() => setOpenMenu(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* ================= OVERLAY ================= */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenMenu(false)}
        />
      )}

      {/* ================= SLIDE MENU ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px]
        bg-[#f6efe7] z-50
        transform transition-transform duration-300
        ${openMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* TOP HEADER */}
        <div className="relative px-4 py-6 border-b text-center">
          {/* CLOSE BUTTON – TOP RIGHT */}
          <button
            onClick={() => setOpenMenu(false)}
            className="absolute top-4 right-4 text-xl z-[60]  border bg-white"
          >
            <FaTimes size={18} />
          </button>

          {/* CONTACT INFO – CENTER */}
          <p className="text-sm mt-[20px]">Contact us 24/7</p>
          <p className="font-medium text-sm mt-1">+91-98745612330</p>
          <p className="px-4 py-3 text-sm">
            <Link href={"mailto:furnitureinfo@gmail.com"}>
              furnitureinfo@gmail.com
            </Link>
          </p>
        </div>

        {/* ================= MENU LIST ================= */}
        <ul className="px-4 text-[15px]">
          {/* HOME */}
          <li
            onClick={() => setActive("home")}
            className={`py-3 border-b cursor-pointer
            ${active === "home" ? "text-[#c1a27a] font-medium" : ""}`}
          >
            <Link href={"/"}>Home</Link>
          </li>

          {/* ================= LIVING ================= */}
          <li className="border-b">
            <button
              onClick={() => toggleDropdown("living")}
              className={`w-full flex justify-between items-center py-4 ${
                active === "living" ? "text-[#c1a27a] font-medium" : ""
              }`}
            >
              Living
              <IoChevronDown
                className={`transition-transform duration-300 ${
                  opendropdown === "living" ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              className={`pl-4 overflow-hidden transition-all duration-500 ease-in-out
              ${
                opendropdown === "living"
                  ? "max-h-40 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              <li className="py-2">Tables</li>
              <li className="py-2">Mirror</li>
              <li className="py-2">Living Storage / Collections</li>
            </ul>
          </li>

          {/* ================= SOFA ================= */}
          <li className="border-b">
            <button
              onClick={() => toggleDropdown("sofa")}
              className={`w-full flex justify-between items-center py-4 ${
                active === "sofa" ? "text-[#c1a27a] font-medium" : ""
              }`}
            >
              Sofa
              <IoChevronDown
                className={`transition-transform duration-300 ${
                  opendropdown === "sofa" ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              className={`pl-4 overflow-hidden transition-all duration-500 ease-in-out
              ${
                opendropdown === "sofa"
                  ? "max-h-40 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              <li className="py-2">3 Seater Sofa</li>
              <li className="py-2">2 Seater Sofa</li>
              <li className="py-2">Sofa Cum Bed</li>
            </ul>
          </li>

          {/* ================= PAGES ================= */}
          <li className="border-b">
            <button
              onClick={() => toggleDropdown("pages")}
              className={`w-full flex justify-between items-center py-4 ${
                active === "pages" ? "text-[#c1a27a] font-medium" : ""
              }`}
            >
              Pages
              <IoChevronDown
                className={`transition-transform duration-300 ${
                  opendropdown === "pages" ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              className={`pl-4 overflow-hidden transition-all duration-500 ease-in-out
              ${
                opendropdown === "pages"
                  ? "max-h-32 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              <li className="py-2">About Us</li>
              <li className="py-2">Contact</li>
              <li className="py-2">FAQ</li>
            </ul>
          </li>

          {/* LOGIN */}
          <li className="py-4 cursor-pointer">Login / Register</li>
        </ul>
      </div>
    </>
  );
}
