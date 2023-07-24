import RestaurantCard from "../RestaurantCard/RestaurantCard";
import cardData from "../../utils/cardData";
import Shimmer from "../Shimmer/Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  console.log("render")
  const filterResListHandler = () => {
    const filteredList = cardData.filter((res) => res.data.avgRating > 4);
    //console.log(filteredList);
    setResList(filteredList);
  };

  const onClickSearchHandler = () => {
    console.log(resList[0].info.name.toLowerCase().includes(searchText.toLowerCase()));
        const filteredList = resList.filter((data) => data.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredResList(filteredList)
        console.log(filteredList);
  }

  const onChangeSearchHandler = (e) => {
    setSearchText(e.target.value);
  }
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    //console.log(response)
    const json = await response.json();
    //console.log(json)
    //console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setResList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredResList(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resList.length === 0? (<Shimmer/>):(
    <div className="body">
      <div className="filter-container">
        <div className="search-container">
            <input type="text" value = {searchText} onChange={onChangeSearchHandler}></input>
            <button className= "search-btn" onClick={onClickSearchHandler}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterResListHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((card) => (
          <Link to={"/restaurant/"+card.info.id} key={card.info.id}><RestaurantCard key={card.info.id} resData={card} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
