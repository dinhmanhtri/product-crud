const express = require("express");
const ProductController = require("../controllers/productController");
const router = express.Router();

router.get("/", ProductController.getAllProduct);
router.post("/", ProductController.createProduct);
router.get("/edit/:id", ProductController.editProduct);
router.post("/update/:id", ProductController.updateProduct);
router.post("/delete/:id", ProductController.deleteProductById);

module.exports = router;
