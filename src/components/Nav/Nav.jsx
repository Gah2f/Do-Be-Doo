import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div className='nav'>
       <Link to="/plan"> <h1>Plan</h1> </Link> 
       <Link to="/plan"> <h1>Link 2</h1> </Link> 
       <Link to="/plan"> <h1>Link 3</h1> </Link> 
    </div>
  )
}

export default Nav