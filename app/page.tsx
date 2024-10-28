import HomePageHero from "@/components/HomePageHero";
import PostContainer from "@/components/PostContainer";

export default async function Home() {
  return (
    <div className="space-y-10">
      <HomePageHero />
      <PostContainer />
    </div>
  );
}
