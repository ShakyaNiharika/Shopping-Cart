import React, { useEffect, useState } from "react";
import "../../../styles/topnav/TopNav.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const TopNav = ({ cart = [], setCart }) => {
  // Provide default value of empty array for cart
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

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

  return (
    <div className="topNav">
      <ul>
        <li onClick={handlehome}>Home</li>
        <li onClick={productHandle}>Product</li>
      </ul>
      <div className="c-container">
        <Icon onClick={handleAddtoCart} className="cartIcon" icon="mdi:cart" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </div>
  );
};

export default TopNav;
