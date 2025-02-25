import { getStoryblokApi } from "@storyblok/react";

export async function getData(slug: string) {
  const sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/${slug}`, sbParams, {
    cache: "no-store",
  });

  return { data };
}
