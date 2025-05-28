import { db } from "~/server/db";
export const dynamic = "force-dynamic"; // Force dynamic rendering

const mockUrls = [
  "https://i1rr367l19.ufs.sh/f/JxkS0gOlv3OtW6dRiQcclJI3K9UHA2tWL8QzDnO7Vux5S1k6",
  "https://i1rr367l19.ufs.sh/f/JxkS0gOlv3OtTndHFW1kbMDL4XiH1PONvujZoQa0YKxn582f",
]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
  
export default async function HomePage() {
  const posts= await db.query.posts.findMany();
  console.log("Posts from DB:", posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}  </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image , index) => (
          <div key={image.id +'-'+ index} className="w-48">
            <img
              src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
