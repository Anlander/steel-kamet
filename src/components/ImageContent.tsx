import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export const ImageContent = ({ blok }: any) => {
  return (
    <>
      <div
        {...storyblokEditable}
        className="mx-auto flex justify-center bg-[#172D32] text-white py-20 px-5 lg:px-0"
        id={blok._uid}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:max-w-[85%] xl:max-w-[80%] gap-24 items">
          {blok.image_left && (
            <div className="w-full h-[300px] lg:h-[500px] relative">
              <Image
                src={blok?.img.filename}
                alt={blok.img.alt}
                fill
                className="rounded-xl"
              />
            </div>
          )}
          <div>
            <span className="subtitle">{blok.subtitle}</span>
            <h2 className="mb-10 mt-5">{blok.title}</h2>
            <span className="mt-10 italic flex flex-col gap-5">{render(blok.content)}</span>
          </div>
          {!blok.image_left && (
            <div className="w-full h-[300px] lg:h-[500px] relative">
              <Image
                src={blok?.img.filename}
                alt={blok.img.alt}
                fill
                className="rounded-xl object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
