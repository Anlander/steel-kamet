"use client";

import { render } from "storyblok-rich-text-react-renderer";

export const Content = ({ content }: any) => {
  return (
    <div className="container">
      <div className="flex flex-col gap-5 w-full lg:max-w-[80%] mb-20 -mt-24 lg:-mt-14">
        {render(content)}
      </div>
    </div>
  );
};
