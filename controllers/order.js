import Address from '../models/address'
import User from '../models/user'
import Product from '../models/product'
import Order from '../models/order'

export const createOrder = async (req, res) => {
  try {
    const user = req.user

    if (user.isAdmin) {
      return res
        .status(401)
        .send('You are not authorised to access this endpoint.')
    }

    let product = await Product.findById(req.body.productId)

    if (!product) {
      res
        .status(404)
        .json({ message: `No Product found for ID - ${req.body.productId} !` })
      return
    }

    if (product.availableItems < req.body.quantity) {
      return res
        .status(400)
        .send(
          `Product with ID - ${req.body.productId} is currently out of stock!`
        )
    }

    const address = await Address.findById(req.body.addressId)

    if (!address) {
      res
        .status(404)
        .json({ message: `No Address found for ID - ${req.body.addressId} !` })
      return
    }

    const userData = await User.findById(user._id)

    const update = {
      availableItems: product.availableItems - req.body.quantity,
    }
    let updatedProduct = await Product.findByIdAndUpdate(
      req.body.productId,
      update,
      {
        new: true,
      }
    )

    const order = await Order.create({
      user: userData,
      product: updatedProduct,
      shippingAddress: address,
      amount: req.body.quantity * product.price,
    })

    res.status(200).json({ order })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}
