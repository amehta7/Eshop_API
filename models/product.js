import { Schema, model } from 'mongoose'
const { ObjectId } = Schema.Types

const productSchema = new Schema({})

const Product = model('Product', productSchema)

export default Product
