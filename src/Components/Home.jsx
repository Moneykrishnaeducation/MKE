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
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-teal-500 rounded-full opacity-5 float-slow"></div>
        <div className="absolute top-1/3 -left-10 w-32 h-32 bg-purple-400 rounded-full opacity-5 float-medium"></div>
        <div className="absolute -bottom-10 right-1/4 w-48 h-48 bg-yellow-300 rounded-full opacity-5 move-left pulse-slow"></div>
        <div className="absolute top-1/2 -right-20 w-56 h-56 bg-orange-300 rounded-full opacity-5 move-right rotate-slow"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300 rounded-full opacity-5"></div>

        {/* Content */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Welcome to Moneykrishna Education
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Learn MT5 trading and master financial markets with our comprehensive education platform.
            </p>

            <Link
              to="/mt5-education"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
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