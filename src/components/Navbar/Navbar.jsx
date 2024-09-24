import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    const navigation = useNavigate()
    const [searchProducts, setSearchProducts] = useState('')
    const[value, setValue] = useState(false)
    const [navLinks, setNavLinks] = useState({
        hover: false,
        name: ''
    })
    const navLinkNames = ["Men", "Women", "Kids", "Clothing", "Accessories", "Offers"]

    return (
        <div className="navbar-main-container">
            <div className='navbar-container'>
                <div className="menu-icon-container">
                    <FaBars  className="menu-icon" onClick={() => {
                        setValue(!value)
                        console.log('[called]')
                    }}/>
                </div>
                <Link to='/' className="logo">Arrivals</Link>
                <div className="search-container">
                    <input 
                        className='search-input'
                        type='search' 
                        placeholder='search arrivals' 
                        value={searchProducts}
                        onChange={(e) => {
                            setSearchProducts(e.target.value)
                            console.log(e.target.value, "called")
                        }}
                        onKeyDown={(e) => {
                            if(e.key === "Enter") {
                                navigation(`/search/:${searchProducts}`)
                                setSearchProducts('')
                            }
                            console.log(e.key)
                        }}
                    />
                </div>
                <div className="navbar-icons-container">
                    <Link to='/login'><FaRegUser className="nav-icon" /></Link>
                    <Link to='/wishlist'><FaRegHeart className="nav-icon" /></Link>
                    <Link to='/cart'><FaShoppingCart className="nav-icon" /></Link>
                </div>
            </div>
            <div className="navbar-category-container" >
                <div className={value ? "something specific-category-container" : "specific-category-container"}>
                    {navLinkNames.map((navlink) => (
                        <button 
                            className="specific-category" 
                            onMouseEnter={(event) => {
                                if(event.target.innerHTML) {
                                    setNavLinks({
                                        hover: true,
                                        name: event.target.innerHTML})
                                    }
                            }}
                            onMouseLeave={(event) => {
                                if(event.target.innerHTML) {
                                    setNavLinks({
                                        hover: false,
                                        name: event.target.innerHTML})
                                    }
                            }}
                        >
                            {navlink}
                        </button>

                    ))}
                </div>
            </div>
            { navLinks.hover && 
                <div 
                    className="nav-link-hover-effect"
                    onMouseEnter={(event) => {
                        console.log("called")
                        if(event.target.innerHTML) {
                            setNavLinks({
                                hover: true,
                                name: event.target.innerHTML})
                            }
                    }}
                    onMouseLeave={(event) => {
                        console.log("called1")
                        if(event.target.innerHTML) {
                            setNavLinks({
                                hover: false,
                                name: event.target.innerHTML})
                            }
                    }}
                // onClick={() => {
                //     console.log('called');
                //     <Plp name="mens data rendering"/>
                //     router.push('/plp/mens')
                // }}
                >
                {navLinks.name}
                </div>
    }
       </div>
    )
}

export default Navbar


// const Navbar = () => {
//     return (
//         <div className='navbar-button-input-container'>
//             <button className="navbar-button-input">called</button>
//             <div className="navbar-icons-container">
//                     {/* <Link to='/login'><FaRegUser className="nav-icon" /></Link> */}
//                     <Link to='/wishlist'><FaRegHeart className="nav-icon" /></Link>
//                    <Link to='/cart'><FaShoppingCart className="nav-icon" /></Link>
//              </div>
//         </div>
//     )
// }

// export default Navbar