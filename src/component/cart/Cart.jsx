import React, { useState, useEffect, useRef } from "react";
import CartData from "../../data/cartData/CartData.js";
import CartItems from "../cartitems/CartItems.jsx";
import "../../styles/cartItems/CartItems.css";
import { title, title2 } from "../../constant/title/Title";
import Input from "../input/Input";
import { useNavigate, useSearchParams } from "react-router-dom";

const Cart = ({ showSearch, showall, viewall }) => {
  const navigate = useNavigate();
  // const [searchQuery, setSearchQuery] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [cartItems, setCartItems] = useState(CartData);
  const inputRef = useRef(null);
  console.log(cartItems, "it is empty");

  useEffect(() => {
    const initialtitle = "Home";
    if (showSearch) {
      document.title = "Cart Section";
    } else {
      document.title = initialtitle;
    }
    if (inputRef.current) {
      console.log("Input is being focused:", inputRef.current);
      inputRef.current.focus();
    }
    //clean Up function
    return () => {
      document.title = initialtitle;
      console.log(cartItems, "items before clean up");
      setCartItems([]);
    };
  }, []);

  //  Handle input changes
  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value.toLowerCase()); // Convert to lowercase for case-insensitive search
  // };

  const handleSearchChange = (event) => {
    event.preventDefault();
    const param = event.target.value.toLowerCase();
    setSearchParams({ search: param }); // Convert to lowercase for case-insensitive search
  };

  //Handle Search Field
  const filteredCartItems = CartData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  const displaycart = showall
    ? filteredCartItems
    : filteredCartItems.slice(0, 5);

  console.log(displaycart, "display");
  const handleviewall = () => {
    navigate(`/allproducts`);
  };

  return (
    <div>
      {showSearch && (
        <div className="searchContainer">
          <Input
            ref={inputRef}
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
