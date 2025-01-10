import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div className='nav'>
       <Link to="/plan"> <h1> Plan </h1> </Link> 
       <Link to="/tasks"> <h1> Tasks </h1> </Link> 
       <Link to="/login"> <h1> Login </h1> </Link> 
       <Link to="/weekly"> <h1> Doo Weekly </h1> </Link> 

    </div>
  )
}

export default Nav