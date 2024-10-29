"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "../utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp(data);

  if (error) {
    console.error("Signup error:", error);
    redirect("/error");
  }

  if (user) {
    // Create a profile for the new user
    const { error: profileError } = await supabase.from("Profiles").insert([
      {
        id: user.id,
      },
    ]);

    if (profileError) {
      console.error("Profile creation error:", profileError);
      redirect("/error");
    }
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
