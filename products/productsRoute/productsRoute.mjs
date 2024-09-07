import express from "express"
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../productsController/productsController.mjs"

const productsRoute = express.Router()

productsRoute.post("/create-product", createProduct)
productsRoute.get("/get-all-products", getAllProducts)
productsRoute.get("/get-product/:id", getProduct)
productsRoute.put("/update-product/:id", updateProduct)
productsRoute.delete("/delete-product/:id", deleteProduct)

export default productsRoute
