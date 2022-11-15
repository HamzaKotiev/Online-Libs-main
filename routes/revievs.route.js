const { Router } = require("express")
const { revievController } = require('../controllers/revievs.controllers')
const route = Router()

//админ

route.get('/admin/revievs', revievController.getAllRevievs)
route.get('/admin/revievs/:id', revievController.getRevievById)
route.post('/admin/revievs', revievController.postReviev)
route.patch('/admin/revievs/:id', revievController.patchReviev)
route.delete('/admin/revievs/:id', revievController.deleteReviev)

//клиент

route.get('/revievs', revievController.getAllRevievs)
route.get('/revievs/:id', revievController.getRevievById)
route.post('/revievs', revievController.addReviev)
route.patch('/revievs/:id', revievController.patchReviev)
route.delete('/revievs/:id', revievController.deleteReviev)

module.exports = route