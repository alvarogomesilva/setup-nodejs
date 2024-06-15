import { FastifyRequest, FastifyReply } from 'fastify'
import { HttpRequest } from '../shared/protocols/http'
import { IController } from '../shared/protocols/controller'

export const RouteFastify = (controller: IController) => {
  return async (req: FastifyRequest, res: FastifyReply) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).send(httpResponse.body)
  }
}