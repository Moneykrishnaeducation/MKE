import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNav from './Components/TopNav'
import Home from './Components/Home'
import About from './Components/About'
import MT5Education from './Components/MT5Education'
import Blog from './Components/Blog'
import Policies from './Components/Policies'

import Footer from './Components/Footer'
import Blog1 from './Components/Blog1'
import Blog2 from './Components/Blog2'
import Blog3 from './Components/Blog3'
import GoUpButton from './Components/GoUpButton'
import BeginnerCourse from './Components/BeginnerCourse'
import Intermediate from './Components/Intermediate'
import AdvanceCourse from './Components/AdvanceCourse'
import Careers from './Components/Careers'
import Term from './Components/Term'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <TopNav />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/careers" element={<Careers />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/strategies" element={<Blog1 />} />
            <Route path="/blog/ai" element={<Blog2 />} />
            <Route path="/blog/become-trader" element={<Blog3 />} />
            <Route path="/courses/beginner" element={<BeginnerCourse />} />
            <Route path="/courses/intermediate" element={<Intermediate />} />
            <Route path="/courses/advanced" element={<AdvanceCourse />} />
            <Route path="/terms" element={<Term />} />
            <Route path="/disclaimer" element={<Policies />} />
          </Routes>
        </main>

        <Footer />
        <GoUpButton />
      </div>
    </BrowserRouter>
  )
}

export default App