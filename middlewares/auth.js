require('dotenv').config();
const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = require('../utils/configuration')
const AuthorizationError = require('../errors/AuthorizationError');

module.exports = (req, res, next) => {
  let payload;
  try {
    const token = req.cookies.jwt;
    if (!token) {
      throw new AuthorizationError('Необходима авторизация');
    }

    payload = jwt.verify(token, NODE_ENV === "production" ? JWT_SECRET : 'eight-oil-sunset-giraffe');
  } catch (err) {
    throw new AuthorizationError('Необходима авторизация');
  }
  req.user = payload;

  next();
};
