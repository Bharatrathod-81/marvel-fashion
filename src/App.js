import "./App.css";
import {  Routes , Route } from "react-router-dom";
import Mockman from "mockman-js";
import Navigation from "./components/navigation/Nav";
import { Footer } from "./components/Footer/Footer";
import Home from "./pages/homePage/homePage";
import ProductStore from "./pages/product-store/product-store";
import WishListPage from "./pages/wishlist-page/wishList-page";
import CartPage from "./pages/cart-page/cart-page";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductStore />}/>
        <Route path="wishlist" element={<WishListPage />}/>
        <Route path="cart" element={<CartPage />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
