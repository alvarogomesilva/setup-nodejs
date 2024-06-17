import { PrismaClient } from "@prisma/client";
import { IUser } from "app/models/User";


export class DeleteUserRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async delete(id: string): Promise<IUser> {
        const users = await this.prisma.user.delete({
            where: { id }
        })

        return users
    }
}