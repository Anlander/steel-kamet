import { Card } from "@/components/ui/produkt/card";
import { Hero } from "@/components/ui/produkt/hero";
import { getSettings } from "@/lib/get-settings";
import { getStoryblokApi } from "@storyblok/react";

export async function getBetongArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "betongblandningsanlaeggningar",
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}

const Page = async () => {
  const data = await getBetongArchive();
  const settings = await getSettings();

  const props = settings.data.data.story.content;
  return (
    <div className="container py-28">
      <Hero
        sub={props.betong_sub}
        title={props.betong_title}
        image={props.betong_image.filename}
        alt={props.betong_title}
        text={props.betong_text}
        content={props.betong_content}
      />
      <div className="grid grid-cols-1 gap-14">
        <div className="flex flex-col gap-5">
          <h3 className="font-bold">FÄRSKBETONG</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {data
              .filter((item: any) => item.content.category.includes("wetmix"))
              .map((item: any) => (
                <Card key={item.uuid} item={item} />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold">TORRBETONG</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {data
              .filter((item: any) => item.content.category.includes("drymix"))
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
