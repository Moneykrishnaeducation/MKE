
import React from 'react';
import bgImg from '../assets/bg.jpg'

import { BookOpen, TrendingUp, ShieldCheck, Users, Layers, LifeBuoy } from 'lucide-react';

// Remove imports for missing images. Only use images that exist.
const testimonials = [
  {
    id: 1,
    name: "Ramesh K – Beginner Trader",
    program: "Trading Mentorship Program",
    image: "/user1.jpg",
    text: `I joined with zero knowledge. Classes were in simple English and live market sessions
helped me understand charts clearly. Now I trade with confidence.`,
    rating: 5,
  },
  {
    id: 2,
    name: "Suresh M – Intermediate Trader",
    program: "Trading Mentorship Program",
    image: "/user2.jpg",
    text: `I knew basics but lacked consistency. After this training, my entries and exits became
clear and my overtrading reduced.`,
    rating: 5,
  },
  {
    id: 3,
    name: "Sharmi P – Aspiring Trader",
    program: "Trading Mentorship Program",
    image: "/user3.jpg",
    text: `Before joining TMP, there was a big struggle in my life related to stock market trading and investment. But this TMP program has helped me a lot...`,
    rating: 5,
  },
  {
    id: 4,
    name: "Arjun V – Working Professional",
    program: "Trading Mentorship Program",
    image: "/user4.png",
    text: `Small batch size and doubt clearing sessions made a huge difference. Real market
learning is the biggest plus.`,
    rating: 4,
  },
];

const About = () => {


  return (
    <>
      {/* Hero Section with Home.jsx style */}
      <div className="relative flex flex-col text-center items-center py-28 w-full justify-center overflow-hidden" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Blurred background overlay */}
        <div className="absolute inset-0 z-0 backdrop-blur-md" aria-hidden="true"></div>
        {/* Content stays above the blur */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-8xl md:text-10xl font-bold text-white mb-4 animate-fade-in-up cursor-pointer">
            About
          </h1>
          <p className="text-white text-2xl max-w-5xl mx-auto animate-fade-in-up">Empowering traders and investors with expert education, actionable strategies, and a supportive community for financial success.</p>
        </div>
      </div>


      {/* Main Section with Home.jsx overlay style */}
      <div id="about-section" className="w-full bg-white py-12">
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-7xl px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl" style={{ minHeight: '420px' }}>
            {/* About Grids */}

            {/* Individual Grids - Who We Are (two-column: image left, text right) */}
            {/* Left: Text Content */}
            <div className="flex flex-col justify-center items-start space-y-6 w-full">
              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Company Overview
              
                
              </h2>
              <div className="space-y-6">
                <p className="text-2xl text-gray-700 max-w-4xl text-justify" style={{ fontFamily: 'Inter, sans-serif' }}>
                 Money Krishna Education is a leading trading institute based in Chennai, committed to helping individuals learn trading the right way through structured education and real market exposure. Since 2012, we have trained aspiring traders, working professionals, and experienced market participants to understand markets with clarity, discipline, and confidence. </p>
                
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex justify-center items-center mt-10 w-full h-full">
              <img
                src="/user4.png"
                alt="Team discussion"
                className="rounded-2xl object-cover w-full max-w-md md:max-w-xl lg:max-w-2xl"
                style={{ aspectRatio: '10/6', minHeight: 200 }}
              />
            </div>
          </div>

          <div className="w-full max-w-7xl px-4 md:px-8 mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div className="flex flex-col items-center mt-4 mb-4">
                  <Users size={36} className="text-blue-600 mb-2" />
                  <h3 className="text-6xl font-bold text-blue-600 ">Who We Are?</h3>
                </div>
                <p className="text-2xl text-gray-700 leading-relaxed text-center text-justify" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Money Krishna Education was founded by a group of experienced trading professionals and market enthusiasts passionate about financial education. We guide learners with transparency, integrity, and real-world expertise, focusing on developing confident and independent traders.
                </p>
              </div>
              <div>
                <div className="flex flex-col items-center mt-4 mb-4">
                  <Layers size={36} className="text-blue-600 mb-2" />
                  <h3 className="text-6xl font-bold text-blue-600 ">What We Offer</h3>
                </div>
                <p className="text-2xl text-gray-700 leading-relaxed text-center text-justify" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our programs cover Stock Market, Forex, and Options Trading, designed with a practical-first approach. We believe trading success comes from proper foundation, live market understanding, and continuous guidance—not from tips or shortcuts.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section - matches screenshot */}
          <section className="w-full mt-20 ">
            <div className=" max-w-7xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-6" style={{ color: '#e53935', fontFamily: 'Montserrat, sans-serif' }}>Our Mission</h2>
              <p className="text-center text-2xl text-gray-700 mb-12 max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                At Money Krishna Education, learning happens through live market sessions, hands-on chart practice, and mentor-led guidance, ensuring students gain real skills that can be applied in actual trading environments
                </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 group">
                <div className="about-card-hover bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center p-8 animate-fade-in-up cursor-pointer">
                  <div className="mb-4 flex items-center justify-center rounded-full bg-white shadow-lg" style={{ width: 64, height: 64 }}>
                    <img src="/client.png" alt="Deep ETP Expertise Icon" style={{ width: 48, height: 48 }} />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Deep ETP Expertise</h3>
                </div>
                <div className="about-card-hover bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center p-8 animate-fade-in-up cursor-pointer">
                  <div className="mb-4 flex items-center justify-center rounded-full bg-white shadow-lg" style={{ width: 64, height: 64 }}>
                    <img src="/cloud.png" alt="Cutting Edge Technology Icon" style={{ width: 48, height: 48, display: 'block', margin: '0 auto' }} />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Cutting Edge Technology</h3>
                </div>
                <div className="about-card-hover bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center p-8 animate-fade-in-up cursor-pointer">
                  <div className="mb-4 flex items-center justify-center rounded-full bg-white shadow-lg" style={{ width: 64, height: 64 }}>
                    <img src="/risk.png" alt="Risk Management Focus Icon" style={{ width: 48, height: 48, display: 'block', margin: '0 auto' }} />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Risk Management Focus</h3>
                </div>
                <div className="about-card-hover bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center p-8 animate-fade-in-up cursor-pointer">
                  <div className="mb-4 flex items-center justify-center rounded-full bg-white shadow-lg" style={{ width: 64, height: 64 }}>
                    <img src="/team.png" alt="Strong Team Driven Culture Icon" className="mb-4" style={{ width: 48, height: 48 }} />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">Strong Team Driven Culture</h3>
                </div>
              </div>
            </div>
          </section>
      </div>
          </div>

          
        

        {/* Gradient text style for headings */}
        {/* Ensure all fragments/tags are closed above this line */}
        <style>{`
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
            @keyframes shimmer {
              0% { background-position: -1000px 0; }
              100% { background-position: 1000px 0; }
            }
            @keyframes fade-in-up {
              0% { opacity: 0; transform: translateY(30px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes slide-in-left {
              0% { opacity: 0; transform: translateX(-50px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes slide-in-right {
              0% { opacity: 0; transform: translateX(50px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
            .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
            .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
            .shadow-animate {
              display: inline-block;
              animation: glowShift 3s ease-in-out infinite;
              -webkit-animation: glowShift 3s ease-in-out infinite;
            }
            @keyframes glowShift {
              0% {
                text-shadow: 0 0 6px rgba(14,165,233,0.45), 0 0 12px rgba(16,185,129,0.25);
                transform: translateY(0);
              }
              25% {
                text-shadow: 0 0 10px rgba(14,165,233,0.65), 0 0 18px rgba(16,185,129,0.35);
                transform: translateY(-1px);
              }
              50% {
                text-shadow: 0 0 14px rgba(14,165,233,0.9), 0 0 28px rgba(16,185,129,0.6);
                transform: translateY(-2px);
              }
              75% {
                text-shadow: 0 0 10px rgba(14,165,233,0.65), 0 0 18px rgba(16,185,129,0.35);
                transform: translateY(-1px);
              }
              100% {
                text-shadow: 0 0 6px rgba(14,165,233,0.45), 0 0 12px rgba(16,185,129,0.25);
                transform: translateY(0);
              }
            }
          `}</style>
     
     
      <div className="mx-4 md:mx-8" style={{ background: '#f4f8ff', borderRadius: '18px', boxShadow: '0 2px 16px 0 rgba(14, 165, 233, 0.04)', padding: '32px 0' }}>
        <style>{`
          /* Card hover effect for About grid */
          .about-card-hover {
            transition: transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1), background 0.25s;
            background: #fff;
            border: 1px solid #e3eaf5;
            box-shadow: 0 2px 8px 0 rgba(14, 165, 233, 0.04);
          }
          .about-card-hover:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 8px 32px 0 rgba(16, 185, 129, 0.10), 0 2px 8px 0 rgba(14, 165, 233, 0.10);
            background: #f4f8ff;
            z-index: 2;
            border-color: #b6d4f7;
          }

          /* Testimonial card hover effect */
          .testimonial-card-hover {
            transition: transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1);
          }
          .testimonial-card-hover:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 8px 32px 0 rgba(16, 185, 129, 0.10), 0 2px 8px 0 rgba(14, 165, 233, 0.10);
            z-index: 2;
          }
        `}</style>


        <h1 className="text-4xl md:text-6xl font-bold gradient-text text-center p-4 animate-fade-in-up truncate whitespace-nowrap">Marketing-Friendly</h1>
        
        <div className="w-full py-6 px-2 md:px-0 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full max-w-10xl">
            <div className="about-card-hover flex flex-col items-center border border-slate-200 rounded-xl shadow-lg p-8 bg-white cursor-pointer">
              <BookOpen size={36} className="text-blue-600 mb-2" />
              <span className="text-slate-700 font-semibold text-sm md:text-base text-center">Practical Market Education</span>
            </div>
            <div className="about-card-hover flex flex-col items-center border border-slate-200 rounded-xl shadow-lg p-8 bg-white cursor-pointer">
              <TrendingUp size={36} className="text-green-600 mb-2" />
              <span className="text-slate-700 font-semibold text-sm md:text-base text-center">Trader-Focused Learning</span>
            </div>
            <div className="about-card-hover flex flex-col items-center border border-slate-200 rounded-xl shadow-lg p-8 bg-white cursor-pointer">
              <ShieldCheck size={36} className="text-blue-600 mb-2" />
              <span className="text-slate-700 font-semibold text-sm md:text-base text-center">Safe & Transparent Learning</span>
            </div>
            <div className="about-card-hover flex flex-col items-center border border-slate-200 rounded-xl shadow-lg p-8 bg-white cursor-pointer">
              <Users size={36} className="text-blue-600 mb-2" />
              <span className="text-slate-700 font-semibold text-sm md:text-base text-center">Expert-Led Mentorship</span>
            </div>
            <div className="about-card-hover flex flex-col items-center border border-slate-200 rounded-xl shadow-lg p-8 bg-white cursor-pointer">
              <Layers size={36} className="text-green-600 mb-2" />
              <span className="text-slate-700 font-semibold text-sm md:text-base text-center">Structured & Progressive Curriculum</span>
            </div>
            <div className="about-card-hover flex flex-col items-center border border-slate-200 rounded-xl shadow-lg p-8 bg-white cursor-pointer">
              <LifeBuoy size={36} className="text-green-600 mb-2" />
              <span className="text-slate-700 font-semibold text-sm md:text-base text-center">Continuous Support & Growth</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full p-4 mx-4 mt-10 md:mx-0 text-black rounded-xl" style={{ background: 'linear-gradient(135deg, #e0e7ef 0%, #cfd8e3 100%)', backgroundImage: 'url(https://www.transparenttextures.com/patterns/symphony.png)' }}>
          {/* Card styles inspired by screenshot */}
          <div className="about-card-hover rounded-xl p-6 w-full flex flex-col items-center text-center flex-1 min-h-[220px] shadow-lg bg-white/90 border border-slate-300 cursor-pointer" style={{ boxShadow: '0 4px 16px 0 rgba(30, 64, 175, 0.10)' }}>
            <div className="p-3 rounded-full bg-blue-700 mb-3 flex items-center justify-center" style={{ width: 56, height: 56 }}>
              <ShieldCheck size={32} className="text-white" />
            </div>
            <h5 className="text-blue-800 text-xl font-bold mb-2">Institutional Credibility</h5>
            <p className="text-slate-700 text-base">Registered and operating in compliance with applicable educational and business regulations.</p>
          </div>

          <div className="about-card-hover rounded-xl p-6 w-full flex flex-col items-center text-center flex-1 min-h-[220px] shadow-lg bg-white/90 border border-slate-300 cursor-pointer" style={{ boxShadow: '0 4px 16px 0 rgba(30, 64, 175, 0.10)' }}>
            <div className="p-3 rounded-full bg-blue-700 mb-3 flex items-center justify-center" style={{ width: 56, height: 56 }}>
              <Layers size={32} className="text-white" />
            </div>
            <h5 className="text-blue-800 text-xl font-bold mb-2">Client Data Protection</h5>
            <p className="text-slate-700 text-base">Clients' funds are kept separate from operational accounts for added protection.</p>
          </div>

          <div className="about-card-hover rounded-xl p-6 w-full flex flex-col items-center text-center flex-1 min-h-[220px] shadow-lg bg-white/90 border border-slate-300 cursor-pointer" style={{ boxShadow: '0 4px 16px 0 rgba(30, 64, 175, 0.10)' }}>
            <div className="p-3 rounded-full bg-blue-700 mb-3 flex items-center justify-center" style={{ width: 56, height: 56 }}>
              <Users size={32} className="text-white" />
            </div>
            <h5 className="text-blue-800 text-xl font-bold mb-2">Trusted Payment Partners</h5>
            <p className="text-slate-700 text-base">We maintain partnerships with tier-1 banks to secure payment and custody services.</p>
          </div>

          <div className="about-card-hover rounded-xl p-6 w-full flex flex-col items-center text-center flex-1 min-h-[220px] shadow-lg bg-white/90 border border-slate-300 cursor-pointer" style={{ boxShadow: '0 4px 16px 0 rgba(30, 64, 175, 0.10)' }}>
            <div className="p-3 rounded-full bg-blue-700 mb-3 flex items-center justify-center" style={{ width: 56, height: 56 }}>
              <LifeBuoy size={32} className="text-white" />
            </div>
            <h5 className="text-blue-800 text-xl font-bold mb-2">Advanced Encryption</h5>
            <p className="text-slate-700 text-base">Modern encryption protocols protect communications and transactions.</p>
          </div>
        </div>
        {/* <div className="col-span-full flex justify-center items-center bg-white w-full">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-2 p-6 animate-fade-in-up truncate whitespace-nowrap">Marketing-Friendly</h1>
          </div>

          <div className="col-span-full w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch bg-transparent text-black" style={{ margin: '0', padding: '0' }}>
              <div className="flex flex-col gap-8 h-full">
                <div className="bg-white border border-slate-200 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] about-card-hover cursor-pointer text-black">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 via-green-100 to-cyan-100 shadow-lg mb-3 border border-blue-200">
                      <BookOpen size={28} className="text-blue-600" />
                    </div>
                    <h3 className="text-blue-700 text-2xl font-semibold">Practical Market Education</h3>
                  </div>
                  <p className="text-black text-xl mt-2 text-justify">We focus on real-world trading concepts, not just theory. Our courses are designed around live market behavior, proven strategies, and practical application.</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-5 w-full flex-col items-center text-center flex-1 min-h-[220px] about-card-hover cursor-pointer text-black">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 via-green-100 to-cyan-100 shadow-lg mb-3 border border-blue-200">
                      <TrendingUp size={28} className="text-blue-600" />
                    </div>
                    <h3 className="text-blue-700 text-2xl font-semibold">Trader-Focused Learning</h3>
                  </div>
                  <p className="text-black text-xl mt-2 text-justify">Our programs are built for beginners to advanced traders, with clear explanations, step-by-step guidance, and continuous mentor support to make learning simple and effective.</p>
                </div>
              </div>

              <div className="flex flex-col gap-8 h-full">
                <div className="bg-white border border-slate-200 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] about-card-hover cursor-pointer text-black">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 via-green-100 to-cyan-100 shadow-lg mb-3 border border-blue-200">
                      <ShieldCheck size={28} className="text-blue-600" />
                    </div>
                    <h3 className="text-blue-700 text-2xl font-semibold">Safe &amp; Transparent Learning</h3>
                  </div>
                  <p className="text-black text-xl mt-2 text-justify">We provide a secure, ethical, and transparent educational platform where students can learn trading concepts with confidence and clarity.</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] about-card-hover cursor-pointer text-black">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 via-green-100 to-cyan-100 shadow-lg mb-3 border border-blue-200">
                      <Users size={28} className="text-blue-600" />
                    </div>
                    <h3 className="text-blue-700 text-2xl font-semibold">Expert-Led Mentorship</h3>
                  </div>
                  <p className="text-black text-xl mt-2 text-justify">Learn directly from experienced market professionals who share practical insights, risk management techniques, and disciplined trading approaches.</p>
                </div>
              </div>

              <div className="flex flex-col gap-8 h-full">
                <div className="bg-white border border-slate-200 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] about-card-hover cursor-pointer text-black">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 via-green-100 to-cyan-100 shadow-lg mb-3 border border-blue-200">
                      <Layers size={28} className="text-blue-600" />
                    </div>
                    <h3 className="text-blue-700 text-2xl font-semibold">Structured &amp; Progressive Curriculum</h3>
                  </div>
                  <p className="text-black text-xl mt-2 text-justify">Our curriculum is carefully structured—from basics to advanced strategies—ensuring smooth learning progression and strong foundational knowledge.</p>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] about-card-hover cursor-pointer text-black">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 via-green-100 to-cyan-100 shadow-lg mb-3 border border-blue-200">
                      <LifeBuoy size={28} className="text-blue-600" />
                    </div>
                    <h3 className="text-blue-700 text-2xl font-semibold">Continuous Support &amp; Growth</h3>
                  </div>
                  <p className="text-black text-xl mt-2 text-justify">Weearning never stops. Our students receive ongoing guidance, updates, and market insights to help them grow consistently in their trading journey.</p>
                </div>
              </div>
            </div>

            
          </div> */}


                {/* <div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 ">
                    {[ '/trader.png', '/trades.png', '/ai.png', '/Forex-Trading.jpg' ].map((src, i) => (
                      <div key={i} className="overflow-hidden rounded-lg bg-black/5 hover:scale-105 transform transition-transform duration-200">
                        <img src={src} alt={`gallery-${i}`} className="w-full h-28 sm:h-32 object-cover" />
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>

       <section className="mt-12">
         <style>{`
           .testimonial-card-hover {
             transition: transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1);
           }
           .testimonial-card-hover:hover {
             transform: translateY(-8px) scale(1.03);
             box-shadow: 0 8px 32px 0 rgba(16, 185, 129, 0.10), 0 2px 8px 0 rgba(14, 165, 233, 0.10);
             z-index: 2;
           }
         `}</style>
          <div className="bg-white max-w-14xl z-1000 mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ position: 'relative', zIndex: 60, filter: 'none', WebkitFilter: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none' }}>
            <h2 className="text-3xl md:text-5xl font-semibold text-center mb-2">MoneyKrishna Education Success Stories</h2>
            <p className="text-center text-xl text-black w-full mb-8">Discover what our Client's have to say about their learning experience and why they trust our platform.</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
              {testimonials.map((item) => (
                <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col testimonial-card-hover" style={{ filter: 'none', WebkitFilter: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none' }}>
                  <div className="h-44 md:h-52 w-full overflow-hidden" style={{ filter: 'none', WebkitFilter: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none' }}>
                    <img src={item.image} alt={`${item.name} photo`} className="w-full h-full object-cover" style={{ filter: 'none', WebkitFilter: 'none' }} />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-slate-700 italic flex-1">“{item.text}”</p>
                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-medium">{item.name}</h4>
                        <span className="text-sm text-slate-500">{item.program}</span>
                      </div>
                      <div className="text-amber-400 text-lg">{"★".repeat(item.rating)}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


      </div>

    </>
  );
}


export default About;


