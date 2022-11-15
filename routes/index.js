const { Router } = require("express")
const route = Router()

route.use(require('./genres.route'))
route.use(require('./revievs.route'))
route.use(require('./clients.route'))
route.use(require('./books.route'))

module.exports = route