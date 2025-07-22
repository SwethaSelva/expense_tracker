interface ServerConnectErr extends Error {
  code?: string | number;
  status?: number;
}

interface ResponseSchema {
  data?: object | null,
  message?: String,
  statusCode?: Number
}

export {
  ServerConnectErr,
  ResponseSchema
}