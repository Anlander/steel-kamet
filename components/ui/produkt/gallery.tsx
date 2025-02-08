import Image from "next/image";

export const Gallery = ({ gallery }: any) => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {gallery?.map((el: any) => (
          <Image
            key={el.id}
            src={el.filename || "/"}
            alt={""}
            width={400}
            height={500}
            className="max-h-[300px] min-h-[300px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};
