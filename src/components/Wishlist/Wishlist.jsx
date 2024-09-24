import './Wishlist.css'
import emptyCart from './empty-cart.svg';
import { store } from '../../store';
import { AiTwotoneDelete } from "react-icons/ai";
import { removeProduct, updateCart } from '../../modules/cart/cart';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { removeWishlistProduct } from '../../modules/wishlist/wishlist';
import { updateProductDetail } from '../../modules/productDetail/productDetail';


const Wishlist = () => {
    const wishlistProducts = useSelector((state) => state.wishlist)
    const navigate = useNavigate()

    return (
        <>
        { wishlistProducts.length === 0 ?
            <div className="empty-wishlist-container">
                <img className='wishlist-empty-image' src="https://www.unboxindustry.com/assets/images/wishlistEmpty.png" alt="wishlist-empty" />
                <p className='empty-wishlist-text'>No products were added to the Wishlist</p>
                <button onClick={() => navigate('/plp')} className='wishlist-continue-shopping-button'>Continue Shopping</button>
            </div> :
            <div className="wishlist-container">
                {
                    wishlistProducts.map((wishlistProduct) => {
                        return (
                            <div className='wishlist-item-conainer'>
                                <img 
                                    onClick={() => {
                                        store.dispatch(updateProductDetail(wishlistProduct));
                                        navigate('/pdp')
                                    }}  
                                    className='wishlist-image' 
                                    src = {wishlistProduct.images[0].url} 
                                    alt = {wishlistProduct.images[0].alt} 
                                />
                                <div className='wishlist-btn-container'>
                                    <button 
                                        className='wishlist-remove-btn'
                                        onClick={() => {
                                            store.dispatch(removeWishlistProduct(wishlistProduct?.code))
                                        }}
                                    >
                                        <AiTwotoneDelete />
                                    </button>
                                    <button 
                                        className='wishlist-add-to-bag-btn' 
                                        onClick={() => {
                                            store.dispatch(updateCart(wishlistProduct));
                                            navigate('/cart')
                                        }}
                                    >
                                        Add to bag
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        }
        </>
    )
}

export default Wishlist;