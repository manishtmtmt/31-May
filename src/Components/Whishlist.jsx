import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Whishlist = () => {
    const {count} = useContext(CartContext)
  return (
    <div>Whishlist: {count}</div>
  )
}

export default Whishlist