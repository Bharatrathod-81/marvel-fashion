import "./wishlist-listing.css";
import { Link } from "react-router-dom";
import { useWishlistCartContext } from "../../contexts/WishList-Cart";
import { SingleProductFunc } from "../../components/single-product/single-product";


    

const RendingWishlist = () => {
    
    const { wishlistCartValues:{
        wishlist
        } } = useWishlistCartContext();

    return(
        <div className="wishlist-container">
            <div className="container-heading">
                <h4>Showing All WishList Products {wishlist.length}</h4>
                {wishlist.length===0 ? 
                <Link to="/products">
                   <button className="shop-btn" >Shop Now</button>
                </Link>:""}
            </div>
            <div className="products">
                {wishlist.map(item => {
                    return(
                        <div key={item.id}>
                        <SingleProductFunc data={item}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );

};

export {RendingWishlist} ;