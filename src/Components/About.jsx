
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bgImg from '../assets/bg_img.jpg'
import { BookOpen, TrendingUp, ShieldCheck, Users, Layers, LifeBuoy } from 'lucide-react';

// Remove imports for missing images. Only use images that exist.


const About = () => {


  // Router hooks for navigation
  const location = useLocation();
  const navigate = useNavigate();



  // Scroll to contact section if on page
  function scrollToContactOnPage() {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  }

  // Scroll to main About section (Money Krishna Education)
  function scrollToMainSection() {
    const el = document.getElementById('about-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    // fallback: navigate to about route if anchor not present
    try {
      navigate('/about');
    } catch (e) {
      // ignore
    }
    return false;
  }

  // Handler for CONTACT US navigation
  const handleContactClick = (e) => {
    if (e) e.preventDefault();
    // If already on home page, scroll to contact
    if (location.pathname === '/') {
      if (!scrollToContactOnPage()) {
        // fallback: navigate to home to ensure element exists
        navigate('/');
      }
      return;
    }
    // Otherwise navigate to home and instruct it to scroll
    navigate('/', { state: { scrollToContact: true } });
  };


  return (
    <>
      {/* Hero Section with Home.jsx style */}
      <div className="relative flex items-center justify-center" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        <div className="absolute inset-0 z-0 bg-black/60" style={{backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', transform: 'scale(1.02)'}} aria-hidden="true"></div>
        {/* Overlay for better text visibility (gradient + btc image) */}
        <div
          className="absolute inset-0 z-10 bg-cover bg-center"
          style={{backgroundImage: `linear-gradient(135deg, rgba(22,163,74,0.22), rgba(14,165,233,0.22)), url('/bg_img.jpg')`, filter: 'blur(6px)', WebkitFilter: 'blur(6px)', transform: 'scale(1.02)'}}
          aria-hidden="true"
        ></div>
        <div className="relative z-20 w-full px-2 sm:px-10 lg:px-8 py-24 flex flex-col items-center justify-center text-center">
          <h1
            className="text-3xl md:text-5xl font-bold gradient-text mb-4 animate-fade-in-up cursor-pointer"
          >
            About Us
          </h1>
          <p className="text-lg text-white text-slate-700 max-w-5xl mx-auto animate-fade-in-up">Empowering traders and investors with expert education, actionable strategies, and a supportive community for financial success.</p>
        </div>
      </div>


      {/* Main Section with Home.jsx overlay style */}
      <div id="about-section" className="relative" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        <div className="absolute inset-0 z-0 bg-black/60"></div>
        {/* Overlay for better text visibility, like Home.jsx */}

        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/30 to-cyan-50/30 z-10"></div>
        <div className="relative mx-0 z-20 w-full p-4 sm:px-6 lg:px-8 py-8">
          <div className="absolute inset-0 z-0 rounded-lg pointer-events-none" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)'}} aria-hidden="true" />
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Grids */}

          {/* Individual Grids - Who We Are */}
          <div>
            <div className="bg-white rounded-lg shadow-xl p-6 animate-fade-in-up w-full h-full flex flex-col justify-between transition-transform duration-150 hover:scale-[1.02] hover:shadow-lg ">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Company Overview</h2>
              <p className="text-slate-700 mb-4 text-justify">MoneyKrishna Education has been empowering traders and investors for over 4 years by delivering practical market knowledge, 
                strategic insights, and hands-on learning in multi-asset 
                trading and investing. We focus on building strong foundations, disciplined strategies, and long-term confidence in the financial markets.</p>
            </div>
          </div>

          {/* Individual Grids - What We Offer */}
          <div>
            <div className="bg-white rounded-lg shadow-xl p-6 animate-fade-in-up w-full h-full flex flex-col justify-between transition-transform duration-150 hover:scale-[1.02] hover:shadow-lg">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Who We Are?</h2>
                <p className="text-slate-700 mb-4 text-justify">MoneyKrishna Education is founded by a group of experienced
                  trading professionals and market enthusiasts who are passionate about 
                  financial education. We are committed to guiding our clients with transparency, integrity, and real-world expertise. Every step we take
                  is focused on helping learners grow into confident and independent traders.</p>
            </div>
          </div>

          {/* Individual Grids - Our Mission */}
          <div>
            <div className="bg-white rounded-lg shadow-xl p-6 animate-fade-in-up w-full h-full flex flex-col justify-between transition-transform duration-150 hover:scale-[1.02] hover:shadow-lg">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Our Mission</h2>
              <p className="text-slate-700 mb-4 text-justify"> Our mission is to provide fair, transparent, and high-quality financial education supported by modern tools and proven trading methodologies. We aim to become a trusted learning partner for every student 
                by helping them understand the markets, manage risk, and trade with confidence.</p>
            </div>
          </div>

          {/* Individual Grids - Why Choose Us? */}
          <div>
            <div className="bg-white rounded-lg shadow-xl p-6 animate-fade-in-up w-full h-full flex flex-col justify-between transition-transform duration-150 hover:scale-[1.02] hover:shadow-lg">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Our Vision</h2>
              <p className="text-slate-700 text-justify">MoneyKrishna Education represents knowledge, confidence, and innovation. 
                We strive to empower traders through structured education, advanced trading tools, and continuous learning opportunities—enabling them to make informed 
                decisions and achieve long-term success in the financial markets.</p>


            </div>
            
          </div>
       
          <div className="col-span-full flex justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2 animate-fade-in-up truncate whitespace-nowrap"></h1>
          </div>

          <div className="col-span-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="flex flex-col gap-4 h-full">
                <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <BookOpen size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="text-white font-semibold">Practical Market Education</h3>
                  </div>
                  <p className="text-slate-300 text-sm mt-2 text-justify">We focus on real-world trading concepts, not just theory. Our courses are designed around live market behavior, proven strategies, and practical application.</p>
                </div>

                <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <TrendingUp size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="text-white font-semibold">Trader-Focused Learning</h3>
                  </div>
                  <p className="text-slate-300 text-sm mt-2 text-justify">Our programs are built for beginners to advanced traders, with clear explanations, step-by-step guidance, and continuous mentor support to make learning simple and effective.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 h-full">
                <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <ShieldCheck size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="text-white font-semibold">Safe &amp; Transparent Learning</h3>
                  </div>
                  <p className="text-slate-300 text-sm mt-2 text-justify">We provide a secure, ethical, and transparent educational platform where students can learn trading concepts with confidence and clarity.</p>
                </div>

                <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <Users size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="text-white font-semibold">Expert-Led Mentorship</h3>
                  </div>
                  <p className="text-slate-300 text-sm mt-2 text-justify">Learn directly from experienced market professionals who share practical insights, risk management techniques, and disciplined trading approaches.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 h-full">
                <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <Layers size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="text-white font-semibold">Structured &amp; Progressive Curriculum</h3>
                  </div>
                  <p className="text-slate-300 text-sm mt-2 text-justify">Our curriculum is carefully structured—from basics to advanced strategies—ensuring smooth learning progression and strong foundational knowledge.</p>
                </div>

                <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <LifeBuoy size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="text-white font-semibold">Continuous Support &amp; Growth</h3>
                  </div>
                  <p className="text-slate-300 text-sm mt-2 text-justify">We believe learning never stops. Our students receive ongoing guidance, updates, and market insights to help them grow consistently in their trading journey.</p>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <div>

                <br></br><br></br>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
                  <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <ShieldCheck size={28} className="text-amber-400" />
                    </div>
                    <h5 className="text-white font-semibold">Institutional Credibility</h5>
                    <p className="text-slate-300 text-sm mt-2">Registered and operating in compliance with applicable educational and business regulations.</p>
                  </div>

                  <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <Layers size={28} className="text-amber-400" />
                    </div>
                    <h5 className="text-white font-semibold">Client Data Protection</h5>
                    <p className="text-slate-300 text-sm mt-2">Clients' funds are kept separate from operational accounts for added protection.</p>
                  </div>

                  <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <Users size={28} className="text-amber-400" />
                    </div>
                    <h5 className="text-white font-semibold">Trusted Payment Partners</h5>
                    <p className="text-slate-300 text-sm mt-2">We maintain partnerships with tier-1 banks to secure payment and custody services.</p>
                  </div>

                  <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <LifeBuoy size={28} className="text-amber-400" />
                    </div>
                    <h5 className="text-white font-semibold">Advanced Encryption</h5>
                    <p className="text-slate-300 text-sm mt-2">Modern encryption protocols protect communications and transactions.</p>
                  </div>
                </div>
                <br></br>
                <div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 text-center">Security &amp; Trust</h2>
                <div>
                <p className="text-slate-300 mb-4 text-justify"><span className="text-amber-300 font-semibold shadow-animate">MoneyKrishna Education</span> proudly supports learners from across the globe, delivering high-quality financial and professional education to students worldwide. We follow strict ethical and data-protection standards because safeguarding our students’ information and learning journey is our top priority. We are committed to providing a trusted, transparent, and reliable educational environment for every learner.</p>
                </div>

              </div>
              </div>
            </div>
          </div>

         
          {/* Gradient text style for headings */}
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
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
