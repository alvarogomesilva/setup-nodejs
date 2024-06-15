import { CreateUserUseCase } from './CreateUserUseCase'
import { IController } from '../../../../../infra/shared/protocols/controller'
import { HttpRequest, HttpResponse } from '../../../../../infra/shared/protocols/http'
import { create } from '../../../../../infra/shared/protocols/httpHelper'
import { ICreateUserDTO } from 'app/models/User'


export class CreateUserController implements IController {
  constructor(private readonly useCase: CreateUserUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { name, email, password } = request.body as ICreateUserDTO

    const data = { name, email, password }
    const useCase = await this.useCase.execute(data)

    return create(useCase)
  }
}