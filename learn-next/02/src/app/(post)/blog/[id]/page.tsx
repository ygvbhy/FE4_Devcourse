export default function Blog({ params }: { params: { id: string } }) {
  return (
    <>
      <h1 className="text-3xl font-bold">Blog Page - {params.id}</h1>
    </>
  );
}
