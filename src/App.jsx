import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'
import Plan from './components/Plan/Plan'
function App() {
  return (
    <div>
        <Header/>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/plan' element={<Plan/>}/>
            <Route path='/plan' element={<Plan/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App