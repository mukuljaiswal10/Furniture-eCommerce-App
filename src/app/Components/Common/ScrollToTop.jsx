"use client";

import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollTop}
      className=" cursor-pointer
        fixed bottom-6 right-6 w-11 h-11 bg-black rounded-full
        flex items-center justify-center
        overflow-hidden group z-50
      "
    >
      {/* Static Arrow (Always visible in center) */}
      <span className="absolute text-white text-lg">
        <FaAngleUp />
        <FaAngleUp className="-mt-2" />
      </span>

      {/* Animated Arrow (Bottom to Center on Hover) */}
      <span
        className="
          absolute text-white text-lg
          translate-y-6 opacity-0
          group-hover:translate-y-0
          group-hover:opacity-100
          transition-all duration-300 ease-out
        "
      >
        <FaAngleUp />
        <FaAngleUp className="-mt-2" />
      </span>
    </button>
  );
}
