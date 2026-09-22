import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Insights (blog). One folder per locale: src/content/insights/{en,tr}/slug.md
 * A TR post may set `translationOf` to the EN slug so the language switcher
 * can link the two.
 */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(200),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverPosition: z.string().default('center'),
      topic: z.enum(['market-entry', 'china-turkiye', 'energy-infrastructure', 'industrial-automotive', 'joint-ventures', 'project-finance', 'risk-crisis']),
      author: z.string().default('Continex Global'),
      authors: z.array(z.string()).default([]),
      highlights: z.array(z.string()).default([]),
      readMinutes: z.number().optional(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      translationOf: z.string().optional(),
    }),
});

export const collections = { insights };
