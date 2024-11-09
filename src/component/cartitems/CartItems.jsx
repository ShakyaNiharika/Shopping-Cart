import React from "react";
import "../../styles/cartItems/CartItems.css";
import { useNavigate } from "react-router-dom";

const CartItems = ({ item }) => {
  console.log("Item object:", item);
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <div key={item.id}>
      <div class="innerText">
        <img onClick={handleImageClick} src={item?.image} alt={item?.title} />
        <h2>{item?.title}</h2>
        <h2 className="disc">{item?.discription}</h2>
        <p>{item?.price}</p>
      </div>
    </div>
  );
};

export default CartItems;
