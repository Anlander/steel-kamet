import Link from "next/link";

interface FooterProps {
  settings: any;
}

const FooterSection = ({ settings }: FooterProps) => {
  return (
    <div className="py-20 lg:py-32 text-white mx-auto bg-[#1f6fb2] text-[20px]">
      <div className="lg:max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="flex flex-col lg:items-start items-center mb-10 lg:mb-0">
          <span className="mb-2">{settings.street}</span>
          <Link
            href={`mailto:${settings.mail}`}
            className="hover:text-[#E2725B] transition duration-300 ease-in-out"
          >
            {settings.mail}
          </Link>
          <Link
            href={`tel:${settings.phone}`}
            className="hover:text-[#E2725B] transition duration-300 ease-in-out"
          >
            {settings.phone}
          </Link>
        </div>

        <div className="text-center mb-5 lg:mb-0">
          © 2025 Steel Kamet. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
