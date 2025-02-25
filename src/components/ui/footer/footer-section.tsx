import Link from "next/link";

interface FooterProps {
  settings: any;
}

const FooterSection = ({ settings }: FooterProps) => {
  return (
    <div className="py-20 lg:py-32 text-white mx-auto bg-slate-600 text-[20px]">
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

        <div className="text-center mb-5 lg:mb-0 flex flex-col gap-2">
          
          <h3>Direkt kontakt</h3>
          <Link href="tel:+46 703 762 380">+46 703 762 380</Link>
          <Link href="mailto:rosemarie.beckman@steelkamet.se">
            sales@steelkamet.se
          </Link>
          <span className="text-sm"> © 2025 Steel Kamet. All rights reserved. </span>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
