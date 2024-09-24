const initialState = [];

export const wishlistReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case "UPDATE_WISHLIST": 
        return state.map(product => {
            const existingProduct = payload.find(p => p.code === product.code);
            if (existingProduct) {
                return {
                    ...product,
                    quantity: product.quantity + existingProduct.quantity
                };
            }
            return product;
        }).concat(payload.filter(p => !state.some(product => product.code === p.code)));
            case "REMOVE_WISHLIST_PRODUCT":
                // return state.filter(product => product.id !== payload.id)
                const normal = state.filter(product => product.code !== payload)
                console.log(normal, "normal called");
                return normal;
        default :
            return state;
    }
}

export const updateWishlist = (wishlistProducts) => {
    console.log(wishlistProducts, "wishlistProducts");

    // Ensure payload is always an array
    const productsArray = Array.isArray(wishlistProducts) ? wishlistProducts : [wishlistProducts];

    return {
        type: "UPDATE_WISHLIST",
        payload: productsArray
    };
};

export const removeWishlistProduct = (wishlistProductId)  => {

    return {
        type: "REMOVE_WISHLIST_PRODUCT",
        payload: wishlistProductId
    };
}
