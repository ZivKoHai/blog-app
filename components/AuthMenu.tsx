// "use client";

// import Link from "next/link";
// import { buttonVariants } from "./ui/button";
// import AvatarDropdown from "./AvatarDropdown";
// import { createClient } from "@/app/_lib/supabase/client";

export default function AuthMenu() {
  // const user = createClient().auth.getUser();

  // if (!user) {
  //   return (
  //     <Link className={buttonVariants({ variant: "default" })} href="/login">
  //       Login
  //     </Link>
  //   );
  // }

  // return (
  //   <AvatarDropdown
  //     email={user.email ?? ""}
  //     fallback={user.email?.charAt(0) ?? ""}
  //   />
  // );

  return <div>AuthMenu</div>;
}
