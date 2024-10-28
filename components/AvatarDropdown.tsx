"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarDemo } from "./ui/avatarDemo";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@/app/utils/supabase/client";

export default function AvatarDropdown({
  email,
  fallback,
}: {
  email: string;
  fallback: string;
}) {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/login");
    } else {
      console.error("Logout error:", error.message);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AvatarDemo fallback={fallback} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/private")}>
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/private/profile")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
