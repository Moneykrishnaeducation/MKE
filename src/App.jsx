import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNav from './Components/TopNav'
import Home from './Components/Home'
import About from './Components/About'
import MT5Education from './Components/MT5Education'
import Blog from './Components/Blog'
import Blog1 from './Components/Blog1'
import Blog2 from './Components/Blog2'
import Blog3 from './Components/Blog3'


const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mt5-education" element={<MT5Education />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/strategies" element={<Blog1 />} />
        <Route path="/blog/ai" element={<Blog2 />} />
        <Route path="/blog/become-trader" element={<Blog3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App