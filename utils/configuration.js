require('dotenv').config();

const {
  PORT = '3000',
  LOCALHOST = 'http://localhost:3000',
  DBADDRES = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  NODE_ENV,
  JWT_SECRET,
} = process.env;

module.exports = { PORT, LOCALHOST, DBADDRES, NODE_ENV, JWT_SECRET };
