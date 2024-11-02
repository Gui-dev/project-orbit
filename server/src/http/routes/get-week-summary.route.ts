import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekSummary } from '../../use-cases/get-week-summary'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/summary', async (request, reply) => {
    const { summary } = await getWeekSummary()

    reply.status(200).send({ summary })
  })
}
