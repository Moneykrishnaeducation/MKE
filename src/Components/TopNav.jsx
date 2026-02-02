import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => (
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-semibold text-gray-900">MKE</Link>
        </div>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
        </nav>
      </div>
    </div>
  </header>
)

export default TopNav
