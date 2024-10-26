import Image from "next/image";
import postImage from "../public/view-people-addicted-their-smartphone-looking-scrolling-through-screens.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export default function PostCard() {
  return (
    <Card className="">
      <div className="relative h-[200px] w-full rounded-lg">
        <Image
          src={postImage}
          alt="post image"
          fill
          className="object-cover rounded-sm"
        />
      </div>

      <CardHeader className="space-y-2">
        <Badge variant="secondary" className="self-start">
          Technology
        </Badge>
        <CardTitle>Post Title</CardTitle>
        <CardDescription>Post Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </CardContent>
      <CardFooter className="space-x-4">
        {/* <AvatarDemo
          source={
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          }
          fallback={"CN"}
        /> */}
        <p>John Doe</p>
        <p>Oct 26, 2024</p>
      </CardFooter>
    </Card>
  );
}
