import React from "react";
import { CDN_URL } from "../../utils/constant";


const MenuCard = (props) => {
  console.log(props)
  return (
    <div className="flex items-center justify-between w-full mt-2 mb-2  bg-slate-200">
      <div className="m-2">
        <img className = "w-16 h-16 rounded" src={ CDN_URL + props.image} />
      </div>
      <div className="m-2">
            <h1 className="font-bold"><span>{props.title}</span></h1>
            <p className="menu-card-area">{props.areaName}</p>
            <p className="">{props.price}</p>
      </div>
          
    </div>
  );
};
export default MenuCard;

