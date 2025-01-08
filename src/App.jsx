import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
        <Header/>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App