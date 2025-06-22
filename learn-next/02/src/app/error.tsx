"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <>
      <div>error - {error.message}</div>
      <button onClick={reload}>reset</button>
    </>
  );
}
