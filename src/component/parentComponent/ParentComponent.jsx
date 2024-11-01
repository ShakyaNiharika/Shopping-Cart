import React, { useState, useEffect } from "react";
import ProductDetails from "../productDetails/ProductDetails";
import AddtoCarItems from "../addtocartItems/AddtoCarItems";
import TopNav from "../header/topnav/TopNaV";

const ParentComponent = ({ product, isProductDetails, isHidecartItems }) => {
  const [cart, setCart] = useState([]); // State for cart
  // const [pageTitle, setPageTitle] = useState("Home Pagr");
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

  const handledecrement = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleincrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <TopNav cart={cart} setCart={setCart} /> {/* Pass cart to TopNav */}
      {isProductDetails ? (
        <ProductDetails
          cart={cart}
          product={product}
          setCart={setCart}
          handledecrement={handledecrement}
          handleincrement={handleincrement}
        />
      ) : (
        isHidecartItems && (
          <AddtoCarItems
            cart={cart}
            setCart={setCart}
            handledecrement={handledecrement}
            handleincrement={handleincrement}
          />
        )
      )}
    </div>
  );
};
export { TopNav, AddtoCarItems };
export default ParentComponent;
