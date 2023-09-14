var express = require("express");
var router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById, pushOrderInPurchaseList } = require("../controllers/user");
const { updateStock } = require("../controllers/product");
const { getOrderById } = require("../controllers/order");

//params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//actual routes

//create

//read
module.exports = router;
