const userRouter = require('express').Router();
const { updateUserValidate } = require('../middlewares/validation');
const { updateUserData, getUserInfo } = require('../controllers/users');

userRouter.get('/me', getUserInfo);
userRouter.patch('/me', updateUserValidate, updateUserData);

module.exports = userRouter;
