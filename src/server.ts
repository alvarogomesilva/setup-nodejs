import { config } from 'dotenv'

config()

import { startExpress } from 'infra/servers/express'
import { startFastify } from 'infra/servers/fastify'

process.env.SERVER_TYPE === 'fastify' ? startFastify() : startExpress()