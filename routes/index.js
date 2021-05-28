const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/menuitems', controllers.createMenuItem)

router.get('/menuitems', controllers.getAllMenuItems)

router.get('/menuitems/:id', controllers.getMenuItemById)

router.put('/menuitems/:id', controllers.updateMenuItem)

router.delete('/menuitems/:id', controllers.deleteMenuItem)

module.exports = router