import { Card } from "@/components/ui/produkt/card";
import { Hero } from "@/components/ui/produkt/hero";
import { getAterVinningArchive } from "@/lib/get-products/get-archive";
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
  const data = await getAterVinningArchive();
  const settings = await getSettings();

  const props = settings.data.data.story.content;
  return (
    <div className="container py-28">
      <Hero
        sub={props.atervinning_sub}
        title={props.atervinning_title}
        image={props.atervinning_image.filename}
        alt={props.atervinning_title}
        text={props.atervinning_text}
        content={props.atervinning_content}
        ank="BETONGÅTERVINNINGSSYSTEM"
        anksec="FORMAR FÖR BLOCK"
      />
      <div className="grid grid-cols-1 gap-14">
        <div className="flex flex-col gap-5" id="BETONGÅTERVINNINGSSYSTEM">
          <h3 className="font-bold uppercase">Betongåtervinningssystem</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {data
              .filter((item: any) =>
                item.content.category.includes("betongatervinning")
              )
              .map((item: any) => (
                <Card key={item.uuid} item={item} />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-5" id="FORMAR FÖR BLOCK">
          <h3 className="font-bold uppercase">Formar för block</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {data
              .filter((item: any) =>
                item.content.category.includes("formar-block")
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
