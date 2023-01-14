import User from '../models/user'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
  try {
    let emailAlreadyExists = await User.findOne({ email: req.body.email })

    if (emailAlreadyExists) {
      return res
        .status(400)
        .send('Try any other email, this email is already registered!')
    }

    let phoneAlreadyExists = await User.findOne({
      contactNumber: req.body.contactNumber,
    })

    if (phoneAlreadyExists) {
      return res.status(400).send('Number already exists')
    }

    const user = await User.create(req.body)

    res.status(200).json({
      user,
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).send('This email has not been registered!')
    }

    const isPasswordCorrect = await user.checkPassword(password)

    if (!isPasswordCorrect) {
      return res.status(401).send('Invalid Credentials!')
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        isAdmin: user.role === 'admin',
        createdAt: Date.now,
      },
      process.env.jwtPrivateKey,
      {
        expiresIn: process.env.jwtLifeTime,
      }
    )

    res.status(200).json({
      user: {
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        isAuthenticated: true,
      },
      token,
    })
    //console.log(token)
  } catch (error) {
    res.status(400).send(error.message)
  }
}
