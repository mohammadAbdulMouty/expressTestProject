const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    docTitle: "add product",
    path: "/admin/add-product",
    productCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProudcts = (req, res, next) => {
  const products = Product.fetchAll((products)=>{
    res.render("shop", {
      prods: products,
      docTitle: "shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
      // layout:false
    });
  });
 
};
