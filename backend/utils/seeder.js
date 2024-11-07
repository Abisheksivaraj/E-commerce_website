const products = require('../data/productData')
const product = require("../models/productModels")
const dotenv = require("dotenv")
const connectDatabase = require('../config/database')
dotenv.config({path:'backend/config/config.env'})

connectDatabase()

const seedProducts = async()=>{
  try {
    await product.deleteMany()
    console.log("all products deleted");
    await product.insertMany(products)
    console.log("added");
    

    
  }catch(error){
    console.log(error.message);
    
  }
}

seedProducts()