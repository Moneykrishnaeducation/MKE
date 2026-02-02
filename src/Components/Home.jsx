import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes moveLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100px); }
        }
        @keyframes moveRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(100px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .float-medium {
          animation: float 8s ease-in-out infinite;
        }
        .move-left {
          animation: moveLeft 20s ease-in-out infinite;
        }
        .move-right {
          animation: moveRight 20s ease-in-out infinite;
        }
        .pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        .rotate-slow {
          animation: rotate 30s linear infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-green-500 rounded-full opacity-5 float-slow"></div>
        <div className="absolute top-1/3 -left-10 w-32 h-32 bg-blue-400 rounded-full opacity-5 float-medium"></div>
        <div className="absolute -bottom-10 right-1/4 w-48 h-48 bg-green-400 rounded-full opacity-5 move-left pulse-slow"></div>
        <div className="absolute top-1/2 -right-20 w-56 h-56 bg-blue-300 rounded-full opacity-5 move-right rotate-slow"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-300 rounded-full opacity-5"></div>

        {/* Content */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
            {/* Left Content */}
            <div className="text-center animate-slide-in-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Welcome to Moneykrishna Education
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md mx-auto animate-fade-in-up">
                Learn MT5 trading and master financial markets with our comprehensive education platform.
              </p>

              <Link
                to="/mt5-education"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 animate-scale-in"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Image - Trading Chart */}
            <div className="flex justify-center items-center w-full animate-slide-in-right">
              <svg className="w-full h-auto max-w-2xl" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <rect width="400" height="300" fill="#f0f9ff" opacity="0.5" rx="10"/>
                
                {/* Chart Title */}
                <text x="20" y="30" fontSize="18" fontWeight="bold" fill="#1e293b">Trading Growth</text>
                
                {/* Y-axis */}
                <line x1="50" y1="50" x2="50" y2="250" stroke="#cbd5e1" strokeWidth="2"/>
                
                {/* X-axis */}
                <line x1="50" y1="250" x2="380" y2="250" stroke="#cbd5e1" strokeWidth="2"/>
                
                {/* Y-axis labels */}
                <text x="25" y="260" fontSize="12" fill="#64748b">0</text>
                <text x="15" y="155" fontSize="12" fill="#64748b">50%</text>
                <text x="15" y="55" fontSize="12" fill="#64748b">100%</text>
                
                {/* Grid lines */}
                <line x1="50" y1="150" x2="380" y2="150" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5,5"/>
                
                {/* Upward trending line - Green */}
                <polyline points="70,220 120,200 170,160 220,140 270,100 320,80 370,60" 
                  fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Gradient fill under line */}
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#16a34a', stopOpacity: 0.3}} />
                    <stop offset="100%" style={{stopColor: '#16a34a', stopOpacity: 0}} />
                  </linearGradient>
                </defs>
                <polygon points="70,220 120,200 170,160 220,140 270,100 320,80 370,60 370,250 320,250 270,250 220,250 170,250 120,250 70,250" 
                  fill="url(#chartGradient)"/>
                
                {/* Data points - Green circles */}
                <circle cx="70" cy="220" r="4" fill="#16a34a"/>
                <circle cx="120" cy="200" r="4" fill="#16a34a"/>
                <circle cx="170" cy="160" r="4" fill="#16a34a"/>
                <circle cx="220" cy="140" r="4" fill="#16a34a"/>
                <circle cx="270" cy="100" r="4" fill="#16a34a"/>
                <circle cx="320" cy="80" r="4" fill="#16a34a"/>
                <circle cx="370" cy="60" r="4" fill="#16a34a"/>
                
                {/* X-axis labels */}
                <text x="60" y="275" fontSize="12" fill="#64748b">Jan</text>
                <text x="160" y="275" fontSize="12" fill="#64748b">Apr</text>
                <text x="260" y="275" fontSize="12" fill="#64748b">Jul</text>
                <text x="350" y="275" fontSize="12" fill="#64748b">Dec</text>
                
                {/* Decorative elements */}
                <circle cx="370" cy="60" r="8" fill="#16a34a" opacity="0.2"/>
              </svg>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Comprehensive Courses</h3>
              <p className="text-slate-600">Learn MT5 trading from basics to advanced strategies.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Community</h3>
              <p className="text-slate-600">Connect with experienced traders and industry experts.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Practical Knowledge</h3>
              <p className="text-slate-600">Real-world trading strategies and practical insights.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home