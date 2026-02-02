import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react'
import logo from '../assets/logo of MKE.webp'

const TopNav = () => (
  <>
    <style>{`
      @keyframes slideDown {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .navbar-animate {
        animation: slideDown 0.5s ease-out;
      }
      .nav-group {
        position: relative;
      }
      .social-icon {
        transition: all 0.3s ease;
      }
      .social-icon:hover {
        transform: translateY(-4px) scale(1.2);
      }
      .logo-container {
        transition: transform 0.3s ease;
      }
      .logo-container:hover {
        transform: scale(1.05);
      }
    `}</style>

    {/* Social Media Top Bar */}
    <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white py-2 z-50 navbar-animate">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-xs gap-4">
          <div className="flex items-center gap-4">
            <Mail className="w-4 h-4" />
            <span className="text-xs">support@moneykrishna.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/moneykrishna.education/" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-green-400 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="social-icon hover:text-green-400 transition-colors"
              title="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="social-icon hover:text-green-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/moneykrishnaeducation/" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-green-400 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@money_krishna" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover:text-green-400 transition-colors"
              title="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Main Navigation */}
    <header className="sticky top-0 z-50 bg-white shadow-md navbar-animate">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="logo-container flex items-center gap-2">
            <img 
              src={logo} 
              alt="Moneykrishna Education"
              className="h-10 w-auto transition-transform duration-300"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8 nav-group">
            <Link 
              to="/" 
              className="text-slate-700 font-medium hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="text-slate-700 font-medium hover:text-green-600 transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/mt5-education" 
              className="text-slate-700 font-medium hover:text-green-600 transition-colors"
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className="text-slate-700 font-medium hover:text-green-600 transition-colors"
            >
              Teachers
            </Link>
            <button className="text-slate-700 font-medium hover:text-green-600 transition-colors">
              Testimonial
            </button>
          </nav>

          {/* Contact Button */}
          <Link 
            to="/contact"
            className="px-6 h-10 flex items-center rounded-full border-2 border-green-600 text-green-600 font-semibold hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  </>
)

export default TopNav
