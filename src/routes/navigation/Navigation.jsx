import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products";
import AddtoCart from "../../pages/addToCart/AddtoCart";
import Cart from "../../component/cart/Cart";
import AllProducts from "../../pages/allProducts/AllProducts";

const Navigation = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/addtocart" element={<AddtoCart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navigation;
