const MenuItem = require('../models/menuitem')

const createMenuItem = async (req, res) => {
  try {
    const menuitem = await new MenuItem(req.body)
    await menuitem.save()
    return res.status(201).json({
      menuitem,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllMenuItems = async (req, res) => {
  try {
    const menuitems = await MenuItem.find()
    return res.status(200).json({  menuitems })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMenuItemById = async (req, res) => {
  try {
    const { id } = req.params
    const menuitem = await MenuItem.findById(id)
    if (menuitem) {
      return res.status(200).json({ menuitem })
    }
    return res.status(404).send('Menu item with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params
    await MenuItem.findByIdAndUpdate(id, req.body, { new: true }, (err, menuitem) => {
      if (err) {
        res.status(500).send(err)
      }
      if (!menuitem) {
        res.status(500).send('Menu item not found!')
      }
      return res.status(200).json(menuitem)
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await MenuItem.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Menu item deleted')
    }
    throw new Error('Menu item not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createMenuItem,
  getAllMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem
}
