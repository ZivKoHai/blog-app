import { createClient } from "../utils/supabase/client";

export async function getPosts() {
  const supabase = createClient();
  const { data: Posts, error } = await supabase.from("Posts").select("*");

  if (error) {
    throw error;
  }

  return Posts;
}

export async function getPost(id: string) {
  const supabase = createClient();
  const { data: Post, error } = await supabase
    .from("Posts")
    .select("*")
    .eq("id", id);

  if (error) {
    throw error;
  }

  return Post;
}

export async function getPostPicture(postId: string) {
  const supabase = createClient();
  const { data } = await supabase.storage
    .from("blog-images")
    .getPublicUrl(`posts/${postId}/picture`);

  return data;
}
export async function getUserPosts(userId: string) {
  const supabase = createClient();
  const { data: Posts, error } = await supabase
    .from("Posts")
    .select("*")
    .eq("author_id", userId);

  if (error) {
    throw error;
  }

  return Posts;
}
