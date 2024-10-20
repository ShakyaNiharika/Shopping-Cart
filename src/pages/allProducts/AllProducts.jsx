import React from "react";
import Cart from "../../component/cart/Cart";
import ParentComponent from "../../component/parentComponent/ParentComponent";
// import TopNav from "../../component/header/topnav/TopNaV";

const AllProducts = () => {
  return (
    <div>
      {/* <TopNav /> */}
      <ParentComponent isProductDetails={false} isHidecartItems={false} />
      <Cart showSearch={true} showall={true} viewall={false} />
    </div>
  );
};

export default AllProducts;
