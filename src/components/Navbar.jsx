import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to={"/"}>
            Home
        </NavLink>
      <NavLink to={"/pastes"}>
      All Pastes</NavLink>
     
    </div>
  )
}

export default Navbar