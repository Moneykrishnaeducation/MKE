import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNav from './Components/TopNav'
import Home from './Components/Home'
import About from './Components/About'


const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App