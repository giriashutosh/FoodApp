import RestaurantCard from "../RestaurantCard/RestaurantCard";
import cardData from "../../utils/cardData";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  //console.log("render")
  const filterResListHandler = () => {
    const filteredList = cardData.filter((res) => res.data.avgRating > 4);
    //console.log(filteredList);
    setResList(filteredList);
  };

  const onClickSearchHandler = () => {
    console.log(resList)
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
    // console.log(json)
    // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(filteredResList)
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!filteredResList) return null 
  if  (filteredResList.length === 0) return <h1 className="mt-40 h-10 text-lg text-center font-extrabold">Finding best food near to you...</h1>
  return  (
    <div className="body">
      <div className="flex justify-between my-4 mx-4">
        <div >
          <input className="border mx-2 w-64" type="text" value={searchText} onChange={onChangeSearchHandler}></input>
          <button className="bg-red-400 px-3 py-1 rounded-lg" onClick={onClickSearchHandler}>Search</button>
        </div>
        <button className="bg-red-400 px-3 rounded-lg" onClick={filterResListHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {filteredResList.map((card) => (
          <Link to={"/restaurant/" + card.info.id} key={card.info.id}><RestaurantCard key={card.info.id} resData={card} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
