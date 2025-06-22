export default async function One({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <h1 className="text-3xl font-bold">postDetail - {id}</h1>
    </>
  );
}
