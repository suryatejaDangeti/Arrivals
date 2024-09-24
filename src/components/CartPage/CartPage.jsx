import { store } from '../../store';
import emptyCart from '../Wishlist/empty-cart.svg';
import { AiTwotoneDelete } from "react-icons/ai";
import "./CartPage.css"
import { updateProductDetail } from '../../modules/productDetail/productDetail';
import { useNavigate } from 'react-router-dom';
import { removeProduct } from '../../modules/cart/cart';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart);
    const [showGiftCardInput, setShowGiftCardInput] = useState(false);
    const [showAddDiscountCoupon, setShowAddDiscountCoupon] = useState(false);
    const navigate = useNavigate();

    return (
        <>
        {/* cartProducts?.products?.length */}
        { cartProducts?.length === 0 ?
            <div className="empty-wishlist-container">
                <img className='wishlist-empty-image' src={emptyCart} />
                <p className='empty-wishlist-text'>Your cart is empty</p>
                <button onClick={() => navigate('/plp')} className='wishlist-continue-shopping-button'>Continue Shopping</button>
            </div> :
            <div 
                className='cart-container'
            >
                <div className='cart-product-conatiner'>
                {/* cartProducts?.products? */}
                    { cartProducts?.map((cartProduct) => {
                            return (
                                <div className='cart-product-item-container'>
                                    <div 
                                        className='cart-product-inner-item-container'
                                        onClick={() => {
                                            store.dispatch(updateProductDetail(cartProduct));
                                            navigate('/pdp')
                                        }}
                                    >
                                        <img className='cart-image' src = {cartProduct.images[0].url} alt = {cartProduct.images[0].alt} />
                                        <div className='cart-product-description-container'>
                                            <h1 className='cart-product-brand-name'>{cartProduct.fnlColorVariantData.brandName}</h1>
                                            <p className='cart-product-description'>{cartProduct.name}</p>
                                            <div></div>
                                            <div className='cart-price-container'>
                                                <h1 className='cart-product-price'>₹ {cartProduct.price.value}</h1>
                                                <h1 className='cart-actual-product-price'>₹ {cartProduct.wasPriceData.value}</h1>
                                                <p className='cart-product-price-discount'>({cartProduct.discountPercent})</p>
                                            </div>
                                        </div>
                                    </div>
                                    <AiTwotoneDelete 
                                        className='cart-delete-btn'
                                        onClick={() => {
                                            store.dispatch(removeProduct(cartProduct?.code))
                                        }}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='cart-amount-main-conatainer'>
                    <div className='cart-amount-container'>
                        <div className='cart-amount-price-container'>
                            <p className='cart-amount-heading'>Total price</p>
                            <p className='cart-amount-price'>12345</p>
                        </div>
                        <hr className='cart-hr-line' />
                        <div className='cart-amount-price-container'>
                            <p className='cart-amount-heading'>Discount price</p>
                            <p className='cart-amount-price'>12345</p>
                        </div>
                        <hr className='cart-hr-line' />
                        <button className='place-order-btn'>Place order</button>
                    </div>
                    <div className='cart-gift-card-container'>
                        <button onClick={() => setShowAddDiscountCoupon(!showAddDiscountCoupon)} className='gift-card-btn'>Add Discount / Promo Code</button>
                        {
                            showAddDiscountCoupon &&
                                <div className='cart-gift-card-inner-container'>
                                    <input
                                    className='cart-custom-input'
                                    name = "Add Discount / Promo Code"
                                    type = "text"
                                    placeholder='Add Discount / Promo Code'
                                    // label = "Email Address"
                                    // value={formDetails.email}
                                    required
                                    />
                                    <button className='cart-gift-cart-apply-btn'>Apply</button>
                                </div>
                        }
                    </div>
                    <div className='cart-gift-card-container'>
                        <button onClick={() => setShowGiftCardInput(!showGiftCardInput)} className='gift-card-btn'>Add Gift Card</button>
                        {
                            showGiftCardInput &&
                                <div className='cart-gift-card-inner-container'>
                                    <input
                                    className='cart-custom-input'
                                    name = "Add Discount / Promo Code"
                                    type = "text"
                                    placeholder='Add Gift Card'
                                    // label = "Email Address"
                                    // value={formDetails.email}
                                    required
                                    />
                                    <button className='cart-gift-cart-apply-btn'>Apply</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Cart;