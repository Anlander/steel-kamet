import { getStoryblokApi } from "@storyblok/react";

export async function getSettings() {
  const sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/settings`, sbParams, {
    cache: "no-store",
  });

  return { data };
}
