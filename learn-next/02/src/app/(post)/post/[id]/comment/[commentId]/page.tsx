import { notFound } from "next/navigation";

export default async function CommentDetail({
  params,
}: {
  params: Promise<{ commentId: string; id: string }>;
}) {
  const { commentId, id } = await params;

  const random = Math.floor(Math.random() * 2);
  if (random === 1) throw new Error(`random is ${random}`);

  if (+commentId > 10) notFound();
  return (
    <>
      <h1 className="text-3xl font-bold">
        CommentDetail Page - {id} - {commentId}
      </h1>
    </>
  );
}
