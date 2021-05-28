const mongoose = require('mongoose')
const OrderSchema = require('./order')
const MenuItemSchema = require('./menuitem')

const MenuItem = mongoose.model('menuitems', MenuItemSchema)
const Order = mongoose.model('orders', OrderSchema)

module.exports = {
  MenuItemSchema,
  OrderSchema
}