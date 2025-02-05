import { getData } from "@/lib/get-data";
import { StoryblokStory } from "@storyblok/react/rsc";

type Params = Promise<{ slug: string }>;

const Page = async ({ params }: { params: Params }) => {
  const pathname = (await params).slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await getData(slugName);

  return <StoryblokStory story={story.data.data.story} />;
};

export default Page;
