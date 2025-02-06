import { render } from "storyblok-rich-text-react-renderer";

export const Content = ({ content }: any) => {
  return (
    <div className="container">
      <div className="flex flex-col gap-5 max-w-[60%] mb-20 -mt-14">{render(content)}</div>
    </div>
  );
};
