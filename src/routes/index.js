const { Router } = require('express');

const viewsRouter = require('./views.router.js')
const productsRouter = require('./products.router.js')
const cartsRouter = require('./carts.router.js')
const messagesRouter = require('./messages.router.js')

const router = Router()

router.use('/views', viewsRouter)
router.use('/api/carts', cartsRouter)
router.use('/api/msg', messagesRouter)
router.use('/api/prod', productsRouter)

module.exports = router;