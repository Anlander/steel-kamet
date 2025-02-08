"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { render } from "storyblok-rich-text-react-renderer";

interface Props {
  item: any;
  book: any;
}

export const Card = ({ item, book }: Props) => {
  return (
    <div
      key={item._uid}
      className="rounded-xl flex flex-col p-5  min-h-[300px] py-5 w-full md:w-[46%] xl:w-1/4 justify-between gap-5 text-left text-[#fff] border bg-[#172D32] shadow-md relative"
    >
      <div className="flex flex-col gap-4">
        <span className="text-[20px] !font-semibold leading-[28px] text-[#fff] max-w-[80%]">
          {item?.title}
        </span>
        <span className="">{item.subtitle}</span>
        <div className="flex justify-start flex-col">
          <span className="text-[18px] italic">{item.tid}</span>
          {item?.pristincard?.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
              {item?.pristincard?.map((list: any) => {
                return (
                  <Link
                    href="https://pay.sumup.com/b2c/Q7XDVN5L"
                    key={list._uid}
                    className="flex flex-col border-b pb-2 gap-2"
                  >
                    <h4 className="text-[12px]">{list.tid}</h4>
                    <h3 className="text-[20px] font-bold">{list.pris}</h3>
                    <p className="text-[12px]">{list.title}</p>
                  </Link>
                );
              })}
            </div>
          )}
          {item?.pris && (
            <span className="text-[16px] text-left render-text-pris flex flex-col gap-2">
              {render(item.pris)}
            </span>
          )}
        </div>
      </div>
      {/* Knappar  */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Link
            href={item?.link?.cached_url ? item?.link?.url : "/kontakt"}
            className="py-2 text-[#white] flex gap-2 items-start text-[16px]"
          >
            <span className="w-full">
              {item.link_title ? item.link_title : book}
            </span>
            <span className="w-[20px] flex justify-start mt-1">
              <FaArrowRight />
            </span>
          </Link>
        </div>
        {item.las_mer ? (
          <div className="flex">
            {item.las_mer && (
              <span className="render-text-link">{render(item?.las_mer)}</span>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
