const express = require('express')
const MoviesController = require('../controllers/MoviesController')

const router = express.Router()
router.get('/', MoviesController.GetMovies)

module.exports = router