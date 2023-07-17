import React from "react";
import ReactDOM from 'react-dom/client'

const Header = () => {
    return <div className="header">
        <div className="logo-container">
            <img src="https://www.pngarts.com/files/7/Food-Delivery-Service-PNG-Image-Background.png" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>

            </ul>
        </div>
    </div>
}

const RestaurantCard = () => {
    return <div className="res-card">
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sa66vzro2pgrj8azfeo8" alt="" />
        <h3>Cafe Pamaa</h3>
        <h4>Burgers, Chaat, Pastas</h4>
        <h4>24 mins</h4>
        <h4>4.2 stars</h4>
</div>
}

const Body = () => {
    return <div className="body">
        <div className="search">
            search
        </div>
        <div className="res-container">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard/>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard/>
        </div>
</div>
}

const AppLayout = () => {
    return <div className="layout-container">
        <Header />
        <Body/>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)