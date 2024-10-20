import React from "react";
import "../../styles/productDetail/ProductDetails.css";
import { Icon } from "@iconify/react";
import Button from "../button/Button";
import { useState, useEffect } from "react";
import MessageBox from "../messageBox/MessageBox";
import Products from "../../pages/products/Products";

const ProductDetails = ({ product, cart, setCart }) => {
  const [message, setMessage] = useState("");

  const [visibilityOfMessage, setVisibilityOfMessage] = useState(false);

  const handleAddToCart = () => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex > -1) {
      setMessage("Product is already in the cart.");
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart, "updated");
      setMessage("Product added to the cart successfully!");
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      //     console.log(cart, "hereeee");
    }
    setVisibilityOfMessage(true);
  };

  useEffect(() => {
    console.log("Cart updated with new product:", cart);
  }, [cart]);

  const handleClose = () => {
    setVisibilityOfMessage(false);
  };

  return (
    <div>
      <div className="productDetails">
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div>
          <h2>{product?.title}</h2>
          <h2>{product?.discription}</h2>
          <Icon className="staricon" icon="mdi:star" />
          <Icon className="staricon" icon="mdi:star" />
          <Icon className="staricon" icon="mdi:star" />
          <Icon className="staricon" icon="mdi:star" />
          <p>Brand: {product?.brand}</p>
          <hr />
          <p className="price">Price: {product?.price}</p>
          <p>Color: {product?.color}</p>
          <Button title="Add To Cart" onClick={handleAddToCart} />
          {visibilityOfMessage && (
            <MessageBox message={message} onClose={handleClose} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
