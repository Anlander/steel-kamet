import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { Header } from "@/components/ui/Header/Header";
import { Footer } from "@/components/ui/footer/footer";
import "./globals.scss";
import CookieConsent from "@/components/ui/cookies";

export const metadata: Metadata = {
  title: "SteelKamet | BUILDING, TRUST INNOVATING TOMORROW",
  description:
    "Steel Kamet är en banbrytande aktör inom betong- och prefabindustrin, där vi levererar innovativa lösningar som möter de högsta standarderna.",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: "no-store",
  });
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang={process.env.LANGUAGE}>
        <body>
          <Header />
          {children}
          <CookieConsent />
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
