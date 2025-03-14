import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	blog: defineCollection({
    loader: glob({ pattern: "**/*.mdoc", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      thumbnail: z.object({
        src: image(),
        alt: z.string(),
      }),
      date: z.date(),
      description: z.string(),
    }),
  })
};
