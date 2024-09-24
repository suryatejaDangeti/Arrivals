// const initialState = {
//     products: [],
// };
const initialState = []

export const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case "UPDATE_CART": 
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
        

        case "REMOVE_PRODUCT":
            console.log(payload)
            return state.filter(product => product.code !== payload)
            // const removeProduct = state?.products?.filter(product => product.code !== payload)
            // return removeProduct;
        default :
            return state;
    }
}

export const updateCart = (cartProducts) => {
    // console.log(wishlistProducts, "wishlistProducts");
    // const product = initialState.products.map((productQuantity) => {
    //     if(productQuantity.code === cartProducts.code && productQuantity.size === cartProducts.size){
    //         return {...productQuantity, quantity: productQuantity.quantity += 1}
    //     } else {
    //         return productQuantity
    //     }
    // }
    // )

    // Ensure payload is always an array
    console.log(initialState, "")
    const productsArray = Array.isArray(cartProducts) ? cartProducts : [cartProducts];
    console.log(productsArray[0].code)
    const checkProduct = checkProductAlreadyExistOrNot()


    return {
        type: "UPDATE_CART",
        payload: productsArray
    };
};

export const checkProductAlreadyExistOrNot = () => {
    return async (dispatch, getState) => {
        console.log(getState, "return async (dispatch, getState) => {")
    }
}

export const removeProduct = (cartProductId)  => {
    console.log(cartProductId, "cartProductId for cart" )
    //removeProduct === [] ? state : removeProduct
    return {
        type: "REMOVE_PRODUCT",
        payload: cartProductId
    };
}