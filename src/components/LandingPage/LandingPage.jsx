import React, { useRef } from 'react';
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import './landingPage.css'

const LandingPage = () => {
    const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const wrapperRef = useRef(null);

    const scrollLeft = () => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (wrapperRef.current) {
            console.log(wrapperRef.current.scrollLeft, "called")
            wrapperRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
    };

    return (
        <>
        <div className='home-banner'>
            <h1 className='home-banner-heading'>CUE THE COLLECTIONS</h1>
            <button className='home-banner-button'>Shop the collection</button>
        </div>
        <div className="seller-collection-main-container">
                <div className="best-sellers-collection-container">
                    <img className="image-gif" src = "https://static.wixstatic.com/media/84770f_557d998d1bfc4b4e9bd62e76e4d15934~mv2.gif" alt = "starGif" />
                    <h1 className="best-seller-heading">Arrivals Best Sellers Collection</h1>
                    <button className="best-seller-button">Shop Now</button>
                </div>
                <div className="best-sellers-collection-container none-class">
                    <img className="image-gif" src = "https://static.wixstatic.com/media/84770f_557d998d1bfc4b4e9bd62e76e4d15934~mv2.gif" alt = "starGif" />
                    <h1 className="best-seller-heading">Arrivals Best Sellers Collection</h1>
                    <button className="best-seller-button">Shop Now</button>
                </div>
                <div className="best-sellers-collection-container">
                    <img className="image-gif" src = "https://static.wixstatic.com/media/84770f_a7918f8c5cae4bbfa3bf1f3cdd09f56c~mv2.gif" alt = "starGif" />
                    <h1 className="best-seller-heading">Arrivals Best Sellers Collection</h1>
                    <button className="best-seller-button">Shop Now</button>
                </div>
        </div>
        <div className='best-seller-container'>
            <h1 className='best-sellers-heading'>BEST SELLERS</h1>
            <hr className='horizontal-line' />
        </div>
        <div className='best-seller-products-main-container'>
            <button className='scroll-button left' onClick={scrollLeft}><FaCaretLeft /></button>
            <div className='best-seller-products-inner-container' ref={wrapperRef}>
                { products.map((product) => {
                    return (
                        <div className='best-seller-products-container' key={product}>
                            <img
                                className='best-seller-product-image'
                                src = "https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_714,h_952,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg" 
                                alt="image" />
                            <p className='best-seller-product-name'>I'm a product</p>
                            <p className='best-seller-product-price'>₹ 250.00</p>
                        </div>
                    )
                })
                }
            </div>
            <button className='scroll-button right' onClick={scrollRight}><FaCaretRight /></button>
        </div>
        <div className="seller-collection-main-container">
                <div className="best-sellers-collection-container">
                    <img className="image-gif" src = "https://static.wixstatic.com/media/84770f_557d998d1bfc4b4e9bd62e76e4d15934~mv2.gif" alt = "starGif" />
                    <h1 className="best-seller-heading">Arrivals Best Sellers Collection</h1>
                    <button className="best-seller-button">Shop Now</button>
                </div>
                <div className="best-sellers-collection-container none-class">
                    <img className="image-gif" src = "https://static.wixstatic.com/media/84770f_557d998d1bfc4b4e9bd62e76e4d15934~mv2.gif" alt = "starGif" />
                    <h1 className="best-seller-heading">Arrivals Best Sellers Collection</h1>
                    <button className="best-seller-button">Shop Now</button>
                </div>
                <div className="best-sellers-collection-container">
                    <img className="image-gif" src = "https://static.wixstatic.com/media/84770f_a7918f8c5cae4bbfa3bf1f3cdd09f56c~mv2.gif" alt = "starGif" />
                    <h1 className="best-seller-heading">Arrivals Best Sellers Collection</h1>
                    <button className="best-seller-button">Shop Now</button>
                </div>
        </div>
        </>
    )
}

export default LandingPage;
