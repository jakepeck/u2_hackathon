const Order = require('../models/order')

const createOrder = async (req, res) => {
  try {
    const order = await new Order(req.body)
    await order.save()
    return res.status(201).json({
      order
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
    return res.status(200).json({ orders })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Order.findById(id)
    if (order) {
      return res.status(200).json({ plant })
    }
    return res.status(404).send('Plant with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params
    await Order.findByIdAndUpdate(id, req.body, { new: true }, (err, order) => {
      if (err) {
        res.status(500).send(err)
      }
      if (!order) {
        res.status(500).send('Order not found!')
      }
      return res.status(200).json(order)
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Order.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Order deleted')
    }
    throw new Error('Order not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder
}
