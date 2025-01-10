import React from 'react'
import './Dooweekly.css'

function Dooweekly() {
  return (
    <div>
        <h1>Plan your week here.</h1>
        <form action="">
            <label htmlFor="">Goal</label>
        <input 
        type="text"
        placeholder='What is your main goal this week?'
        required 
        />
        </form>
   
    </div>
  )
}

export default Dooweekly