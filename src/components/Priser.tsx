import { Card } from "./ui/card";

export const Priser = ({ blok, settings }: any) => {
  return (
    <div
      className="mt-20 mb-5 lg:my-14 px-5 lg:px-0"
      id={blok.title.slice("", 2)}
    >
      <div className="text-center mb-20 pt-10">
        <h1 className="text-center text-[#172D32] text-[32px] font-bold">
          {blok.title}
        </h1>
        <span className="px-5 lg:px-0">{blok.subtitle}</span>
      </div>
      <div className="flex flex-wrap gap-5 mx-auto justify-center lg:max-w-[100%]">
        {blok.field.map((item: any, index: number) => {
          return <Card item={item} key={index} book={settings.book} />;
        })}
      </div>
    </div>
  );
};
