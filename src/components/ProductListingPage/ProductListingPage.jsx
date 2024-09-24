import productsData from '../../db/data.json'
import { FaStar } from "react-icons/fa";
import './ProductListingPage.css'
import ProductDetailPage from '../ProductDetailPage/ProductDetailPage';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { productsListing } from '../../lib/client/client';
import { updateProductDetail } from '../../modules/productDetail/productDetail';
import { store } from '../../store';
import { updateRecentlyViewedProducts } from '../../modules/recentlyViewedProducts/recentlyViewedProducts';

const ProductListingPage = () => {
    const [showDummyData, setShowDummyData] = useState(false);
    setTimeout(async() => {
        setShowDummyData(true)
    }, [1000])
    const navigate = useNavigate();

    const results = [
        "469581865005",
        "467169219003",
        "450147818006",
        "469581866007",
        "469581847006",
        "463065637005",
        "467205651002",
        "469581310005",
        "469551545006",
        "465654605005",
        "467242022005",
        "462319666004",
        "469581873002",
        "465642484005",
        "465738251004",
        "460681703006",
        "467169228002",
        "469618579013",
        "469581309005",
        "467073589001",
        "469519927003",
        "469615811001",
        "469551549001",
        "462046558005",
        "466707150003",
        "450152131006",
        "467327102002",
        "466356242003",
        "469581864007",
        "463465297004",
        "469098285002",
        "466327210001",
        "469447063004",
        "450159616012",
        "466874821006",
        "466442692009",
        "469615807004",
        "465181128006",
        "466665210005",
        "466232154005",
        "465788372010",
        "467006430002",
        "466641200005",
        "465922463001",
        "466962702001"
    ]

    const pdpButton = (product) => {
        store.dispatch(updateProductDetail(product))
        store.dispatch(updateRecentlyViewedProducts(product))
        navigate('/pdp')
    }

    const products = results.map((product) => {
        const productData = productsData['entities'][product];
        const image = productData.images[0];
        const brandName = productData.fnlColorVariantData.brandName;
        const productName = productData.name;
        const rating = productData.averageRating;
        const ratedMembers = productData.ratingCount;
        const discountPercentage = productData.discountPercent;
        const price = productData.price.value;
        const originalPrice = productData.wasPriceData.value;
        const offerPrice = productData.offerPrice.value
        return (
            <>
            { !showDummyData ?
            <div className='animated-container'>
                <p className='animate-bg' style={ {width: '200px',height: '250px'}}></p>
                <p className='animate-bg' style={ {width: '100px',height: '15px'}}></p>
                <p className='animate-bg' style={ {width: '100px',height: '15px'}}></p>
            </div> :
            <div className='plp-main-container' onClick={() => {pdpButton(productData)}}>
                 <img className='plp-image' src = {image.url}  alt={image.altText}/>
                 <div className='plp-product-data-container'>
                    <h3 className='brand-name'>{brandName}</h3>
                    <p className='product-name'>{productName}</p>
                    {
                        rating !== undefined &&
                        <div className='rating-container'>
                            <div className='rating-star-container'>
                                <p className='rating-number'>{rating}</p>
                                <FaStar className='rating-star' />
                            </div>
                            <p className='rating-count'> | {ratedMembers} reviews</p>
                        </div>
                    }
                    <div className='price-container'>
                    <p className='price'>₹ {price}</p>
                    { discountPercentage !== undefined &&
                        <>
                            <p className='original-price'>₹ {originalPrice}</p>
                            <p className='discount-percentage'>{discountPercentage}% off</p>
                        </>
                    }
                    </div>
                    <p className='offer-price'>Offer price ₹{offerPrice}</p>
                 </div>
            </div>
            }
            </>
        )
    })

    return (
        <div className='plp-container'>
            {products}
        </div>
    )
}

export default ProductListingPage;
