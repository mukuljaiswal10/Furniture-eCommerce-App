import React from 'react'

import Image from "next/image";

const cards = [
  {
    img: "/image/abou4.jpg",
    title: "What Do We Do?",
    desc: "Mirum est notare quam littera gothica, quam nunc putamus\nparum claram, anteposuerit litterarum formas humanitatis per\nsaecula quarta decima et quinta decima.",
  },
  {
    img: "/image/about5.jpg",
    title: "Our Mission",
    desc: "Mirum est notare quam littera gothica, quam nunc putamus\nparum claram, anteposuerit litterarum formas humanitatis per\nsaecula quarta decima et quinta decima.",
  },
  {
    img: "/image/about6.jpg",
    title: "History Of Us",
    desc: "Mirum est notare quam littera gothica, quam nunc putamus\nparum claram, anteposuerit litterarum formas humanitatis per\nsaecula quarta decima et quinta decima.",
  },
];

export default function AboutCard() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {cards.map((item, idx) => (

            <div key={idx} className="text-center">
              {/* Image block */}
              <div className="mx-auto w-full max-w-[360px]">
                <div className="relative w-full overflow-hidden bg-white/30 shadow-sm ring-1 ring-black/10">

                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                      priority={idx === 0}
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-[18px] sm:text-[19px] font-serif font-semibold text-black/80">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[14px] sm:text-[15px] leading-7 text-black/70 font-serif">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}