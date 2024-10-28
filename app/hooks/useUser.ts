import { useEffect, useState } from "react";
import { createClientComponentClient } from "@/app/utils/supabase/client";
import { User } from "@supabase/supabase-js";

export function useUser() {
  // Initialize as undefined to indicate loading state
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user ?? null);
    };

    getUser();

    // Listen for auth changes and update user state
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getUser();
    });

    // Clean up the listener on unmount
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [supabase]);

  return user;
}
