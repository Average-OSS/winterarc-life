export const AppHost = process.env.NEXT_PUBLIC_HOST || "http://localhost:300";
export const AppHostDomain =
  process.env.NEXT_PUBLIC_HOST_DOMAIN || "localhost:3000";

export const site_metadata = {
  name: "Winter Arc",
  description:
    "It's that time of the Year. Time to set and get Goals. Helping you make sure you don't waste your entire year without doing anything.",
  logo: `/android-chrome-192x192.png`,
  megaLogo: "/main-page-img.png",
  ogImage: `/ogImage.png`,
  twitterHandle: "https://twitter.com/AverageProMax",
  url: AppHost,
};
