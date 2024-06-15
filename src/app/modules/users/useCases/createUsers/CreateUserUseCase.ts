import { UserRequest } from 'app/models/User'
import { CreateUserRepository } from '../../repositories/CreateUserRepository'


export class CreateUserUseCase {
  constructor(private repository: CreateUserRepository) {}

  async execute(request: UserRequest): Promise<void> {
    const { name, email, password } = request

    await this.repository.create({ name, email, password })
  }
}