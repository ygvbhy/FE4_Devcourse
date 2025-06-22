import { LoaderFunctionArgs } from "react-router";
import supabase from "../../utils/supabase";

export const fetchPosts = async () => {
  try {
    const { data: posts, error } = await supabase.from("posts").select(`
      *,
      profiles (
        id,
        username,
        avatar_url
      )
    `);
    if (error) {
      throw new Error(error.message);
    }
    return posts;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const fetchPostDetail = async ({ params }: LoaderFunctionArgs) => {
  try {
    const { id } = params;
    const { data: posts, error } = await supabase
      .from("posts")
      .select(
        `
      *,
      profiles (
        id,
        username,
        avatar_url
      ),
      comments (
        id,
        comment,
        created_at,
        profile_id,
        post_id,
        profiles (
          id,
          username,
          avatar_url
        )
      )
    `
      )
      .eq("id", Number(id))
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return posts;
  } catch (error) {
    throw new Error(error as string);
  }
};
