import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export const Hero = ({ sub, title, image, alt, text, content }: any) => {
  return (
    <div className="mb-5">
      <div className="h-[60vh] text-white mb-10 relative">
        <div className="absolute bottom-5 text-right w-full z-20 px-10 py-5">
          <h3>{sub}</h3>
          <h2 className="font-bold">{title}</h2>
        </div>
        <div className="bg-slate-500 opacity-80 w-full absolute h-full z-10" />
        <Image
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <span className="render-content flex mb-14 flex-col gap-2 max-w-full lg:max-w-[60%] bottom-10">
        {render(text)}
      </span>
      <span className="text-5xl mb-14 font-bold leading-[60px] max-w-full lg:max-w-[70%] flex">
        {content}
      </span>
    </div>
  );
};
