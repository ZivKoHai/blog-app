import { redirect } from "next/navigation";

import { createClient } from "../utils/supabase/server";
import { getUserPosts } from "../_lib/data-service";
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const posts = await getUserPosts(data.user.id);

  return (
    <div className="min-h-[calc(100vh-100px)]">
      <div className="flex flex-row items-center justify-between">
        <p>Hello {data.user?.email}</p>
        <p>
          member since{" "}
          {new Date(data.user?.created_at || "").toLocaleDateString()}
        </p>
      </div>
      <div>
        {posts.map((post) => (
          <Card key={post.id} className="max-w-md">
            <div className="relative h-[200px] w-full rounded-lg">
              <Image
                src={post.featured_image_url}
                alt="post image"
                fill
                className="object-cover rounded-sm"
              />
            </div>

            <CardHeader className="space-y-2">
              <Badge variant="secondary" className="self-start">
                Technology
              </Badge>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter className="space-x-4">
              <p>John Doe</p>
              <p>Oct 26, 2024</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
