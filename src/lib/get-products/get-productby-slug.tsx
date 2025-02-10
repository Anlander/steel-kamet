import { getStoryblokApi } from "@storyblok/react";

export async function getAterVinning(slug: string) {
  const sbParams = {
    version: "draft" as const,
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(
    `cdn/stories/atervinningssystem-foer-betong/${slug}`,
    sbParams,
    {
      cache: "no-store",
    }
  );

  return data.data.story;
}

export async function getBetongBlandning(slug: string) {
  const sbParams = {
    version: "draft" as const,
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(
    `cdn/stories/betongblandningsanlaeggningar/${slug}`,
    sbParams,
    {
      cache: "no-store",
    }
  );

  return data.data.story;
}

export async function getPrefab(slug: string) {
  const sbParams = {
    version: "draft" as const,
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(
    `cdn/stories/prefabricerade-loesningar/${slug}`,
    sbParams,
    {
      cache: "no-store",
    }
  );

  return data.data.story;
}

export async function getTillbehor(slug: string) {
  const sbParams = {
    version: "draft" as const,
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(
    `cdn/stories/tillbehor-reservdelar/${slug}`,
    sbParams,
    {
      cache: "no-store",
    }
  );

  return data.data.story;
}
export async function getAutomatic(slug: string) {
  const sbParams = {
    version: "draft" as const,
    cv: Date.now(),
  };

  const client = getStoryblokApi();
  const data = await client.get(
    `cdn/stories/automation-och-styrsystem/${slug}`,
    sbParams,
    {
      cache: "no-store",
    }
  );

  return data.data.story;
}
