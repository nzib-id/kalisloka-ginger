import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ginger.kalisloka.com/",
      lastModified: new Date(),
    },
  ];
}
