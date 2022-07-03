export const WishlistCartReducer = (state, { type, payload }) => {

    switch (type) {
        case "ADD_TO_WISHLIST":
            return { ...state, wishlist: payload };

        case "ADD_TO_CART":
            return { ...state, cart: payload };
            
        case "INITIAL_STATE":
            return {
                wishlist:[],
                cart:[]
            };
        
        case "RE_LOGIN":
            return {
                wishlist:payload.wishlist,
                cart:payload.cart
            }

        default:
            return { ...state };

    };
};
