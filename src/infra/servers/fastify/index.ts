import { config } from 'dotenv'
import fastify from 'fastify'
import { users } from '../../routes/fastify'

config()

const server = fastify({ logger: true })

server.register(users, { prefix: '/' })


const startFastify = async () => {
  try {
    server.listen({
      host: '0.0.0.0',
      port: process.env.PORT_SERVER ? Number(process.env.PORT_SERVER) : 3000,
    })
    console.log(`Server fastify running in port ${process.env.PORT_SERVER}`)
  } catch (error) {
    console.error(`Erro server fastify`, error)
  }
}

export { startFastify }
