import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./contexts/categoryContext";
import { ProductContextProvider } from "./contexts/product-context";
import { FilteredProductProvider } from "./contexts/filter-product-Context";
import { WishlistAndCartProvider } from "./contexts/WishList-Cart";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistAndCartProvider>
        <FilteredProductProvider>
          <ProductContextProvider >
            <CategoryProvider>
              <App />
            </CategoryProvider>
          </ProductContextProvider>
        </FilteredProductProvider>
      </WishlistAndCartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
