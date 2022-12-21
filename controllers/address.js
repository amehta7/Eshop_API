import Address from '../models/address'
import User from '../models/user'

export const addAddress = async (req, res) => {
  try {
    const user = req.user
    const userData = await User.findById(user._id)
    //console.log(userData)
    const address = await Address.create({
      ...req.body,
      user: userData,
    })

    res.status(200).json({ address })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}
