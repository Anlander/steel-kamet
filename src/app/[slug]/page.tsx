import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { redirect } from "next/navigation";
import { fetchSettings } from "../lib/apireq";
import { getSettings } from "@/lib/get-settings";
import { getData } from "@/lib/get-data";

export async function fetchData(slug: string) {
  const sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/${slug}`, sbParams, {
    cache: "no-store",
  });

  return { data };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = fetchData(slugName);
  const settings = await getSettings();
  return (
    <StoryblokStory
      story={(await story).data.data.story}
      settings={settings.data.data.story.content}
    />
  );
};

export default Page;
