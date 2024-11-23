import * as z from 'zod'

export const postSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1),
  authorId: z.string(),
})

export type PostSchema = z.infer<typeof postSchema>