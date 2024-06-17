import { Router } from 'express'
import { RouteExpress } from 'infra/adapters/RouteExpress'

import CreateUserController from 'app/modules/users/useCases/createUsers/CreateUserFactory'
import DeleteUserController from 'app/modules/users/useCases/deleteUsers/DeleteUserFactory'

const Route = Router()

Route.post('/users', RouteExpress(CreateUserController))
Route.delete('/users/:id', RouteExpress(DeleteUserController))

export default Route 