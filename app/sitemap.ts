import type { MetadataRoute } from "next";
import { brands } from "@/lib/data";

const baseUrl = "https://YOUR-DOMAIN.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/guide",
    "/hdf-prices",
    "/parquet-prices",
    "/hdf-colors",
  ];

  const brandPages = brands.map((brand) => `/products/${brand.slug}`);

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),

    ...brandPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}