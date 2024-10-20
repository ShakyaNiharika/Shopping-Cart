import React from "react";
// import TopNav from "../../component/header/topnav/TopNaV";
// import AddtoCarItems from "../../component/addtocartItems/AddtoCarItems";
import { useState } from "react";
import ParentComponent from "../../component/parentComponent/ParentComponent";

const AddtoCart = () => {
  return (
    <div>
      {/* <TopNav /> */}
      <ParentComponent isProductDetails={false} isHidecartItems={true} />
      {/* <AddtoCarItems /> */}
    </div>
  );
};

export default AddtoCart;
