import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Whishlist from './Whishlist'

const Navbar = () => {
    const {isAuthorized, login, logout} = useContext(AuthContext)
  return (
    <div>
        Navbar
        <button onClick={()=> {
            if(isAuthorized) logout();
            else login("R", "Z")
        }}>{isAuthorized ? "Logout" : "Login"}</button>
        <Whishlist />
    </div>
  )
}

export default Navbar