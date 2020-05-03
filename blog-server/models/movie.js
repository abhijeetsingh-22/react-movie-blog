const mongoose = require('mongoose');
const User = require('./user');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  released: {
    type: Date,
  },
  imageUrl: {
    type: String,
  },
  plot: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

movieSchema.pre('remove', async function (next) {
  try {
    let user = await User.findById(this.user);
    user.movies.remove(this.id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
