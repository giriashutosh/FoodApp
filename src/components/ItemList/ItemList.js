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
    <div className='flex flex-col  w-1/2 '>

      <div className='flex justify-between mb-2 bg-slate-200 font-bold'>
        <h1>{data.title}({data.itemCards.length})</h1>
        <img className="w-10" src={isOpen? UpArrow: Arrow} onClick={arrowHandler}/>
      </div>
      {isOpen &&
        data.itemCards.map((item) =>
        <div className='flex justify-between mb-4 divide-y divide-dashed'>
        <div>
          <h1>{item.card.info.name}</h1>
          <p>₹ {item.card.info.price / 100}</p>
        </div>

        <img className="w-20 rounded-lg" src={CDN_URL + item.card.info.imageId} />
      </div>
        )
      }
      

    </div>
  )
}

export default ItemList