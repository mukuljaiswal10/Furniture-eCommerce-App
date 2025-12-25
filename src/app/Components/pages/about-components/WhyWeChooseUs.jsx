import React from 'react'
import Image from "next/image";

export default function WhyWeChooseUs() {
  return (
    <section className="w-full bg-[#f7f5f1]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 py-12">

        {/* Heading */}
        <h2 className="text-center font-serif font-semibold text-2xl sm:text-3xl md:text-4xl text-gray-900">
          Why Chose Us?
        </h2>

        {/* Main Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Item 1 */}
            <div className="text-center sm:text-left">
              <div className="mx-auto sm:mx-0 w-[60px] h-[60px] relative">
                <Image
                  src="/image/about1.jpg"
                  alt="Money Back"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 font-serif font-semibold text-gray-900">
                100% Money Back Guarantee
              </h3>

              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                Erat metus sodales eget dolor consectetur, porta ut purus at
                et alias, nulla ornare velit amet enim
              </p>
            </div>

            {/* Item 2 */}
            <div className="text-center sm:text-left">
              <div className="mx-auto sm:mx-0 w-[60px] h-[60px] relative">
                <Image
                  src="/image/about2.jpg"
                  alt="Support"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 font-serif font-semibold text-gray-900">
                Online Support 24/7
              </h3>

              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                Erat metus sodales eget dolor consectetur, porta ut purus at
                et alias, nulla ornare velit amet enim
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px]">
              <div className="relative w-full overflow-hidden rounded-2xl
                              h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
                <Image
                  src="/image/about3.jpg"
                  alt="Creative Design"
                  fill
                  className="object-cover"
                />
              </div>

              <h4 className="mt-4 text-center font-serif font-semibold text-gray-900">
                Creative Design
              </h4>

              <p className="mt-2 text-cente text-sm sm:text-base text-gray-600 leading-relaxed">
                Erat metus sodales eget dolor consectetur, porta ut purus at
                et alias, nulla ornare velit amet enim God has created something
                like junglester and metal.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}