import { CreateUserUseCase } from './CreateUserUseCase'
import { IController } from '../../../../../infra/shared/protocols/controller'
import { HttpRequest, HttpResponse } from '../../../../../infra/shared/protocols/http'
import { requestError, create, serverError } from '../../../../../infra/shared/protocols/httpHelper'
import { ICreateUserDTO } from 'app/models/User'


export class CreateUserController implements IController {
  constructor(private readonly useCase: CreateUserUseCase) { }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { name, email, password } = request.body as ICreateUserDTO

    const data = { name, email, password }

    if (!name || !email || !password) {
      return requestError('Missing required fields: name, email, password')
    }

    try {
      const useCase = await this.useCase.execute(data)
      return create(useCase)

    } catch (error) {
      if (error instanceof Error) {
        return serverError(error.message)
      }
      return serverError('An unexpected error occurred')
    }
  }
}