import React, { Children, useContext, useReducer, createContext } from "react";
import CartData from "../../../data/cartData/CartData";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const initialval = {
    productList: [],
    filtredProductLsit: [],
    slicedProductLsit: [],
  };
  const PRODUCT = "PRODUCT";
  const productreducer = (state, action) => {
    switch (action?.type) {
      case "Set_ProductData":
        const data = action.payload.product;
        const spliceData = data.slice(0, 5);
        console.log(data, "hereData");
        console.log(spliceData, "here>>>>?");
        return {
          ...state,
          productList: data,
          slicedProductLsit: spliceData,
          filtredProductLsit: data,
        };

      case "FILTER_ProductData":
        const productListState = state.productList;
        let searchFieldData = action.payload.searchInputField;
        console.log("productListState", productListState);

        console.log("in searchFieldData context->>>>>", searchFieldData);
        const filteredProduct = productListState?.filter((item) => {
          console.log("searchFieldData---?", searchFieldData);

          console.log(
            item?.title,
            "-----",
            searchFieldData,
            "filter====>",
            item?.title?.toLowerCase().includes(searchFieldData.toLowerCase())
          );

          return item?.title
            ?.toLowerCase()
            .includes(searchFieldData.toLowerCase());
        });

        console.log("searchInputField=>", filteredProduct);

        return {
          ...state,
          filtredProductLsit: filteredProduct,
        };
      // case "SEARCH_PRODUCTData":
      //   const additdata = action.payload.product;
      //   console.log(additdata, "how many data?");
      //   const spliceData = additdata.slice(0, 5);
      //   console.log(spliceData, "splicedata");
      //   return {
      //     ...state,
      //     slicedProductLsit: spliceData,
      //   };
    }
  };
  const [state, dispatch] = useReducer(productreducer, initialval);
  return (
    <div>
      <ProductContext.Provider value={{ state, dispatch }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

// export default ProductContext;
