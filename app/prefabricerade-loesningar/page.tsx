import { Card } from "@/components/ui/produkt/card";
import { Hero } from "@/components/ui/produkt/hero";
import { getPrefabArchive } from "@/lib/get-products/get-archive";
import { getSettings } from "@/lib/get-settings";

const Page = async () => {
  const data = await getPrefabArchive();
  const settings = await getSettings();

  return (
    <div className="container py-28">
      <Hero settings={settings.data.data.story.content} />
      <div className="grid grid-cols-1 gap-14">
        <div className="flex flex-col gap-5">
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
        <div className="flex flex-col gap-5">
          <h3 className="font-bold">Tillbehör</h3>
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
