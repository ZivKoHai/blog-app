"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import AvatarDropdown from "./AvatarDropdown";
import { useUser } from "@/app/hooks/useUser";

export default function AuthMenu() {
  const user = useUser();

  // Show nothing while loading to prevent layout shift
  if (user === undefined) {
    return null;
  }

  if (!user) {
    return (
      <Link className={buttonVariants({ variant: "default" })} href="/login">
        Login
      </Link>
    );
  }

  return (
    <AvatarDropdown
      email={user.email ?? ""}
      fallback={user.email?.charAt(0) ?? ""}
    />
  );
}
