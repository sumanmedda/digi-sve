import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import productsRoute from "../Products/products-api/productsRoute/productsRoute.mjs"

const app = express()

app.use(bodyParser.json())
dotenv.config()
const port = process.env.PRODUCTS_PORT || 5000
const mongoUrl = process.env.MONGO_URL

mongoose.connect(mongoUrl).then(() => {
  console.log("Datebase Connected")
  app.listen(port, () => console.log(`Server Started on Port : ${port}`))
})

app.use("/api/products", productsRoute)

// Learn to integrate cloudinary, microservices, jwt
