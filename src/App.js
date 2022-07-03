import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Nav";
import { Footer } from "./components/Footer/Footer";
import Home from "./pages/homePage/homePage";
import ProductStore from "./pages/product-store/product-store";
import WishListPage from "./pages/wishlist-page/wishList-page";
import CartPage from "./pages/cart-page/cart-page";
import LoginPage from "./pages/login-page/login-page";
import SignUpPage from "./pages/sign-up-page/signUp-page";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { RequireAuth } from "./requireAuth";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductStore />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />

        <Route path="wishlist"
          element={
            <RequireAuth>
              <WishListPage />
            </RequireAuth>
          } />

        <Route path="cart"
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          } />
          
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
