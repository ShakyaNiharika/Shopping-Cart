import React from "react";
// import TopNav from "../../component/header/topnav/TopNav";
import HeroPage from "../../component/heroPage/HeroPage";
import Cart from "../../component/cart/Cart";
import ParentComponent from "../../component/parentComponent/ParentComponent";
import { TopNav } from "../../component/parentComponent/ParentComponent";

const Home = () => {
  return (
    <>
      {/* <TopNav /> */}
      {/* <TopNav /> */}
      <ParentComponent isHidecartItems={false} />
      <HeroPage />
      <Cart showSearch={false} showall={false} viewall={true} />
    </>
  );
};

export default Home;
