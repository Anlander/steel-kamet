import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

interface AboutProps {
  blok: {
    title: string;
    content: React.ReactNode;
  };
}

export const About = ({ blok }: AboutProps) => {
  return (
    <div className="bg-[#4f8abd3b]" id="om-sk" {...storyblokEditable}>
      <div className="container py-24 flex flex-col gap-4">
        <h2 className="font-bold">{blok.title}</h2>
        <span className="max-w-[100%] xl:max-w-[80%] flex flex-col gap-10">
          {render(blok.content)}
        </span>
      </div>
    </div>
  );
};
