var express = require("express");
var router = express.Router();

const { getProductById } = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

// all of param
router.param("userId", getUserById);
router.param("productId", getProductById);

//all of actual routes

module.exports = router;
