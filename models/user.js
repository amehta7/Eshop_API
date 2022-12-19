import { Schema, model } from 'mongoose'
const { ObjectId } = Schema.Types

const userSchema = new Schema({})

const User = model('User', userSchema)

export default User
