import { Router } from 'express'

import users from './users.routes'


const router = Router()

router.use('/', users)

export { router }
