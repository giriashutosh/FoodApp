import React from "react";
import MenuDetail from "../MenuDetail/MenuDetail";
import ItemList from "../ItemList/ItemList";

const MenuCard = (props) => {
  //console.log(props)
  return (
    <div className="flex w-1/2 mt-10 mb-2 flex-col  bg-slate-100">
      <h1 className="font-bold"><span>{props.title}</span></h1>
            <p className="menu-card-area">{props.areaName}</p>
            <p className="">{props.price}</p>
    </div>
  );
};
export default MenuCard;
