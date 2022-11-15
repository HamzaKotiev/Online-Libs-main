const { Router } = require("express")
const { clientController } = require('../controllers/clients.controllers')
const route = Router()

//админ

route.get('/admin/pas14352/clients', clientController.getAllClients)
route.get('/admin/pas14352/clients/:id', clientController.getClientById)
route.post('/admin/pas14352/clients', clientController.postClient)
route.patch('/admin/pas14352/clients/:id', clientController.patchClient)
route.delete('/admin/pas14352/clients/:id', clientController.removeClient)

//клиент

route.patch("/books/renter/:clientId/add", clientController.takeBook);
route.patch("/books/renter/:clientId/:remove", clientController.removeBookInBascket);




module.exports = route