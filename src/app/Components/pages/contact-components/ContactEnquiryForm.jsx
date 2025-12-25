import React from 'react'

import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

export default function ContactEnquiryForm() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* LEFT: Contact Info */}
          <div>
            <h2 className="text-[18px] sm:text-[20px] font-serif font-semibold text-black/80">
              Contact Us
            </h2>

            <div className="mt-4 h-px w-full bg-black/10" />

            <div className="mt-6">
              {/* Address */}
              <div className="flex items-center gap-3 py-5">
                <FaMapMarkerAlt className="text-[16px] text-black/60" />
                <p className="text-[14px] sm:text-[15px] text-black/70 font-serif">
                  <span className="font-semibold text-black/75">Address :</span>{" "}
                  Claritas est etiam processus dynamicus
                </p>
              </div>

              <div className="h-px w-full bg-black/10" />

              {/* Phone */}
              <div className="flex items-center gap-3 py-5">
                <FiPhone className="text-[18px] text-black/60" />
                <a
                  href="tel:+9198745612330"
                  className="text-[14px] sm:text-[15px] text-black/70 font-serif hover:text-black/90 transition"
                >
                  98745612330
                </a>
              </div>

              <div className="h-px w-full bg-black/10" />

              {/* Email */}
              <div className="flex items-center gap-3 py-5">
                <FiMail className="text-[18px] text-black/60" />
                <a
                  href="mailto:furnitureinfo@gmail.com"
                  className="text-[14px] sm:text-[15px] text-black/70 font-serif hover:text-black/90 transition"
                >
                  furnitureinfo@gmail.com
                </a>
              </div>

              <div className="h-px w-full bg-black/10" />
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
            <h2 className="text-[18px] sm:text-[20px] font-serif font-semibold text-black/80">
              Tell Us Your Question
            </h2>

            <div className="mt-4 h-px w-full bg-black/10" />

            <form className="mt-6 space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-[13px] sm:text-[14px] font-semibold text-black/75 font-serif">
                  Your Name (required)
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Name *"
                  className="w-full h-11 sm:h-12 bg-transparent border border-black/10 px-4 text-[14px] sm:text-[15px] text-black/70 outline-none focus:border-black/20"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-[13px] sm:text-[14px] font-semibold text-black/75 font-serif">
                  Your Email (required)
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email *"
                  className="w-full h-11 sm:h-12 bg-transparent border border-black/10 px-4 text-[14px] sm:text-[15px] text-black/70 outline-none focus:border-black/20"
                />
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <label className="block text-[13px] sm:text-[14px] font-semibold text-black/75 font-serif">
                  Your Mobile Number (required)
                </label>
                <input
                  name="mobile"
                  type="tel"
                  required
                  placeholder="Mobile Number *"
                  inputMode="numeric"
                  className="w-full h-11 sm:h-12 bg-transparent border border-black/10 px-4 text-[14px] sm:text-[15px] text-black/70 outline-none focus:border-black/20"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="block text-[13px] sm:text-[14px] font-semibold text-black/75 font-serif">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Subject *"
                  className="w-full h-11 sm:h-12 bg-transparent border border-black/10 px-4 text-[14px] sm:text-[15px] text-black/70 outline-none focus:border-black/20"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-[13px] sm:text-[14px] font-semibold text-black/75 font-serif">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Message *"
                  rows={6}
                  className="w-full bg-transparent border border-black/10 px-4 py-3 text-[14px] sm:text-[15px] text-black/70 outline-none focus:border-black/20 resize-none"
                />
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-11 px-8 bg-black/70 text-white text-[14px] font-semibold shadow-sm hover:bg-black/80 transition cursor-pointer"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
