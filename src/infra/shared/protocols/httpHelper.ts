import { HttpResponse } from '../protocols/http'

export const create = (data: unknown): HttpResponse => ({
  statusCode: 201,
  body: data
})

export const remove = (data: unknown): HttpResponse => ({
  statusCode: 200,
  body: data
})


// ERRORS
// ========
export const requestError = (message: string): HttpResponse => ({
  statusCode: 400,
  body: { message }
})

export const serverError = (message: string): HttpResponse => ({
  statusCode: 500,
  body: { message }
})