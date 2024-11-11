const productDetails = require("../models/productModels");

const ErrorHandler = require('../utils/errorHandler')

const catchAsyncError = require('../middlewares/catchAsyncError')

//Get Products
exports.getProduct = catchAsyncError (async (req, res, next) => {
  const getProducts = await productDetails.find();
  res.status(200).json({
    success: true,
    count: getProducts.length,
    data: getProducts,
  });
});

//Add Products
exports.newProduct = async (req, res, next) => {
  const addProduct = await productDetails.create(req.body);
  res.status(201).json({
    success: true,
    addProduct,
  });
};

// Get Single Products
exports.getSingleProduct = async (req, res, next) => {
  try {
    const singleProduct = await productDetails.findById(req.params.id);
    if (!singleProduct) {
      return next(new ErrorHandler("Product not found", 400));
    }
    res.status(200).json({
      success: true,
      singleProduct,
    });
  } catch (error) {
    next(error);
  }
};


// Update Product
exports.getUpdateProducts = async (req, res, next) => {
  try {
    const updateProduct = await productDetails.findByIdAndUpdate(
      req.params.id, // product ID from URL
      req.body, // updated product data from the request body
      { new: true, runValidators: true } // single object with both options
    );

    if (!updateProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } else {
      return res.status(200).json({
        // Status code 200 for successful update
        success: true,
        updatedProduct // Corrected variable name
      });
    }
  } catch (error) {
    next(error); // Pass errors to the error handling middleware
  }
};


// delete Product

exports.deleteProducts = async (req, res, next) => {
  try {
    const ProductDelete = await productDetails.findByIdAndDelete(
      req.params.id, // product ID from URL
      req.body, // updated product data from the request body
      { new: true, runValidators: true } // single object with both options
    );

    if (!ProductDelete) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } else {
      return res.status(200).json({
        // Status code 200 for successful update
        success: true,
        ProductDelete, // Corrected variable name
      });
    }
  } catch (error) {
    next(error); // Pass errors to the error handling middleware
  }
};

