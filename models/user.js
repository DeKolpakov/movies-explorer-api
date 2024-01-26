const mongoose = require('mongoose');
const validator = require('validator');
const {
  requiredFieldMessage,
  invalidMailMessage,
} = require('../utils/errorMessage');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: invalidMailMessage,
    },
  },

  password: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
    select: false,
  },

  name: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
    minlength: [2, 'Минимальная длинна 2 символа'],
    maxlength: [30, 'Максимальная длинна 30 символов'],
  },
});

module.exports = mongoose.model('user', userSchema);
