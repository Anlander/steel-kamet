import { Content } from "@/components/ui/produkt/content";
import { Gallery } from "@/components/ui/produkt/gallery";
import { Hero } from "@/components/ui/produkt/hero";
import { getBetongBlandning } from "@/lib/get-products/get-productby-slug";

type Params = Promise<{ slug: string }>;

const page = async ({ params }: { params: Params }) => {
  const pathname = (await params).slug;
  const data = await getBetongBlandning(pathname);
  return (
    <div className="mb-20">
      <Hero
        image={data.content.bakgrund_bild.filename}
        title={data.name}
        sub={data.content.title}
        arrow={true}
      />
      <Content content={data.content.content} />
      <Gallery gallery={data.content.gallery} />
    </div>
  );
};

export default page;
