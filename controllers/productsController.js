const { Product } = require("../model");
const product = require("../model/product");

async function getProducts(req, res) {
  const products = await Product.findAll({});

  res.json({ status: true, products });
}

async function getProduct(req, res) {
  try {
    const product = await Product.findOne({ where: { id: req.params.id } })

    if (!product) return res.status(404).json({ status: false, message: "Product not found!" });

    res.json({ status: true, product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message });
  }
}

async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body);

    res.json({ status: true, product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message });
  }
}

async function updateProduct(req, res) {
  try {
    const product = await Product.update(req.body, { where: { id: req.params.id } });

    res.json({ status: true, product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message });
  }
}

async function deleteProduct(req, res) {
  try {
    const product = await Product.destroy({ where: { id: req.params.id } });
    
    res.json({ status: true, product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message });
  }
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
