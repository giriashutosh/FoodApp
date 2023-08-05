import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {

    const { name, cloudinaryImageId, avgRating, cuisines, costForTwo } = props.resData.info;
    return <div className="w-64  mx-4 mb-4 bg-gray-100 p-2 rounded-lg shadow-lg hover:animate-[wiggle_1s_ease-in-out_infinite]">
        <img className="rounded" src={CDN_URL + cloudinaryImageId} alt="" />
        <h3 className="pt-3">{name}</h3>
        {/* <p>{cuisines.join(", ")}</p> */}
        <h4>{costForTwo}</h4>
        <h4>{avgRating} star</h4>
        {/* <h4>{sla.deliveryTime} minutes</h4> */}
    </div>
}

const PromotedRestaurantCard = () => {

}

export default RestaurantCard; 