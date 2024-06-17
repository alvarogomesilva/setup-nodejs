import CreateUserController from 'app/modules/users/useCases/createUsers/CreateUserFactory'
import DeleteUserController from 'app/modules/users/useCases/deleteUsers/DeleteUserFactory'
import { FastifyPluginAsync } from 'fastify'
import { RouteFastify } from 'infra/adapters/RouteFastify'


export const users: FastifyPluginAsync = async (fastify): Promise<void> => {
    
    fastify.post('/users', RouteFastify(CreateUserController))
    fastify.delete('/users/:id', RouteFastify(DeleteUserController))
}