import { createContext, useContext, useReducer } from "react";
import { WishlistCartReducer } from "./Reducers/Reducer";

const contexts = createContext();

const WishlistAndCartProvider = ({ children }) => {
    
    const [wishlistCartValues, dispatchWishlistCart] = useReducer(WishlistCartReducer,
        {
            wishlist:[],
            cart:[]
        });

    return(
        <contexts.Provider value={{wishlistCartValues, dispatchWishlistCart}}>
            { children}
        </contexts.Provider>
    );
};

const useWishlistCartContext = () => useContext(contexts);

export { WishlistAndCartProvider, useWishlistCartContext};
