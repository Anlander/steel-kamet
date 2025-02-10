import { Hero } from "@/components/ui/produkt/hero";
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
  const settings = await getSettings();

  const props = settings.data.data.story.content;

  return (
    <div className="container py-28">
      <Hero
        sub={props.automatic_sub}
        title={props.automatic_title}
        image={props.automatic_image.filename}
        alt={props.automatic_title}
        text={props.automatic_text}
        content={props.automatic_content_product}
        sideimge={true}
      />
      {/* <div className="grid grid-cols-1 gap-14">
        <div className="flex flex-col gap-5" id="Automation och styrsystem">
          <h3 className="font-bold">Automation och styrsystem</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {data
              .filter((item: any) =>
                item.content.category.includes("automation-och-styrsystem")
              )
              .map((item: any) => (
                <Card key={item.uuid} item={item} />
              ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Page;
