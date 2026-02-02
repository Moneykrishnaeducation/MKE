import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import bgImg from '../assets/bg_img.jpg'

const Home = () => {
  const [usdPrice, setUsdPrice] = useState('1.0850')

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
        const data = await response.json()
        const eurPrice = data.rates.EUR
        setUsdPrice(eurPrice.toFixed(4))
      } catch (error) {
        console.log('Error fetching price:', error)
        setUsdPrice('1.0850')
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])


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
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes bubbleRise {
          0% { 
            transform: translateY(0) translateX(0); 
            opacity: 1;
          }
          100% { 
            transform: translateY(-100vh) translateX(100px); 
            opacity: 0;
          }
        }
        .bubble-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .bubble {
          position: absolute;
          bottom: 0;
          background: radial-gradient(circle at 30% 30%, rgba(22, 163, 74, 0.3), rgba(22, 163, 74, 0.05));
          border: 2px solid rgba(22, 163, 74, 0.2);
          border-radius: 50%;
          animation: bubbleRise linear infinite;
        }
        .bubble:nth-child(1) { width: 20px; height: 20px; left: 10%; animation-duration: 4s; animation-delay: 0s; }
        .bubble:nth-child(2) { width: 30px; height: 30px; left: 20%; animation-duration: 5s; animation-delay: 1s; }
        .bubble:nth-child(3) { width: 15px; height: 15px; left: 30%; animation-duration: 4.5s; animation-delay: 0.5s; }
        .bubble:nth-child(4) { width: 25px; height: 25px; left: 40%; animation-duration: 5.5s; animation-delay: 1.5s; }
        .bubble:nth-child(5) { width: 22px; height: 22px; left: 50%; animation-duration: 4.8s; animation-delay: 0.8s; }
        .bubble:nth-child(6) { width: 18px; height: 18px; left: 60%; animation-duration: 5.2s; animation-delay: 1.2s; }
        .bubble:nth-child(7) { width: 28px; height: 28px; left: 70%; animation-duration: 4.5s; animation-delay: 0.3s; }
        .bubble:nth-child(8) { width: 24px; height: 24px; left: 80%; animation-duration: 5.5s; animation-delay: 1.8s; }
        .bubble:nth-child(9) { width: 16px; height: 16px; left: 90%; animation-duration: 4.2s; animation-delay: 0.6s; }
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
        .gradient-text {
          background: linear-gradient(135deg, #16a34a, #0ea5e9, #16a34a, #0ea5e9);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 8s ease-in-out infinite;
          -webkit-text-stroke: 0.5px white;
          text-stroke: 0.5px white;
          paint-order: stroke fill;
        }
      `}</style>

      <div className="min-h-[200vh] relative" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/30 to-cyan-50/30 z-0"></div>
        {/* Live USD Price */}
        <div className="absolute top-4 right-8 bg-white bg-opacity-90 px-3 py-1 rounded-lg shadow-lg z-20 animate-float">
          <p className="text-slate-600 text-xs font-medium">USD/EUR</p>
          <p className="text-green-600 text-sm font-bold">{usdPrice}</p>
        </div>

        {/* Content */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-32 h-full flex items-center relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center w-full">
            {/* Left Content */}
            <div className="text-center animate-slide-in-left">
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight gradient-text">
                Welcome to Moneykrishna Education
              </h1>
              
              <p className="text-lg text-white mb-8 leading-relaxed max-w-md mx-auto animate-fade-in-up">
                Learn MT5 trading and master financial markets with our comprehensive education platform.
              </p>

              <div className="flex gap-4 justify-center">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-green-600 text-green-600 font-semibold hover:bg-green-600 hover:text-white transition-all shadow-lg hover:shadow-2xl hover:scale-105 animate-scale-in"
                >
                  Join 
                </Link>
                <a
                  href="https://youtu.be/kEI9B1ISUTY?si=ZfEU6uDeyHirgpmh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 animate-scale-in"
                >
                  Watch Introduction <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Image - Trading Image */}
            <div className="flex justify-center items-center w-full animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1611974891405-8f5f59aae4d2?w=800&q=80" 
                alt="Trading Chart" 
                className="w-full h-auto max-w-2xl rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Features Grid - Full Width Background */}
        <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-16 relative z-10">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
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

        {/* Contact Form Section */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mt-20 bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Get In Touch</h2>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for your message! We will get back to you soon.')
            }}>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">Phone (Optional)</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?" 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">Message</label>
                <textarea 
                  placeholder="Your message here..." 
                  rows="5"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-green-600 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home