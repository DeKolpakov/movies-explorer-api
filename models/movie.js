const mongoose = require('mongoose');
const { urlRegrex } = require('../utils/regex');
const {
  requiredFieldMessage,
  invalidURLMessage,
} = require('../utils/errorMessage');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
  },

  director: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
  },

  duration: {
    type: Number,
    required: { value: true, message: requiredFieldMessage },
  },

  year: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
  },

  description: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
  },

  image: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
    validate: {
      validator(v) {
        return urlRegrex.test(v);
      },
      message: invalidURLMessage,
    },
  },

  trailerLink: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
    validate: {
      validator(v) {
        return urlRegrex.test(v);
      },
      message: invalidURLMessage,
    },
  },

  thumbnail: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
    validate: {
      validator(v) {
        return urlRegrex.test(v);
      },
      message: invalidURLMessage,
    },
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: { value: true, message: requiredFieldMessage },
    ref: 'user',
  },

  movieId: {
    type: Number,
    required: { value: true, message: requiredFieldMessage },
  },

  nameRU: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
  },

  nameEN: {
    type: String,
    required: { value: true, message: requiredFieldMessage },
  },
});

module.exports = mongoose.model('movie', movieSchema);
