module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV == "development") {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      stack: err.stack,
      error: err,
    });
  }

  if (process.env.NODE_ENV == "production") {
    let message = err.message;
    let error = new Error(message);

    if (err.name == "ValidationError") {
      message = Object.values(err.error).map((values) => values.message);
      error = new Error(message);
    }

    if (err.name == "CastError") {
      message = `Resource not found:${err.path}`;
      error = new Error(message);
    }

    res.status(err.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
      // stack: err.stack,
    });
  }
};
