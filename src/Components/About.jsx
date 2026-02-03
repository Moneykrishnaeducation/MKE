
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import carouselImg0 from '../assets/bg_img.jpg';
import bgImg from '../assets/bg_img.jpg'

// Remove imports for missing images. Only use images that exist.

const navItems = [
  'OUR COMPANY',
  // 'OUR PERSPECTIVES',
  'CAREERS',
  'CONTACT US',
];

const About = () => {
  const [showChatForm, setShowChatForm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('OUR COMPANY');

  // Router hooks for navigation
  const location = useLocation();
  const navigate = useNavigate();

  // Carousel images
  // Only use images that exist. If only bg_img.jpg exists, use it for the carousel.
  const carouselImages = [carouselImg0];
  const [currentImage, setCurrentImage] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

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
      <div className="min-h-screen relative flex items-center justify-center" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/30 to-cyan-50/30 z-0"></div>
        <div className="relative z-10 w-full px-2 sm:px-10 lg:px-8 py-24 flex flex-col items-center justify-center text-center">
          <h1
            className="text-3xl md:text-5xl font-bold gradient-text mb-4 animate-fade-in-up cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={scrollToMainSection}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToMainSection(); } }}
            aria-label="Go to Money Krishna Education section"
          >
            About Us
          </h1>
          <p className="text-lg text-white text-slate-700 max-w-5xl mx-auto animate-fade-in-up">Empowering traders and investors with expert education, actionable strategies, and a supportive community for financial success.</p>
        </div>
      </div>


      {/* Main Section with Home.jsx overlay style */}
      <div id="about-section" className="min-h-screen relative" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        {/* Overlay for better text visibility, like Home.jsx */}

        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/30 to-cyan-50/30 z-0"></div>
        <br></br><br></br>
        <h1 className="text-3xl md:text-4xl text-center font-bold gradient-text mb-2 animate-fade-in-up ">Money Krishna Education</h1>
        <div className="relative mx-0 z-5 w-full p-4 sm:px-6 lg:px-8 py-8">
          {/* About Grids */}

          {/* Individual Grids - Who We Are */}
          <div className="mb-10">
            <div className="bg-white rounded-lg shadow-xl p-4 animate-fade-in-up w-full transition-transform duration-150 hover:scale-[1.02] hover:shadow-lg">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Who We Are</h2>
              <p className="text-slate-700 mb-4">Money Krishna Education is a leading platform dedicated to educating traders and investors about the stock market, forex, crypto, and options trading. Whether you're a beginner or an experienced trader, our goal is to help you make informed trading decisions through expert insights, strategies, and market analysis.</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-1">
                <li>Expert-led content and mentorship</li>
                <li>Actionable insights and up-to-date market trends</li>
                <li>Supportive trader community</li>
              </ul>
            </div>
          </div>

          {/* Individual Grids - What We Offer */}
          <div className="mb-10">
            <div className="bg-white rounded-lg shadow-xl p-8 animate-fade-in-up w-full transition-transform duration-150 hover:scale-[1.02] hover:shadow-lg">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">What We Offer</h2>
              <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                <li>Comprehensive trading courses: basics, technical analysis, advanced strategies</li>
                <li>Live market analysis: real-time insights on stocks, forex, and crypto</li>
                <li>Trading strategies & tips: scalping, swing, day, and options trading</li>
                <li>Community support: join traders sharing insights and experiences</li>
              </ul>
            </div>
          </div>

          {/* Individual Grids - Our Mission */}
          <div className="mb-10">
            <div className="bg-white rounded-lg shadow-xl p-8 animate-fade-in-up w-full transition-transform duration-150 hover:scale-[1.02] hover:shadow-lg">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Our Mission</h2>
              <p className="text-slate-700 mb-4">We strive to provide high-quality trading education that empowers individuals to achieve financial freedom through smart investing. Our team of experienced traders and analysts offers real-time market updates, technical analysis, and trading strategies to help you succeed.</p>
            </div>
          </div>

          {/* Individual Grids - Why Choose Us? */}
          <div className="mb-10">
            <div className="bg-white rounded-lg shadow-xl p-8 animate-fade-in-up w-full transition-transform duration-150 hover:scale-[1.02] hover:shadow-lg">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Why Choose Us?</h2>
              <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                <li>Expert-led content with years of market experience</li>
                <li>Actionable, practical strategies for confident trading</li>
                <li>Stay ahead with the latest financial news and analysis</li>
              </ul>

               {/* Call to Action */}
          {/* <div className="w-full bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-3 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-8 animate-fade-in-up max-w-280 mx-auto">
            <p className="font-semibold text-white text-md">Take Control of Your Financial Future! Enroll Now and Start Your Journey to Consistent Trading Success!</p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=naveen143mca@gmail.com&su=Book%20Free%20Class"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg transition hover:bg-green-100 text-base animate-bounce hover:[animation-play-state:paused]"
            >🚀 Book a free Class</a>
          </div> */}

          {/* Chat Form Modal (optional, not shown by default) */}
          {showChatForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-end bg-opacity-70">
              <div className="border-2 border-green-400 rounded-xl p-4 grid grid-cols-1 gap-4 bg-white max-w-80 w-full relative animate-fadein">
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-green-500 text-2xl font-bold"
                  onClick={() => setShowChatForm(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#1cb152' }}>Book Now for Free Trading Class</h3>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  setError("");
                  setLoading(true);
                  setSubmitted(true);
                  e.target.reset();
                  setTimeout(() => setSubmitted(false), 3000);
                  setLoading(false);
                }}>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded text-gray-500 border border-gray-700 focus:outline-none focus:border-green-400" required />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded text-gray-500 border border-gray-700 focus:outline-none focus:border-green-400" required />
                  <input type="tel" placeholder="Your Mobile" className="w-full px-4 py-2 rounded text-gray-500 border border-gray-700 focus:outline-none focus:border-green-400" required />
                  <textarea placeholder="Message" className="w-full px-4 py-2 rounded text-gray-500 border border-gray-700 focus:outline-none focus:border-green-400" rows={3} />
                  <button type="submit" className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 rounded-full transition" disabled={loading}>
                    {loading ? 'Booking...' : 'Book Free Class'}
                  </button>
                  {submitted && (
                    <div className="text-center font-semibold mt-2" style={{ color: '#1cb152' }}>Thank you! We received your request.</div>
                  )}
                  {error && (
                    <div className="text-red-400 text-center font-semibold mt-2">{error}</div>
                  )}
                </form>
              </div>
            </div>
          )}

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
          `}</style>
        </div>
      </div>
    </>
  );
};

export default About;
