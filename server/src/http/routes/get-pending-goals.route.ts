import type { FastifyInstance } from 'fastify'

import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../use-cases/get-week-pending-goals'

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/pending-goals', async (request, reply) => {
    const { pendingGoals } = await getWeekPendingGoals()

    return reply.status(200).send({ pendingGoals })
  })
}
