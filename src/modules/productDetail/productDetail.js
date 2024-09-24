const initialState = {};

export const productDetailReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case "UPDATE_PRODUCT_DETAIL": 
            return {...state, ...payload};
        default :
            return state;
    }
}

export const updateProductDetail = (productDetail) => {
    console.log(productDetail, "productDetail")

    return {
        type: "UPDATE_PRODUCT_DETAIL",
        payload: 
            productDetail
        
    }
}