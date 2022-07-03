import React from "react";
import { Link } from "react-router-dom";
import "../navigation/Nav.css";
import { useFilteredProduct } from "../../contexts/filter-product-Context";
import { useWishlistCartContext } from "../../contexts/WishList-Cart";
import { useAuthContext } from "../../contexts/auth-context";


const Navigation = () => {

    const { isLogin, Logout } = useAuthContext();

    const { wishlistCartValues: {
        wishlist, cart
    }, dispatchWishlistCart } = useWishlistCartContext();

    const { dispatchProductState } = useFilteredProduct();

    const LogoutHandler = () => {
        Logout();
        dispatchWishlistCart({ type: "INITIAL_STATE"});
    }
    
    return (
        <nav className="nav-body">
            <ul className="list-col-left">
                <li className="logo"><Link to="/" className="logo1" >MARVEL<span className="logo2"> Fashion</span></Link></li>
                <li className="atribute input-container">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search"
                        onChange={event => dispatchProductState({ type: "SEARCH_QUERY", payload: event.target.value })}
                    />

                </li>
                <ul className="list-col-right">
                    {isLogin.user ?
                        <li
                            onClick={LogoutHandler}
                            className="atribute login-btn">
                            Logout
                        </li>
                        :
                        <li><Link className="atribute login-btn" to="login">Login</Link></li>
                    }
                    <li className="atribute badge">
                        <Link to="wishlist">
                            <div>&#10084;</div>
                        </Link>
                        <div className="Badge1" style={{ display: wishlist.length > 0 ? "" : "none" }} >
                            <div>{wishlist.length}</div>
                        </div>
                    </li>
                    <li className="atribute badge">
                        <Link to="cart">
                            <div >&#128722;</div>
                        </Link>
                        <div className="Badge1" style={{ display: cart.length > 0 ? "" : "none" }}>
                            <div>{cart.length}</div>
                        </div>
                    </li>
                </ul>
            </ul>
        </nav>
    );
};

export default Navigation;
