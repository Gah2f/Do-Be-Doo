import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../imgs/sclogo.png'
function Header() {
  return (
    <div className='header'>
      <Link to="/"> <img src={logo} alt="" /> </Link>  
    </div>
  )
}

export default Header