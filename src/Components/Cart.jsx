import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {
    const {addProduct} = useContext(CartContext)
  return (
    <div>Cart
        <button onClick={addProduct}>add to cart</button>
    </div>
  )
}

export default Cart