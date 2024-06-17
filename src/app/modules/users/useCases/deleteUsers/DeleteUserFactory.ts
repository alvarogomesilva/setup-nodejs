import { prisma } from 'app/config/prisma'
import { DeleteUserRepository } from '../../repositories/DeleteUserRepository'
import { DeleteUserUseCase } from './DeleteUserUseCase'
import { DeleteUserController } from './DeleteUserController'

const repository = new DeleteUserRepository(prisma)
const useCase = new DeleteUserUseCase(repository)
const controller = new DeleteUserController(useCase)

const DeleteUserFactory = controller
export default DeleteUserFactory