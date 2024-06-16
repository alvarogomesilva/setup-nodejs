import { ICreateUserDTO } from 'app/models/User'
import { CreateUserRepository } from '../../repositories/CreateUserRepository'


export class CreateUserUseCase {
  constructor(private repository: CreateUserRepository) {}

  async execute(data: ICreateUserDTO) {
    const { name, email, password } = data

    if (!email.includes('@')) {
      throw new Error('Invalid email format')
    }

    const userExists = await this.repository.findByEmail(email)
    if (userExists) {
      throw new Error('Email already in use')
    }

    const users = await this.repository.create({ name, email, password })
    return users
  }
}