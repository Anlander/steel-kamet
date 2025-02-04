import { getPrefab } from "@/lib/get-products/get-productby-slug";

type Params = Promise<{ slug: string }>;

const page = async ({ params }: { params: Params }) => {
  const pathname = (await params).slug;
  const data = await getPrefab(pathname);

  return (
    <div className="py-44">
      {data.map((el: any) => {
        return (
          <div key={el.id}>
            <h1 className="text-8xl">{el.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default page;
