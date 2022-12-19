import express from 'express'
import connectToDb from './db'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to upGrad Eshop App!!!</h1>')
})

Promise.all([connectToDb()])
  .then(() =>
    app.listen(port, () => console.log(`Eshop App is working on port ${port}`))
  )
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`)
    process.exit()
  })
