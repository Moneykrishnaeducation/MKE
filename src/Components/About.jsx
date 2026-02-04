
import React from 'react';
import bgImg from '../assets/bg_img.jpg'
import { BookOpen, TrendingUp, ShieldCheck, Users, Layers, LifeBuoy } from 'lucide-react';

// Remove imports for missing images. Only use images that exist.
const testimonials = [
  {
    id: 1,
    name: "Vivek",
    program: "Trading Mentorship Program",
    image: "/public/user1.jpg",
    text: `I did the TMP course from Elearnmarkets in 2021, almost 3.5 years back, and it has been a life-changing experience. Before that, I used to be like "I'll never look towards the stock market," but TMP has changed my mindset...`,
    rating: 5,
  },
  {
    id: 2,
    name: "Shivam",
    program: "Trading Mentorship Program",
    image: "/public/user2.jpg",
    text: `I learned investing and trading in all the assets including equity and MCX. The journey was awesome. Before I enrolled for TMP, I used to invest or trade based on assumptions...`,
    rating: 5,
  },
  {
    id: 3,
    name: "Sharmila",
    program: "Trading Mentorship Program",
    image: "/public/user3.jpg",
    text: `Before joining TMP, there was a big struggle in my life related to stock market trading and investment. But this TMP program has helped me a lot...`,
    rating: 5,
  },
  {
    id: 4,
    name: "Rahul",
    program: "Trading Mentorship Program",
    image: "/public/user4.png",
    text: `Before joining TMP, there was a big struggle in my life related to stock market trading and investment. But this TMP program has helped me a lot...`,
    rating: 4.5,
  },
];

const About = () => {


  return (
    <>
      {/* Hero Section with Home.jsx style */}
      <div className="relative flex items-center py-28 w-full justify-center" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        {/* <div className="absolute inset-0 z-0 bg-black/60" style={{backdropFilter: 'none', WebkitBackdropFilter: 'none', transform: 'scale(1.02)'}} aria-hidden="true"></div>
        Overlay for better text visibility (gradient + btc image)
        <div
          className="absolute inset-0 z-10 bg-cover bg-center"
          style={{backgroundImage: `linear-gradient(135deg, rgba(192, 228, 205, 0.22), rgba(187, 224, 241, 0.22)), url('/bg_img.jpg')`, filter: 'none', WebkitFilter: 'none', transform: 'scale(1.02)'}}
          aria-hidden="true"
        ></div>
        <div className="relative z-20 w-full sm:px-10 lg:px-4 py-25 flex flex-col items-center justify-center text-center"> */}
          <h1 className="text-8xl md:text-10xl font-bold text-white mb-4 animate-fade-in-up cursor-pointer">
  About
</h1>

          {/* <p className=" text-white text-2xl max-w-5xl mx-auto animate-fade-in-up">Empowering traders and investors with expert education, actionable strategies, and a supportive community for financial success.</p>
        </div> */}
      </div>


      {/* Main Section with Home.jsx overlay style */}
      <div id="about-section" className="relative" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        <div className="absolute inset-0 z-0 bg-black/60"></div>
        {/* Overlay for better text visibility, like Home.jsx */}

        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/30 to-cyan-50/30 z-10"></div>
        <div className="relative mx-0 z-20 w-full p-4 sm:px-6 lg:px-8 py-8">
          <div className="absolute inset-0 z-0 rounded-lg pointer-events-none" style={{background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.02), rgba(243, 242, 242, 0.02))', backdropFilter: 'none', WebkitBackdropFilter: 'none'}} aria-hidden="true" />
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
            {/* About Grids */}

{/* Individual Grids - Who We Are (two-column: image left, text right) */}
  <div className="col-span-full">
  <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[650px] rounded-lg overflow-hidden shadow-xl">

    {/* Image Section */}
    <div className="relative w-full h-full">
      <img
        src="/public/user4.png"
        alt="About"
        className="w-full h-full object-cover"
      />
      <div className="absolute right-0 top-0 h-full pointer-events-none" style={{width: '6rem', background: 'linear-gradient(to left, rgba(14,165,233,0.22), rgba(14,165,233,0.08), transparent)'}} />
    </div>

    {/* Center separator (visible on md+) */}
    <div className="hidden md:block absolute left-1/2 top-0 h-full w-8 pointer-events-none -translate-x-1/2 flex items-center justify-center">
      <div style={{width: '2px', height: '86%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(255,255,255,0.03), rgba(0,0,0,0.45))', borderRadius: '2px', boxShadow: '0 0 30px rgba(0,0,0,0.45)'}} />
    </div>

    {/* Content Section */}
    <div className="bg-slate-700 text-white p-12 flex flex-col justify-center space-y-6 animate-fade-in-up transition-transform duration-150 hover:scale-[1.01]">

      <h2 className="text-4xl font-bold mb-2">Company Overview</h2>
      <p className="text-lg text-justify max-w-2xl">
        MoneyKrishna Education has been empowering traders and investors for over 4 years by delivering practical market knowledge, strategic insights, and hands-on learning in multi-asset trading and investing. We focus on building strong foundations, disciplined strategies, and long-term confidence in the financial markets.
      </p>

      <h3 className="text-3xl font-semibold">Who We Are?</h3>
      <p className="text-lg text-justify max-w-2xl">
        MoneyKrishna Education is founded by a group of experienced trading professionals and market enthusiasts who are passionate about financial education. We are committed to guiding our clients with transparency, integrity, and real-world expertise. Every step we take is focused on helping learners grow into confident and independent traders.
      </p>

      <h3 className="text-3xl font-semibold">Our Mission</h3>
      <p className="text-lg text-justify max-w-2xl">
        Our mission is to provide fair, transparent, and high-quality financial education supported by modern tools and proven trading methodologies. We aim to become a trusted learning partner for every student by helping them understand the markets, manage risk, and trade with confidence.
      </p>

      <h3 className="text-3xl font-semibold">Our Vision</h3>
      <p className="text-lg text-justify max-w-2xl">
        MoneyKrishna Education represents knowledge, confidence, and innovation. We strive to empower traders through structured education, advanced trading tools, and continuous learning opportunities—enabling them to make informed decisions and achieve long-term success in the financial markets.
      </p>

    </div>
  
</div>

              
            </div>
          </div>

       <br></br><br></br>
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
                    <h3 className="text-yellow-600 text-2xl font-semibold">Practical Market Education</h3>
                  </div>
                  <p className="text-white text-xl mt-2 text-justify">We focus on real-world trading concepts, not just theory. Our courses are designed around live market behavior, proven strategies, and practical application.</p>
                </div>

                <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <TrendingUp size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="text-yellow-600 text-2xl font-semibold">Trader-Focused Learning</h3>
                  </div>
                  <p className="text-white text-xl mt-2 text-justify">Our programs are built for beginners to advanced traders, with clear explanations, step-by-step guidance, and continuous mentor support to make learning simple and effective.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 h-full">
                <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <ShieldCheck size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="text-yellow-600 text-2xl font-semibold">Safe &amp; Transparent Learning</h3>
                  </div>
                  <p className="text-white text-xl mt-2 text-justify">We provide a secure, ethical, and transparent educational platform where students can learn trading concepts with confidence and clarity.</p>
                </div>

                <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <Users size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="text-yellow-600 text-2xl font-semibold">Expert-Led Mentorship</h3>
                  </div>
                  <p className="text-white text-xl mt-2 text-justify">Learn directly from experienced market professionals who share practical insights, risk management techniques, and disciplined trading approaches.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 h-full">
                <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <Layers size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="text-yellow-600 text-2xl font-semibold">Structured &amp; Progressive Curriculum</h3>
                  </div>
                  <p className="text-white text-xl mt-2 text-justify">Our curriculum is carefully structured—from basics to advanced strategies—ensuring smooth learning progression and strong foundational knowledge.</p>
                </div>

                <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <LifeBuoy size={28} className="text-yellow-500" />
                    </div>
                    <h3 className="text-yellow-600 text-2xl font-semibold">Continuous Support &amp; Growth</h3>
                  </div>
                  <p className="text-white text-xl mt-2 text-justify">We believe learning never stops. Our students receive ongoing guidance, updates, and market insights to help them grow consistently in their trading journey.</p>
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
                    <h5 className="text-yellow-600 text-2xl font-semibold">Institutional Credibility</h5>
                    <p className="text-white text-xl mt-2">Registered and operating in compliance with applicable educational and business regulations.</p>
                  </div>

                  <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <Layers size={28} className="text-amber-400" />
                    </div>
                    <h5 className="text-yellow-600 text-2xl font-semibold">Client Data Protection</h5>
                    <p className="text-white text-xl  mt-2">Clients' funds are kept separate from operational accounts for added protection.</p>
                  </div>

                  <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <Users size={28} className="text-amber-400" />
                    </div>
                    <h5 className="text-yellow-600 text-2xl font-semibold">Trusted Payment Partners</h5>
                    <p className="text-white text-xl mt-2">We maintain partnerships with tier-1 banks to secure payment and custody services.</p>
                  </div>

                  <div className="bg-black/10 border border-slate-700 rounded-lg p-5 w-full flex flex-col items-center text-center flex-1 min-h-[220px] transition transform hover:-translate-y-1 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                    <div className="p-3 rounded-full bg-white/10 shadow-md mb-3">
                      <LifeBuoy size={28} className="text-amber-400" />
                    </div>
                    <h5 className="text-yellow-600 text-2xl font-semibold">Advanced Encryption</h5>
                    <p className="text-white text-xl mt-2">Modern encryption protocols protect communications and transactions.</p>
                  </div>
                </div>
                <br></br>
                <div>
                
                <div>
                <p className="text-xl mb-4 text-white text-justify"><span className="text-amber-300 font-semibold shadow-animate">MoneyKrishna Education</span> proudly supports learners from across the globe, delivering high-quality financial and professional education to students worldwide. We follow strict ethical and data-protection standards because safeguarding our students’ information and learning journey is our top priority. We are committed to providing a trusted, transparent, and reliable educational environment for every learner.</p>
                </div>
                </div>
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

              </div>
            </div>
          </div>
              <section className="mt-12">
    <div className="bg-white max-w-14xl z-1000 mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{position: 'relative', zIndex: 60, filter: 'none', WebkitFilter: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none'}}>
      <h2 className="text-4xl font-semibold text-center mb-2">MoneyKrishna Education Success Stories</h2>
      <p className="text-center text-xl text-black w-full mb-8">Discover what our Client's have to say about their learning experience and why they trust our platform.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {testimonials.map((item) => (
          <article key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col" style={{filter: 'none', WebkitFilter: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none'}}>
            <div className="h-44 md:h-52 w-full overflow-hidden" style={{filter: 'none', WebkitFilter: 'none', backdropFilter: 'none', WebkitBackdropFilter: 'none'}}>
              <img src={item.image} alt={`${item.name} photo`} className="w-full h-full object-cover" style={{filter: 'none', WebkitFilter: 'none'}} />
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
      
      
    </>
  );
};

export default About;
