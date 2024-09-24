import { combineReducers } from "redux";
import { cartReducer } from "../modules/cart/cart";
import { customerReducer } from "../modules/customer/customer";
import { productDetailReducer } from "../modules/productDetail/productDetail";
import { recentlyViewedProductsReducer } from "../modules/recentlyViewedProducts/recentlyViewedProducts";
import { wishlistReducer } from "../modules/wishlist/wishlist";
// import { userReducers } from "./user/user.reducer";

export const rootReducer = combineReducers({
    customer : customerReducer,
    productDetail : productDetailReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    recentlyViewedProducts: recentlyViewedProductsReducer,
});