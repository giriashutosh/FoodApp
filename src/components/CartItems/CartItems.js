import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartDetail = () => {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <div></div>
  )
}

export default CartDetail