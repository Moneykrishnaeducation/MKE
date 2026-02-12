import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, TrendingUp, Zap, Lightbulb, Users, ChevronLeft, ChevronRight, Star, GraduationCap, Gift, CheckCircle } from 'lucide-react'
import bgImg from '../assets/bg_img.webp'
import sirImg from '../assets/sir.png'

const Home = () => {
  // const [usdPrice, setUsdPrice] = useState(null)
  // const [loadingRate, setLoadingRate] = useState(false)
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
      } catch {
        setHeroMinHeight(null)
      }
    }

    updateHeroHeight()
    window.addEventListener('resize', updateHeroHeight)
    return () => window.removeEventListener('resize', updateHeroHeight)
  }, [])
  // useEffect(() => {
  //   let isMounted = true;
  //   const fetchUsdInrRate = async () => {
  //     setLoadingRate(true);
  //     try {
  //       const url = "https://www.google.com/finance/quote/USD-INR";
  //       const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
  //       const res = await fetch(proxy);
  //       if (!res.ok) throw new Error('Network response was not ok');
  //       const html = await res.text();

  //       const rateRegex = /<div[^>]*class=["'][^"']*YMlKec[^"']*fxKbKc[^"']*["'][^>]*>\s*([^<\s][^<]*)\s*<\/div>/i;
  //       let parsed = null;
  //       const m = html.match(rateRegex);
  //       if (m && m[1]) {
  //         const raw = m[1].trim().replace('₹', '').replace(/,/g, '');
  //         parsed = parseFloat(raw);
  //       }
  //       if (!parsed || Number.isNaN(parsed) || parsed <= 0) {
  //         const loose = html.match(/>(₹?[0-9.,]+)<\/div>/);
  //         if (loose && loose[1]) {
  //           parsed = parseFloat(loose[1].replace('₹', '').replace(/,/g, ''));
  //         }
  //       }
  //       if (parsed && !Number.isNaN(parsed) && parsed > 0) {
  //         if (isMounted) setUsdPrice(parsed.toFixed(2));
  //         return;
  //       }
  //     } catch (err) {
  //       // Prefer using sharedUtils.showToast when available, otherwise log
  //       try {
  //         if (typeof sharedUtils !== 'undefined' && typeof sharedUtils.showToast === 'function') {
  //           sharedUtils.showToast("Failed to fetch USD-INR rate.", "error");
  //         } else {
  //           console.error('Failed to fetch USD-INR rate.', err);
  //         }
  //       } catch (e) {
  //         console.error('Failed to fetch USD-INR rate.', err);
  //       }
  //     } finally {
  //       setLoadingRate(false);
  //     }
  //   };

  //   fetchUsdInrRate();
  //   const interval = setInterval(fetchUsdInrRate, 30000);
  //   return () => {
  //     isMounted = false;
  //     clearInterval(interval);
  //   };
  // }, [])



  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      // rootMargin: '0px 0px -100px 0px'
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
        } catch {
          // ignore - some browsers may throw if state is read-only
        }
      }, 80)
    }
  }, [location])

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append(
      "access_key", "1b232d2c-8c7c-4bcc-8911-f679b71641d5"
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
    {
      name: "Arun Kumar",
      role: "Student · Chennai",
      text: "The concepts were explained very clearly with real-time market examples. It boosted my confidence in trading."
    },
    {
      name: "Priya Sharma",
      role: "Student · Coimbatore",
      text: "Beginner-friendly and well structured. I finally understood technical analysis without confusion."
    },
    {
      name: "Vignesh R",
      role: "Student · Madurai",
      text: "Practical sessions helped me apply strategies in live markets. Very useful and professional."
    },
    {
      name: "Sneha Patel",
      role: "Student · Salem",
      text: "The mentor support and doubt-clearing sessions were excellent. Highly recommended for new traders."
    },
    {
      name: "Rahul Verma",
      role: "Student · Trichy",
      text: "Risk management and psychology lessons changed the way I trade. Simple and effective teaching."
    },
    {
      name: "Anitha S",
      role: "Student · Tirunelveli",
      text: "Well-paced sessions with real examples. It helped me avoid common beginner mistakes."
    },
    {
      name: "Karthik M",
      role: "Student · Erode",
      text: "The strategies are easy to follow and practical. Perfect balance between theory and execution."
    },
    {
      name: "Divya Lakshmi",
      role: "Student · Thanjavur",
      text: "A complete learning experience. From basics to advanced concepts, everything was covered clearly."
    }
  ]



  return (
    <>
      <style>{`
        /* Professional typography */
        .heading {
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        
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
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) translate(0, 0); }
          50% { opacity: 1; transform: scale(1) translate(var(--tx), var(--ty)); }
        }
        @keyframes floatingIcon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(5deg); }
        }
        @keyframes shimmerGlow {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #fbbf24, #f59e0b);
          border-radius: 50%;
          pointer-events: none;
        }
        .floating-icon {
          animation: floatingIcon 3s ease-in-out infinite;
        }
        .offer-badge-pulse {
          animation: pulseScale 2s ease-in-out infinite;
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
        /* Custom select styling */
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }
        select option {
          background-color: #1e293b;
          color: white;
          padding: 0.5rem;
        }
        select option:checked {
          background: linear-gradient(#16a34a, #16a34a);
          background-color: #16a34a;
          color: white;
        }
      `}</style>

      <div className="min-h-[200vh] relative" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/30 to-cyan-50/30 z-0"></div>
        {/* Live USD Price */}
        {/* <div className="absolute top-4 right-8 bg-white bg-opacity-90 px-3 py-1 rounded-lg shadow-lg z-20 animate-float">
          <p className="text-slate-600 text-xs font-medium">USD/INR</p>
          <p className="text-green-600 text-sm text-center font-bold">{usdPrice}</p>
        </div> */}

        {/* Content */}
        <div className="w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 md:py-28 py-10 flex items-center relative z-10" data-animate id="hero-section" role="banner" aria-labelledby="hero-heading" aria-describedby="hero-subheading" style={{ minHeight: heroMinHeight || '100vh' }}>
          <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-center justify-items-center w-full relative z-10">
            {/* Left Content */}
            <div className={`text-center md:text-left ${visibleSections['hero-section'] ? 'scroll-animate-left visible' : 'scroll-animate-left'}`}>
              <h1 id="hero-heading" className="md:text-5xl text-4xl lg:text-6xl font-black mb-6 leading-tight text-white drop-shadow-lg">
                Trade Confidently.<br />Learn Practically.
              </h1>

              <p id="hero-subheading" className="md:text-xl text-sm  lg:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light tracking-wide animate-fade-in-up">
                Master forex trading from basics to advanced strategies with live market sessions and expert mentorship.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center">
                <Link
                  onClick={() => {
                    const contactElement = document.getElementById('contact');
                    contactElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label="Join course - start learning with MoneyKrishna"
                  className="inline-flex items-center gap-3 px-4 md:px-8 py-2  md:py-4 rounded-full border-2 border-white bg-white text-green-600 font-bold text-sm md:text-lg hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 animate-scale-in"
                >
                  Start Free Trial
                </Link>
                <a
                  href="https://youtu.be/kEI9B1ISUTY?si=ZfEU6uDeyHirgpmh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch introduction video"
                  className="inline-flex items-center gap-3 px-4 md:px-8 py-2 md:py-4 rounded-full bg-white text-green-600 font-bold text-sm md:text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 animate-scale-in"
                >
                  Watch Intro <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Stats Cards */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 h-40 gap-4 w-full max-w-4xl mx-auto md:mx-0">
                {/* Card 1: Total Learners */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-all min-h-[160px] flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-3">
                    <GraduationCap className="w-8 h-8 text-blue-300" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">10K+</p>
                  <p className="text-xs sm:text-sm text-white/80">Total Learners</p>
                </div>

                {/* Card 2: Specialized Courses */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-all min-h-[160px] flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-3">
                    <BookOpen className="w-8 h-8 text-green-300" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">10+</p>
                  <p className="text-xs sm:text-sm text-white/80">Specialized Courses</p>
                </div>

                {/* Card 3: App Rating */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:border-white/40 transition-all min-h-[160px] flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-3">
                    <Star className="w-8 h-8 text-yellow-300 fill-yellow-300" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">4.9/5</p>
                  <p className="text-xs sm:text-sm text-white/80">Rating</p>
                </div>

                {/* Card 4: Active Offers - Enhanced with Sparkles */}
                <div className="relative group bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-md rounded-2xl p-6 text-center border border-pink-300/30 hover:border-pink-300/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/40 hover:-translate-y-2 min-h-[160px] flex flex-col justify-center items-center">
                  {/* Sparkle particles - top left */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animation: 'sparkle 1.5s ease-in-out infinite' }}></div>
                  <div className="absolute top-4 left-6 w-1 h-1 bg-yellow-200 rounded-full opacity-0 group-hover:opacity-75 animate-pulse" style={{ animation: 'sparkle 2s ease-in-out infinite 0.3s' }}></div>

                  {/* Sparkle particles - top right */}
                  <div className="absolute top-3 right-4 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animation: 'sparkle 1.8s ease-in-out infinite 0.2s' }}></div>
                  <div className="absolute top-6 right-2 w-1 h-1 bg-yellow-200 rounded-full opacity-0 group-hover:opacity-75 animate-pulse" style={{ animation: 'sparkle 2.2s ease-in-out infinite 0.5s' }}></div>

                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-300/10 to-rose-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Pulsing glow effect - enhanced */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-pink-400 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{ animation: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>

                  {/* Rotating border on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" style={{
                    background: 'conic-gradient(from 0deg, #fbbf24, #f59e0b, #fbbf24)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px',
                    animation: 'rotate 4s linear infinite'
                  }}></div>

                  <div className="relative z-10">
                    {/* Limited Time Badge - Enhanced */}
                    <div className="inline-block min-w-5xl offer-badge-pulse">
                      <span className="w-full text-[10px] font-bold text-pink-200 bg-gradient-to-r from-pink-500/40 to-rose-500/40 px-3 py-1 rounded-full border border-pink-300/70 backdrop-blur-sm shadow-lg shadow-pink-500/20">
                        ⚡ LIMITED TIME
                      </span>
                    </div>

                    {/* Icon with glow and floating animation */}
                    <div className="flex justify-center">
                      <div className="relative floating-icon">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" style={{ width: '60px', height: '60px', margin: '-15px' }}></div>
                        <Gift className="w-4 h-4 text-yellow-200 drop-shadow-lg relative z-10 group-hover:scale-125 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))' }} />
                      </div>
                    </div>

                    {/* Main Value - Large and Bold */}
                    <p className="text-md sm:text-2xl font-black bg-gradient-to-r from-yellow-200 via-pink-200 to-rose-200 bg-clip-text text-transparent " style={{ textShadow: '0 0 20px rgba(251, 191, 36, 0.3)' }}>60%+</p>

                    {/* Subtext with emphasis */}
                    <p className="text-sm text-pink-100/95 font-bold tracking-wide mb-1">ACTIVE OFFERS</p>

                    {/* Button */}
                    <Link
                      onClick={() => {
                        const contactElement = document.getElementById('contact');
                        contactElement?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2  rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg hover:shadow-pink-500/50 hover:scale-110"
                    >
                      Claim Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - Trading Image */}
            <div className={`flex justify-center items-end w-full h-[580px] overflow-hidden ${visibleSections['hero-section'] ? 'scroll-animate-right visible' : 'scroll-animate-right'}`}>
              <img
                src={sirImg}
                alt="Trading Chart"
                className="md:w-full w-115 h-115 md:h-full object-cover"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div
          className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 md:py-20 relative z-10"
          data-animate
          id="pricing-section"
        >
          <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            {/* Section Heading */}
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-3 sm:mb-4 heading
            ${visibleSections["pricing-section"]
                  ? "scroll-animate visible"
                  : "scroll-animate"
                }`}
            >
              Transparent Pricing
            </h2>

            <p className={`text-center text-base sm:text-lg md:text-xl text-gray-600 mb-10 sm:mb-14 md:mb-16 max-w-2xl mx-auto px-2
            ${visibleSections["pricing-section"]
                ? "scroll-animate visible"
                : "scroll-animate"
              }`}>
              Choose the plan that works best for your trading journey
            </p>

            {/* Pricing Cards Grid */}
            <div className="grid gap-6 sm:gap-7 md:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {/* Beginner Plan */}
              <div
                className={`bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 text-center
              shadow-lg hover:shadow-2xl hover:border-green-400 hover:-translate-y-1 sm:hover:-translate-y-2
              transition-all duration-300 ease-out
              ${visibleSections["pricing-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Beginner</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Perfect to get started</p>
                </div>

                <div className="my-6 sm:my-7 md:my-8">
                  <div className="text-4xl lg:text-5xl md:text-3xl font-bold text-green-400 mb-1 sm:mb-2">
                    ₹30,000
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">for 3 months</p>
                </div>

                <ul className="text-left mb-6 sm:mb-7 md:mb-8 space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">Foundation in forex trading</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">Comprehensive video content</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">Live trading sessions</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">Email support</span>
                  </li>
                </ul>

                <button
                  onClick={() => {
                    const contactElement = document.getElementById('contact');
                    contactElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full inline-block px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-bold transition-all duration-300"
                >
                  Enroll Now
                </button>
              </div>

              {/* Advance Plan - Featured */}
              <div
                className={`bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-400 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 text-center
              shadow-2xl hover:shadow-3xl hover:border-blue-500 hover:-translate-y-1 sm:hover:-translate-y-2
              transition-all duration-300 ease-out relative md:scale-105
              ${visibleSections["pricing-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-blue-700 text-gray-200 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                  Most Popular
                </div>

                <div className="mb-3 sm:mb-4 mt-4 sm:mt-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Advance</h3>
                  <p className="text-blue-700 text-xs sm:text-sm">With Trading Software</p>
                </div>

                <div className="my-6 sm:my-7 md:my-8">
                  <div className="text-4xl lg:text-5xl md:text-3xl font-bold text-blue-700 mb-1 sm:mb-2">
                    ₹1,50,000
                  </div>
                  <p className="text-blue-100 text-xs sm:text-sm">one time payment</p>
                </div>

                <ul className="text-left mb-6 sm:mb-7 md:mb-8 space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm sm:text-base">Everything in Beginner +</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm sm:text-base">Advanced trading strategies</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm sm:text-base">Professional trading software</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm sm:text-base">Personal mentor support</span>
                  </li>
                </ul>

                <button
                  onClick={() => {
                    const contactElement = document.getElementById('contact');
                    contactElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full inline-block px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-slate-100 text-sm sm:text-base font-bold transition-all duration-300"
                >
                  Enroll Now
                </button>
              </div>

              {/* Super Advance Plan */}
              <div
                className={`bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-300 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 text-center
              shadow-lg hover:shadow-2xl hover:border-purple-400 hover:-translate-y-1 sm:hover:-translate-y-2
              transition-all duration-300 ease-out
              ${visibleSections["pricing-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Super Advance</h3>
                  <p className="text-purple-600 text-xs sm:text-sm">Elite Trading Package</p>
                </div>

                <div className="my-6 sm:my-7 md:my-8">
                  <div className="text-4xl lg:text-5xl md:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">
                    ₹10,00,000
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">lifetime access</p>
                </div>

                <ul className="text-left mb-6 sm:mb-7 md:mb-8 space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">Everything in Advance +</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">Expert trading strategies</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">Professional software + lifetime updates</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">Lifetime 1-on-1 coaching</span>
                  </li>
                </ul>

                <button
                  onClick={() => {
                    const contactElement = document.getElementById('contact');
                    contactElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full inline-block px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-bold transition-all duration-300"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - Full Width Background */}
        <div
          className="w-full bg-blue-50 py-10 relative z-10"
          data-animate
          id="features-section"
        >
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Heading */}
            <h2
              className={`text-5xl font-extrabold text-center text-gray-900 mb-6 heading
            ${visibleSections["features-section"]
                  ? "scroll-animate visible"
                  : "scroll-animate"
                }`}
            >
              Why Choose Our Trading Education?
            </h2>

            <p className={`text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto
            ${visibleSections["features-section"]
                ? "scroll-animate visible"
                : "scroll-animate"
              }`}>
              Get comprehensive training designed specifically for traders like you
            </p>

            {/* Features Grid */}
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">

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
                  Beginner-friendly Structured Learning Path
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Step-by-step guidance designed from basics to advanced concepts.
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
                  Live Market & Real-time Chart Sessions
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Learn trading with live market movements and expert analysis.
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
                  Online & Classroom-based Training
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Flexible learning options - choose what works best for you.
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
                  Simple English – Easy to Understand
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Complex concepts explained in simple, easy-to-understand language.
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
                  Small Batch Size for Personal Attention
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Limited class sizes ensure individualized guidance and focus.
                </p>
              </div>

              {/* Feature Card 6 */}
              <div
                className={`bg-white border border-blue-100 rounded-xl p-8 text-center
              shadow-md hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300 ease-out
              ${visibleSections["features-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.6s" }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <GraduationCap className="w-9 h-9 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  Continuous Doubt-clearing & Guidance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ongoing support and mentorship throughout your learning journey.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Trading Education Section - Hero Banner */}
        <div
          className="w-full relative z-10 overflow-hidden"
          data-animate
          id="trading-education"
        >
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-white to-cyan-100"></div>

          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48"></div>

          {/* Main Content */}
          <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className={`space-y-8 ${visibleSections['trading-education'] ? 'scroll-animate-left visible' : 'scroll-animate-left'}`}>
                <div>
                  <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Money Krishna<br />
                    <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Education</span>
                  </h2>
                  <p className="text-xl text-gray-700 font-semibold">
                    Based in Chennai
                  </p>
                </div>

                <div className="space-y-4 text-lg text-gray-800">
                  <p className="font-semibold text-gray-900 text-xl">
                    Structured Trading Education with Live Market Learning
                  </p>
                  <p className="text-gray-800">
                    Designed for Beginners, Intermediate Traders & Experienced Professionals
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/40 backdrop-blur-md rounded-lg p-4 border border-blue-300">
                    <p className="text-sm text-gray-700 mb-1">Learning Format</p>
                    <p className="text-gray-900 font-bold">Online & Offline</p>
                  </div>
                  <div className="bg-white/40 backdrop-blur-md rounded-lg p-4 border border-blue-300">
                    <p className="text-sm text-gray-700 mb-1">Class Size</p>
                    <p className="text-gray-900 font-bold">Small Batches</p>
                  </div>
                  <div className="bg-white/40 backdrop-blur-md rounded-lg p-4 border border-blue-300">
                    <p className="text-sm text-gray-700 mb-1">Sessions</p>
                    <p className="text-gray-900 font-bold">Live Markets</p>
                  </div>
                  <div className="bg-white/40 backdrop-blur-md rounded-lg p-4 border border-blue-300">
                    <p className="text-sm text-gray-700 mb-1">Support</p>
                    <p className="text-gray-900 font-bold">Expert Mentors</p>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactElement = document.getElementById('contact');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer w-fit"
                >
                  Enroll Now <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Right Side - Icon & Stats */}
              <div className={`flex justify-center items-center ${visibleSections['trading-education'] ? 'scroll-animate-right visible' : 'scroll-animate-right'}`}>
                <div className="relative">
                  {/* Large Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-2xl w-80 h-80 mx-auto"></div>

                  {/* Main Icon Circle */}
                  <div className="relative w-80 h-80 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl">
                    <BookOpen className="w-40 h-40 text-white" />
                  </div>

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-lg p-6 shadow-xl">
                    <p className="text-gray-700 text-sm font-medium">Students Trained</p>
                    <p className="text-3xl font-bold text-gray-800">10K+</p>
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-6 shadow-xl">
                    <p className="text-gray-700 text-sm font-medium">Success Rate</p>
                    <p className="text-3xl font-bold text-gray-800">95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You Will Learn Section */}
        <div
          className="w-full bg-blue-50 py-24 relative z-10"
          data-animate
          id="curriculum-section"
        >
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Heading */}
            <h2
              className={`text-5xl font-extrabold text-center text-gray-900 mb-6 heading
              ${visibleSections["curriculum-section"]
                  ? "scroll-animate visible"
                  : "scroll-animate"
                }`}
            >
              What You Will Learn
            </h2>

            <p className={`text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto
            ${visibleSections["curriculum-section"]
                ? "scroll-animate visible"
                : "scroll-animate"
              }`}>
              Master essential trading skills across three key areas
            </p>

            {/* Three Column Grid */}
            <div className="grid gap-12 md:grid-cols-3">

              {/* Core Trading Concepts */}
              <div
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300 ease-out border border-green-100
                ${visibleSections["curriculum-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <BookOpen className="w-9 h-9 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Core Trading Concepts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-green-500 font-bold flex-shrink-0">●</span>
                    <span className="font-medium">Candlestick Patterns</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-green-500 font-bold flex-shrink-0">●</span>
                    <span className="font-medium">Technical Indicators</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-green-500 font-bold flex-shrink-0">●</span>
                    <span className="font-medium">Trendlines & Market Structure</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-green-500 font-bold flex-shrink-0">●</span>
                    <span className="font-medium">Support & Resistance Analysis</span>
                  </li>
                </ul>
              </div>

              {/* Live Market Learning */}
              <div
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300 ease-out border border-blue-100
                ${visibleSections["curriculum-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <TrendingUp className="w-9 h-9 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Live Market Learning
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-blue-500 font-bold flex-shrink-0">●</span>
                    <span className="font-medium">Real-time chart reading</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-blue-500 font-bold flex-shrink-0">●</span>
                    <span className="font-medium">Market behavior understanding</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-blue-500 font-bold flex-shrink-0">●</span>
                    <span className="font-medium">Guided live trading sessions</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-blue-500 font-bold flex-shrink-0">●</span>
                    <span className="font-medium">Practical trade planning</span>
                  </li>
                </ul>
              </div>

              {/* Hands-On Practice */}
              <div
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300 ease-out border border-green-100
                ${visibleSections["curriculum-section"]
                    ? "scroll-animate-scale visible"
                    : "scroll-animate-scale"
                  }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <Zap className="w-9 h-9 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Hands-On Practice
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-green-500 font-bold flex-shrink-0">●</span>
                    <span className="font-medium">Identify trends & key levels</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-green-500 font-bold flex-shrink-0">●</span>
                    <span className="font-medium">Entry, exit & stop-loss planning</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700">
                    <span className="text-green-500 font-bold flex-shrink-0">●</span>
                    <span className="font-medium">Risk & capital management basics</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Learning Modes Section - Hero Banner */}
        <div
          className="w-full relative z-10 overflow-hidden"
          data-animate
          id="learning-modes-section"
        >
          {/* Premium Gradient Background - Light Blue to Cyan */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50"></div>

          {/* Premium Animated Blur Elements */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-overlay filter blur-2xl opacity-20"></div>

          {/* Main Content */}
          <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div className={`space-y-8 ${visibleSections['learning-modes-section'] ? 'scroll-animate-left visible' : 'scroll-animate-left'}`}>
                <div>
                  <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Choose Your<br />
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning Path</span>
                  </h2>
                  <p className="text-xl text-gray-700 font-semibold">
                    Learn the way that works best for you
                  </p>
                </div>

                {/* Two Learning Modes - Large Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Offline Classroom Card */}
                  <div className="bg-gradient-to-br from-green-100 to-green-50 border border-green-400 rounded-2xl p-6 backdrop-blur-md hover:border-green-500 transition-all">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          Offline Classroom
                        </h3>
                        <div className="space-y-2">
                          <p className="text-gray-700 text-sm flex items-center gap-2 justify-center">
                            <span className="text-green-600">✓</span>
                            <span>Structured learning</span>
                          </p>
                          <p className="text-gray-700 text-sm flex items-center gap-2 justify-center">
                            <span className="text-green-600">✓</span>
                            <span>Face-to-face mentors</span>
                          </p>
                          <p className="text-gray-700 text-sm flex items-center gap-2 justify-center">
                            <span className="text-green-600">✓</span>
                            <span>Focused learning</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live Online Classes Card */}
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-400 rounded-2xl p-6 backdrop-blur-md hover:border-blue-500 transition-all">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          Live Online Classes
                        </h3>
                        <div className="space-y-2">
                          <p className="text-gray-700 text-sm flex items-center gap-2 justify-center">
                            <span className="text-blue-600">✓</span>
                            <span>Learn anywhere</span>
                          </p>
                          <p className="text-gray-700 text-sm flex items-center gap-2 justify-center">
                            <span className="text-blue-600">✓</span>
                            <span>Real-time interaction</span>
                          </p>
                          <p className="text-gray-700 text-sm flex items-center gap-2 justify-center">
                            <span className="text-blue-600">✓</span>
                            <span>Recorded sessions</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      e.preventDefault();
                      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer w-fit"
                >
                  Choose Your Mode <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Right Column - Circular Icon Badge */}
              <div className={`flex justify-center items-center ${visibleSections['learning-modes-section'] ? 'scroll-animate-right visible' : 'scroll-animate-right'}`}>
                <div className="relative">
                  {/* Background Glow Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-2xl w-80 h-80 mx-auto"></div>

                  {/* Main Circular Badge */}
                  <div className="relative w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="inline-block mb-4">
                        <div className="flex gap-4">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                            <BookOpen className="w-8 h-8 text-white" />
                          </div>
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                            <TrendingUp className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <p className="text-white font-bold text-2xl">Both Modes</p>
                      <p className="text-white/80 text-sm mt-2">Offline & Online</p>
                    </div>
                  </div>

                  {/* Floating Stat Cards */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-lg p-5 shadow-xl">
                    <p className="text-indigo-900 text-xs font-bold">Students Enrolled</p>
                    <p className="text-2xl font-bold text-indigo-600">10K+</p>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-5 shadow-xl">
                    <p className="text-indigo-900 text-xs font-bold">Completion Rate</p>
                    <p className="text-2xl font-bold text-indigo-600">98%</p>
                  </div>

                  <div className="absolute top-1/2 -right-16 bg-white rounded-lg p-4 shadow-xl">
                    <p className="text-indigo-900 text-xs font-bold text-center">Flexibility</p>
                    <p className="text-xl font-bold text-indigo-600 text-center">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Batch Advantage & Learning Outcome Section - Two Column */}
        <div
          className="w-full relative z-10 overflow-hidden"
          data-animate
          id="small-batch-section"
        >
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-white to-pink-50"></div>

          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48"></div>

          {/* Main Content */}
          <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-02 lg:gap-16 ">
              {/* Left Content */}
              <div className={`space-y-6 md:space-y-8 flex flex-col items-center ${visibleSections['small-batch-section'] ? 'scroll-animate-left visible' : 'scroll-animate-left'}`}>
                <div className=' w-full lg:w-3/4 '>
                  <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Why Our<br />
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Training Works</span>
                  </h2>
                </div>

                {/* Features in two columns */}
                <div className="space-y-6 ps-6 lg:ps-20 md:space-y-8 w-full">
                  {/* Small Batch Features */}
                  <div className="space-y-3 md:space-y-4 px-3 md:px-5">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 flex items-center gap-2 md:gap-3">
                      <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 md:w-5 h-4 md:h-5 text-white" />
                      </div>
                      Small Batches
                    </h3>
                    <div className="space-y-2 md:space-y-3 pl-10 md:pl-13">
                      <p className="text-sm md:text-base text-gray-700 flex items-start gap-2 md:gap-3">
                        <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Limited students per batch</span>
                      </p>
                      <p className="text-sm md:text-base text-gray-700 flex items-start gap-2 md:gap-3">
                        <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Personal attention for every learner</span>
                      </p>
                      <p className="text-sm md:text-base text-gray-700 flex items-start gap-2 md:gap-3">
                        <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Live doubt-clearing sessions</span>
                      </p>
                    </div>
                  </div>

                  {/* Learning Outcome Features */}
                  <div className="space-y-3 md:space-y-4 px-3 md:px-5">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 flex items-center gap-2 md:gap-3">
                      <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 md:w-5 h-4 md:h-5 text-white" />
                      </div>
                      Learning Outcomes
                    </h3>
                    <div className="space-y-2 md:space-y-3 pl-10 md:pl-13">
                      <p className="text-sm md:text-base text-gray-700 flex items-start gap-2 md:gap-3">
                        <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Strong trading foundation</span>
                      </p>
                      <p className="text-sm md:text-base text-gray-700 flex items-start gap-2 md:gap-3">
                        <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Clear chart reading skills</span>
                      </p>
                      <p className="text-sm md:text-base text-gray-700 flex items-start gap-2 md:gap-3">
                        <span className="text-blue-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Confidence to trade live markets</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactElement = document.getElementById('contact');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="inline-flex items-center gap-2 md:gap-3 mt-6 md:mt-8 px-6 md:px-10 py-2.5 md:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm md:text-base lg:text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer w-fit"
                >
                  Start Learning Now <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </a>
              </div>

              {/* Right Side - Visual Stats */}
              <div className={`flex justify-center w-full items-center ${visibleSections['small-batch-section'] ? 'scroll-animate-right visible' : 'scroll-animate-right'}`}>
                <div className="relative w-full max-w-sm">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-xl md:rounded-2xl blur-3xl"></div>

                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl p-5 md:p-8 border border-blue-200">
                    {/* Top stat */}
                    <div className="text-center mb-5 md:mb-8 pb-5 md:pb-8 border-b border-blue-200">
                      <p className="text-gray-600 text-xs md:text-sm font-medium mb-1 md:mb-2">Success Stories</p>
                      <p className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">10K+</p>
                    </div>

                    {/* Achievement cards */}
                    <div className="space-y-3 md:space-y-4">
                      <div className="bg-green-50 backdrop-blur rounded-lg p-3 md:p-4 border border-green-300">
                        <p className="text-green-700 text-xs md:text-sm font-bold mb-0.5 md:mb-1">Success Rate</p>
                        <p className="text-xl md:text-2xl font-bold text-green-900">95%</p>
                      </div>
                      <div className="bg-blue-50 backdrop-blur rounded-lg p-3 md:p-4 border border-blue-300">
                        <p className="text-blue-700 text-xs md:text-sm font-bold mb-0.5 md:mb-1">Average Improvement</p>
                        <p className="text-xl md:text-2xl font-bold text-blue-900">3x Growth</p>
                      </div>
                      <div className="bg-cyan-50 backdrop-blur rounded-lg p-3 md:p-4 border border-cyan-300">
                        <p className="text-cyan-700 text-xs md:text-sm font-bold mb-0.5 md:mb-1">Student Satisfaction</p>
                        <p className="text-xl md:text-2xl font-bold text-cyan-900">4.9/5 ⭐</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Video Section with Content */}
        <div className="w-full overflow-hidden bg-gradient-to-b from-green-50 via-white to-blue-50 py-24 relative z-10" data-animate id="video-section">
          <div className="w-full mx-auto  p-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className={`space-y-6 ${visibleSections['video-section'] ? 'scroll-animate-left visible' : 'scroll-animate-left'}`}>
                <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">Master Trading with Expert Guidance</h2>
                <p className="text-lg text-gray-800">
                  Watch our comprehensive trading masterclass where experienced traders share proven strategies and market insights. Learn how to analyze charts, identify opportunities, and execute trades with confidence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Advanced charting techniques and pattern recognition</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Risk management and position sizing strategies</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Real-time trading scenarios and live examples</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-800">
                    <span className="text-green-600 font-bold">✓</span>
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
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-gradient hover:shadow-[0_0_40px_rgba(22,163,74,0.3)] transition-all duration-300 bg-black">
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
        </div>

        {/* Customer Reviews Section */}
        <div className="w-full bg-blue-50 py-24 relative z-10" data-animate id="reviews-section">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-5xl font-extrabold text-slate-900 mb-3 text-center ${visibleSections['reviews-section'] ? 'scroll-animate visible' : 'scroll-animate'}`}>Proof That Our Training Works </h2>
            <p className={`text-center text-slate-500 mb-16 text-lg font-medium ${visibleSections['reviews-section'] ? 'scroll-animate visible' : 'scroll-animate'}`}>— Hear from Our Successful Students</p>
            <div className="relative overflow-hidden">
              <div
                ref={reviewsScrollRef}
                className="flex gap-8 pb-4 marquee-track"
              >
                {[...reviews, ...reviews].map((review, index) => (
                  <div
                    key={index}
                    className={`group bg-white border-l-4 border-green-600 
        rounded-xl p-8 w-80 sm:w-96 flex-shrink-0
        shadow-lg hover:shadow-2xl
        hover:-translate-y-1 transition-all duration-300
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
                      <p className="text-slate-900 font-bold text-base">
                        {review.name}
                      </p>
                      <p className="text-slate-500 text-sm font-medium">
                        {review.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment Form Section */}
        <div
          className="w-full bg-gradient-to-br from-white via-blue-50 to-white px-4 md:px-8 py-12 md:py-20 relative z-10 scroll-mt-[8vh]"
          id="contact"
        >
          <div className="mx-auto px-4 space-y-8 md:space-y-6 lg:px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
              {/* Left Column - Content */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4 heading">
                    Ready to Start?
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700">
                    Join thousands of successful traders today
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center flex-shrink-0 mt-1 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <BookOpen className="w-5 md:w-6 h-5 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">Expert Mentorship</h3>
                      <p className="text-sm md:text-base text-gray-700">Learn from experienced traders with years of market expertise</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <TrendingUp className="w-5 md:w-6 h-5 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">Proven Results</h3>
                      <p className="text-sm md:text-base text-gray-700">95% success rate with over 10K+ students trained</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-purple-50 transition-colors duration-300">
                    <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-1 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Users className="w-5 md:w-6 h-5 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">Small Batches</h3>
                      <p className="text-sm md:text-base text-gray-700">Personal attention and customized guidance for every learner</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <form
                  className="space-y-3 md:space-y-4 bg-gradient-to-br from-white to-blue-50 border-2 border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  onSubmit={handleSubmit}
                >
                  {/* Hidden spam protection */}
                  <input type="checkbox" name="botcheck" className="hidden" />

                  {/* Two Column Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-gray-900 font-semibold mb-2 text-xs md:text-sm">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm"
                        required
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-gray-900 font-semibold mb-2 text-xs md:text-sm">Mobile Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="10-digit number"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Experience in two columns */}
                  <div className="grid grid-cols-1 gap-3 md:gap-4">
                    {/* Email Address */}
                    <div>
                      <label className="block text-gray-900 font-semibold mb-2 text-xs md:text-sm">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm"
                        required
                      />
                    </div>

                    {/* Experience Level */}
                    <div>
                      <label className="block text-gray-900 font-semibold mb-2 text-xs md:text-sm">Experience Level</label>
                      <select
                        name="experience"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm"
                        required
                      >
                        <option value="">Select level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Experienced">Experienced</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Mode - Full Width */}
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2 text-xs md:text-sm">Preferred Mode</label>
                    <select
                      name="mode"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm"
                      required
                    >
                      <option value="">Select preferred mode</option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                    </select>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white font-bold py-2 md:py-3 text-sm md:text-lg rounded-lg hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 mt-4 md:mt-6 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get Free Counseling Call</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </button>

                  {/* Trust Line */}
                  <p className="text-center text-gray-600 text-xs">
                    No spam. 100% privacy guaranteed.
                  </p>

                  {status && (
                    <p className="text-center text-green-600 font-semibold mt-2 text-xs md:text-sm">
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home