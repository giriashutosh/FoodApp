import React, {useState} from 'react'
import Arrow from "../../assets/image/Arrow-down.svg.png"
import UpArrow from "../../assets/image/uparrow.png"
import { CDN_URL } from '../../utils/constant'

const ItemList = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(data)
 
  const arrowHandler = () => {
    isOpen? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <div className='flex flex-col  w-1/2 cursor-pointer' onClick={arrowHandler}>

      <div className='flex justify-between items-center px-2 mb-2 rounded-lg  bg-slate-200 font-bold'>
        <h1>{data.title}({data.itemCards.length})</h1>
        <img className="w-5" src={isOpen? UpArrow: Arrow} />
      </div>
      {isOpen &&
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
      }
      

    </div>
  )
}

export default ItemList