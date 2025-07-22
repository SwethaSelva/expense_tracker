
export class SuccessReponse {
  data: object | null
  message: string
  statusCode: number

  constructor (response: SuccessReponse) {
    this.data = response.data || null,
    this.message = response.message || '',
    this.statusCode = response.statusCode
  }
}

export class AppError extends Error {
  statusCode: number

  constructor (response: AppError) {
    super(response.message);
    this.statusCode = response.statusCode;
  }
}