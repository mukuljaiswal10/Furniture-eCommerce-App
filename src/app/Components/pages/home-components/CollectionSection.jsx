import React from "react";

export default function CollectionSection() {
   
  // data-entry 
  const collectionData = [
    {
      title: "Design Creative",
      heading: "Chair Collection",
      image: "/image/collection-1.webp",
    },
    {
      title: "Bestselling Products",
      heading: "Chair Collection",
      image: "/image/collection-2.webp",
    },
    {
      title: "Onsale Products",
      heading: "Chair Collection",
      image: "/image/collection-1.webp",
    },
  ];
  // end
  
  return (
    <>
      <section className="py-[40px] px-5">
        <div className="max-w-[1320px] mx-auto grid justify-content-center gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {collectionData.map((item, index) => {
            return (
            <CollectionItem key={index} data={item} />
            )
          })}
        </div>
      </section>
    </>
  );
}

function CollectionItem({data}) {
  return (
    <>
      <div className="shadow-lg relative overflow-hidden group cursor-pointer">
        <img
          src={data.image}
          className="group-hover:scale-[1.2] duration-[1s]"
        />
        <div className="absolute top-0 p-10 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] text-white">
          <h3>{data.title}</h3>
          <h2 className="text-2xl font-bold">{data.heading}</h2>
        </div>
      </div>
    </>
  );
}
