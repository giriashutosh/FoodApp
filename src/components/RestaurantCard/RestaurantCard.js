import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {

    const { name, cloudinaryImageId, avgRating, cuisines, costForTwo} = props.resData.info;
    return <div className="res-card">
        <img src={CDN_URL + cloudinaryImageId} alt="" />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <h4>{costForTwo }</h4>
        <h4>{avgRating} star</h4>
        {/* <h4>{sla.deliveryTime} minutes</h4> */}
    </div>
}

export default RestaurantCard;