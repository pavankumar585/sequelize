const express = require("express");
const app = express();
require("dotenv").config();

const products = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", products);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
