import productsModel from "../productsModel/productsModel.mjs"

export const createProduct = async (req, res) => {
  try {
    const productData = new productsModel(req.body)
    const productExist = await productsModel.findOne({
      productUniqID: req.body.productUniqID,
    })
    if (productExist) {
      return res.status(400).json({ message: "Product already exists" })
    }
    productData.save()
    return res
      .status(201)
      .json({ message: "Product Created", data: productData })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getAllProducts = async (req, res) => {
  try {
    const productExist = await productsModel.find()
    if (!productExist) {
      return res.status(400).json({ message: "Product not found" })
    }
    return res
      .status(200)
      .json({ message: "Products found", data: productExist })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getProduct = async (req, res) => {
  try {
    const id = req.params.id
    const productExist = await productsModel.findById({ _id: id })
    if (!productExist) {
      return res.status(400).json({ message: "Product not found" })
    }
    return res
      .status(200)
      .json({ message: "Product found", data: productExist })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id
    const productExist = await productsModel.findById({ _id: id })
    if (!productExist) {
      return res.status(400).json({ message: "Product not found" })
    }
    const updatedProduct = await productsModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    )
    return res
      .status(200)
      .json({ message: "Product updated", data: updatedProduct })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id
    const productExist = await productsModel.findById({ _id: id })
    if (!productExist) {
      return res.status(400).json({ message: "Product not found" })
    }
    await productsModel.findByIdAndDelete({ _id: id })
    return res.status(200).json({ message: "Product Deleted" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
