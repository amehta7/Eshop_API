import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide email'],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide valid email',
      ],
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, 'Please provide first-name'],
      minLength: 5,
      maxLength: 50,
    },
    lastName: {
      type: String,
      required: [true, 'Please provide last-name'],
      minLength: 5,
      maxLength: 50,
    },
    password: {
      type: String,
      required: [true, 'Please provide password'],
      minlength: 6,
      maxLength: 1024,
    },
    contactNumber: {
      type: Number,
      min: 1000000000,
      unique: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  { timestamps: true }
)

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.checkPassword = async function (password) {
  const match = await bcrypt.compare(password, this.password)
  return match
}

const User = model('User', userSchema)

export default User
