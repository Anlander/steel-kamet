"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface ItemProps {
  item: any;
}

export const Card = ({ item }: ItemProps) => {
  return (
    <Link
      href={item.full_slug}
      className="text-white gap relative border border-slate-200 grid grid-cols-1"
    >
      <div className="h-[300px] w-full relative">
        <Image
          src={
            item?.content?.bakgrund_bild?.filename ||
            "https://a.storyblok.com/f/321658/1900x1029/35b561f3c5/fp-batching-plant-concret-1.png"
          }
          fill
          alt="Bakgrundsbild"
          objectFit="cover"
        />
      </div>
      <div className="z-10 py-14 px-5 min-h-[250px] bg-slate-500 hover:bg-[#3898ec] transition-all duration-500">
        <h3 className="text-2xl">{item.name}</h3>
        <h4>{item.content.title}</h4>
        <button className="absolute bottom-5 right-5">
          <FaArrowRightLong fontSize={30} />
        </button>
      </div>
    </Link>
  );
};
