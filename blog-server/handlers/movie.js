const db = require('../models');

exports.createMovie = async function (req, res, next) {
  try {
    const { title, released, plot, imageUrl } = req.body;
    let movie = await db.Movie.create({
      title,
      plot,
      imageUrl,
      released,
      user: req.params.id,
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.movies.push(movie.id);
    await foundUser.save();
    let foundMovie = await db.Movie.findById(movie.id).populate('user', {
      username: true,
    });
    return res.status(200).json(foundMovie);
  } catch (err) {
    return next(err);
  }
};
exports.getMovie = async function (req, res, next) {
  try {
    let foundMovie = await db.Movie.findById(
      req.params.movie_id
    ).populate('user', { username: true, profileImageUrl: true });
    return res.status(200).json(foundMovie);
  } catch (err) {
    return next(err);
  }
};

exports.deleteMovie = async function (req, res, next) {
  try {
    let foundMovie = await db.Movie.findById(req.params.movie_id);
    await foundMovie.remove();
    return res.status(200).json(foundMovie);
  } catch (err) {
    return next(err);
  }
};
