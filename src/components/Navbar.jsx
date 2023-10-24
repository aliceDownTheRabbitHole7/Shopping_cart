import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import * as FaIcons from 'react-icons/fa6'


function Navbar() {
  return (
    <div className='nav-container'>
        <div className="links">
            <Link to='/'> Store </Link>
            <Link to='/cart'><FaIcons.FaCartShopping /></Link>
        </div>
    </div>
  )
}

export default Navbar
