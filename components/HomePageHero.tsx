import Image from "next/image";
import heroImage from "../public/2151487141.jpg";
import { Badge } from "./ui/badge";
import { TypographyH1 } from "./ui/TypographyH1";
import { AvatarDemo } from "./ui/avatarDemo";

export default function HomePageHero() {
  return (
    <div className="h-[500px] relative rounded-lg overflow-hidden">
      <div className="w-full h-full relative ">
        <Image
          src={heroImage}
          alt="hero image"
          fill
          className="object-cover opacity-70"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end mb-10 items-start gap-4 px-6 w-full">
        <Badge>Technology</Badge>
        <TypographyH1>Impact of AI on the future of work</TypographyH1>
        <div className="flex items-center align-middle gap-4">
          <AvatarDemo
            source={
              "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            }
            fallback={"CN"}
          />
          <p>John Doe</p>
          <p>Oct 26, 2024</p>
        </div>
      </div>
    </div>
  );
}
