import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Products from './Products'

const Body = () => {
    const {isAuthorized} = useContext(AuthContext)
  return (
    <div>
        Body: {isAuthorized ? "Logged In" : "Logged Out"}
        <Products />
    </div>
  )
}

export default Body