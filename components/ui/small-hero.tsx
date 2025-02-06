import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export const SmallHero = ({ blok }: any) => {
  return (
    <div
      {...storyblokEditable}
      className="relative h-full lg:h-[50vh] flex flex-col items-center justify-center"
    >
      <div className="z-20 mt-10 container">
        <h1 className="text-lg lg:text-[54px] text-white font-bold">
          {blok.title}
        </h1>
      </div>
      <div className="absolute w-full h-full opacity-30 bg-slate-500 z-10" />
      <Image
        src={blok.img.filename || ""}
        fill
        alt={blok.title}
        objectFit="cover"
      />
    </div>
  );
};
