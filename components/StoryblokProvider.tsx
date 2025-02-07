import type { PropsWithChildren } from "react";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Page from "./page";
import { Hero } from "./ui/hero";
import { About } from "./ui/about";
import { Services } from "./ui/services";
import Form from "./ui/Form";
import { SmallHero } from "./ui/small-hero";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,

  components: {
    page: Page,
    hero: Hero,
    about: About,
    services: Services,
    form: Form,
    small_hero: SmallHero,
  },
  use: [apiPlugin],
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
