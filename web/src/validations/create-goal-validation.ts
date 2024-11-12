import { z } from 'zod'

export const createGoalValidation = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desireWeeklyFrequency: z.coerce.number().min(1).max(7),
})

export type CreateGoalValidation = z.infer<typeof createGoalValidation>
