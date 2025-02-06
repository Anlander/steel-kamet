import { getStoryblokApi } from "@storyblok/react";

export async function getAterVinning(slug: string) {
  const sbParams = {
    starts_with: `atervinningssystem-foer-betong/${slug}`,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}

export async function getBetongBlandning(slug: string) {
  const sbParams = {
    starts_with: `betongblandningsanlaeggningar/${slug}`,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}

export async function getPrefab(slug: string) {
  const sbParams = {
    version: "published" as const,
    starts_with: `prefabricerade-loesningar/${slug}`,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}
