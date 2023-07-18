import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {

    const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, deliveryTime } = props.resData.data;
    return <div className="res-card">
        <img src={CDN_URL + cloudinaryImageId} alt="" />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <h4>{costForTwo / 100}</h4>
        <h4>{avgRating} star</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
}

export default RestaurantCard;