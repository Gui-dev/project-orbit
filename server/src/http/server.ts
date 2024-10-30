import Fastify from 'fastify'

const PORT = process.env.PORT || 3333
const app = Fastify()

app
  .listen({
    port: Number(PORT),
  })
  .then(() => {
    console.log(`Server runnig on http://localhost:${PORT}`)
  })
