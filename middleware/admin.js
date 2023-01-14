import jwt from 'jsonwebtoken'

export const adminMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization
  //console.log(authHeader)

  if (!authHeader) {
    return res.status(401).send('Unauthorized access!')
  }

  const token = authHeader.split(' ')[1]
  try {
    const payload = await jwt.verify(token, process.env.jwtPrivateKey)
    //console.log(payload)

    let expiry = payload.exp

    if (Math.floor(new Date().getTime() / 1000) >= expiry) {
      return res.status(403).send('Token has expired!')
    }

    if (payload.isAdmin) {
      req.user = payload
      next()
    } else {
      return res
        .status(403)
        .send('You are not authorized to access this endpoint!')
    }
  } catch (error) {
    res.status(401).send('Unauthorized access!')
  }
}
