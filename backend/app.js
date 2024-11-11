const express = require("express");
const app = express();
const product = require('../backend/routes/productRoutes')
const errormMiddleware = require('../backend/middlewares/error')
app.use(express.json())
app.use(product)



app.use(errormMiddleware)

module.exports = app;
