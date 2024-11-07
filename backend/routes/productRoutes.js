const express = require("express");
const {
  getProduct,
  newProduct,
  getSingleProduct,
  getUpdateProducts,
  deleteProducts,
} = require("../controllers/productControllers");
const route = express.Router();

// Get Products
route.get("/products", getProduct);

// Add Products
route.post("/newProducts", newProduct);

// Get Single Product

route.get("/singleProduct/:id", getSingleProduct);

// update Products
route.put("/updateProduct/:id", getUpdateProducts);

route.delete("/deleteProduct/:id",deleteProducts)
module.exports = route;
