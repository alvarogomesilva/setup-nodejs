import { IController } from "infra/shared/protocols/controller";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { HttpRequest, HttpResponse } from "infra/shared/protocols/http";
import { remove, requestError, serverError } from "infra/shared/protocols/httpHelper";
import { IDeleteUserDTO } from "app/models/User";


export class DeleteUserController implements IController {
    constructor(private readonly useCase: DeleteUserUseCase) { }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { id } = request.params as IDeleteUserDTO
        
        if (!id) return requestError('Id is missing')

        try {
            const useCase = await this.useCase.execute({id})
            return remove(useCase)

        } catch (error) {
            if (error instanceof Error) {
                return serverError(error.message)
            }
            return serverError('An unexpected error occurred')
        }
    }

}