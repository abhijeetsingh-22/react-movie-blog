require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const db = require('./models');
const movieRoutes = require('./routes/movies');
const authRoutes = require('./routes/auth');
const { isLoggedin, isCorrectUser } = require('./middleware/auth');

const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use('/api/users/:id/movies', isLoggedin, isCorrectUser, movieRoutes);
app.use('/api/auth', authRoutes);
app.get('/api/movies', async function (req, res, next) {
  try {
    const movies = await db.Movie.find()
      .sort({ title: 'asc' })
      .populate('user', { username: true });
    return res.status(200).json(movies);
  } catch (err) {
    return next(err);
  }
});
app.get('/api/movies/:movie_id', async function (req, res, next) {
  try {
    const movie = await db.Movie.findById(req.params.movie_id).populate(
      'user',
      { username: true }
    );
    return res.status(200).json(movie);
  } catch (err) {
    return next(err);
  }
});
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);
app.listen(PORT, function () {
  console.log('server started on port', PORT);
});
