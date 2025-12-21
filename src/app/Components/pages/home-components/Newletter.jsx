"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  // simple email check
  const isValidEmail = email.includes("@") && email.includes(".");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail) return;
    alert("Subscribed Successfully");
    setEmail("");
  };

  return (
    <section className="bg-[#f6f1ea] py-16 px-4 my-[40px]">
      <div className="max-w-[1320px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[26px] md:text-[32px] font-semibold text-[#2d2d2d]">
          Our Newsletter
        </h2>

        {/* Text */}
        <p className="text-[#777] mt-2 mb-8 text-sm md:text-base">
          Get E-mail updates about our latest shop and special offers.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[700px] mx-auto"
        >
          <input
            type="email"
            placeholder="Email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 h-[50px] px-4 border border-gray-300 outline-none text-sm"
          />

          <button
            type="submit"
            disabled={!isValidEmail}
            className={`h-[50px] px-8 text-sm text-white transition duration-300 cursor-pointer
              ${
                isValidEmail
                  ? "bg-[#b8895b] hover:bg-black"
                  : "bg-[#b8895b]/60 cursor-not-allowed"
              }`}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
