import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react'

const TopNav = () => (
  <>
    {/* Social Media Top Bar */}
    <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white py-2 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-xs gap-4">
          <div className="flex items-center gap-4">
            <Mail className="w-4 h-4" />
            <span className="text-xs">support@moneykrishna.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="hover:text-purple-400 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="hover:text-purple-400 transition-colors"
              title="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="hover:text-purple-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="hover:text-purple-400 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="hover:text-purple-400 transition-colors"
              title="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Main Navigation */}
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="Moneykrishna Education" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-slate-700 font-medium hover:text-purple-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="text-slate-700 font-medium hover:text-purple-600 transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/mt5-education" 
              className="text-slate-700 font-medium hover:text-purple-600 transition-colors"
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className="text-slate-700 font-medium hover:text-purple-600 transition-colors"
            >
              Teachers
            </Link>
            <button className="text-slate-700 font-medium hover:text-purple-600 transition-colors">
              Testimonial
            </button>
          </nav>

          {/* Contact Button */}
          <button className="px-6 py-2 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  </>
)

export default TopNav
