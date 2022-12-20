import express from 'express'
import connectToDb from './db'
import orderRouter from './routes/order'
import productRouter from './routes/product'
import addressRouter from './routes/address'
import authRouter from './routes/auth'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to upGrad Eshop App!!!</h1>')
})

app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/addresses', addressRouter)
app.use('/api/v1', authRouter)

Promise.all([connectToDb()])
  .then(() =>
    app.listen(port, () => console.log(`Eshop App is working on port ${port}`))
  )
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`)
    process.exit()
  })
