"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { render } from "storyblok-rich-text-react-renderer";

interface HeroProps {
  sub?: string;
  title?: string;
  image?: string;
  alt?: string;
  text?: string;
  content?: string;
  arrow?: boolean;
}

export const Hero = ({
  sub,
  title,
  image,
  alt,
  text,
  content,
  arrow,
}: HeroProps) => {
  const router = useRouter();
  return (
    <div className="mb-5">
      <div className="lg:h-[60vh] text-white mb-10 relative h-[300px] flex flex-col justify-end items-end">
        {arrow && (
          <button
            type="button"
            className="bottom-5 rounded-full bg-slate-500 p-2 left-5 fixed z-20"
            onClick={router.back}
          >
            <BiArrowBack color="white" fontSize={30} />
          </button>
        )}
        <div className="absolute lg:text-right w-full z-20 px-5 lg:px-10 py-5 lg:mb-5">
          <h3>{sub}</h3>
          <h2 className="font-bold text-xl lg:text-[35px]">{title}</h2>
        </div>
        <div className="bg-slate-500 opacity-80 w-full absolute h-full z-10" />
        <Image
          src={
            image && image !== ""
              ? image
              : "https://a.storyblok.com/f/321658/1900x1029/96f47836f7/fp-batching-plant-concret.png"
          }
          alt={alt || "/"}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <span className="render-content h-full py-10 flex mb-14 flex-col gap-2 max-w-full lg:max-w-[60%] bottom-10">
        {render(text)}
      </span>
      <span className="text-xl lg:text-5xl mb-14 font-bold lg:leading-[60px] max-w-full lg:max-w-[70%] flex">
        {content}
      </span>
    </div>
  );
};
