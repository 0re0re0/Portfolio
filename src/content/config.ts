import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.date().optional(), 
    dateEnd: z.date().optional(), 
    location: z.string(),
    companyUrl: z.string()
  })
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      images: z.array(image()).optional(),
      summary: z.string(),
      isInConstruction: z.boolean(),
      isFeatured: z.boolean(),
      tags: z.array(z.string()),
      draft: z.boolean().optional(),
      demoUrl: z.string().optional(),
      repoUrl: z.string().optional(),
    })
});

export const collections = { work, projects };
