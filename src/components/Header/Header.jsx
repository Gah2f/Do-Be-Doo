import React from 'react'
import './header.css'
import logo from '../../imgs/sclogo.png'
function Header() {
  return (
    <div className='header'>
        <img src={logo} alt="" />
    </div>
  )
}

export default Header