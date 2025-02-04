import { getAterVinning } from "@/lib/get-products/get-productby-slug";

const page = async () => {
  const data = await getAterVinning("test-produkt");
  console.log("product:", data[0].name);
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
