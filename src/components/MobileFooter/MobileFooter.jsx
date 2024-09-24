
import "./MobileFooter.css"
import { AiOutlineHome } from "react-icons/ai";
import { AiFillShop } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";



const MobileFooters = () => {
    return (
        <div className="mobile-footer-container">
            <Link to='/wishlist'>
                <AiOutlineHeart className="mobile-footer-home-icon" />
                <p className="mobile-footer-home-icon-name">Wishlist</p>
            </Link>
            <Link to='/plp'>
                <AiFillShop className="mobile-footer-home-icon" />
                <p className="mobile-footer-home-icon-name">Explore</p>
            </Link>
            <Link to='/'>
                <AiOutlineHome className="mobile-footer-home-icon" />
                <p className="mobile-footer-home-icon-name">Home</p>
            </Link>
            <Link to='/cart'>
                <AiOutlineShoppingCart className="mobile-footer-home-icon" />
                <p className="mobile-footer-home-icon-name">Cart</p>
            </Link>
            <Link to='/login'>
                <AiOutlineUser className="mobile-footer-home-icon" />
                <p className="mobile-footer-home-icon-name">Account</p>
            </Link>
        </div>
    )
}

export default MobileFooters