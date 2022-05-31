import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {
    const {count, setCount} = useContext(CartContext)
  return (
    <div>Cart
        <button onClick={()=> setCount(count+1)}>add to cart</button>
    </div>
  )
}

export default Cart