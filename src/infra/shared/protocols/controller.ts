import { HttpResponse } from './http'

export interface IController<C = unknown> {
    handle(request: C): Promise<HttpResponse>

}