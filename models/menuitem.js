const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuItem = new Schema(
  {
    name: { type: String, required: true },
    menuType: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('menuitems', MenuItem)