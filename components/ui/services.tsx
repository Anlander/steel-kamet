"use client";

import Image from "next/image";

interface Item {
  title: string;
  content: string;
  img: {
    filename: string;
  };
  _uuid: string;
}
interface ServicesProps {
  blok: {
    fields: Item[];
    title: string;
  };
}

export const Services = ({ blok }: ServicesProps) => {
  return (
    <div className="py-14" id="tjänster">
      <h2 className="text-black font-bold container py-10">{blok.title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 container gap-5 pb-14">
        {blok.fields.map((item: Item, i: number) => (
          <div key={i} className="card relative">
            <Image
              src={item?.img?.filename || "/"}
              fill
              alt={item.title}
              className="rounded-[5px]"
            />
            <div className="absolute inset-0 bg-black rounded-md bg-opacity-40 z-0"></div>
            <div className="z-10 text-white flex flex-col justify-center gap-3">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <span className="px-5 mx-auto text-center">{item.content}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
