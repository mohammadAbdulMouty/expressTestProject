const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const adminData = require("./admin");
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    docTitle: "shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop:true,
    productCSS:true,
    // layout:false
  });
});

module.exports = router;
