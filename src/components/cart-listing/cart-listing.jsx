import "./cart-listing.css";
import { Link } from "react-router-dom";
import { useWishlistCartContext } from "../../contexts/WishList-Cart";


const RendingCart = () => {

    
    const { wishlistCartValues: {
        cart, wishlist
    }, dispatchWishlistCart } = useWishlistCartContext();
    
    let totalValue = 0;
    let totalItems = 0;
    if (cart[0]!==undefined) {
        totalValue = cart.reduce(
            (acc, cur) => acc + cur.price * cur.cartQuantity,0);

        totalItems = cart.reduce(
            (acc, cur) => cur.cartQuantity>1 ? acc + (cur.cartQuantity-1) : acc,0 );
        totalItems = totalItems + cart.length
    };

    
    return (
        <div className="product-container">
            <div className="container-heading">
                <h4>Showing All Cart Products {cart.length}</h4>
                {cart.length===0 ? 
                <Link to="/products">
                   <button className="shop-btn" >Shop Now</button>
                </Link>:""}
            </div>
            <div className="cart-products">
                <div className="cart-listing"> 
                    {cart.map(item => {
                        return (
                            <div className="cart-Cards" key={item.id}>
                                <img className="cart-card-Img" src={item.image} />
                                <div className="cart-card-text">
                                    <h4 className="cart-car">{item.categoryName}</h4>
                                    <small className="cart-car">{item.model}</small>
                                    <h3>₹{item.price}<span className="max-price"> ₹{ item.price*2}</span></h3>
                                    <span className="discount-text">50% off</span>
                                    <div className="product-quantity">
                                        <small>Quantity</small>
                                        <button
                                         onClick={() => dispatchWishlistCart({type:"INCREASE_ITEMS",payload:item})};
                                         className="QuantityIncrease-Btn"
                                         >+</button>
                                        <small className="quantity-num">{item.cartQuantity}</small>
                                        <button
                                         onClick={() => dispatchWishlistCart({type:"DECREASE_ITEMS",payload:item})}
                                         className="QuantityIncrease-Btn"
                                         >-</button>
                                    </div>
                                    <button 
                                     className="cart-card-Btn"
                                     onClick={() => dispatchWishlistCart({type:"REMOVE_FROM_CART",payload:item})}
                                     >Remove from Cart</button>
                                    
                                    {wishlist.some(data => data.id === item.id) ?
                                        ( <Link to="/wishlist" className="remove-cart-Btn">
                                              <button className="bBtn" >Go to Wishlist</button>
                                        </Link>
                                            ):(
                                                <button 
                                            className="add-cart-Btn"
                                            onClick={() => dispatchWishlistCart({type:"ADD_TO_WISHLIST",payload:item})}
                                            >
                                            Add to Wishlist</button>
                                        )
                                    }
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div 
                style={{display:cart.length>0 ? "":"none"}}
                className="price-details-container">
                    <div className="price-details-cart">
                        <h5>PRICE DETAILS</h5>
                        <hr/>
                        <div className="price-cal">
                            <div>
                                <p>ITEMS</p>
                                <p>Delivery Charges</p>
                            </div>
                            <div>
                                <p>{totalItems}</p>
                                <p>₹.0</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="total-amt">
                            <h5>TOTAL AMOUNT</h5>
                            <h5>₹ {totalValue}</h5>
                        </div>
                        <hr/>
                        <button className="place-orderBtn">PLACE ORDER</button>
                    </div>
                 </div>
            </div>
        </div>
    );

};

export { RendingCart };
