import { useNavigate } from "react-router-dom"
import { updateProductDetail } from "../../modules/productDetail/productDetail"
import { store } from "../../store"
import './RecentlyViewedProducts.css'


const RecentlyViewedProducts = () => {
    //const recentlyViewedProducts = store.getState().recentlyViewedProducts.slice(-6).reverse();
    const recentlyViewedProducts = store.getState().recentlyViewedProducts.slice(-6).reverse();
    const navigate = useNavigate();
    return (
        <div className="recently-viewed-main-container">
             <h1 className="recently-viewed-heading">Recently viewed</h1>
            <div className='recently-viewed-container'>
                { recentlyViewedProducts.slice(-5).map((product) => {
                    return (
                        <div 
                            className='recently-viewed-product-container' 
                            key={product}
                            onClick={() => {
                                store.dispatch(updateProductDetail(product));
                                navigate('/pdp')
                            }}
                        >
                            <img
                                className='recently-viewed-image'
                                src = {product?.fnlColorVariantData?.outfitPictureURL} alt={product?.brandTypeName} />
                                <p className='recently-viewed-product-name'>{product?.brandTypeName} {product?.name}</p>
                                <p className='best-seller-product-price'>₹ {product?.wasPriceData?.displayformattedValue}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default RecentlyViewedProducts;