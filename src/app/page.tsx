import { db } from "~/server/db";
export const dynamic = "force-dynamic"; // Force dynamic rendering

export default async function HomePage() {
  const images= await db.query.images.findMany(
    {
      orderBy: (images, { desc }) => desc(images.id),});
  console.log("images from DB:", images);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image , index) => (
          <div key={image.id +'-'+ index} className="flex flex-col w-48">
            <img src={image.url}/>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
