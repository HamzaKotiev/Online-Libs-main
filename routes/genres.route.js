const { Router } = require("express")
const { genreController } = require('../controllers/genres.controllers')
const route = Router()

//админ

route.get('/admin/genres', genreController.getAllGenres)
route.get('/admin/genres/:id', genreController.getBooksByGenre)
route.post('/admin/genres', genreController.postGenre)
route.delete('/admin/genres', genreController.removeGenre)

//клиент

route.get('/genres', genreController.getAllGenres)
route.get('/genres/:id', genreController.getBooksByGenre)

module.exports = route
