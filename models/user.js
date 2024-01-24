const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: { value: true, message: 'Поле "email" является обязательным' },
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Введен некорректный email',
    },
  },

  password: {
    type: String,
    required: { value: true, message: 'Поле "password" является обязательным' },
    select: false,
  },

  name: {
    type: String,
    required: { value: true, message: 'Поле "name" является обязательным' },
    minlength: [2, 'Минимальная длинна 2 символа'],
    maxlength: [30, 'Максимальная длинна 30 символов'],
  },
});

module.exports = mongoose.model('user', userSchema);
