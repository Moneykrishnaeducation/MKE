import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import YouTubePlayer from '../Layout/YouTubePlayer'
import CourseLayout from '../Layout/CourseLayout'

const BeginnerCourse = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const handleJoinCourse = () => {
    navigate('/', { state: { scrollToContact: true } })
  }

  const courseData = {
    attendees: "43,240",
    registered: "8",
    upcomingDate: "31 DEC, 2025",
    totalDays: "12",
    totalHours: "245"
  }

  const companies = [
    { name: "Google Adsense", icon: "🔵" },
    { name: "Google", icon: "🌐" },
    { name: "Android", icon: "🤖" },
    { name: "Google Domains", icon: "✓" }
  ]

  const scheduleSlides = [
    { day: 1, title: "Welcome, Welcome, Welcome", duration: "6hrs", time: "7:00PM - 11:00PM" },
    { day: 2, title: "Who's Carl Jung? What is archetypes?", duration: "6hrs", time: "7:00PM - 11:00PM" },
    { day: 3, title: "First Quadrant: Princess, Prince", duration: "6hrs", time: "7:00PM - 11:00PM" },
    { day: 4, title: "First Quadrant: Hermes, Aphrodite", duration: "6hrs", time: "7:00PM - 11:00PM" },
    { day: 5, title: "Second Quadrant: Blacksmith, Priest", duration: "6hrs", time: "7:00PM - 11:00PM" },
    { day: 6, title: "Second Quadrant: Dark Mage, Hekatae", duration: "6hrs", time: "7:00PM - 11:00PM" }
  ]

  // All slides for the page
  const slides = [
    // Slide 1: Forex Trading Introduction
    {
      id: 'forex',
      title: 'Forex Trading Education',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          {/* Breadcrumb */}
          <p className="text-xs text-gray-600 mb-3">Home > Courses > Forex Trading</p>

          {/* Main Content Layout - Image and Content Side by Side */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/Forex-Trading.jpg" 
                  alt="Forex Trading"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Stats Below Image */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-teal-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">43,240</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-100 p-3 rounded-lg border-l-4 border-emerald-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">8</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg border-l-4 border-purple-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-purple-700">31 DEC, 2025</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Course launch date</p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-amber-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🔒</span>
                  <p className="text-gray-700 font-bold uppercase tracking-wider text-xs">Secure Payment Options</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg text-[10px] font-semibold text-blue-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">💳</span> VISA
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-lg text-[10px] font-semibold text-red-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">🔴</span> MC
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-amber-400 rounded-lg text-[10px] font-semibold text-amber-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">🏦</span> AMEX
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content Columns */}
            <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-6 overflow-y-auto pr-0 lg:pr-4">
              {/* Heading Section */}
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-3 lg:p-4 rounded-r-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-3">
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Forex Trading Education</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">
                    Join Course
                  </button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Forex trading education is one of the most in-demand financial skill sets for both beginners and experienced market participants. Currency movements influence global economies, businesses, and individual finances—making forex knowledge an essential component of modern financial literacy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    At MoneyKrishna Education, we focus on structured learning, practical understanding, and disciplined trading psychology, delivered through professional training programs.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our educational platform is available 24/6, allowing learners to study global market behavior at their own pace while understanding how international currencies interact in real time.
                  </p>
                </div>
              </div>

              {/* Key Learning Features Section */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h4 className="text-lg font-bold text-emerald-700">Key Learning Features</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn 90+ major, minor, and cross currency pairs</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Understand market movements in rising and falling conditions</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Develop risk management and capital preservation skills</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Gain clarity on leverage concepts with real-world examples</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Build confidence through theory + practical chart analysis</p>
                  </div>
                </div>
              </div>

              {/* What Makes Us Different Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⭐</span>
                  <h4 className="text-lg font-bold text-blue-700">What Makes Us Different</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Education-first approach – We teach skills and discipline</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Advanced learning tools and live market examples</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Real-market simulations with professional liquidity</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Institutional-grade execution concepts</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learner-friendly with focus on long-term skill development</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Professional platforms customized for learning and practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 2: Precious Metals Introduction
    {
      id: 'intro',
      title: 'Precious Metals Trading',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          {/* Breadcrumb */}
          <p className="text-xs text-gray-600 mb-3">Home > Courses > Precious Metals Trading</p>

          {/* Main Content Layout - Image and Content Side by Side */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/Metal-trading.png" 
                  alt="Precious Metals Trading"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Stats Below Image */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-yellow-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">28,560</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-100 p-3 rounded-lg border-l-4 border-emerald-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">15</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-3 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-yellow-700">15 MAR, 2026</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Course launch date</p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-amber-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🔒</span>
                  <p className="text-gray-700 font-bold uppercase tracking-wider text-xs">Secure Payment Options</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg text-[10px] font-semibold text-blue-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">💳</span> VISA
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-lg text-[10px] font-semibold text-red-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">🔴</span> MC
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-amber-400 rounded-lg text-[10px] font-semibold text-amber-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">🏦</span> AMEX
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content Columns */}
            <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-6 overflow-y-auto pr-0 lg:pr-4">
              {/* Heading Section */}
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-3 lg:p-4 rounded-r-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-3">
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Precious Metals Trading</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">
                    Join Course
                  </button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Precious metals education is one of the most sought-after financial skill sets for both beginners and experienced market participants. Understanding how Gold, Silver, Platinum, and Palladium behave across different economic cycles is essential for modern financial literacy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    At MoneyKrishna Education, we focus on teaching how precious metals move in relation to macro-economic trends, currency strength, and global events, using historical data and real-time market examples for learning purposes.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our educational platform is available 24/6, allowing learners to study precious metals market behavior at their own pace while understanding how these assets interact with economic indicators and global uncertainty.
                  </p>
                </div>
              </div>

              {/* Key Learning Features Section */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h4 className="text-lg font-bold text-emerald-700">Key Learning Features</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn the fundamentals of 6 major precious metal pairs against USD and EUR</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Understand how metals react to inflation, interest rate changes, and economic instability</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study the role of precious metals as risk-balancing assets during market volatility</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Analyze price cycles using technical and fundamental analysis methods</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Build confidence through theory + practical chart analysis</p>
                  </div>
                </div>
              </div>

              {/* What Makes Us Different Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⭐</span>
                  <h4 className="text-lg font-bold text-blue-700">What Makes Us Different</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Concept-driven curriculum focused on market behavior, not speculation</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Exposure to institutional pricing concepts for realistic learning scenarios</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Education on how global trading infrastructure works</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learner-friendly teaching methodology suitable for all levels</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">MT5-based educational platforms for chart study and analysis practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Indices Market
    {
      id: 'indices',
      title: 'Indices Trading Market',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          {/* Breadcrumb */}
          <p className="text-xs text-gray-600 mb-3">Home > Courses > Indices Trading</p>

          {/* Main Content Layout - Image and Content Side by Side */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/indices-trading.jpg" 
                  alt="Indices Market"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Stats Below Image */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-cyan-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">21,840</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-100 p-3 rounded-lg border-l-4 border-emerald-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">12</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-3 rounded-lg border-l-4 border-cyan-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-cyan-700">20 APR, 2026</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Course launch date</p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-amber-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🔒</span>
                  <p className="text-gray-700 font-bold uppercase tracking-wider text-xs">Secure Payment Options</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg text-[10px] font-semibold text-blue-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">💳</span> VISA
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-lg text-[10px] font-semibold text-red-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">🔴</span> MC
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-amber-400 rounded-lg text-[10px] font-semibold text-amber-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">🏦</span> AMEX
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content Columns */}
            <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-6 overflow-y-auto pr-0 lg:pr-4">
              {/* Heading Section */}
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-3 lg:p-4 rounded-r-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-3">
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Indices Market Trading</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">
                    Join Course
                  </button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Index market education provides insight into how entire economies and sectors perform, rather than individual companies. Indices represent groups of leading stocks and are widely used to measure market sentiment, economic strength, and long-term growth trends.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    MoneyKrishna Education trains learners to understand how major global indices move, what drives them, and how professionals analyze index behavior in both rising and falling market conditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our educational platform provides real-market data, analytical frameworks, and learning tools to help you master indices trading concepts at your own pace.
                  </p>
                </div>
              </div>

              {/* Key Learning Features Section */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h4 className="text-lg font-bold text-emerald-700">Key Learning Features</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn about major global stock indices without owning individual shares</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Understand how indices reflect economic data, corporate performance, and investor sentiment</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study both upward and downward market cycles from an analytical perspective</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Gain clarity on leverage concepts purely for academic understanding, where applicable</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Improve portfolio analysis and diversification knowledge</p>
                  </div>
                </div>
              </div>

              {/* What Makes Us Different Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⭐</span>
                  <h4 className="text-lg font-bold text-blue-700">What Makes Us Different</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Professionally designed curriculum explaining index construction and movement</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Real-market data used for analysis and learning, not execution</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Simplified explanations of complex index dynamics</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Practice environments focused on skill-building and discipline</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learning delivered through professional analytical tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Commodities Market
    {
      id: 'commodities',
      title: 'Commodities Trading',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          {/* Breadcrumb */}
          <p className="text-xs text-gray-600 mb-3">Home > Courses > Commodities Trading</p>

          {/* Main Content Layout - Image and Content Side by Side */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/Commodity.png" 
                  alt="Commodities Market"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Stats Below Image */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-orange-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">19,230</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-100 p-3 rounded-lg border-l-4 border-emerald-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">18</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg border-l-4 border-orange-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-orange-700">10 MAY, 2026</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Course launch date</p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-amber-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🔒</span>
                  <p className="text-gray-700 font-bold uppercase tracking-wider text-xs">Secure Payment Options</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg text-[10px] font-semibold text-blue-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">💳</span> VISA
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-lg text-[10px] font-semibold text-red-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">🔴</span> MC
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-amber-400 rounded-lg text-[10px] font-semibold text-amber-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">🏦</span> AMEX
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content Columns */}
            <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-6 overflow-y-auto pr-0 lg:pr-4">
              {/* Heading Section */}
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-3 lg:p-4 rounded-r-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-3">
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Commodities Trading</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">
                    Join Course
                  </button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Commodity market education introduces learners to globally traded physical goods such as coffee, wheat, cocoa, sugar, energy products, and metals. Commodity prices are driven by supply chains, weather patterns, geopolitics, and global demand.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    At MoneyKrishna Education, commodities are taught as a key pillar of market diversification and macroeconomic understanding, with focus on how real-world factors influence pricing.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our structured approach helps learners analyze commodity trends, understand supply-demand dynamics, and develop analytical frameworks for informed decision-making.
                  </p>
                </div>
              </div>

              {/* Key Learning Features Section */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h4 className="text-lg font-bold text-emerald-700">Key Learning Features</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study a wide range of global commodities without physical ownership</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Understand how supply, demand, and logistics influence price movement</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn how commodities react to inflation and currency fluctuations</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Analyze seasonal trends and historical cycles for better insights</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Develop structured analytical thinking through case studies and charts</p>
                  </div>
                </div>
              </div>

              {/* What Makes Us Different Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⭐</span>
                  <h4 className="text-lg font-bold text-blue-700">What Makes Us Different</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Education focused on real-world commodity economics</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Exposure to professional-grade market data for learning accuracy</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Clear explanations of commodity pricing mechanisms</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Beginner-friendly yet institutionally relevant curriculum</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Practice analysis using professional educational platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Cryptocurrency Market
    {
      id: 'crypto',
      title: 'Cryptocurrency Trading',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          {/* Breadcrumb */}
          <p className="text-xs text-gray-600 mb-3">Home > Courses > Cryptocurrency Trading</p>

          {/* Main Content Layout - Image and Content Side by Side */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/Crypto.png" 
                  alt="Cryptocurrency Market"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Stats Below Image */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-indigo-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">34,560</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-100 p-3 rounded-lg border-l-4 border-emerald-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">22</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-3 rounded-lg border-l-4 border-indigo-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-indigo-700">25 MAY, 2026</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Course launch date</p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-amber-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🔒</span>
                  <p className="text-gray-700 font-bold uppercase tracking-wider text-xs">Secure Payment Options</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg text-[10px] font-semibold text-blue-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">💳</span> VISA
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-lg text-[10px] font-semibold text-red-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">🔴</span> MC
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-amber-400 rounded-lg text-[10px] font-semibold text-amber-700 hover:shadow-md transition-all hover:scale-105">
                    <span className="text-sm">🏦</span> AMEX
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content Columns */}
            <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-6 overflow-y-auto pr-0 lg:pr-4">
              {/* Heading Section */}
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Cryptocurrency Trading</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-sm whitespace-nowrap ml-2">
                    Join Course
                  </button>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Cryptocurrency education helps learners understand one of the most rapidly evolving financial ecosystems. Digital assets like Bitcoin, Ethereum, and other major cryptocurrencies operate on blockchain technology and trade 24/6, independent of traditional market hours.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    MoneyKrishna Education focuses on technology, market psychology, volatility, and risk awareness—providing educational foundation for understanding digital asset behavior in modern markets.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Learn how to analyze crypto market structures, understand blockchain mechanics, and develop informed perspectives on emerging technologies reshaping finance.
                  </p>
                </div>
              </div>

              {/* Key Learning Features Section */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h4 className="text-lg font-bold text-emerald-700">Key Learning Features</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn how major cryptocurrencies function and differ from traditional assets</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Understand liquidity, volatility, and market structure in digital assets</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study blockchain fundamentals and transaction mechanisms</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Analyze price behavior during high-volatility events</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn responsible risk awareness in an emerging market environment</p>
                  </div>
                </div>
              </div>

              {/* What Makes Us Different Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⭐</span>
                  <h4 className="text-lg font-bold text-blue-700">What Makes Us Different</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Technology-first and risk-aware teaching approach</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Real-market examples used strictly for learning and analysis</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Clear distinction between education and investment activity</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Simplified explanation of complex blockchain concepts</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Professional educational tools for chart analysis and market observation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const slideTitles = {
    forex: "Forex Trading",
    intro: "Precious Metals Trading",
    indices: "Indices Market",
    commodities: "Commodities Market",
    crypto: "Cryptocurrency Market"
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return <CourseLayout title={slideTitles[slides[currentSlide].id]} level="Beginner">
    
    {/* Full Page Slide Container with Current Slide Centered and Next Preview on Right */}
    <div className="relative">
      <div className="relative">
        {/* Current Slide - Centered */}
        <div className="w-full bg-white rounded-lg p-2 sm:p-6 min-h-[500px] flex flex-col justify-between border border-gray-300 relative">
          {slides[currentSlide].content}

          {/* Slide Counter */}
          <div className="text-right text-gray-600 text-sm mt-4">
            {currentSlide + 1} / {slides.length}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 sm:-translate-x-10 bg-teal-600 hover:bg-teal-700 text-white p-3 sm:p-4 rounded-full transition-colors text-lg sm:text-xl z-10"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 sm:translate-x-10 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white p-3 sm:p-4 rounded-full transition-all duration-300 text-lg sm:text-xl z-10 shadow-lg hover:shadow-teal-500/50 hover:scale-110 active:scale-95"
          >
            ▶
          </button>
        </div>

        {/* Next Slide Preview - Top Right Corner - Compact Enhanced */}
        <div className="absolute -top-8 sm:-top-16 lg:-top-24 -right-0 sm:-right-8 w-40 sm:w-72 h-20 sm:h-32 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 rounded-xl p-1 sm:p-4 border-2 border-teal-400 opacity-85 hover:opacity-100 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-teal-500/50 hover:border-teal-300 group" onClick={nextSlide}>
          <div className="flex flex-col justify-between h-full">
            {/* Top Section */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-0.5 sm:gap-2 mb-0.5 sm:mb-2">
                  <span className="text-xs sm:text-lg">📺</span>
                  <p className="text-[10px] sm:text-xs font-bold text-teal-300 uppercase tracking-widest">Next</p>
                </div>
                <p className="text-[10px] sm:text-sm font-bold text-white line-clamp-1">
                  {slides[(currentSlide + 1) % slides.length].title || 'Next Course'}
                </p>
              </div>
              <span className="text-sm sm:text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-center pt-2 border-t border-teal-400/30">
              <div className="flex items-center gap-1">
                <span className="text-teal-400 text-xs font-bold">
                  {(currentSlide + 2) % slides.length || slides.length}/{slides.length}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-teal-400 text-xs">⚡</span>
                <span className="text-teal-300 text-xs font-semibold">Swipe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-20 flex-wrap">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-3 rounded-full transition-all ${
              idx === currentSlide
                ? 'bg-teal-400 w-8'
                : 'bg-gray-600 w-3 hover:bg-gray-500'
            }`}
            title={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>

  </CourseLayout>

}
export default BeginnerCourse