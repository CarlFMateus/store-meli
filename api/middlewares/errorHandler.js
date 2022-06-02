export const errorHandler = (err, req, res, next) => {
  return res.status(500).json({
    error: err.message,
    message: err.stack
  })
}

export const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err
    return res.status(output.statusCode).json(output.payload)
  }

  next(err)
}
