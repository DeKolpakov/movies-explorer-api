const rateLimit = require('express-rate-limit');

/* const skipCondition = (req) => {
  return req.ip === '127.0.0.1';
}; */

const customHandler = (req, res) => {
  res.status(429).json({ error: 'Превышен лимит запросов' });
};

module.exports = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  /* skip: skipCondition, */
  handler: customHandler,
});
