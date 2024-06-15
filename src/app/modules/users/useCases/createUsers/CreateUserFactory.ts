import { prisma } from 'app/config/prisma'
import { CreateUserRepository } from '../../repositories/CreateUserRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const repository = new CreateUserRepository(prisma)
const useCase = new CreateUserUseCase(repository)
const controller = new CreateUserController(useCase)

export const CreateUserFactory = controller