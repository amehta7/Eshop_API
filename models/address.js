import { Schema, model } from 'mongoose'
const { ObjectId } = Schema.Types

const addressSchema = new Schema(
  {
    city: {
      type: String,
      required: [true, 'Please provide city'],
    },
    landmark: {
      type: String,
    },
    name: {
      type: String,
      required: [true, 'Please provide name'],
    },
    contactNumber: {
      type: String,
      required: [true, 'Please provide phone number'],
    },
    state: {
      type: String,
      required: [true, 'Please provide state'],
    },
    street: {
      type: String,
      required: [true, 'Please provide street'],
    },
    zipcode: {
      type: String,
      required: [true, 'Please provide zipcode'],
      match: [/^\d{5,6}$/, 'Please provide valid zipcode'],
    },
    user: {
      type: ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
)

const Address = model('Address', addressSchema)

export default Address
