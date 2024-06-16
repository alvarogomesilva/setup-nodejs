import { Router } from 'express'
import CreateUserController from 'app/modules/users/useCases/createUsers/CreateUserFactory'
import { RouteExpress } from 'infra/adapters/RouteExpress'

const Route = Router()

Route.post('/users', RouteExpress(CreateUserController))

export default Route 