const { serverErrorMessage } = require('../utils/errorMessage');

const centralError = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? serverErrorMessage : message,
  });
  next();
};

module.exports = centralError;
