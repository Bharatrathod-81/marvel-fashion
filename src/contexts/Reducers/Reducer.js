export const WishlistCartReducer = (state, { type, payload }) => {

    switch (type) {
        case "ADD_TO_WISHLIST":
            return { ...state, wishlist: payload };

        case "ADD_TO_CART":
            return { ...state, cart: payload };

        default:
            return { ...state };

    };
};