import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
    return <div className="header">
        <div className="logo-container">
            <img src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li><Link to = "about" className="header-links" style={{textDecoration: "none", color: "black"}}>About Us</Link></li>
                <li><Link to = "contact" className="header-links" style={{textDecoration: "none", color: "black"}}>Contact Us</Link></li>
                <li>Cart</li>

            </ul>
        </div>
    </div>
}

export default Header;