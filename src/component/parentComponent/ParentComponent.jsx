import React, { useState, useEffect } from "react";
import ProductDetails from "../productDetails/ProductDetails";
import AddtoCarItems from "../addtocartItems/AddtoCarItems";
import TopNav from "../header/topnav/TopNaV";

const ParentComponent = ({ product, isProductDetails, isHidecartItems }) => {
  const [cart, setCart] = useState([]); // State for cart
  console.log(isProductDetails, "detail");
  console.log(isHidecartItems, "isHidecartItems");
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  //   Update localStorage whenever cart changes
  //   useEffect(() => {
  //     console.log("Second useEffect - Cart changed, updating localStorage");

  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     console.log(cart, "hereeee");
  //   }, [cart]); // Runs whenever 'cart' changes

  return (
    <div>
      <TopNav cart={cart} setCart={setCart} /> {/* Pass cart to TopNav */}
      {isProductDetails ? (
        <ProductDetails cart={cart} product={product} setCart={setCart} />
      ) : (
        isHidecartItems && <AddtoCarItems cart={cart} setCart={setCart} />
      )}
    </div>
  );
};
export { TopNav, AddtoCarItems };
export default ParentComponent;
