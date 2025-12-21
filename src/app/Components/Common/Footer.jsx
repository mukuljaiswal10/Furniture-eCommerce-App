import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-[#555] text-[14px] leading-7">
      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-[1320px] mx-auto px-4 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {/* Contact Us */}
          <div>
            <h4 className="text-[16px] font-semibold text-[#222] mb-5">
              Contact Us
            </h4>

            <p className="mb-1">
              Address: Claritas est etiam processus dynamicus
            </p>
            <p className="mb-1">Phone: 98745612330</p>
            <p className="mb-5">Email: furnitureinfo@gmail.com</p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {[
                FaFacebookF,
                FaInstagram,
                FaTwitter,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="w-[34px] h-[34px] border border-[#bbb] rounded-full
                    flex items-center justify-center cursor-pointer
                    transition-all duration-300
                    hover:bg-[#b8895b] hover:border-[#b8895b] hover:text-white"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-[16px] font-semibold text-[#222] mb-5">
              Information
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#b8895b] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#b8895b] transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#b8895b] transition">
                  Frequently Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-[16px] font-semibold text-[#222] mb-5">
              My Account
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#b8895b] transition">
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#b8895b] transition">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#b8895b] transition">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#b8895b] transition">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Rated Products */}
          <div>
            <h4 className="text-[16px] font-semibold text-[#222] mb-5">
              Top Rated Products
            </h4>

            <div className="flex gap-4 mb-6 border-b border-[#e0e0e0]">
              <img
                src="/image/trp1.jpg"
                alt=""
                className="w-[70px] h-[70px] object-cover"
              />
              <div>
                <h4>Tv Units</h4>
                <p className="text-[#333]">Leo TV Cabinets</p>
                <p className="text-[#b8895b]">Rs. 21,000</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img
                src="/image/trp2.jpg"
                alt=""
                className="w-[70px] h-[70px] object-cover"
              />
              <div>
                <h4>Nest Of Tables</h4>
                <p className="text-[#333]">Caroline Study Tables</p>
                <p className="text-[#b8895b]">Rs. 2,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-[#ddd] ">
        <div className="max-w-[1320px] mx-auto px-4 py-10 text-center">
          {/* Pages Menu Center */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-6">
            <Link href="#" className="hover:text-[#b8895b] transition">
              Home
            </Link>
            <Link href="#" className="hover:text-[#b8895b] transition">
              Online Store
            </Link>
            <Link href="#" className="hover:text-[#b8895b] transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#b8895b] transition">
              Terms Of Use
            </Link>
          </div>


          {/* Copyright */}
          <p className="text-[13px] text-[#777] mb-5">
            All Rights Reserved By Furniture © 2025
          </p>

          {/* Payment Icons */}
          <div className="flex justify-center items-center gap-4">
            
            <img src="/image/p1.png" alt="visa" className="h-6 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
