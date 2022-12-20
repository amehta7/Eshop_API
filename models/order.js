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
  product_product_id: {
    type: ObjectId,
    ref: 'Product',
    required: true,
  },
  shipping_address_id: {
    type: ObjectId,
    ref: 'Address',
    required: true,
  },
  user_id: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
})

const Order = model('Order', orderSchema)

export default Order
