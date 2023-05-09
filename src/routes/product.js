const express = require("express");
const router = express.Router();

const productController = require("../app/controllers/ProductController");

router.get("/", productController.get);
router.get("/:id", productController.getid);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
