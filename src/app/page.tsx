const mockUrls = [
  "https://i1rr367l19.ufs.sh/f/JxkS0gOlv3OtW6dRiQcclJI3K9UHA2tWL8QzDnO7Vux5S1k6",
  "https://i1rr367l19.ufs.sh/f/JxkS0gOlv3OtTndHFW1kbMDL4XiH1PONvujZoQa0YKxn582f",
]
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
  
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img
              src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
