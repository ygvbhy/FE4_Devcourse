import { redirect } from "next/navigation";

const page = () => {
  redirect("/movie");
  return null;
};
export default page;
