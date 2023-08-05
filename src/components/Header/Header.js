import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import { useState, useContext } from "react"
import UserContext from "../../context/UserContext";

const Header = () => {
    //const [isLoggedIn, setIsLoggedIn] = useState(true)
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
    //console.log(isLoggedIn)
    const loginHandler = () => {
        isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)
    }

    return <div className="flex justify-between items-center bg-red-200">
        <div className="w-20">
            <img src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul className="flex">
                <li className="px-5"><Link to="/" className="header-links" style={{ textDecoration: "none", color: "black" }}>Home</Link></li>
                <li className="px-5"><Link to="about" className="header-links" style={{ textDecoration: "none", color: "black" }}>About Us</Link></li>
                <li className="px-5"><Link to="contact" className="header-links" style={{ textDecoration: "none", color: "black" }}>Contact Us</Link></li>
                <li className="px-5">Cart</li>
                {isLoggedIn ? <button className="px-5" onClick={loginHandler}>
                    Login
                </button> : <button className="px-5" onClick={loginHandler}>
                    Logout
                </button>}
            </ul>
        </div>
    </div>
}

export default Header;