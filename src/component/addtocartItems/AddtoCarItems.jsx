import React, { useState, useEffect } from "react";
import "../../styles/addToCartItems/AddToCartItems.css";
import Button from "../button/Button";
import { Icon } from "@iconify/react";
import MessageBox from "../messageBox/MessageBox";
import { useNavigate } from "react-router-dom";

const AddtoCarItems = ({
  cart = [],
  setCart,
  handledecrement,
  handleincrement,
}) => {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initialTile = "Home";
    document.title = "Add To Cart Items";

    return () => {
      document.title = initialTile;
    };
  }, []);

  const confirmDelete = (id) => {
    setItemToDelete(id);
    setShowMessageBox(true);
  };

  const handleDelete = () => {
    const updatedCart = cart.filter((item) => item.id !== itemToDelete);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setShowMessageBox(false);
    setItemToDelete(null);
  };

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
    setItemToDelete(null);
  };

  const removeallhandle = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Calculate total cart price
  const totalCartPrice = cart.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;

    console.log(`Item: ${item.title}, Price: ${price}, Quantity: ${quantity}`);

    return total + price * quantity;
  }, 0);
  console.log(cart, "cart?");
  console.log(totalCartPrice, "total cart pricr");

  const handleCheckout = () => {
    navigate(`/checkoutPage`);
  };

  return (
    <div>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <Button
            className="remove"
            title="Remove All"
            onClick={removeallhandle}
          />
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="product-image"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td className="sign">
                    <Button
                      title="-"
                      onClick={() => handledecrement(item.id)}
                    />
                    {item.quantity}
                    <Button
                      title="+"
                      onClick={() => handleincrement(item.id)}
                    />
                  </td>
                  <td>
                    <Icon
                      onClick={() => confirmDelete(item.id)}
                      className="deleteicon"
                      icon="mdi:delete"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {showMessageBox && (
          <MessageBox
            message="Are you sure you want to delete this item?"
            onClose={handleCloseMessageBox}
            onConfirm={handleDelete}
            confirmDelete={true}
          />
        )}
      </div>
      <div class="checkout-box">
        <div class="totals">
          <p>
            <span>Sub Total:</span> <span class="amount">{totalCartPrice}</span>
          </p>
          <p>
            <span>Grand Total:</span>{" "}
            <span class="amount">{totalCartPrice}</span>
          </p>
        </div>
        <Button
          className="checkout-btn"
          title="Checkout"
          onClick={handleCheckout}
        ></Button>
      </div>
    </div>
  );
};

export default AddtoCarItems;
