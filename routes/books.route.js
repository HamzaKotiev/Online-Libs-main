const { Router } = require("express")
const { bookController } = require('../controllers/books.controllers')
const route = Router()


//админ

route.get('/admin/pas14352/books', bookController.getAllBooks)
route.get('/admin/pas14352/books/:id', bookController.getBooksByGenre)
route.get('/admin/pas14352/books/byId/:id', bookController.getBookById)
route.post('/admin/pas14352/books/', bookController.postBook)
route.patch('/admin/pas14352/books/addreviev/:id', bookController.postReviev)
route.delete('/admin/pas14352/books/:id', bookController.deleteBook)
route.patch("/admin/pas14352/:clientId/:bookId/banned", bookController.goToBan)

//клиент

route.get('/books', bookController.getAllBooks)
route.get('/books/:id', bookController.getBooksByGenre)
route.get('/books/byId/:id', bookController.getBookById)
route.patch('/books/addreviev/:id', bookController.addReviev)

module.exports = route