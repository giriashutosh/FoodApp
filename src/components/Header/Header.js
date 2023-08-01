import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
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

            </ul>
        </div>
    </div>
}

export default Header;