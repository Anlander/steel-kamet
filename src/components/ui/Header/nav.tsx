import Image from "next/image";
import Link from "next/link";

interface SettingsProps {
  settings: {
    logo: {
      filename: string;
    };
  };
}

export const Nav = ({ settings }: SettingsProps) => {
  return (
    <nav className="fixed w-full z-50 p-4 flex gap-5 lg:gap-0 items-center  flex-col lg:flex-row lg:justify-end bg-white">
      <Link href="/" className="lg:absolute left-4 top-2">
        <Image src={settings.logo.filename} width={180} height={50} alt="logo" />
      </Link>
      <div className="flex justify-center uppercase items-center gap-5 lg:pr-10 font-bold">
        <Link href="/#tjänster">Tjänster</Link>
        <Link href="/#om-sk">Om Steel Kamet</Link>
        <Link href="/#form">Kontakt</Link>
      </div>
    </nav>
  );
};
