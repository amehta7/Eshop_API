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
    phone: {
      type: Number,
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
    },
    user_id: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

const Address = model('Address', addressSchema)

export default Address
