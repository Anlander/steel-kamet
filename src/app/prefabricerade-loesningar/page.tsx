import { Card } from "@/components/ui/produkt/card";
import { Hero } from "@/components/ui/produkt/hero";
import { getPrefabArchive } from "@/lib/get-products/get-archive";
import { getSettings } from "@/lib/get-settings";

const Page = async () => {
  const data = await getPrefabArchive();
  const settings = await getSettings();

  const props = settings.data.data.story.content;

  return (
    <div className="container py-28">
      <Hero
        sub={props.prefab_sub}
        title={props.prefab_title}
        image={props.prefab_image.filename}
        alt={props.prefab_title}
        text={props.prefab_text}
        content={props.prefab_content_product}
        ank="MOBILA BLOCKTILLVERKNINGSMASKINER"
      />
      <div className="grid grid-cols-1 gap-14">
        <div
          className="flex flex-col gap-5"
          id="MOBILA BLOCKTILLVERKNINGSMASKINER"
        >
          <h3 className="font-bold">Mobila blocktillverkningsmaskiner</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {data
              .filter((item: any) =>
                item.content.category.includes("automatiska-mobila")
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
