import { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from 'react-icons/fa';
import { AiFillHeart } from "react-icons/ai";
import { ImCart } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { updateCart } from '../../modules/cart/cart';
import { removeWishlistProduct, updateWishlist } from '../../modules/wishlist/wishlist';
import { store } from '../../store';
import './ProductDetailPage.css';
import RecentlyViewedProducts from '../RecentlyViewedProducts/RecentlyViewedProducts';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const ProductDetailPage = (props) => {
    const product = store.getState().productDetail;
    const [changeText, setChangeText] = useState(false);
    const cart = store.getState().cart;
    const navigate = useNavigate();
    const [showImage, setShowImage] = useState({
        name: product?.extraImages[0]?.images[0]?.model || '',
        imageUrl: product?.extraImages[0]?.images[0]?.url || ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openModal = (index) => {
        setSelectedIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addToCartButton = () => {
        let finalOne = cart.filter(productCheck => productCheck?.code !== product?.code);
        store.dispatch(updateCart(finalOne !== "" ? product : finalOne));
        navigate('/cart');
    };

    return (
        <>
        <div className='pdp-container'>
            <div className='pdp-image-container'>
                <div className='pdp-image-list-container'>
                    {product?.extraImages.map((productData, index) => (
                        <button
                            key={productData.model}
                            onClick={() => {
                                setShowImage({
                                    name: productData.model,
                                    imageUrl: productData?.images[0]?.url
                                });
                                openModal(index);
                            }}
                        >
                            <img className='pdp-list-image' src={productData?.images[0]?.url} alt={productData.model} />
                        </button>
                    ))}
                </div>
                <img className='pdp-image' src={showImage.imageUrl} alt='' onClick={() => openModal(selectedIndex)} />
            </div>
            <div>
                <Carousel
                    className='mobile-carousel'
                    showIndicators={false}
                    showArrows={false}
                    showStatus={false}
                    renderThumbs={() => false}
                >
                    {product?.extraImages.map((productData, index) => (
                        <button
                            key={productData.model}
                            onClick={() => {
                                setShowImage({
                                    name: productData.model,
                                    imageUrl: productData?.images[0]?.url
                                });
                                openModal(index);
                            }}
                        >
                            <img className='pdp-list-image' src={productData?.images[0]?.url} alt={productData.model} />
                        </button>
                    ))}
                </Carousel>
            </div>
            <div className='pdp-product-description-container'>
                <h1 className='product-brandname'>{product.fnlColorVariantData.brandName}</h1>
                <p className='product-description'>{product.name}</p>
                <div className='pdp-rating-tab'>
                    <div className='rating-star-container'>
                        <p className='rating-text'>{product.averageRating}</p>
                        <AiFillStar className='pdp-rating-star' />
                    </div>
                    <hr className='vertical-line' />
                    <p className='rating-text'>{product.ratingCount} Ratings</p>
                </div>
                <hr className='horizontal-line' />
                <div className='price-show-container'>
                    <h1 className='disccount-price-heading'>₹ {product.price.value}</h1>
                    <h1 className='original-price-heading'>₹ {product.wasPriceData.value}</h1>
                    <p className='discount-percentage-text'>( {product.discountPercent} )</p>
                </div>
                <p className='price-taxe-text'>inclusive of all taxes</p>
                <h1 className='size-heading'>SELECT SIZE </h1>
                <div className='add-to-bag-container'>
                    <button className='add-to-bag-button' onClick={addToCartButton}>
                        <ImCart className='add-to-bag-icon' /> ADD TO BAG
                    </button>
                    <button className='add-to-wishlist-button'
                        onClick={() => {
                            setChangeText(!changeText);
                            if (changeText) {
                                store.dispatch(removeWishlistProduct(product?.code));
                            } else {
                                store.dispatch(updateWishlist(product));
                            }
                        }}
                    >
                        {changeText ? (
                            <>
                                <AiFillHeart className="add-to-bag-icon" /> WISHLISTED
                            </>
                        ) : (
                            <>
                                <FaRegHeart className="add-to-bag-icon" /> WISHLIST
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div className='product-review-container'>
            <p className='product-info-heading'>Product Info</p>
            <p className='product-info-heading'>Review</p>
        </div>
        <RecentlyViewedProducts />
        <Modal 
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            className="modal"
            overlayClassName="overlay"
            open={isModalOpen} onClose={closeModal} center>
            <Carousel 
                showIndicators={false}
                showArrows={false}
                showStatus={false}
                renderThumbs={() => false}
                selectedItem={selectedIndex}>
                {product?.extraImages.map((productData, index) => (
                    <div key={index}>
                        <img className="modal-image" src={productData?.images[0]?.url} alt={productData.model} />
                    </div>
                ))}
            </Carousel>
        </Modal>
        </>
    );
};

export default ProductDetailPage;
