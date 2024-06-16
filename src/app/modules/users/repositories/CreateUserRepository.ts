import { PrismaClient } from '@prisma/client'
import { ICreateUserDTO, IUser } from 'app/models/User'

export class CreateUserRepository {
  constructor(private readonly prisma: PrismaClient) { }

  async create(data: ICreateUserDTO): Promise<IUser> {
    const users = await this.prisma.user.create({ data: data })
    return users
  }

  async findByEmail(email: string): Promise<IUser | null>  {
    const user = await this.prisma.user.findFirst({
      where: { email }
    })
    return user
  }
}