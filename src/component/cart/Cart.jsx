import React, { useState } from "react";
import CartData from "../../data/cartData/CartData.js";
import CartItems from "../cartitems/CartItems.jsx";
import "../../styles/cartItems/CartItems.css";
import { title, title2 } from "../../constant/title/Title";
import Input from "../input/Input";
import { useNavigate } from "react-router-dom";

const Cart = ({ showSearch, showall, viewall }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  //  Handle input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase()); // Convert to lowercase for case-insensitive search
  };

  //Handle Search Field
  const filteredCartItems = CartData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  const displaycart = showall
    ? filteredCartItems
    : filteredCartItems.slice(0, 5);

  const handleviewall = () => {
    navigate(`/allproducts`);
  };
  return (
    <div>
      {showSearch && (
        <div className="searchContainer">
          <Input
            value={searchQuery}
            name="search"
            className="searchInput"
            placeholder="Search Here"
            onChange={handleSearchChange}
          />
        </div>
      )}
      <div className="shopping">
        <h2>{title}</h2>
        <h2>{title2}</h2>
      </div>

      {viewall && (
        <div className="viewall">
          <p onClick={handleviewall}>View all Products > </p>
        </div>
      )}

      <div className="CartItem">
        {displaycart.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
