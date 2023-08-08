import React from 'react'
import emptycard from '../assets/image/emptycard.jpg'
import { Link } from 'react-router-dom'
const Cart = () => {
  
  return (
    <div className='mt-2'>
      <div data-testid="complete-cart" className="flex justify-center">
        <img
          className=''
          alt="cart-empty-img"
          
        src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
        />
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="bg-green-400 rounded-lg p-2 m-5">Add</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart