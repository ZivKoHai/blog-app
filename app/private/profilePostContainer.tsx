import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { getUserPosts } from "@/app/_lib/data-service";

export default async function ProfilePostContainer() {
  const posts = await getUserPosts("1");

  const blurDataURL =
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg";

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="max-w-md">
            <div className="relative h-[200px] w-full rounded-lg">
              <Image
                src={post.featured_image_url || blurDataURL}
                alt="post image"
                fill
                className="object-cover rounded-sm"
                placeholder="blur"
                blurDataURL={blurDataURL}
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
    </>
  );
}
