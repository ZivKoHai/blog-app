import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Logo from "./ui/Logo";
import { TypographyH4 } from "./ui/TypographyH4";
import { TypographyP } from "./ui/TypographyP";

export default function Footer() {
  return (
    <div className="min-h-[300px] mt-10 bg-card py-10">
      <div className="main-container">
        <div className="flex gap-10 sm:flex-row flex-col">
          <div className="basis-2/6">
            <TypographyH4>About</TypographyH4>
            <TypographyP>
              Lorem ipsum dolor sit <br />
              amet consectetur adipisicing elit. Quisquam,
            </TypographyP>
          </div>
          <div className="basis-1/6 sm:space-y-5">
            <TypographyH4>About</TypographyH4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="basis-1/6 sm:space-y-5">
            <TypographyH4>Categories</TypographyH4>
            <ul>
              <li>Fitness</li>
              <li>Food</li>
              <li>Technology</li>
            </ul>
          </div>
          <div className="basis-2/6 bg-card-foreground rounded-lg p-5 space-y-5">
            <h4 className="text-primary-foreground scroll-m-20 text-xl font-semibold tracking-tight">
              Subscribe
            </h4>
            <Input placeholder="Enter your email" />
            <Button className="w-full">Subscribe</Button>
          </div>
        </div>
        <div className="flex justify-between items-center sm:flex-row flex-col mt-10 border-t border-border pt-5">
          <Logo size={100} variant="primary" />
          <TypographyP>&copy; 2024 Blog. All rights reserved.</TypographyP>
        </div>
      </div>
    </div>
  );
}
