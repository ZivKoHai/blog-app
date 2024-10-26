import HomePageHero from "@/components/HomePageHero";
import { getPosts } from "./_lib/data-service";
import PostContainer from "@/components/PostContainer";

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);
  return (
    <div className="space-y-10">
      <HomePageHero />
      <PostContainer />
    </div>
  );
}
