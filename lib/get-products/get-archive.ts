import { getStoryblokApi } from "@storyblok/react";

export async function getAterVinningArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "atervinningssystem-foer-betong",
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}

export async function getBetongArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "betongblandningsanlaeggningar",
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}

export async function getPrefabArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "prefabricerade-loesningar",
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}
