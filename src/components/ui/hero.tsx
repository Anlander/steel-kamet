
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export const Hero = ({ blok }: any) => {
  return (
    <div
      className="h-[60vh] lg:h-[70vh] relative flex justify-center items-center"
      {...storyblokEditable}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 z-10" />
      <Image
        src={blok.img.filename}
        fill
        alt="Steelkamet"
        className="object-cover"
      />
      <div className="z-20 text-center flex flex-col gap-2 justify-center items-center hero-image pt-20 lg:pt-0">
        <Image
          src={blok.logo.filename}
          width={400}
          height={200}
          alt="Steelkamet"
          className="object-cover"
        />
        <span className="fixed hidden lg:block -left-28 top-[35%] font rotate-90">
          {blok.title}
        </span>
        <p className="text-sm lg:text-lg lg:max-w-[60%]">{blok.content}</p>
        <div className="mt-4 lg:mt-10">
          <Link href="#form" className="button">
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
};
