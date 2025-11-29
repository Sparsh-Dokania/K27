import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Agence from './pages/Agence'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className='h-screen w-screen'>
     <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/agence' element = {<Agence/>} />
      <Route path='/projects' element = {<Projects/>} />
     </Routes>
    </div>
  )
}

export default App
