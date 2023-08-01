import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {

    const { name, cloudinaryImageId, avgRating, cuisines, costForTwo} = props.resData.info;
    return <div className="w-64 mx-4 mb-4 bg-gray-200 p-2 rounded-lg">
        <img  className="rounded" src={CDN_URL + cloudinaryImageId} alt="" />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <h4>{costForTwo }</h4>
        <h4>{avgRating} star</h4>
        {/* <h4>{sla.deliveryTime} minutes</h4> */}
    </div>
}

export default RestaurantCard;