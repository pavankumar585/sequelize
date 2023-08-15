const { Product } = require("../model");

async function getProduct(req, res) {
  res.json("Product");
}

async function getProducts(req, res) {
  const products = await Product.findAll();

  res.json({ status: true, products });
}

async function createProduct(req, res) {
  res.json("Product Created");
}

async function updateProduct(req, res) {
  res.json("Product Updated");
}

async function deleteProduct(req, res) {
  res.json("Product Deleted");
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
