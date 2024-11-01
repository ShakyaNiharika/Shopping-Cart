import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products";
import AddtoCart from "../../pages/addToCart/AddtoCart";
import Cart from "../../component/cart/Cart";
import AllProducts from "../../pages/allProducts/AllProducts";
import ErrorPage from "../../component/errorPage/ErrorPage";
import LoginPage from "../../component/loginPage/LoginPage";
import { AuthProvider } from "../../component/authContext/AuthContext";
import UsePosts from "../../pages/customhooks/UsePosts";

const Navigation = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/addtocart" element={<AddtoCart />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/CustomHook" element={<UsePosts />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default Navigation;
