import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center flex-col gap-4">
      <p className="text-2xl font-bold">Sorry, something went wrong</p>
      <Button asChild>
        <Link href="/">Go To Home</Link>
      </Button>
    </div>
  );
}
