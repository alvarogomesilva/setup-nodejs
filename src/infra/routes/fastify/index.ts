import CreateUserController from 'app/modules/users/useCases/createUsers/CreateUserFactory'
import { FastifyPluginAsync } from 'fastify'
import { RouteFastify } from 'infra/adapters/RouteFastify'


export const users: FastifyPluginAsync = async (fastify): Promise<void> => {
    
    fastify.post('/users', RouteFastify(CreateUserController))
}