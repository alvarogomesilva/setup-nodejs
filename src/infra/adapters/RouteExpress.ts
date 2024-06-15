import { Request, Response } from 'express'
import { HttpRequest } from '../shared/protocols/http'
import { IController } from '../shared/protocols/controller'

export const RouteExpress = (controller: IController) => {

  return async (req: Request, res: Response) => {

    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    }

    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)

  }
}