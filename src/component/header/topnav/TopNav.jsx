import React, { useEffect, useState, useContext } from "react";
import "../../../styles/topnav/TopNav.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/authContext/AuthContext";
import Button from "../../button/Button";
import useAuth from "../../cutomHook/useAuthcompo/useAuth";

const TopNav = ({ cart = [], setCart }) => {
  // Provide default value of empty array for cart
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const { user, logout, authenticated } = useAuth();
  console.log(user, "user in?");

  // Calculate the total cart count whenever the cart changes
  useEffect(() => {
    if (cart && cart.length > 0) {
      const totalCount = cart.reduce((count, item) => count + item.quantity, 0);
      setCartCount(totalCount);
    } else {
      setCartCount(0); // If the cart is empty or undefined, set count to 0
    }
  }, [cart]); // Whenever cart updates, recalculate cartCount

  const handleAddtoCart = () => {
    navigate(`/addtocart`);
  };

  const productHandle = () => {
    navigate(`/allproducts`);
  };

  const handlehome = () => {
    navigate(`/`);
  };

  const handleLogin = () => {
    navigate(`/LoginPage`);
  };
  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    navigate(`/`);
  };

  return (
    <div className="topNav">
      <ul>
        <li onClick={handlehome}>Home</li>
        <li onClick={productHandle}>Product</li>
      </ul>
      <div className="wrap">
        <div className="c-container">
          <Icon
            onClick={handleAddtoCart}
            className="cartIcon"
            icon="mdi:cart"
          />
          {authenticated && cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}

          <Icon
            onClick={authenticated ? undefined : handleLogin}
            className="login"
            icon="mdi:user"
          />

          <p className="username">
            {user ? `hello ${user.username} !` : "Hello Guest"}
          </p>
          <p className="logout" onClick={handleLogout}>
            Log out
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
