import { render } from "storyblok-rich-text-react-renderer";

export const ContentBox = ({ blok }: any) => {
  return (
    <div className="py-10">
      <div className="flex flex-wrap justify-center mx-auto max-w-[90%]">
        {blok.field.map((el: any) => {
          return (
            <div
              className="w-full lg:w-1/2 flex flex-col gap-5 p-5 border-b"
              key={el._uid}
            >
              <h4 className="font-bold"> {el.title}</h4>
              <span className="flex flex-col gap">{render(el.content)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
