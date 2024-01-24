const indexRouter = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { loginUser, createUser, logoutUser } = require('../controllers/users');
const {
  loginValidate,
  createUserValidate,
} = require('../middlewares/validation');
const NotFoundError = require('../errors/NotFoundError');

indexRouter.post('/signin', loginValidate, loginUser);
indexRouter.post('/signup', createUserValidate, createUser);

indexRouter.use(auth);

indexRouter.use('/users', userRouter);
indexRouter.use('/movies', movieRouter);
indexRouter.post('/signout', logoutUser);

indexRouter.use((req, res, next) => {
  next(new NotFoundError('Неверно указан путь.'));
});

module.exports = indexRouter;
