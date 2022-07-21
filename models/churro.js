const { Schema } = require('mongoose')

const Churro = new Schema(
  {
    type: { type: String, required: true },
    dip: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    available: { type: String, required: true },
    img: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Churro
