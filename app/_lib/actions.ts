"use server";

import { getPostPicture } from "./data-service";
import { createClient } from "./supabase";

interface Post {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image_url?: File;
  author_id: string;
}

export async function uploadPostPicture(picture: File, postId: string) {
  const supabase = createClient();

  const image = await getPostPicture(postId);

  if (image) {
    await supabase.storage.from("blog-images").remove([image.publicUrl]);
  }

  const { data: imageData, error: imageError } = await supabase.storage
    .from("blog-images")
    .upload(`posts/${postId}/${picture.name}`, picture);

  if (imageError) {
    throw imageError;
  }

  const { data, error } = await supabase
    .from("Posts")
    .insert([{ featured_image_url: imageData?.fullPath }])
    .select();

  if (error) {
    throw error;
  }

  return data;
}

export async function updatePostImage(newPicture: File, postId: string) {
  const supabase = createClient();

  // Remove the old image if it exists
  const oldImage = await getPostPicture(postId);
  if (oldImage) {
    await supabase.storage.from("blog-images").remove([oldImage.publicUrl]);
  }

  // Upload the new image
  const { data: imageData, error: imageError } = await supabase.storage
    .from("blog-images")
    .upload(`posts/${postId}/${newPicture.name}`, newPicture);

  if (imageError) {
    throw imageError;
  }

  // Update the post with the new image URL
  const { data, error } = await supabase
    .from("Posts")
    .update({ featured_image_url: imageData?.path })
    .eq("id", postId)
    .select();

  if (error) {
    throw error;
  }

  return data;
}

export async function createPost(post: Post) {
  const supabase = createClient();

  const featuredImage: File | undefined = post.featured_image_url;
  delete (post as Partial<Post>).featured_image_url;

  const { data, error } = await supabase.from("Posts").insert([post]).select();

  if (error) {
    throw error;
  }

  if (featuredImage) {
    await uploadPostPicture(featuredImage, data[0].id);
  }

  return data;
}

export async function deletePost(id: string) {
  const supabase = createClient();

  const { error } = await supabase.from("Posts").delete().eq("id", id);

  if (error) {
    throw error;
  }

  return { message: "Post deleted" };
}

export async function updatePost(post: Partial<Post>, postId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("Posts")
    .update(post)
    .eq("id", postId)
    .select();

  if (error) {
    throw error;
  }

  return data;
}
