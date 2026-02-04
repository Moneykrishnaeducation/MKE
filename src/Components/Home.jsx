import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, TrendingUp, Zap, Lightbulb, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import bgImg from '../assets/bg_img.jpg'
import sirImg from '../assets/sir.png'

const Home = () => {
  const [usdPrice, setUsdPrice] = useState(null)
  const [loadingRate, setLoadingRate] = useState(false)
  const [visibleSections, setVisibleSections] = useState({})
  const reviewsScrollRef = useRef(null)
  const location = useLocation()
  const [heroMinHeight, setHeroMinHeight] = useState(null)

  useEffect(() => {
    // Calculate header + topbar height and set hero min-height so hero fills visible viewport
    const updateHeroHeight = () => {
      try {
        const header = document.querySelector('header')
        const topbar = document.querySelector('div.bg-gradient-to-r')
        const headerHeight = header ? header.offsetHeight : 0
        const topbarHeight = topbar ? topbar.offsetHeight : 0
        const total = headerHeight + topbarHeight
        // Use calc with px offset to ensure hero occupies remaining viewport
        setHeroMinHeight(`calc(100vh - ${total}px)`)
      } catch (e) {
        setHeroMinHeight(null)
      }
    }

    updateHeroHeight()
    window.addEventListener('resize', updateHeroHeight)
    return () => window.removeEventListener('resize', updateHeroHeight)
  }, [])
useEffect(() => {
  let isMounted = true;
  const fetchUsdInrRate = async () => {
    setLoadingRate(true);
    try {
      const url = "https://www.google.com/finance/quote/USD-INR";
      const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
      const res = await fetch(proxy);
      if (!res.ok) throw new Error('Network response was not ok');
      const html = await res.text();

      const rateRegex = /<div[^>]*class=["'][^"']*YMlKec[^"']*fxKbKc[^"']*["'][^>]*>\s*([^<\s][^<]*)\s*<\/div>/i;
      let parsed = null;
      const m = html.match(rateRegex);
      if (m && m[1]) {
        const raw = m[1].trim().replace('₹', '').replace(/,/g, '');
        parsed = parseFloat(raw);
      }
      if (!parsed || Number.isNaN(parsed) || parsed <= 0) {
        const loose = html.match(/>(₹?[0-9.,]+)<\/div>/);
        if (loose && loose[1]) {
          parsed = parseFloat(loose[1].replace('₹', '').replace(/,/g, ''));
        }
      }
      if (parsed && !Number.isNaN(parsed) && parsed > 0) {
        if (isMounted) setUsdPrice(parsed.toFixed(2));
        return;
      }
    } catch (err) {
      // Prefer using sharedUtils.showToast when available, otherwise log
      try {
        if (typeof sharedUtils !== 'undefined' && typeof sharedUtils.showToast === 'function') {
          sharedUtils.showToast("Failed to fetch USD-INR rate.", "error");
        } else {
          console.error('Failed to fetch USD-INR rate.', err);
        }
      } catch (e) {
        console.error('Failed to fetch USD-INR rate.', err);
      }
    } finally {
      setLoadingRate(false);
    }
  };

  fetchUsdInrRate();
  const interval = setInterval(fetchUsdInrRate, 30000);
  return () => {
    isMounted = false;
    clearInterval(interval);
  };
}, [])


  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true
          }))
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
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
        } catch (e) { }
      }, 80)
    }
  }, [location])

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append(
      "access_key", "088ae8ac-3c2c-4bdc-a1f4-e0b3fe96b4e7"
    );
    formData.append("from_name", "Website Contact Form");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("Message sent successfully ✅");
      e.target.reset();
    } else {
      console.error(result);
      setStatus("Something went wrong ❌");
    }
  };
  const reviews = [
    { name: "Rahul Sharma", role: "Forex Trader • India", text: "The courses are exceptionally well-structured..." },
    { name: "Priya Patel", role: "Stock Market Investor • UK", text: "MoneyKrishna Education completely changed..." },
    { name: "Arun Verma", role: "Day Trader • Dubai", text: "The mentorship program is outstanding..." },
    { name: "Neha Singh", role: "Options Trader • Singapore", text: "Finally found a platform where education meets..." },
    { name: "Vikram Kumar", role: "Crypto Trader • USA", text: "The community here is amazing..." },
    { name: "Deepak Malhotra", role: "Swing Trader • Canada", text: "The strategy courses are incredibly detailed..." },
    { name: "Anjali Desai", role: "Futures Trader • Australia", text: "Switched from another platform..." },
    { name: "Arjun Prabhu", role: "Intraday Trader • Malaysia", text: "The live trading sessions are a goldmine..." }
  ];


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
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
        }
        .scroll-animate.visible {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .scroll-animate-left {
          opacity: 0;
          transform: translateX(-50px);
        }
        .scroll-animate-left.visible {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .scroll-animate-right {
          opacity: 0;
          transform: translateX(50px);
        }
        .scroll-animate-right.visible {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .scroll-animate-scale {
          opacity: 0;
          transform: scale(0.8);
        }
        .scroll-animate-scale.visible {
          animation: scaleIn 0.8s ease-out forwards;
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

      <div className="min-h-[200vh] relative" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/30 to-cyan-50/30 z-0"></div>
        {/* Live USD Price */}
        <div className="absolute top-4 right-8 bg-white bg-opacity-90 px-3 py-1 rounded-lg shadow-lg z-20 animate-float">
          <p className="text-slate-600 text-xs font-medium">USD/INR</p>
          <p className="text-green-600 text-sm text-center font-bold">{usdPrice}</p>
        </div>

        {/* Content */}
        <div className="max-w-screen-2xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-28 flex items-center relative z-10" data-animate id="hero-section" role="banner" aria-labelledby="hero-heading" aria-describedby="hero-subheading" style={{ minHeight: heroMinHeight || '100vh' }}>
          <div className="grid md:grid-cols-[1fr_0.9fr] gap-12 items-center justify-items-center w-full relative z-10">
            {/* Left Content */}
            <div className={`text-center md:text-left ${visibleSections['hero-section'] ? 'scroll-animate-left visible' : 'scroll-animate-left'}`}>
              <h1 id="hero-heading" className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight text-white">
                Trade Confidently. Learn Practically.
              </h1>

              <p id="hero-subheading" className="text-lg text-white/90 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0 animate-fade-in-up">
                Practical forex trading courses, live sessions, and hands-on mentorship — designed to move you from theory to consistent results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                <Link
                  to="/course"
                  aria-label="Join course - start learning with MoneyKrishna"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-green-600 bg-white text-green-600 font-semibold hover:bg-green-600 hover:text-white transition-all shadow-lg hover:shadow-2xl hover:scale-105 animate-scale-in"
                >
                  Start Free Trial
                </Link>
                <a
                  href="https://youtu.be/kEI9B1ISUTY?si=ZfEU6uDeyHirgpmh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch introduction video"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 animate-scale-in"
                >
                  Watch Intro <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <span className="inline-block bg-white/10 text-white px-2 py-1 rounded-full">⭐ 4.9/5</span>
                  <span>Trusted by 10k+ students</span>
                </div>
                <div className="hidden sm:block border-l border-white/20 h-4"></div>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="font-medium">Live classes</span>
                  <span className="text-sm text-white/70">•</span>
                  <span className="font-medium">Mentorship</span>
                </div>
              </div>
            </div>

            {/* Right Image - Trading Image */}
            <div className={`flex justify-center items-end w-full h-[580px] overflow-hidden ${visibleSections['hero-section'] ? 'scroll-animate-right visible' : 'scroll-animate-right'}`}>
              <img
                src={sirImg}
                alt="Trading Chart"
                className="w-full h-full object-cover"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Features Grid - Full Width Background */}
        <div
          className="w-full bg-gray-100 py-20 relative z-10"
          data-animate
          id="features-section"
        >
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Heading */}
            <h2
              className={`text-4xl font-extrabold text-blue-900 mb-14 text-center
            ${visibleSections["features-section"]
                  ? "scroll-animate visible"
                  : "scroll-animate"
                }`}
            >
              Why Choose Us
            </h2>

            {/* Features Grid */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

              {/* Feature Card 1 */}
              <div
                className={`bg-white border border-green-100 rounded-xl p-8 text-center
              shadow-lg hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300 ease-out
              ${visibleSections["features-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <BookOpen className="w-9 h-9 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  Structured Learning Paths
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Beginner to advanced forex & stock market courses with step-by-step guidance.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div
                className={`bg-white border border-blue-100 rounded-xl p-8 text-center
              shadow-md hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300 ease-out
              ${visibleSections["features-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <TrendingUp className="w-9 h-9 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  Live Trading & Webinars
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Real-time market sessions with expert analysis and live Q&A.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div
                className={`bg-white border border-green-100 rounded-xl p-8 text-center
              shadow-md hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300 ease-out
              ${visibleSections["features-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <Zap className="w-9 h-9 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  Practice Trading Zone
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Trade in a risk-free environment and test proven strategies.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div
                className={`bg-white border border-blue-100 rounded-xl p-8 text-center
              shadow-md hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300 ease-out
              ${visibleSections["features-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <Lightbulb className="w-9 h-9 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  Smart Investment Hub
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tools, insights, and tips to make better trading decisions.
                </p>
              </div>

              {/* Feature Card 5 */}
              <div
                className={`bg-white border border-green-100 rounded-xl p-8 text-center
              shadow-md hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300 ease-out
              ${visibleSections["features-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.5s" }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <Users className="w-9 h-9 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  Community & Mentorship
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Learn with a global trader community and expert mentorship.
                </p>
              </div>

            </div>
          </div>
        </div>


        {/* Video Section with Content */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20" data-animate id="video-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-6 ${visibleSections['video-section'] ? 'scroll-animate-left visible' : 'scroll-animate-left'}`}>
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
            <div className={`flex justify-center ${visibleSections['video-section'] ? 'scroll-animate-right visible' : 'scroll-animate-right'}`}>
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
        <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 py-16 relative z-10" data-animate id="reviews-section">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-bold text-slate-900 mb-2 text-center ${visibleSections['reviews-section'] ? 'scroll-animate visible' : 'scroll-animate'}`}>What Our Students Say</h2>
            <p className={`text-center text-slate-600 mb-12 text-lg ${visibleSections['reviews-section'] ? 'scroll-animate visible' : 'scroll-animate'}`}>Join thousands of successful traders who have transformed their trading journey with us</p>
            <div className="relative overflow-hidden">
              <div
                ref={reviewsScrollRef}
                className="flex gap-8 pb-4 marquee-track"
              >
                {[...reviews, ...reviews].map((review, index) => (
                  <div
                    key={index}
                    className={`group bg-white/80 backdrop-blur-xl border border-slate-200/60 
        rounded-2xl p-6 sm:p-8 w-80 sm:w-96 flex-shrink-0
        shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
        hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]
        transition-all duration-500
        ${visibleSections['reviews-section']
                        ? 'scroll-animate-scale visible'
                        : 'scroll-animate-scale'
                      }`}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-slate-700 mb-6 italic text-sm sm:text-base leading-relaxed">
                      “{review.text}”
                    </p>

                    {/* Footer */}
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-slate-900 font-semibold">
                        {review.name}
                      </p>
                      <p className="text-slate-500 text-sm">
                        {review.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>

        {/* Contact Form Section */}
        <div
          className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10"
          id="contact"
        >
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              Get In Touch
            </h2>

            <form
              className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
              onSubmit={handleSubmit}
            >
              {/* Hidden spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
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

              {status && (
                <p className="md:col-span-2 text-center text-white mt-2">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home