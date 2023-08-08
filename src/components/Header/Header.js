import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";
import { useState, useContext } from "react"
import UserContext from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faUserMinus,
  faUserPlus,
  faHome,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const TitleLeft = () => {
  return (
    <div>
      <Link to="/">
        <svg
          data-testid="logo"
          className="  h-20 w-20 pl-3 py-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="black"
            d="M474.183,120H360V40H328v80H200v32h17.92l6.154,48H112a80.091,80.091,0,0,0-80,80v16H312V280a79.508,79.508,0,0,0-8-34.846,80.248,80.248,0,0,0-47.155-41.185L250.183,152H437.817l-35.9,280H32v32H430.08l40-312H496V120ZM277.258,264H66.742A48.083,48.083,0,0,1,112,232H232A48.083,48.083,0,0,1,277.258,264Z"
            className="ci-primary"
          ></path>{" "}
          <polygon
            fill="var(--ci-primary-color, currentColor)"
            points="304 352 312 352 312 320 304 320 184 320 32 320 32 352 184 352 304 352"
            className="ci-primary"
          ></polygon>{" "}
          <polygon
            fill="var(--ci-primary-color, currentColor)"
            points="304 408 312 408 312 376 304 376 184 376 32 376 32 408 184 408 304 408"
            className="ci-primary"
          ></polygon>{" "}
        </svg>
      </Link>
    </div>
  );
};

const Header = () => {
  //const [isLoggedIn, setIsLoggedIn] = useState(true)
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)
  const cartItems = useSelector((state) => state.cart.items)
  //console.log(isLoggedIn)
  const loginHandler = () => {
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true)
  }

  return <div className="flex justify-between items-center shadow-lg bg-orange-200">

    {/* <img className="w-20" src={LOGO_URL} /> */}
    <TitleLeft />
    <div className="nav-items">
      <ul className="flex">
        <li className="px-5"><Link to="/" className="header-links" style={{ textDecoration: "none", color: "black" }}>Home</Link></li>
        <li className="px-5"><Link to="about" className="header-links" style={{ textDecoration: "none", color: "black" }}>About Us</Link></li>
        <li className="px-5"><Link to="contact" className="header-links" style={{ textDecoration: "none", color: "black" }}>Contact Us</Link></li>
        <Link to="/cart">
          <button className="relative flex" >
            <svg
              className="flex-1 w-10 h-9 fill-current"
              viewBox="0 0 27 27"
            >
              <path
                fill="black"
                d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
              />
            </svg>
            <span
              data-testid="cart"
              className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center"
            >
              {cartItems.length}
            </span>
          </button>
        </Link>

        {isLoggedIn ? (<button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="pr-4 ml-3"
          onClick={loginHandler}
        >
          <span className="py-2 px-2  bg-red-400 rounded-2xl text-white  ">
            LogIn
            <span className="p-[2px]">
              <FontAwesomeIcon icon={faUserPlus} />
            </span>
          </span>
        </button>) : (<button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          className="pr-4 ml-3"
          onClick={loginHandler}
        >
          <span className="py-2 px-2  bg-red-400 rounded-2xl text-white  ">
            LogOut
            <span className="p-[2px]">
              <FontAwesomeIcon icon={faUserMinus} />
            </span>
          </span>
        </button>)}
      </ul>
    </div>
  </div>
}

export default Header;