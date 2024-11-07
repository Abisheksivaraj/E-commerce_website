const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, " Enter the product name"],
    trim: true, //there is no gap between before and after product name//
  },



  price: {
    type: Number,
    require: true,
    default: 0.0,
  },



  description: {
    type: String,
    require: [true, " Please Enter Product Description"],
  },



  ratings: {
    type: Number,
    default: 0,
  },



  images: [
    {
      fileName: {
        type: String,
        require: true,
      },
    },
  ],



  category: {
    type: String,
    require: [true, "Enter Product Category"],
    enum: {
      values: [
        "Fruits",
        "Vegetables",
        "Dairy",
        "Beverages",
        "Meat",
        "Snacks",
        "Grains",
        "Personal Care",
        "Household Essentials",
      ],
    },
  },



  seller:{
    type:String,
    require:true
  },



  stock:{
    type:Number,
    require:true,
    maxLength:20
  },



  numOfReviews:{
    type:Number,
    default:0
  },



  reviews:{
    name:{
      type:String,
      require:true
    },
    rating:{
      type:String,
      require:true
    },
    comment:{
      type:String,
      require:true
    }
  },



  createdAt:{
    type:Date,
    default:Date.now()
  }
});


let schema = mongoose.model("products", productSchema);

module.exports = schema