const express = require("express");
const connectDB = require("./db/connectdb");
const productRouter = require("./routes/product.routes");
const app = express();
const port = process.env.PORT || 5000;
const DATABASE_URL =
  process.env.DATABASE_URL ||
  "mongodb://manhtri:123456@127.0.0.1:27017/product_db";

// Database Connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({ extended: false }));

// Static files
app.use(express.static("public"));

// Set template engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/product", productRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
