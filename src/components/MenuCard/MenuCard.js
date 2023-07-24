import React from "react";
import { CDN_URL } from "../../utils/constant";

const MenuCard = ({title, image, areaName,cuisines, price}) => {
  return (
    <div className="menu-card">
      <img className="menu-card-image" src={CDN_URL+image} alt={title} />
      <div className="menu-card-details">
        <h2 className="menu-card-title">{title}</h2>
        <p className="menu-card-area">{areaName}</p>
        <p className="menu-card-cuisines">{cuisines.join(", ")}</p>
        <p className="menu-card-price">{price}</p>
      </div>
    </div>
  );
};
export default MenuCard;
