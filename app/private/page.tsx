import { redirect } from "next/navigation";

import { createClient } from "../utils/supabase/server";
import { Suspense } from "react";
import ProfilePostContainer from "./profilePostContainer";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col gap-20">
      <div className="flex flex-row items-center justify-between">
        <p>Hello {data.user?.email}</p>
        <p>
          member since{" "}
          {new Date(data.user?.created_at || "").toLocaleDateString()}
        </p>
      </div>
      <div>
        <Suspense fallback={<p className="text-7xl">Loading</p>}>
          <ProfilePostContainer />
        </Suspense>
      </div>
    </div>
  );
}
