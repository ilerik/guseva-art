import type { MetadataRoute } from "next"
import { paintings } from "./constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.gusevalove.art"

  const staticPages = ["", "/about"]

  const routes = staticPages.flatMap((page) => {
    return {
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    }
  });

  const paintingRoutes = paintings.flatMap((painting) => {
    return ({
      url: `${baseUrl}/painting/${painting.id}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })}
  );

  return [...routes, ...paintingRoutes]
}

  