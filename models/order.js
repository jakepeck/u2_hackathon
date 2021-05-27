const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
  {
    items: { type: Array, required: true },
    orderId: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('orders', Order)
