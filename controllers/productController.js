const ProductModel = require("../models/Product.model");

class ProductController {
  static getAllProduct = async (req, res) => {
    try {
      const result = await ProductModel.find();
      // console.log(result, "result");
      res.render("list", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  static createProduct = async (req, res) => {
    try {
      const result = await ProductModel.create(req.body);
      console.log(result);
      res.redirect("/product");
    } catch (error) {
      console.log(error);
    }
  };

  static editProduct = async (req, res) => {
    try {
      console.log(req.params);
      const result = await ProductModel.findById(req.params.id);
      // console.log(result);
      res.render("edit", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  static updateProduct = async (req, res) => {
    try {
      // console.log(req.params.id, "req.params.id");
      console.log(req.body, "req.body");
      const result = await ProductModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      console.log(result, "result");
    } catch (error) {
      console.log(error);
    }
    res.redirect("/product");
  };

  static deleteProductById = async (req, res) => {
    try {
      await ProductModel.findByIdAndDelete(req.params.id);
      res.redirect("/product");
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ProductController;
