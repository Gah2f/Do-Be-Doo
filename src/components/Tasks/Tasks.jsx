import React from 'react'
import './Tasks.css'
function Tasks() {
  return (
    <div className='tasks'>
        <label htmlFor="">Name: </label>
        <input 
        type="text"
        placeholder='Add new tasks'  /> 
       
    </div>
  )
}

export default Tasks