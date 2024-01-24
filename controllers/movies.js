const Movie = require('../models/movie');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const UserRightsError = require('../errors/UserRightsError');

module.exports.getMovies = async (req, res, next) => {
  try {
    const owner = req.user._id
    const movie = await Movie.find({owner}).select('-__v');;
    return res.send(movie);
  } catch (error) {
    return next(error);
  }
};

module.exports.createMovie = async (req, res, next) => {
  try {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    } = req.body;
    const movie = await Movie.create({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      owner: req.user._id,
      movieId,
      nameRU,
      nameEN,
    });
    return res.json(movie);
  } catch (error) {
    switch (error.name) {
      case 'ValidationError':
        return next(
          new BadRequestError(
            'Переданы некорректные данные при создании карточки.'
          )
        );
      default:
        return next(error);
    }
  }
};

module.exports.deleteMovie = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(_id);

    if (!deletedMovie) {
      return next(new NotFoundError('Карточка с указанным _id не найдена.'));
    }
    if (deletedMovie.owner.toString() !== req.user._id.toString()) {
      return next(
        new UserRightsError('Недостаточно прав для удаления этой карточки')
      );
    }
    return res.send({
      message: 'Карточка успешно удалена.',
    });
  } catch (error) {
    switch (error.name) {
      case 'CastError':
        return next(
          new BadRequestError(
            'Переданы некорректные данные при удалении карточки.'
          )
        );
      default:
        return next(error);
    }
  }
};
