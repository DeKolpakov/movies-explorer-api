const allowedCors = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://movie.dekolpakov.nomoredomainsmonster.ru',
  'https://movie.dekolpakov.nomoredomainsmonster.ru',
  'http://api.movie.dekolpakov.nomoredomainsmonster.ru',
  'https://api.movie.dekolpakov.nomoredomainsmonster.ru',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];

  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Max-Age', 30);
    return res.end();
  }

  return next();
};
