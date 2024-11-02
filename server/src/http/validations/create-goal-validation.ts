import z from 'zod'

export const createGoalValidation = z.object({
  title: z.string(),
  desireWeeklyFrequency: z.number().int().min(1).max(7),
})
