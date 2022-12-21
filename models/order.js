import { Schema, model } from 'mongoose'
const { ObjectId } = Schema.Types

const orderSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: Object,
    ref: 'Product',
    required: true,
  },
  shippingAddress: {
    type: Object,
    ref: 'Address',
    required: true,
  },
  user: {
    type: Object,
    ref: 'User',
    required: true,
  },
})

const Order = model('Order', orderSchema)

export default Order
