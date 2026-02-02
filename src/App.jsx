import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNav from './Components/TopNav'
import Home from './Components/Home'
import About from './Components/About'
import MT5Education from './Components/MT5Education'
import Blog from './Components/Blog'


const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mt5-education" element={<MT5Education />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App