import mongoose from 'mongoose'

const connectToDb = () =>
  mongoose.connect(
    `mongodb+srv://${process.env.eshopappUser}:${process.env.eshopappPassword}@cluster0.a0wzikd.mongodb.net/UPGRAD_ESHOP_API?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )

export default connectToDb
