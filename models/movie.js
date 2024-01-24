const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: { value: true, message: 'Поле является обязательным' },
  },

  director: {
    type: String,
    required: { value: true, message: 'Поле является обязательным' },
  },

  duration: {
    type: Number,
    required: { value: true, message: 'Поле является обязательным' },
  },

  year: {
    type: String,
    required: { value: true, message: 'Поле является обязательным' },
  },

  description: {
    type: String,
    required: { value: true, message: 'Поле является обязательным' },
  },

  image: {
    type: String,
    required: { value: true, message: 'Поле является обязательным' },
    validate: {
      validator(v) {
        return /^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*/gm.test(v);
      },
      message: 'Ошибка проверки url адреса',
    },
  },

  trailerLink: {
    type: String,
    required: { value: true, message: 'Поле является обязательным' },
    validate: {
      validator(v) {
        return /^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*/gm.test(v);
      },
      message: 'Ошибка проверки url адреса',
    },
  },

  thumbnail: {
    type: String,
    required: { value: true, message: 'Поле является обязательным' },
    validate: {
      validator(v) {
        return /^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*/gm.test(v);
      },
      message: 'Ошибка проверки url адреса',
    },
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: { value: true, message: 'Поле является обязательным' },
    ref: 'user',
  },

  movieId: {
    type: Number,
    required: { value: true, message: 'Поле является обязательным' },
  },

  nameRU: {
    type: String,
    required: { value: true, message: 'Поле является обязательным' },
  },

  nameEN: {
    type: String,
    required: { value: true, message: 'Поле является обязательным' },
  },
});

module.exports = mongoose.model('movie', movieSchema);
