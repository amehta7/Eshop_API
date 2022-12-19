import { Schema, model } from 'mongoose'
const { ObjectId } = Schema.Types

const orderSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: ObjectId,
    ref: 'Product',
    required: true,
  },
  shippingAddress: {
    type: ObjectId,
    ref: 'Address',
    required: true,
  },
  user: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
})

const Order = model('Order', orderSchema)

export default Order
