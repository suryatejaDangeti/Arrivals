import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Footer.css'

const Footer = () => {

    const iconsData = [
            <FaFacebook className="social-media-icon" />,
            <FaYoutube className="social-media-icon" />,
            <FaTwitter className="social-media-icon" />,
            <FaInstagram className="social-media-icon" />,
    ]

    return (
        <div className="footer-main-container">
            <div className="social-media-container">
                <h1 className="footer-heading">Join the conversation</h1>
                <div className="social-media-inner-container">
                    {
                        iconsData.map((iconData) => {
                            return iconData
                        })
                    }
                </div>
            </div>
            <div className="footer-about-section-container">
                <div>
                    <h1 className="footer-content-heading">Shopping with Arrivals</h1>
                    <p className="footer-content-text">Students</p>
                    <p className="footer-content-text">Size Guides</p>
                    <p className="footer-content-text">Find a Store</p>
                    <p className="footer-content-text">Arrival Status</p>
                </div>
                <div>
                    <h1 className="footer-content-heading">Shopping with Arrivals</h1>
                    <p className="footer-content-text">Students</p>
                    <p className="footer-content-text">Size Guides</p>
                    <p className="footer-content-text">Find a Store</p>
                    <p className="footer-content-text">Arrival Status</p>
                </div>
                <div>
                    <h1 className="footer-content-heading">Shopping with Arrivals</h1>
                    <p className="footer-content-text">Students</p>
                    <p className="footer-content-text">Size Guides</p>
                    <p className="footer-content-text">Find a Store</p>
                    <p className="footer-content-text">Arrival Status</p>
                </div>
                <div>
                    <h1 className="footer-content-heading">Shopping with Arrivals</h1>
                    <p className="footer-content-text">Students</p>
                    <p className="footer-content-text">Size Guides</p>
                    <p className="footer-content-text">Find a Store</p>
                    <p className="footer-content-text">Arrival Status</p>
                </div>
            </div>
            <hr />
            <div className="footer-payment-accept-container">
                <h1 className="copyright-heading">Copyright © 2024 Arrivals All rights reserved.</h1>
                <div>
                    <h1 className="footer-payment-accept-heading">We accept the following payment methods </h1>
                    <img className="footer-payment-accept-image" src = "https://www.jdsports.co.uk/skins/jdsportsuk-desktop/public/img/cards/cards-gb.png" alt="paymentMethodImage" />
                </div>
            </div>
        </div>
    )
}
export default Footer;