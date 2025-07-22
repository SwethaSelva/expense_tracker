interface ServerConnectErr extends Error {
  code?: string | number;
  status?: number;
}

export {
  ServerConnectErr,
}