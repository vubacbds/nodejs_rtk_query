const Product = require("../models/Product.js");

class ProductController {
  // [GET] /
  async get(req, res, next) {
    await Product.find({})
      // .sort([["createdAt", "descending"]])
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((er) => next(er));
  }

  // [GET] /id
  async getid(req, res, next) {
    await Product.findOne({ _id: req.params.id })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((er) => next(er));
  }

  //[POST] /
  async create(req, res, next) {
    const product = new Product(req.body);
    await product
      .save()
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Thêm sản phẩm không thành công!",
          error: { next },
        });
      });
  }

  //[PUT] /:id
  async update(req, res, next) {
    await Product.updateOne({ _id: req.params.id }, req.body)
      .then((item) => {
        res.status(200).json([item, process.env.CLIENT_URL]);
      })
      .catch((next) =>
        res.status(200).json({
          message: "Cập nhật sản phẩm thất bại",
        })
      );
  }

  //[DELETE] /:id
  async delete(req, res, next) {
    await Product.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          message: "Xóa sản phẩm thành công",
        });
      })
      .catch(next);
  }
}

module.exports = new ProductController();
