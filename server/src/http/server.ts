import Fastify from 'fastify'
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

import { createCompletionRoute } from './routes/create-completion.route'
import { createGoalRoute } from './routes/create-goal.route'
import { getPendingGoalsRoute } from './routes/get-pending-goals.route'

const PORT = process.env.PORT || 3333
const app = Fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalRoute)
app.register(getPendingGoalsRoute)
app.register(createCompletionRoute)

app
  .listen({
    port: Number(PORT),
  })
  .then(() => {
    console.log(`Server runnig on http://localhost:${PORT}`)
  })
