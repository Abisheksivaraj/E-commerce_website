const { log } = require("console");
const app = require("./app");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config/config.env") });
const connectDatabase = require("./config/database")

connectDatabase()
app.listen(process.env.PORT, () => {
  console.log(
    `Your port is running at this ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
