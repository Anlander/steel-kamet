import { Card } from "@/components/ui/produkt/card";
import { Hero } from "@/components/ui/produkt/hero";
import { getTillbehorArchive } from "@/lib/get-products/get-archive";
import { getStoryblokApi } from "@storyblok/react";
export async function getSettings() {
  const sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/settings`, sbParams, {
    cache: "no-store",
  });

  return { data };
}

const Page = async () => {
  const data = await getTillbehorArchive();
  const settings = await getSettings();

  const props = settings.data.data.story.content;

  return (
    <div className="container py-28">
      <Hero
        sub={props.tillbehor_sub}
        title={props.tillbehor_title}
        image={props.tillbehor_image.filename}
        alt={props.tillbehor_title}
        text={props.tillbehor_text}
        content={props.tillbehor_content_product}
        ank="Tillbehör Serien"
      />
      <div className="grid grid-cols-1 gap-14">
        <div className="flex flex-col gap-5" id="Tillbehör Serien">
          <h3 className="font-bold">TILLBEHÖR SERIEN</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {data
              .filter((item: any) =>
                item.content.category.includes("tillbehor")
              )
              .map((item: any) => (
                <Card key={item.uuid} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
