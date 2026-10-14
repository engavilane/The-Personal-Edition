import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One collection for the whole publication. The folder an article lives in
// (lab, magazine, guide, index) decides which section it belongs to.
const entries = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),                       // one-line description under the title
    date: z.coerce.date(),
    no: z.string().optional(),             // entry number, e.g. "L-004" or "0141"
    meta: z.array(z.string()).default([]), // small labels: method, place, reading time…
    series: z.string().optional(),         // e.g. "Experiments in Progress"
    featured: z.boolean().default(false),  // shown large at the top of its section
    cover: z.string().optional(),          // image path in /public, e.g. "/images/gfp.jpg"
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { entries };
