import "./single-product.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useWishlistCartContext } from "../../contexts/WishList-Cart";
import { AddToCart, AddToWishlist, RemoveFromWishlist } from "../../contexts/servicesContext";
import { useAuthContext } from "../../contexts/auth-context";


const SingleProductFunc = ({ data }) => {

    const { isLogin } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();

    const { wishlistCartValues: {
        wishlist, cart
    }, dispatchWishlistCart } = useWishlistCartContext();

    const addAndRemoveItemHandler = (type, data) => {

        if (isLogin.user) {

            if (type === "addToCart") {
                AddToCart(data, dispatchWishlistCart)

            } else {
                if (type === "ADD") {
                    AddToWishlist(data, dispatchWishlistCart);
                } else {
                    RemoveFromWishlist(data._id, dispatchWishlistCart)
                }
            }

        } else {

            navigate(
                "/login",
                { state: { pathname: location.pathname } },
                { replace: true }
            );
        }
    }


    return (
        <div className="card-container card-body">
            <div>
                <img className="card-Img" src={data.image} alt={data.categoryName} />
                {wishlist.some(item => item.id === data.id) ?
                    (<button
                        className="Added-Btn"
                        onClick={() => addAndRemoveItemHandler("REMOVE", data)}
                    >&#10084;</button>
                    ) : (
                    <button
                        className="heart-Btn"
                        onClick={() => addAndRemoveItemHandler("ADD", data)}
                    >&#10084;
                    </button>
                    )
                }
            </div>
            <div className="card-text">
                <p className="card-name">{data.categoryName}</p>
                <small>{data.model}</small>
                <small>{data.inStock ? "Instock" : "Out of stock"}</small>
                <small>{data.fastDelivery ? "Fast Delivery" : "Normal Delivery"}</small>
                <small>Rating {data.rating}</small>
                <p className="product-price">₹{data.price}</p>
                {cart.some(item => item.id === data.id) ?
                    (
                        <Link to="/cart" className="Added-cart-Btn">
                            <button
                                className="bBtn"
                            >Go to Cart
                            </button>
                        </Link>
                    ) : (
                        <button
                            className="card-Btn"
                            onClick={() => addAndRemoveItemHandler("addToCart", data)}
                        >Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export { SingleProductFunc };
