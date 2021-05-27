const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/orders', controllers.createOrder)

router.get('/orders', controllers.getAllOrders)

router.get('/orders/:id', controllers.getOrderById)

router.put('/orders/:id', controllers.updateOrder)

router.delete('/orders/:id', controllers.deleteOrder)

module.exports = router
