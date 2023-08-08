import React from "react";
import { CDN_URL } from "../../utils/constant";


const MenuCard = (props) => {
  console.log(props)
  return (
    <div className="flex items-center justify-between w-full mt-2 mb-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.0),_0_6.7px_5.3px_rgba(0,_0,_0,_0.0),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-slate-200">
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

