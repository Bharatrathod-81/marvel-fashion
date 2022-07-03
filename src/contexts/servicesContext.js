import axios from "axios";
import { toast } from "react-toastify";

// for adding to cart 
export const AddToCart = async (product, dispatch) => {

    try {
        const { data, status } = await axios.post("/api/user/cart", {
            product
        }, {
            headers: { authorization: localStorage.getItem("token") }
        })

        if (status === 201) {
            dispatch({ type: "ADD_TO_CART", payload: data.cart })
            toast.success("Added To Cart")
        }

    } catch (err) {
        console.log(err);
        toast.error("Failed To Add To Cart")
    };
};

// for the increment or decrement to cart
export const IncrementAndDecrement = async (productId, action, dispatch) => {
    
    try {
        const { data, status } = await axios.post(`/api/user/cart/${productId}`,
            {action:{type:action} },
            {
                headers: { authorization: localStorage.getItem("token") }
            })
        
        if (status === 200) {
            dispatch({ type: "ADD_TO_CART", payload: data.cart })
        }
    } catch (err) { 
        console.log(err);
    };
};

// for delete the products from cart
export const DeleteFromCart = async (productId, dispatch) => {

    try{
        const { data, status } = await axios.delete(`/api/user/cart/${productId}`,
        {
            headers: { authorization: localStorage.getItem("token")}
        })

        if (status === 200) {
            dispatch({ type: "ADD_TO_CART", payload: data.cart });
            toast.info("Removed From Cart");
        }
    } catch(err) {
        console.log(err);
    };
};

// for adding the products in wishlist
export const AddToWishlist = async (product, dispatch) => {

    try{
        const { data, status } = await axios.post("/api/user/wishlist",
        {product},
        {
            headers: { authorization: localStorage.getItem("token")}
        })
        
        if (status === 201) {
            dispatch({ type:"ADD_TO_WISHLIST", payload:data.wishlist});
            toast.success("Added to Wishlist");
        }
    } catch(err) {
        console.log(err);
        toast.error("Failed To Add To Wishlist")
    };
};

// for removing products from wishlist
export const RemoveFromWishlist = async (productId, dispatch) => {
    try{
        const { data, status } = await axios.delete(`/api/user/wishlist/${productId}`,
        {
            headers: { authorization: localStorage.getItem("token")}
        })
        
        if (status === 200) {
            dispatch({ type:"ADD_TO_WISHLIST", payload:data.wishlist});
            toast.info("Removed From Wishlist");
        }
    } catch(err) {
        console.log(err);
    }
}