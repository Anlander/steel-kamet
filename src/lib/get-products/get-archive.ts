import { getStoryblokApi } from "@storyblok/react";

export async function getAterVinningArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "atervinningssystem-foer-betong",
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams, {
    cache: "no-store",
  });

  return data.data.stories;
}

export async function getBetongArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "betongblandningsanlaeggningar",
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams, {
    cache: "no-store",
  });

  return data.data.stories;
}

export async function getPrefabArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "prefabricerade-loesningar",
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams, {
    cache: "no-store",
  });

  return data.data.stories;
}

export async function getTillbehorArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "tillbehor-reservdelar",
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams, {
    cache: "no-store",
  });

  return data.data.stories;
}

export async function getAutomaticArchive() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "automation-och-styrsystem",
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams, {
    cache: "no-store",
  });

  return data.data.stories;
}
