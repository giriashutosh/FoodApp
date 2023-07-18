// import { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import cardData from "../../utils/cardData";
import { useState } from "react"

const Body = () => {
    const [resList, setResList] = useState(cardData)

    const filterResListHandler = () => {
        const filteredList = cardData.filter((res) => res.data.avgRating > 4)
        console.log(filteredList)
        setResList(filteredList);
    }

    return <div className="body">

        <div className="filter-container">
            <button className="filter-btn" onClick={filterResListHandler}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {
                resList.map((card) => (
                    <RestaurantCard key={card.data.id} resData={card} />
                ))
            }
        </div>
    </div>
}

export default Body;