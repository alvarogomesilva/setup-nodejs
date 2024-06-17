import { IDeleteUserDTO } from "app/models/User";
import { DeleteUserRepository } from "../../repositories/DeleteUserRepository";


export class DeleteUserUseCase {
    constructor(private repository: DeleteUserRepository) {}

    async execute(data: IDeleteUserDTO) {
        const { id } = data

        const users = await this.repository.delete(id)
        return users
    }
}