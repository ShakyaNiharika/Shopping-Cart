import React, { useState, useEffect, useRef, useContext } from "react";
import CartData from "../../data/cartData/CartData.js";
import CartItems from "../cartitems/CartItems.jsx";
import "../../styles/cartItems/CartItems.css";
import { title, title2 } from "../../constant/title/Title";
import Input from "../input/Input";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProductContext } from "../context/productContext/ProductContext.jsx";

const Cart = ({ showSearch, showall, viewall }) => {
  console.log(showall, "true or false?");
  const navigate = useNavigate();
  // const [searchQuery, setSearchQuery] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useContext(ProductContext);
  console.log(state, "dispatcheddddd state");
  const searchQuery = searchParams.get("search") || "";
  const [cartItems, setCartItems] = useState(CartData);
  const inputRef = useRef(null);
  console.log(cartItems, "it is empty");
  console.log("in product =>>>>state", state);

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
  const fetcProductList = async () => {
    // setLoading(true);
    console.log("in effect");

    dispatch({
      type: "Set_ProductData",
      payload: {
        product: CartData,
      },
    });
  };
  // Fetch product list and initialize filtered items based on URL search query
  useEffect(() => {
    fetcProductList();
    // Trigger filter based on the current search query from the URL
    dispatch({
      type: "FILTER_ProductData",
      payload: { searchInputField: searchQuery },
    });
  }, [searchQuery]);

  // const handleslice = () => {
  //   dispatch({
  //     type: "SEARCH_PRODUCTData",
  //     payload: {
  //       product: CartData,
  //     },
  //   });
  // };
  // useEffect(() => {
  //   fetcProductList();
  //   // handleslice();
  // }, []);
  //  Handle input changes
  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value.toLowerCase()); // Convert to lowercase for case-insensitive search
  // };

  const handleSearchChange = (event) => {
    event.preventDefault();
    const param = event.target.value.toLowerCase();
    console.log({ param });

    // dispatch({
    //   type: "FILTER_ProductData",
    //   payload: {
    //     searchInputField: searchQuery,
    //   },
    // });
    setSearchParams({ search: param });
  };

  //Handle Search Field
  const filteredCartItems = state.filtredProductLsit;
  console.log(filteredCartItems, "filtered or not?");
  const displaycart = showall ? filteredCartItems : state.slicedProductLsit;

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
