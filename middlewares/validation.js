const { celebrate, Joi } = require('celebrate');

module.exports.createUserValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'any.required': 'Поле "email" является обязательным',
      'string.email':
        'Поле "email" должно быть действительным адресом электронной почты',
    }),
    password: Joi.string().required().min(8).messages({
      'any.required': 'Поле "password" является обязательным',
      'string.min':
        'Поле "password" должно содержать не менее {#limit} символов',
    }),
    name: Joi.string().required().min(2).max(30).messages({
      'any.required': 'Поле "name" является обязательным',
      'string.min': 'Поле "name" должно содержать не менее {#limit} символов',
      'string.max': 'Поле "name" должно содержать не более {#limit} символов',
    }),
  }),
});

module.exports.loginValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'any.required': 'Поле "email" является обязательным',
      'string.email':
        'Поле "email" должно быть действительным адресом электронной почты',
    }),
    password: Joi.string().required().messages({
      'any.required': 'Поле "password" является обязательным',
    }),
  }),
});

module.exports.updateUserValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      'any.required': 'Поле "name" является обязательным',
      'string.min': 'Поле "name" должно содержать не менее {#limit} символов',
      'string.max': 'Поле "name" должно содержать не более {#limit} символов',
    }),
    email: Joi.string().required().email().messages({
      'any.required': 'Поле "email" является обязательным',
      'string.email':
        'Поле "email" должно быть действительным адресом электронной почты',
    }),
  }),
});

module.exports.movieIdValidate = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().hex().length(24).messages({
      'any.required': 'Поле "_id" является обязательным',
      'string.hex': 'Поле "_id" должно быть шестнадцатеричным',
      'string.length': 'Поле "_id" должно содержать точно 24 символа',
    }),
  }),
});

module.exports.createMovieValidate = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().messages({
      'any.required': 'Поле "country" является обязательным',
    }),
    director: Joi.string().required().messages({
      'any.required': 'Поле "director" является обязательным',
    }),
    duration: Joi.number().required().messages({
      'any.required': 'Поле "duration" является обязательным',
    }),
    year: Joi.string().required().messages({
      'any.required': 'Поле "year" является обязательным',
    }),
    description: Joi.string().required().messages({
      'any.required': 'Поле "description" является обязательным',
    }),
    image: Joi.string()
      .required()
      .pattern(/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*/)
      .messages({
        'any.required': 'Поле "image" является обязательным',
        'string.pattern.base':
          'Поле "image" должно быть действительным URL-адресом',
      }),
    trailerLink: Joi.string()
      .required()
      .pattern(/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*/)
      .messages({
        'any.required': 'Поле "trailerLink" является обязательным',
        'string.pattern.base':
          'Поле "trailerLink" должно быть действительным URL-адресом',
      }),
    thumbnail: Joi.string()
      .required()
      .pattern(/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*/)
      .messages({
        'any.required': 'Поле "thumbnail" является обязательным',
        'string.pattern.base':
          'Поле "thumbnail" должно быть действительным URL-адресом',
      }),
    movieId: Joi.number().required().messages({
      'any.required': 'Поле "movieId" является обязательным',
    }),
    nameRU: Joi.string().required().messages({
      'any.required': 'Поле "nameRU" является обязательным',
    }),
    nameEN: Joi.string().required().messages({
      'any.required': 'Поле "nameEN" является обязательным',
    }),
  }),
});
