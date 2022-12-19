import { Schema, model } from 'mongoose'
const { ObjectId } = Schema.Types

const addressSchema = new Schema({})

const Address = model('Address', addressSchema)

export default Address
