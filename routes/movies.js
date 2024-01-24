const movieRouter = require('express').Router();

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

const {
  createMovieValidate,
  movieIdValidate,
} = require('../middlewares/validation');

movieRouter.get('/', getMovies);
movieRouter.post('/', createMovieValidate, createMovie);
movieRouter.delete('/:_id', movieIdValidate, deleteMovie);

module.exports = movieRouter;
