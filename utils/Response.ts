import { ResponseSchema } from '../src/Interface/Common';

export class ResponseClass {
  data: Object | null
  message: String
  statusCode: Number

  constructor (response: ResponseSchema) {
    this.data = response.data || null,
    this.message = response.message || '',
    this.statusCode = response.statusCode || 200
  }
}