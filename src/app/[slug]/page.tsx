import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { redirect } from "next/navigation";
import { fetchSettings } from "../lib/apireq";

async function fetchData(slug: string, lang: string) {
  let sbParams = {
    version: "draft" as const,
    language: lang,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/${slug}`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return { data };
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await fetchData(slugName, `${process.env.LANGUAGE}`);
  const settings = await fetchSettings(`${process.env.LANGUAGE}`);
  return (
    <StoryblokStory
      story={story.data.data.story}
      settings={settings.data.data.story.content}
    />
  );
};

export default Page;
