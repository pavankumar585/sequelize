const { Product } = require("../model");

async function getProducts(req, res) {
  try {
    const products = await Product.findAll({});

    res.json({ status: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

async function getPublishedProducts(req, res) {
  try {
    const products = await Product.findAll({ where: { isPublished: true } });

    res.json({ status: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
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
  getPublishedProducts
};
