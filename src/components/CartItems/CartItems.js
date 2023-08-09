import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <div>{cartItems}</div>
  )
}

export default CartItems