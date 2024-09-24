const initialState = [];

export const recentlyViewedProductsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case "UPDATE_RECENTLY_VIEWWED_PRODUCTS": 
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
        default :
            return state;
    }
}


export const updateRecentlyViewedProducts = (recentlyViewedProducts) => {
    
    const productsArray = Array.isArray(recentlyViewedProducts) ? recentlyViewedProducts : [recentlyViewedProducts];
    return {
        type: "UPDATE_RECENTLY_VIEWWED_PRODUCTS",
        payload: productsArray
    };
};