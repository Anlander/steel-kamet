import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

export const Hero = ({ blok }: any) => {
  return (
    <>
      <div
        {...storyblokEditable}
        className="relative py-36 lg:py-56 text-white"
      >
        <div className="absolute w-full h-full bg-[#121212] z-20 top-0 opacity-40" />

        <div className="z-30 relative flex flex-col justify-center items-center gap-8 px-5 lg:px-0">
          <h2 className="subtitle font-bold">{blok.subtitle}</h2>
          <h1 className="text-center text-[44px] lg:text-[80px] vibes lg:-mb-10">
            {blok.title}
          </h1>
          <div className="lg:max-w-[50%] text-center flex flex-col gap-2 text-[20px]">
            {render(blok.content)}
          </div>
          <div className="flex flex-col text-center lg:flex-row justify-center gap-2">
            {blok.buttons.map((item: any, index: number) => {
              return (
                <Link
                  href={`${item.url.cached_url.replace(/\/(da|en)\//, "/")}`}
                  key={index}
                  className="px-5 py-2 border-2 border-[white] 
              text-[#fff] rounded-full mt-5"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <Image
          src={blok.image.filename}
          fill
          alt={blok.image.meta_data.alt || "Wellness-connect"}
          className="object-cover z-10"
        />
      </div>
    </>
  );
};
