var express = require("express");
var router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

// all of param
router.param("userId", getUserById);
router.param("productId", getProductById);

//all of actual routes
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

router.get("/product/:productId", getProduct);
router.get("/prouct/photo/:productId", photo);
module.exports = router;
