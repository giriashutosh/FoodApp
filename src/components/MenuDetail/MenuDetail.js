import React from 'react'
import { CDN_URL } from "../../utils/constant";

const MenuDetail = (props) => {
    console.log(props)
    return (
        <div className='flex w-1/2 mt-10 mb-2 flex-col  bg-pink-400 '>
            

            <h1 className="font-bold"><span>{props.data.title}</span></h1>
            <p className="menu-card-area">{props.data.areaName}</p>
            <p className="">{props.data.price}</p>
            
        </div>
    )
}

export default MenuDetail