import Product from '../models/product'

export const getAllProducts = async (req, res) => {
  try {
    let {
      category = '',
      direction = 'desc',
      sortBy = '_id',
      name = '',
      pageNo = 0,
      pageSize = 10,
    } = req.query

    let queryObject = {}

    //search by name
    if (name) {
      queryObject.name = { $regex: name, $options: 'i' }
    }

    //search by category
    if (category) {
      queryObject.category = { $regex: category, $options: 'i' }
    }

    pageNo = parseInt(pageNo)
    pageSize = parseInt(pageSize)

    const product = await Product.find(queryObject)
      .sort({ [sortBy]: direction })
      .skip(pageNo * pageSize)
      .limit(pageSize)

    res.status(200).json({
      content: product,
      totalElements: product.length,
      page_size: pageSize,
      page_no: pageNo,
    })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getAllProductCategories = async (req, res) => {
  try {
    const categories = await Product.find()
      .select('category')
      .distinct('category')
    res.status(200).json({ categories })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getSingleProductById = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)

    if (!product) {
      res
        .status(404)
        .json({ message: `No Product found for ID - ${req.params.id} !` })
      return
    }

    res.status(200).json({ product })
  } catch (error) {
    return res
      .status(404)
      .json({ message: `No Product found for ID - ${req.params.id} !` })
  }
}

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json({ product })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)

    if (!product) {
      res
        .status(404)
        .json({ message: `No Product found for ID - ${req.params.id} !` })
      return
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({ updatedProduct })
  } catch (error) {
    return res
      .status(404)
      .json({ message: `No Product found for ID - ${req.params.id} !` })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)

    if (!product) {
      res
        .status(404)
        .json({ message: `No Product found for ID - ${req.params.id} !` })
      return
    }

    res.status(200).json({
      message: `Product with ID - ${req.params.id} deleted successfully!`,
    })
  } catch (error) {
    return res
      .status(404)
      .json({ message: `No Product found for ID - ${req.params.id} !` })
  }
}
