import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import YouTubePlayer from '../Layout/YouTubePlayer'
import CourseLayout from '../Layout/CourseLayout'

const AdvanceCourse = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const handleJoinCourse = () => {
    navigate('/', { state: { scrollToContact: true } })
  }

  const courseData = {
    attendees: "15,680",
    registered: "6",
    upcomingDate: "28 FEB, 2026",
    totalDays: "10",
    totalHours: "180"
  }

  const slides = [
    // Slide 1: Dow Theory Education
    {
      id: 'dow',
      title: 'Dow Theory Education',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          {/* Breadcrumb */}
          <p className="text-xs text-gray-600 mb-3">Home &gt; Courses &gt; Dow Theory</p>

          {/* Main Content Layout - Image and Content Side by Side */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/Dow-Theory.png" 
                  alt="Dow Theory"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Stats Below Image */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-teal-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg border-l-4 border-teal-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">18,920</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-100 p-3 rounded-lg border-l-4 border-emerald-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">11</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg border-l-4 border-teal-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-teal-700 blink">Join Soon</p>
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
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Dow Theory Education</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">
                    Join Course
                  </button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Dow Theory is one of the foundational frameworks of technical market analysis and plays a critical role in understanding overall market structure, trend behavior, and price psychology. Originally developed to explain stock market movements, Dow Theory principles are widely applied across indices, commodities, and currency markets for educational analysis.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    At MoneyKrishna Education, Dow Theory is taught as a core analytical skill, helping learners understand how markets move, trend, and correct—without prediction or speculation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our structured learning approach focuses on market logic, trend confirmation, and disciplined interpretation, supported by historical and real-time chart examples in an educational environment.
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
                    <p className="text-gray-700">Understand the six core principles of Dow Theory and how they explain market behavior over time</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn how primary, secondary, and minor trends interact across different market phases</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study accumulation, public participation, and distribution phases using historical and live-market examples</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Develop skill in identifying trend confirmation and divergence for educational analysis</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Build a strong foundation for advanced technical concepts by mastering price-action logic</p>
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
                    <p className="text-gray-700">Education-focused teaching that emphasizes interpretation, not prediction</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Clear breakdown of classical market theories into modern, easy-to-understand lessons</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Practical chart-based learning using real market data for concept clarity</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Ideal for beginners and experienced learners seeking deeper market structure understanding</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Encourages disciplined thinking and patience—essential traits for long-term market education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 2: Algorithmic Trading
    {
      id: 'algo',
      title: 'Algorithmic Trading',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          {/* Breadcrumb */}
          <p className="text-xs text-gray-600 mb-3">Home &gt; Courses &gt; Advanced Trading</p>

          {/* Main Content Layout - Image and Content Side by Side */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/Algo-Trading.png" 
                  alt="Algorithmic Trading"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Stats Below Image */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-teal-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg border-l-4 border-teal-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">12,450</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-100 p-3 rounded-lg border-l-4 border-emerald-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">9</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg border-l-4 border-teal-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-teal-700 blink">Join Soon</p>
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
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Algorithmic Trading Education</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">
                    Join Course
                  </button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Algorithmic Trading (Algo Trading) focuses on understanding how automated systems analyze markets, execute trades, and manage rules-based decision-making. This field combines market knowledge, logic, data interpretation, and technology, making it one of the most valuable modern financial skill sets.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    At MoneyKrishna Education, Algo Trading is taught strictly as an educational and analytical discipline, helping learners understand how strategies are designed, tested, and evaluated—without providing live trading systems or execution services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Learners gain exposure to the conceptual framework behind automation, not just tools.
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
                    <p className="text-gray-700">Learn the fundamentals of rule-based trading logic and strategy construction</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Understand how indicators, price data, and conditions are translated into algorithms</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study backtesting concepts to evaluate strategy behavior using historical data</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Explore risk controls, position sizing logic, and execution rules in simulations</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Gain insight into how institutions use automation for consistency and discipline</p>
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
                    <p className="text-gray-700">Education-first approach focused on understanding systems, not selling bots or signals</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Beginner-friendly explanations of complex automation concepts</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Structured curriculum combining market theory with logical thinking</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Exposure to professional-grade concepts such as latency, execution logic, and system discipline</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Emphasis on learning how automation reduces emotional bias through rule-based structure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Elliott Wave Theory
    {
      id: 'elliott',
      title: 'Elliott Wave Theory',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          {/* Breadcrumb */}
          <p className="text-xs text-gray-600 mb-3">Home &gt; Courses &gt; Elliott Wave Theory</p>

          {/* Main Content Layout - Image and Content Side by Side */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/Elliot_Wave-Theory.png" 
                  alt="Elliott Wave Theory"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Stats Below Image */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-teal-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg border-l-4 border-teal-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">14,380</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-100 p-3 rounded-lg border-l-4 border-amber-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">12</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-100 p-3 rounded-lg border-l-4 border-orange-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-orange-700 blink">Join Soon</p>
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
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Elliott Wave Theory Education</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">
                    Join Course
                  </button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Elliott Wave Theory is an advanced market analysis framework based on price psychology and crowd behavior. It explains how financial markets move in repetitive wave patterns driven by human emotions such as fear, optimism, and confidence.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    At MoneyKrishna Education, Elliott Wave Theory is taught as a skill of observation and structure, not prediction. Learners are guided to understand how wave patterns form, evolve, and invalidate—using disciplined analytical rules.
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
                    <p className="text-gray-700">Understand impulse and corrective wave structures using rule-based identification</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-yellow-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn how market psychology reflects through wave formations across timeframes</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-yellow-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study Fibonacci relationships purely for educational pattern analysis</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-yellow-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Develop skills to label, validate, and invalidate wave counts logically</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-yellow-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Improve patience and discipline by learning structured market observation</p>
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
                    <p className="text-gray-700">Simplified teaching approach for a traditionally complex theory</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Strong focus on rules, guidelines, and risk awareness in wave interpretation</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Extensive use of real-market chart examples for concept clarity</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Emphasis on flexibility and probability, not fixed predictions</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Ideal for learners seeking deeper insight into market psychology and structure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Intraday Trading Education
    {
      id: 'intraday',
      title: 'Intraday Trading',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          <p className="text-xs text-gray-600 mb-3">Home &gt; Courses &gt; Advanced Trading</p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/indices-trading.jpg" 
                  alt="Intraday Trading"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-teal-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg border-l-4 border-teal-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">17,340</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-rose-50 to-pink-100 p-3 rounded-lg border-l-4 border-rose-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">16</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-red-100 p-3 rounded-lg border-l-4 border-pink-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-pink-700 blink">Join Soon</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-amber-200 rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-3"><span className="text-lg">🔒</span><p className="text-gray-700 font-bold uppercase tracking-wider text-xs">Secure Payment Options</p></div>
                <div className="flex gap-2 flex-wrap"><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-300 rounded-lg text-[10px] font-semibold text-teal-700 hover:scale-105"><span className="text-sm">💳</span> VISA</div><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-lg text-[10px] font-semibold text-red-700 hover:scale-105"><span className="text-sm">🔴</span> MC</div><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-amber-400 rounded-lg text-[10px] font-semibold text-amber-700 hover:scale-105"><span className="text-sm">🏦</span> AMEX</div></div>
              </div>
            </div>
            <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-6 overflow-y-auto pr-0 lg:pr-4">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-3 lg:p-4 rounded-r-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-3">
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Intraday Trading Education</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">Join Course</button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Intraday Trading focuses on understanding how financial markets behave within a single trading session. It emphasizes time-based analysis, market structure, and disciplined decision-making rather than holding positions overnight.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    At MoneyKrishna Education, intraday trading is taught strictly as an educational skill, helping learners study short-term market movements, volatility behavior, and execution logic through simulated and chart-based learning environments.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl">🎯</span><h4 className="text-lg font-bold text-emerald-700">Key Learning Features</h4></div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Understand intraday market structure, sessions, and liquidity behavior</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-red-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn how price reacts around key levels during market hours</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-red-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study volatility, volume, and momentum purely for educational analysis</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-red-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Develop discipline in timing, planning, and exit logic</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-red-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Practice intraday concepts without real-money pressure using learning simulations</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl">⭐</span><h4 className="text-lg font-bold text-rose-700">What Makes Us Different</h4></div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-rose-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Focus on structured learning, not fast-profit claims</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-rose-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Emphasis on discipline, preparation, and risk awareness</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-rose-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Real-market intraday examples used for educational clarity</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-rose-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Helps learners understand time-based decision frameworks</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-rose-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Designed to build consistency and patience in short-term analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Options Scalping Education
    {
      id: 'optionsscalp',
      title: 'Options Scalping',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          <p className="text-xs text-gray-600 mb-3">Home &gt; Courses &gt; Advanced Trading</p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/Options-Scalping.png" 
                  alt="Options Scalping"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-teal-200 rounded-xl p-4 shadow-lg">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg border-l-4 border-teal-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">10,200</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-100 p-3 rounded-lg border-l-4 border-emerald-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">7</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg border-l-4 border-teal-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-teal-700 blink">Join Soon</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-amber-200 rounded-xl p-4 shadow-lg"><div className="flex items-center gap-2 mb-3"><span className="text-lg">🔒</span><p className="text-gray-700 font-bold uppercase tracking-wider text-xs">Secure Payment Options</p></div><div className="flex gap-2 flex-wrap"><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg text-[10px] font-semibold text-blue-700 hover:scale-105"><span className="text-sm">💳</span> VISA</div><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-lg text-[10px] font-semibold text-red-700 hover:scale-105"><span className="text-sm">🔴</span> MC</div><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-amber-400 rounded-lg text-[10px] font-semibold text-amber-700 hover:scale-105"><span className="text-sm">🏦</span> AMEX</div></div></div>
            </div>
            <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-6 overflow-y-auto pr-0 lg:pr-4">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-3 lg:p-4 rounded-r-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-3">
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Options Scalping Education</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">Join Course</button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Options Scalping involves studying very short-duration price movements in options contracts to understand volatility behavior, premium changes, and time sensitivity. This topic requires strong conceptual clarity and disciplined execution logic.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    At MoneyKrishna Education, options scalping is taught only as an educational framework, helping learners understand how option premiums respond to price, volatility, and time—without providing trading recommendations or live strategies.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl">🎯</span><h4 className="text-lg font-bold text-emerald-700">Key Learning Features</h4></div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn how option premiums move with underlying price changes</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Understand volatility impact, time decay, and liquidity behavior</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study bid-ask spreads and execution challenges in fast markets</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Develop rule-based thinking for short-duration market observation</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Gain clarity on risk exposure and position sizing in options analysis</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl">⭐</span><h4 className="text-lg font-bold text-blue-700">What Makes Us Different</h4></div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Education-first approach focused on understanding options mechanics</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Clear explanation of Greeks for conceptual learning</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Real-time examples used only for observation and analysis</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Emphasis on discipline, speed awareness, and risk control logic</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Suitable for learners seeking deeper insight into derivatives behavior</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Swing Trading Education
    {
      id: 'swing',
      title: 'Swing Trading',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          <p className="text-xs text-gray-600 mb-3">Home &gt; Courses &gt; Advanced Trading</p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/Swing-Trading.png" 
                  alt="Swing Trading"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-teal-200 rounded-xl p-4 shadow-lg">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-3 rounded-lg border-l-4 border-pink-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">14,100</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-rose-50 to-pink-100 p-3 rounded-lg border-l-4 border-rose-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">9</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-50 to-rose-100 p-3 rounded-lg border-l-4 border-pink-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-rose-700 blink">Join Soon</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-amber-200 rounded-xl p-4 shadow-lg"><div className="flex items-center gap-2 mb-3"><span className="text-lg">🔒</span><p className="text-gray-700 font-bold uppercase tracking-wider text-xs">Secure Payment Options</p></div><div className="flex gap-2 flex-wrap"><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg text-[10px] font-semibold text-blue-700 hover:scale-105"><span className="text-sm">💳</span> VISA</div><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-lg text-[10px] font-semibold text-red-700 hover:scale-105"><span className="text-sm">🔴</span> MC</div><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-amber-400 rounded-lg text-[10px] font-semibold text-amber-700 hover:scale-105"><span className="text-sm">🏦</span> AMEX</div></div></div>
            </div>
            <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-6 overflow-y-auto pr-0 lg:pr-4">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-3 lg:p-4 rounded-r-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-3">
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Swing Trading Education</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">Join Course</button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Swing Trading focuses on analyzing market movements over multiple days to weeks, aiming to understand medium-term trends and price swings within broader market structure.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    At MoneyKrishna Education, swing trading is taught as a market observation and planning skill, emphasizing trend analysis, structure identification, and risk management principles through historical and live chart studies.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl">🎯</span><h4 className="text-lg font-bold text-emerald-700">Key Learning Features</h4></div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn how to identify trend continuation and correction phases</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-pink-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Understand higher timeframe analysis and multi-timeframe alignment</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-pink-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study support, resistance, and market structure shifts</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-pink-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Develop patience and planning skills for non-intraday markets</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-pink-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Practice trade planning in simulated learning environments</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl">⭐</span><h4 className="text-lg font-bold text-blue-700">What Makes Us Different</h4></div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Structured curriculum focused on clarity and consistency</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Emphasis on risk-to-reward logic and capital preservation</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Real-market chart examples for educational interpretation</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Ideal for learners balancing markets with other commitments</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Encourages disciplined, rule-based market study</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Technical Indicators Education
    {
      id: 'indicators',
      title: 'Technical Indicators',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          <p className="text-xs text-gray-600 mb-3">Home &gt; Courses &gt; Advanced Trading</p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/Technical-Indicators.png" 
                  alt="Technical Indicators"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-cyan-200 rounded-xl p-4 shadow-lg">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-3 rounded-lg border-l-4 border-cyan-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-cyan-700 bg-clip-text text-transparent">16,700</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-100 p-3 rounded-lg border-l-4 border-teal-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">13</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-50 to-teal-100 p-3 rounded-lg border-l-4 border-cyan-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-teal-700 blink">Join Soon</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-amber-200 rounded-xl p-4 shadow-lg"><div className="flex items-center gap-2 mb-3"><span className="text-lg">🔒</span><p className="text-gray-700 font-bold uppercase tracking-wider text-xs">Secure Payment Options</p></div><div className="flex gap-2 flex-wrap"><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg text-[10px] font-semibold text-blue-700 hover:scale-105"><span className="text-sm">💳</span> VISA</div><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-lg text-[10px] font-semibold text-red-700 hover:scale-105"><span className="text-sm">🔴</span> MC</div><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-amber-400 rounded-lg text-[10px] font-semibold text-amber-700 hover:scale-105"><span className="text-sm">🏦</span> AMEX</div></div></div>
            </div>
            <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-6 overflow-y-auto pr-0 lg:pr-4">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-3 lg:p-4 rounded-r-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-3">
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Technical Indicators Education</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">Join Course</button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Technical Indicators are mathematical tools used to analyze price behavior, momentum, volatility, and trend conditions. When understood correctly, they support structured market analysis rather than decision-making by assumption.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    At MoneyKrishna Education, indicators are taught as supporting analytical tools, not standalone decision-makers. Learners focus on interpretation, limitations, and context-based usage.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl">🎯</span><h4 className="text-lg font-bold text-emerald-700">Key Learning Features</h4></div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Understand the logic behind popular indicators such as RSI, MACD, Moving Averages, and Bollinger Bands</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-cyan-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn how indicators react to price changes and market conditions</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-cyan-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study overbought, oversold, and trend-strength concepts</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-cyan-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Combine indicators with price action for structured analysis</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-cyan-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Avoid indicator overload through clarity-driven learning</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl">⭐</span><h4 className="text-lg font-bold text-blue-700">What Makes Us Different</h4></div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Concept-based teaching instead of indicator stacking</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Clear explanation of indicator limitations and false signals</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Practical chart examples for better understanding</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Focus on market context rather than mechanical use</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Builds analytical confidence through disciplined interpretation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Candlestick Education
    {
      id: 'candlestick',
      title: 'Candlestick Education',
      content: (
        <div className="w-full h-full flex flex-col justify-between">
          <p className="text-xs text-gray-600 mb-3">Home &gt; Courses &gt; Advanced Trading</p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 overflow-hidden">
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <div className="flex items-center justify-center rounded-lg shadow-2xl overflow-hidden h-48 lg:h-auto">
                <img 
                  src="/Candlesticks.png" 
                  alt="Candlestick Education"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-teal-200 rounded-xl p-4 shadow-lg">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg border-l-4 border-orange-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">👥 Attended This Course</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">18,500</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Active learners</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-orange-100 p-3 rounded-lg border-l-4 border-amber-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📝 Registered Upcoming</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">15</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">New registrations</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-100 p-3 rounded-lg border-l-4 border-orange-500">
                    <p className="text-gray-600 text-[10px] mb-1 font-semibold uppercase tracking-wide">📅 Next Batch</p>
                    <p className="text-base font-bold text-orange-700 blink">Join Soon</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-amber-200 rounded-xl p-4 shadow-lg"><div className="flex items-center gap-2 mb-3"><span className="text-lg">🔒</span><p className="text-gray-700 font-bold uppercase tracking-wider text-xs">Secure Payment Options</p></div><div className="flex gap-2 flex-wrap"><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg text-[10px] font-semibold text-blue-700 hover:scale-105"><span className="text-sm">💳</span> VISA</div><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-lg text-[10px] font-semibold text-red-700 hover:scale-105"><span className="text-sm">🔴</span> MC</div><div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-amber-400 rounded-lg text-[10px] font-semibold text-amber-700 hover:scale-105"><span className="text-sm">🏦</span> AMEX</div></div></div>
            </div>
            <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-6 overflow-y-auto pr-0 lg:pr-4">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-3 lg:p-4 rounded-r-lg">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2 mb-3">
                  <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">Candlestick Education</h3>
                  <button onClick={handleJoinCourse} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-3 lg:px-4 py-2 rounded-lg font-semibold text-xs lg:text-sm whitespace-nowrap w-full lg:w-auto">Join Course</button>
                </div>
                <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Candlesticks visually represent price behavior, sentiment, and intraday psychology. Understanding candlestick structure helps learners interpret how buyers and sellers interact within specific time periods.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    At MoneyKrishna Education, candlesticks are taught as a price-reading skill, not predictive patterns. The focus is on understanding context, structure, and confirmation.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl">🎯</span><h4 className="text-lg font-bold text-emerald-700">Key Learning Features</h4></div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-emerald-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Understand candlestick anatomy: open, high, low, and close</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Learn common candlestick formations and their market meaning</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Study buyer–seller strength using candle size and wicks</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Analyze candles in combination with support, resistance, and trends</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Avoid pattern memorization by focusing on logic and context</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl">⭐</span><h4 className="text-lg font-bold text-blue-700">What Makes Us Different</h4></div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Simple, logic-based teaching for visual clarity</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Emphasis on market psychology behind candle formation</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Real-market chart examples for practical understanding</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Encourages patience and confirmation-based analysis</p>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded hover:bg-white/50">
                    <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                    <p className="text-gray-700">Builds a strong foundation for all technical analysis methods</p>
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

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slideTitles = {
    dow: "Dow Theory",
    algo: "Algorithmic Trading",
    elliott: "Elliott Wave Theory",
    intraday: "Intraday Trading",
    optionsscalp: "Options Scalping",
    swing: "Swing Trading",
    indicators: "Technical Indicators",
    candlestick: "Candlestick Education"
  }

  return <CourseLayout title={slideTitles[slides[currentSlide].id]} level="Advanced">
    
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
export default AdvanceCourse