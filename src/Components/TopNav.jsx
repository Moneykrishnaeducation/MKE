import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Facebook, Linkedin, Instagram, Youtube, Mail, ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/logo of MKE.webp'

const TopNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const dropdownRef = useRef(null)
  const mobileRef = useRef(null)

  const scrollToContactOnPage = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return true
    }
    return false
  }

  const handleContactClick = (e) => {
    e.preventDefault()
    // If already on home page, scroll to contact
    if (location.pathname === '/' ) {
      if (!scrollToContactOnPage()) {
        // fallback: navigate to home to ensure element exists
        navigate('/')
      }
      setMobileMenuOpen(false)
      return
    }

    // Otherwise navigate to home and instruct it to scroll
    navigate('/', { state: { scrollToContact: true } })
    setMobileMenuOpen(false)
  }

  // Close menus on outside click or Escape
  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        // don't automatically close mobile menu when clicking inside it
      }
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null)
        setMobileMenuOpen(false)
        setMobileCoursesOpen(false)
      }
    }

    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  // Close any open dropdown when navigating
  useEffect(() => {
    setOpenDropdown(null)
  }, [location.pathname])

  const isActive = (path) => {
    if (path === '/courses') return location.pathname.startsWith('/courses')
    return location.pathname === path
  }

  return (
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
      .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        min-width: 200px;
        z-index: 50;
      }
      .dropdown-item {
        display: block;
        width: 100%;
        padding: 0.75rem 1rem;
        text-align: left;
        color: #334155;
        text-decoration: none;
        transition: all 0.3s ease;
      }
      .dropdown-item:hover {
        background-color: #f1f5f9;
        color: #16a34a;
        padding-left: 1.25rem;
      }
      .mobile-menu {
        animation: slideDown 0.3s ease-out;
        max-height: 100vh;
        overflow: hidden;
        transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
      }
      .mobile-menu-enter {
        max-height: 0;
        opacity: 0;
        transition: max-height 0.3s ease-in, opacity 0.3s ease-in;
      }
      .mobile-courses-dropdown {
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        max-height: 0;
        opacity: 0;
        display: block;
        background: #f8fafc;
        border-top: 1px solid #e2e8f0;
        z-index: 40;
      }
      .mobile-courses-dropdown.open {
        max-height: 500px;
        opacity: 1;
      }
      .mobile-courses-dropdown .dropdown-item {
        padding-left: 2rem;
        background: #f8fafc;
      }
      .mobile-courses-dropdown .dropdown-item:hover {
        background-color: #e2e8f0;
      }
      .mobile-nav-link {
        display: block;
        padding: 0.75rem 1rem;
        color: #334155;
        text-decoration: none;
        border-bottom: 1px solid #e2e8f0;
        transition: all 0.3s ease;
      }
      .mobile-nav-link:hover {
        background-color: #f1f5f9;
        color: #16a34a;
        padding-left: 1.25rem;
      }
    `}</style>

    {/* Social Media Top Bar */}
    <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white py-2 z-40 navbar-animate">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-xs gap-4">
          <div className="flex items-center gap-4">
            <Mail className="w-4 h-4" />
            <span className="text-xs">moneykrishnaeducation@gmail.com</span>
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
              href="https://www.linkedin.com/company/money-krishna-education/" 
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
    <header className="sticky top-0 h-[8vh] z-50 bg-white shadow-md navbar-animate">
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

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 nav-group" role="navigation" aria-label="Main Navigation">
            <Link 
              to="/" 
              className={`text-slate-700 font-medium hover:text-green-600 transition-colors ${isActive('/') ? 'text-green-600' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-slate-700 font-medium hover:text-green-600 transition-colors ${isActive('/about') ? 'text-green-600' : ''}`}
            >
              About
            </Link>

            {/* Courses Dropdown */}
            <div 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setOpenDropdown('courses')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`text-slate-700 font-medium hover:text-green-600 transition-colors flex items-center gap-1 ${isActive('/courses') ? 'text-green-600' : ''}`}
                aria-haspopup="menu"
                aria-expanded={openDropdown === 'courses'}
                aria-controls="courses-menu"
                onClick={() => setOpenDropdown(openDropdown === 'courses' ? null : 'courses')}
              >
                Courses
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'courses' && (
                <div id="courses-menu" role="menu" className="dropdown-menu" aria-label="Courses">
                  <Link to="/courses/beginnerintro" className="dropdown-item" role="menuitem" tabIndex="0">
                    Beginner
                  </Link>
                  {/* <Link to="/courses/intermediate" className="dropdown-item" role="menuitem" tabIndex="0">
                    Intermediate
                  </Link> */}
                  <Link to="/courses/advanceintro" className="dropdown-item" role="menuitem" tabIndex="0">
                    Advanced
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/blog" 
              className="text-slate-700 font-medium hover:text-green-600 transition-colors"
            >
              Blog
            </Link>
            <a
              href="/#contact"
              onClick={handleContactClick}
              className="text-slate-700 font-medium hover:text-green-600 transition-colors"
            >
              Contact
            </a>
            <Link 
              to="/disclaimer" 
              className="text-slate-700 font-medium hover:text-green-600 transition-colors"
            >
              Policies
            </Link>
             {/* <Link 
              to="/careers" 
              className="text-slate-700 font-medium hover:text-green-600 transition-colors"
            >
              Careers
            </Link> */}
            
          </nav>

          {/* Desktop Auth Button */}
          <button
            onClick={handleContactClick}
            className="hidden md:flex px-6 h-10 items-center rounded-full border-2 hover:border-none border-green-600 text-green-600 font-semibold hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all"
            aria-label="Contact us"
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div id="mobile-menu" ref={mobileRef} className={`md:hidden bg-white border-t border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            <Link 
              to="/" 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Courses Dropdown */}
            <div className="mobile-courses-button">
              <button 
                className="w-full text-left mobile-nav-link !flex items-center gap-1 whitespace-nowrap"
                onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              >
                Courses
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mobile-courses-dropdown ${mobileCoursesOpen ? 'open' : ''}`}>
                  <Link 
                    to="/courses/beginnerintro" 
                    className="dropdown-item"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setMobileCoursesOpen(false)
                    }}
                  >
                    Beginner
                  </Link>
                  <Link 
                    to="/courses/intermediate" 
                    className="dropdown-item"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setMobileCoursesOpen(false)
                    }}
                  >
                    Intermediate
                  </Link>
                  <Link 
                    to="/courses/advanceintro" 
                    className="dropdown-item"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setMobileCoursesOpen(false)
                    }}
                  >
                    Advanced
                  </Link>
              </div>
            </div>

            <Link 
              to="/blog" 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <button
              className="mobile-nav-link text-left"
              onClick={() => { handleContactClick(); setMobileMenuOpen(false) }}
            >
              Contact
            </button>
            <Link 
              to="/disclaimer" 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Policies
            </Link>
            
             {/* <Link 
              to="/careers" 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link> */}
            {/* <Link 
              to="/login" 
              className="mobile-nav-link bg-green-50 text-green-600 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link> */}
          </div>
      </div>
    </header>
    </>
  )
}

export default TopNav
