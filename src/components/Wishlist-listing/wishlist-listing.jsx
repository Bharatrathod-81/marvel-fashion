import "./wishlist-listing.css";
import { useWishlistCartContext } from "../../contexts/WishList-Cart";
import { SingleProductFunc } from "../../components/single-product/single-product";


const getFilteredProducts = () => {
    
    const { wishlistCartValues:{
        wishlist
        } } = useWishlistCartContext();


        
    return wishlist
};

const RendingWishlist = () => {


    return(
        <div className="product-container">
            <div className="container-heading">
                <h4>Showing All WishList Products {getFilteredProducts().length}</h4>
            </div>
            <div className="products">
                {getFilteredProducts().map(item => {
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