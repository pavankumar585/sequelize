const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router
  .route("/")
  .get(productsController.getProducts)
  .post(productsController.createProduct);

router.route("/find/published").get(productsController.getPublishedProducts);

router
  .route("/:id")
  .get(productsController.getProduct)
  .put(productsController.updateProduct)
  .delete(productsController.deleteProduct);

module.exports = router;
