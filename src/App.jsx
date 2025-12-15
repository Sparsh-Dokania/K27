import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/navigation/Navbar'

const App = () => {

  return (
    <div className='h-screen w-screen'>
      <Navbar/>
     <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/agence' element = {<Agence/>} />
      <Route path='/projects' element = {<Projects/>} />
     </Routes>
    </div>
  )
}

export default App
