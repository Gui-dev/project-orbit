import type { FastifyInstance } from 'fastify'

import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoal } from '../../use-cases/create-goal'
import { createGoalValidation } from '../validations/create-goal-validation'

export const createGoalRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals',
    { schema: { body: createGoalValidation } },
    async (request, response) => {
      const { title, desireWeeklyFrequency } = request.body

      await createGoal({
        title,
        desireWeeklyFrequency,
      })

      return response.status(201).send()
    },
  )
}
