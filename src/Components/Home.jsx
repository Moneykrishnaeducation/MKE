import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, TrendingUp, Zap, Lightbulb, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import bgImg from '../assets/bg_img.jpg'

const Home = () => {
  const [usdPrice, setUsdPrice] = useState('1.0850')
  const reviewsScrollRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
        const data = await response.json()
        const eurPrice = data.rates.INR
        setUsdPrice(eurPrice.toFixed(2))
      } catch (error) {
        console.log('Error fetching price:', error)
        setUsdPrice('1.0850')
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  // Scroll to contact section when navigated with state{scrollToContact: true}
  useEffect(() => {
    if (location && location.state && location.state.scrollToContact) {
      setTimeout(() => {
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // clear history state to avoid repeat
        try {
          window.history.replaceState({}, document.title)
        } catch (e) {}
      }, 80)
    }
  }, [location])

  const scrollReviews = (direction) => {
    if (reviewsScrollRef.current) {
      const scrollAmount = 400
      if (direction === 'left') {
        reviewsScrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        reviewsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }


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
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="min-h-[200vh] relative" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/30 to-cyan-50/30 z-0"></div>
        {/* Live USD Price */}
        <div className="absolute top-4 right-8 bg-white bg-opacity-90 px-3 py-1 rounded-lg shadow-lg z-20 animate-float">
          <p className="text-slate-600 text-xs font-medium">USD/INR</p>
          <p className="text-green-600 text-sm text-center font-bold">{usdPrice}</p>
        </div>

        {/* Content */}
        <div className="max-w-screen-2xl h-[calc(100vh-8vh)] mx-auto px-4 sm:px-6 lg:px-8 py-32 h-full flex items-center relative z-10">
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
                  to="/course"
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
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <BookOpen className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">Structured Learning Paths</h3>
                <p className="text-sm text-slate-600">Beginner to advanced forex & stock market courses with step-by-step guidance.</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">Live Trading & Webinars</h3>
                <p className="text-sm text-slate-600">Real-time market sessions with expert analysis and live Q&A.</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <Zap className="w-10 h-10 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">Practice Trading Zone</h3>
                <p className="text-sm text-slate-600">Trade in a risk-free environment and test proven strategies.</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <Lightbulb className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">Smart Investment Hub</h3>
                <p className="text-sm text-slate-600">Tools, insights, and tips to make better trading decisions.</p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <Users className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">Community & Mentorship</h3>
                <p className="text-sm text-slate-600">Learn with a global trader community and expert mentorship.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section with Content */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white leading-tight">Master Trading with Expert Guidance</h2>
              <p className="text-lg text-white/90">
                Watch our comprehensive trading masterclass where experienced traders share proven strategies and market insights. Learn how to analyze charts, identify opportunities, and execute trades with confidence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Advanced charting techniques and pattern recognition</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Risk management and position sizing strategies</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Real-time trading scenarios and live examples</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Professional trading psychology and discipline</span>
                </li>
              </ul>
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Content - Video */}
            <div className="flex justify-center">
              <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/6xxB3LsMhRI?autoplay=1&mute=1&loop=1&playlist=6xxB3LsMhRI&si=M1txMgIEVcjR9o__" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-16 relative z-10">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-2 text-center">What Our Students Say</h2>
            <p className="text-center text-slate-600 mb-12 text-lg">Join thousands of successful traders who have transformed their trading journey with us</p>
            
            <div className="relative">
              {/* Scroll Arrows */}
              <button
                onClick={() => scrollReviews('left')}
                className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-lg transition-all sm:-ml-6"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <button
                onClick={() => scrollReviews('right')}
                className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-lg transition-all sm:-mr-6"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Reviews Scroll Container */}
              <div 
                ref={reviewsScrollRef}
                className="flex gap-8 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
              >
                {/* Review 1 */}
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all flex-shrink-0 w-80 sm:w-96">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic text-sm sm:text-base">"The courses are exceptionally well-structured. I went from complete beginner to consistently profitable in just 3 months. The live webinars with experts are invaluable!"</p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-900 font-semibold text-sm sm:text-base">Rahul Sharma</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Forex Trader • India</p>
                  </div>
                </div>

                {/* Review 2 */}
                {/* Review 2 */}
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all flex-shrink-0 w-80 sm:w-96">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic text-sm sm:text-base">"MoneyKrishna Education completely changed my approach to trading. The risk management strategies taught here are game-changing. Best investment I've made in my trading career!"</p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-900 font-semibold text-sm sm:text-base">Priya Patel</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Stock Market Investor • UK</p>
                  </div>
                </div>

                {/* Review 3 */}
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all flex-shrink-0 w-80 sm:w-96">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic text-sm sm:text-base">"The mentorship program is outstanding. Having access to experienced traders who review your trades and provide personalized guidance is worth every penny!"</p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-900 font-semibold text-sm sm:text-base">Arun Verma</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Day Trader • Dubai</p>
                  </div>
                </div>

                {/* Review 4 */}
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all flex-shrink-0 w-80 sm:w-96">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic text-sm sm:text-base">"Finally found a platform where education meets practical application. The demo trading zone helped me practice without any risk. Highly recommended!"</p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-900 font-semibold text-sm sm:text-base">Neha Singh</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Options Trader • Singapore</p>
                  </div>
                </div>

                {/* Review 5 */}
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all flex-shrink-0 w-80 sm:w-96">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic text-sm sm:text-base">"The community here is amazing. Learning alongside other traders and sharing experiences has been game-changing. I doubled my profits this year!"</p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-900 font-semibold text-sm sm:text-base">Vikram Kumar</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Crypto Trader • USA</p>
                  </div>
                </div>

                {/* Review 6 */}
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all flex-shrink-0 w-80 sm:w-96">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic text-sm sm:text-base">"The strategy courses are incredibly detailed and backed by real-world examples. I've implemented these strategies and seen consistent results. Worth every rupee!"</p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-900 font-semibold text-sm sm:text-base">Deepak Malhotra</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Swing Trader • Canada</p>
                  </div>
                </div>

                {/* Review 7 */}
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all flex-shrink-0 w-80 sm:w-96">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic text-sm sm:text-base">"Switched from another platform and never looked back. The support team is responsive, the curriculum is comprehensive, and the results speak for themselves!"</p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-900 font-semibold text-sm sm:text-base">Anjali Desai</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Futures Trader • Australia</p>
                  </div>
                </div>

                {/* Review 8 */}
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all flex-shrink-0 w-80 sm:w-96">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic text-sm sm:text-base">"The live trading sessions are a goldmine of information. Watching experienced traders make decisions in real-time has taught me more than any textbook ever could."</p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-900 font-semibold text-sm sm:text-base">Arjun Prabhu</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Intraday Trader • Malaysia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10" id="contact">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Get In Touch</h2>
            <form className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for your message! We will get back to you soon.')
            }}>
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Phone (Optional)</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?" 
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea 
                  placeholder="Your message here..." 
                  rows="4"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="md:col-span-2 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
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