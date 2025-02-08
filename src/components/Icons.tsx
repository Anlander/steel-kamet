import Link from "next/link";
import { FaBowlFood } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbHealthRecognition, TbMassage } from "react-icons/tb";
import { TiGroup } from "react-icons/ti";
import { render } from "storyblok-rich-text-react-renderer";

export const Icons = ({ blok }: any) => {
  const { iconblock } = blok;

  const icons = iconblock.map((item: any, index: number) => {
    switch (item.icon) {
      case "pt":
        return (
          <Link
            href="/personlig-traening"
            className="flex flex-col text-center icons"
            key={index}
          >
            <GiWeightLiftingUp fontSize={60} color="#E2725B" />
            <span>{item.content}</span>
            <span>{render(item.under_content)}</span>
          </Link>
        );
      case "hc":
        return (
          <Link
            href="/haelsocoachning"
            className="flex flex-col text-center icons"
            key={index}
          >
            <TbHealthRecognition fontSize={60} color="#E2725B" />
            <span>{item.content}</span>
            <span>{render(item.under_content)}</span>
          </Link>
        );
      case "massage":
        return (
          <Link
            href="/massage"
            className="flex flex-col text-center icons"
            key={index}
          >
            <TbMassage fontSize={60} color="#E2725B" />
            <span>{item.content}</span>
            <span>{render(item.under_content)}</span>
          </Link>
        );
      case "gt":
        return (
          <Link
            href="grupptraening"
            className="flex flex-col text-center icons"
            key={index}
          >
            <TiGroup fontSize={60} color="#E2725B" />
            <span>{item.content}</span>
            <span>{render(item.under_content)}</span>
          </Link>
        );
      case "kost":
        return (
          <div className="flex flex-col text-center icons" key={index}>
            <FaBowlFood fontSize={60} color="#E2725B" />
            <span>{item.content}</span>
            <span>{render(item?.under_content)}</span>
          </div>
        );
      default:
        return <div>No icon</div>;
    }
  });
  return (
    <div className="py-10 flex flex-col" id={blok._uid}>
      <h4 className="text-center subtitle font-bold py-10 uppercase">
        {blok.title}
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-20 justify-center py-10">
        {icons}
        <div className="text-center flex items-center justify-center">
          <Link
            href="/priser"
            className="px-5 py-2 text-[16px] bg-[#E2725B] text-white flex items-center rounded-full"
          >
            {blok.button}
            <MdOutlineKeyboardArrowRight fontSize={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};
