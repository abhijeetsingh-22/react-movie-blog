const express = require('express');
const router = express.Router({ mergeParams: true });
const { createMovie, getMovie, deleteMovie } = require('../handlers/movie');

router.route('/').post(createMovie);
router.route('/:movie_id').get(getMovie).delete(deleteMovie);

module.exports = router;
