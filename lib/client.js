import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "5nt9ga3z",
  dataset: "production",
  apiVersion: "2023-01-31",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
