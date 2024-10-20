import React from "react";
// import TopNav from "../../component/header/topnav/TopNav";
// import ProductDetails from "../../component/productDetails/ProductDetails";
import { useParams } from "react-router-dom";
import CartData from "../../data/cartData/CartData";
import ParentComponent from "../../component/parentComponent/ParentComponent";

const Products = () => {
  const { id } = useParams(); // Get the product id from the URL
  console.log(id, "id");
  const product = CartData.find((item) => item.id === parseInt(id)); // Find the product by ID
  console.log(product, "producttt");

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      {/* <TopNav /> */}
      <ParentComponent product={product} isProductDetails={true} />
      {/* <ProductDetails product={product} /> */}
    </div>
  );
};

export default Products;
