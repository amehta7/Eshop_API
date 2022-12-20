import { Schema, model } from 'mongoose'

const productSchema = new Schema(
  {
    available_items: {
      type: Number,
      required: [true, 'Please provide number of available items'],
    },
    category: {
      type: String,
      required: [true, 'Please provide category'],
    },
    description: {
      type: String,
      required: [true, 'Please provide description'],
    },
    image_url: {
      type: String,
      required: [true, 'Please provide image_url'],
    },
    manufacturer: {
      type: String,
      required: [true, 'Please provide manufacturer'],
    },
    name: {
      type: String,
      required: [true, 'Please provide name'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide price'],
    },
  },
  { timestamps: true }
)

const Product = model('Product', productSchema)

export default Product
