import { getBetongArchive } from "@/lib/get-products/get-archive";
import Link from "next/link";

const Page = async () => {
  const data = await getBetongArchive();
  return (
    <div className="py-44">
      {data.map((item: any) => (
        <Link key={item.uuid} href={item.full_slug}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Page;
