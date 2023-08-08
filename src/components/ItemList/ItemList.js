import React, { useState } from 'react'
import Arrow from "../../assets/image/Arrow-down.svg.png"
import UpArrow from "../../assets/image/uparrow.png"
import { CDN_URL } from '../../utils/constant'
import RestaurantCard from '../RestaurantCard/RestaurantCard'

const ItemList = ({ data, category, setCategory }) => {

  console.log(data)
  console.log(category)
  const arrowHandler = (data) => {
    setCategory(data);
  }

  return (
    <div className='flex justify-center flex-wrap'>
    {/* To show items related to specific category */}
      {data.title === category &&
        data.itemCards.map((item) => <RestaurantCard key={item.id} resData={item.card} menuPage={ true} />)
      
      }
    </div>
  )

}

export default ItemList

{/* {isOpen &&
        data.itemCards.map((item) =>
        <div key = {item.card.info.id} className='flex pb-4 justify-between mb-4  border-b-2 px-4 '>
        <div>
          <h1>{item.card.info.name}</h1>
          <p>₹ {item.card.info.price / 100}</p>
        </div>
        <div className='relative bg-red-100 pb-4'>
        <img className="w-20  rounded-lg " src={CDN_URL + item.card.info.imageId} />
        <button className=' absolute'>Add to Cart</button>
        </div>
        
      </div>
        )
      } */}