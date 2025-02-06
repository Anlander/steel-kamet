"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface Item {
  title: string;
  content: string;
  link: {
    url: string;
  };
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
          <Link href={item?.link?.url || "/"} key={i} className="relative">
            <div className="h-[300px] relative ">
              <Image
                src={item?.img?.filename || "/"}
                fill
                alt={item.title}
                className=""
                objectFit="cover"
              />
            </div>
            <div>
              <div className="z-10 absolute top-0 w-[80%] opacity-90 right-0  text-white flex flex-col justify-center bg-slate-500 gap-2 h-full px-5 hover:bg-[#3898ec] transition-all duration-500">
                <h3 className="text-[20px] w-full font-bold break-words">
                  {item.title}
                </h3>
                <span className="mx-auto">{item.content}</span>
                <button className="absolute bottom-5 right-5">
                  <FaArrowRightLong fontSize={30} />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
