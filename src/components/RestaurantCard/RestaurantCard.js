import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../../utils/constant";
import { addItemToCart, removeItemFormCart } from '../../store/cartSlice'

const RestaurantCard = (props) => {
    const { menuPage } = props;
    const dispatch = useDispatch()
    console.log(props.resData)
    const { name, cloudinaryImageId, avgRating, cuisines, costForTwo } = props.resData.info;
    const { imageId } = props.resData.info
    
    const addItemToCartHandler = () => {
        dispatch(addItemToCart(props.resData.info))
    }

    return <div className="w-60  mx-4 mb-6 bg-gray-200 p-2 rounded-lg shadow-lg hover:animate-[wiggle_1s_ease-in-out_infinite]">
        <img className="rounded-lg " src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : CDN_URL + imageId} alt="" />
        <h5 className="pt-3">{name}</h5>
        {/* <p>{cuisines.join(", ")}</p> */}
        <p>{costForTwo}</p>
        <p>{avgRating} star</p>
        {menuPage && <button className="p-2 ml-20 rounded-lg bg-green-400" onClick={addItemToCartHandler}>Add To Cart</button>}
        {/* <h4>{sla.deliveryTime} minutes</h4> */}
    </div>
}

const PromotedRestaurantCard = () => {

}

export default RestaurantCard; 