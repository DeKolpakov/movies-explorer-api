require('dotenv').config();
const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = require('../utils/configuration');
const AuthorizationError = require('../errors/AuthorizationError');
const { invalidDeleteMovieMessage } = require('../utils/errorMessage');

module.exports = (req, res, next) => {
  let payload;
  try {
    const token = req.cookies.jwt;
    if (!token) {
      throw new AuthorizationError(invalidDeleteMovieMessage);
    }

    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'eight-oil-sunset-giraffe'
    );
  } catch (err) {
    throw new AuthorizationError(invalidDeleteMovieMessage);
  }
  req.user = payload;

  next();
};
