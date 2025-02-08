import { getStoryblokApi } from "@storyblok/react";

export async function getAterVinningArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "atervinningssystem-foer-betong",
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}

export async function getBetongArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "betongblandningsanlaeggningar",
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}

export async function getPrefabArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "prefabricerade-loesningar",
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data.stories;
}
