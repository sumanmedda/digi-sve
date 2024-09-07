import mongoose from "mongoose"

const productsSchema = mongoose.Schema({
  title: String,
  price: Number,
  productUniqID: String,
  description: String,
  category: String,
  image: String,
  qty: Number,
  rating: Number,
})

export default mongoose.model("products", productsSchema)
