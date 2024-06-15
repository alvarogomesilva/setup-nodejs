import { Router } from 'express'
import { CreateUserFactory } from 'app/modules/users/useCases/createUsers/CreateUserFactory'
import { RouteExpress } from 'infra/adapters/RouteExpress'

const Route = Router()

Route.post('/users', RouteExpress(CreateUserFactory))

export default Route 