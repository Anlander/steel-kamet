"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface ItemProps {
  item: any;
}

export const Card = ({ item }: ItemProps) => {
  console.log(item);
  return (
    <Link
      href={item.full_slug}
      className="text-white gap-5 relative border border-slate-200 grid grid-cols-1"
    >
      <div className="h-[300px] w-full relative">
        <Image
          src={item.content.bakgrund_bild?.filename || "/placeholder.jpg"}
          fill
          alt="Bakgrundsbild"
          objectFit="contain"
        />
      </div>
      <div className="z-10 p-14 bg-slate-500 hover:bg-[#3898ec] transition-all duration-500">
        <h3 className="text-2xl">{item.name}</h3>
        <h4>{item.content.title}</h4>
        <button className="absolute bottom-5 right-5">
          <FaArrowRightLong fontSize={30} />
        </button>
      </div>
    </Link>
  );
};
