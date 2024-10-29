"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import AvatarDropdown from "./AvatarDropdown";
import { useEffect, useState } from "react";
import { createClient } from "@/app/utils/supabase/client";

export default function AuthMenu() {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    getInitialSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT") {
        setUser(session?.user ?? null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

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
