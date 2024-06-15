import { PrismaClient } from '@prisma/client'
import { ICreateUserDTO } from 'app/models/User'

export class CreateUserRepository {
  constructor(private readonly prisma: PrismaClient) { }

  async create(data: ICreateUserDTO): Promise<void> {
    await this.prisma.user.create({ data: data })
  }
}