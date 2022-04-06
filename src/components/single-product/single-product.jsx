import "./single-product.css";
import { Link } from "react-router-dom";
import { useWishlistCartContext } from "../../contexts/WishList-Cart";


const SingleProductFunc = ({data}) => {
    
    const { wishlistCartValues:{
        wishlist, cart
        }, dispatchWishlistCart } = useWishlistCartContext();


    return(
        <div className="card-container card-body">
            <div>
                <img className="card-Img" src={data.image} alt={data.categoryName}/>
                {wishlist.some(item => item.id === data.id) ?
                    (<button 
                        className="Added-Btn"
                        onClick={() => dispatchWishlistCart({type:"REMOVE_FROM_WISHLIST",payload:data})}
                        >&#10084;</button>
                        ):(
                            <button 
                        className="heart-Btn"
                        onClick={() => dispatchWishlistCart({type:"ADD_TO_WISHLIST",payload:data})}
                        >
                        &#10084;
                        </button>
                    )
                }
            </div>
            <div className="card-text">
                <p className="card-name">{data.categoryName}</p>
                <small>{data.model}</small>
                <small>{data.inStock? "Instock":"Out of stock"}</small>
                <small>{data.fastDelivery? "Fast Delivery":"Normal Delivery"}</small>
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
                    ):(
                        <button 
                        className="card-Btn"
                        onClick={() => dispatchWishlistCart({type:"ADD_TO_CART",payload:data})}
                        >Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export { SingleProductFunc } ;
