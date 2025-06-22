export default function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  console.log(slug);
  return (
    <>
      <h1 className="text-3xl font-bold">Docs Page - {slug.join("/")}</h1>
    </>
  );
}
