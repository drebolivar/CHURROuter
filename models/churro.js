const { Schema } = require('mongoose')

const Churro = new Schema(
  {
    type: { type: String, required: true },
    dip: { type: String, required: true },
    price: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    deactive: { type: String, required: true },
    churro_id: { type: Schema.Types.ObjectId, ref: 'churro_id' }
  },
  { timestamps: true }
)

module.exports = Churro
