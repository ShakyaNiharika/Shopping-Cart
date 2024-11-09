import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products";
import AddtoCart from "../../pages/addToCart/AddtoCart";
import Cart from "../../component/cart/Cart";
import AllProducts from "../../pages/allProducts/AllProducts";
import ErrorPage from "../../component/errorPage/ErrorPage";
import LoginPage from "../../component/loginPage/LoginPage";
import { AuthProvider } from "../../component/context/authContext/AuthContext";
import UsePosts from "../../pages/customhooks/UsePosts";
import ProtectedRoute from "../../component/protectedRoute/ProtectedRoute";
import { ProductProvider } from "../../component/context/productContext/ProductContext";
import CheckOutPage from "../../component/checkOutPage/CheckOutPage";

const Navigation = () => {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route
              path="/addtocart"
              element={
                <ProtectedRoute element={AddtoCart} /> // Updated to match ProtectedRoute usage
              }
            />
            {/* <Route path="/addtocart" element={<AddtoCart />} /> */}

            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/CustomHook" element={<UsePosts />} />
            <Route path="/checkoutPage" element={<CheckOutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
};

export default Navigation;
