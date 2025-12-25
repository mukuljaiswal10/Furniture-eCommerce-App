// import React from 'react'

// export default function AboutContentArea() {
//   return (
//     <>
//     </>
//   )
// }



import Image from "next/image";

export default function AboutContentArea() {
  return (
    <section className="w-full">

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

        <div
          className="relative w-full overflow-hidden bg-black/5
                     h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px]"
        >
          <Image
            src="/image/aboutbanner.jpg"
            alt="About Us Banner"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="pt-6 sm:pt-8 text-center">

          <h1 className=" font-semibold text-2xl sm:text-3xl md:text-4xl text-gray-900">
            Welcome To Monsta!
          </h1>

          <p className="mx-auto mt-4 max-w-[1100px] text-gray-600 text-sm sm:text-base leading-relaxed">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugiat nulla facilisi.
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum.
          </p>

          <p className="mx-auto mt-5 max-w-[900px] italic text-[#c09578] text-sm sm:text-base">
            “There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form”.
          </p>

        </div>

      </div>
    </section>
  );
}