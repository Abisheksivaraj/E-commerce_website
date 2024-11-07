const express = require("express");
const app = express();
const product = require('../backend/routes/productRoutes')
app.use(express.json())
app.use(product)

module.exports = app;
