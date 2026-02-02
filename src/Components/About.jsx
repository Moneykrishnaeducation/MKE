import React, { useState } from 'react';
import bgImg from '../assets/bg_img.jpg';

const About = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // showImageModal can be false, 'trade', 'vttrade', 'buy', or 'bitc'
  const [showImageModal, setShowImageModal] = useState(false);
  const [showChatForm, setShowChatForm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const form = e.target;
    // Simulate successful submission locally
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 3000);
    setLoading(false);
  };
  return (
   <div className="min-h-[200vh] relative" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      {/* Chat Icon Floating Button */}
      {/* <button
        type="button"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform duration-300 hover:scale-110"
        title="Chat with us or Book Now"
        onClick={() => setShowChatForm(true)}
      >
       
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 15.75a2.25 2.25 0 01-2.25 2.25H6.18l-3.43 2.74A.75.75 0 012 20.25v-15A2.25 2.25 0 014.25 3h15.25a2.25 2.25 0 012.25 2.25v10.5z" />
        </svg>
      </button> */}

      {/* Chat Form Modal */}
      {showChatForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-end  bg-opacity-70">
          <div className="border-2 border-green-400 rounded-xl p-4 grid grid-cols-1 gap-4 bg-white max-w-80 w-full relative animate-fadein">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-green-500 text-2xl font-bold"
              onClick={() => setShowChatForm(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#1cb152' }}>Book Now for Free Trading Class</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded  text-gray-500 border border-gray-700 focus:outline-none focus:border-green-400" required />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded  text-gray-500 border border-gray-700 focus:outline-none focus:border-green-400" required />
              <input type="tel" placeholder="Your Mobile" className="w-full px-4 py-2 rounded  text-gray-500 border border-gray-700 focus:outline-none focus:border-green-400" required />
              <textarea placeholder="Message" className="w-full px-4 py-2 rounded  text-gray-500 border border-gray-700 focus:outline-none focus:border-green-400" rows={3} />
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
      {/* Background image, no overlay */}
      {/* Removed old background image div, now using CSS background */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-400 mb-6">About Us</h1>
          
          {/* 1st row: Who We Are (right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <img
                src="/buy1.png"
                alt="Buy"
                className="w-100 h-60 object-cover rounded-xl shadow-lg shadow-green-200/40 cursor-pointer transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-200/70 animate-fadein"
                 style={{ animation: 'popUp 0.6s cubic-bezier(.17,.67,.83,.67)' }}
                onClick={() => setShowImageModal('buy')}
              />
              {showImageModal === 'buy' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fadein" onClick={() => setShowImageModal(false)}>
                  <img
                    src="/buy1.png"
                    alt="Buy Large"
                    className="rounded-2xl shadow-2xl animate-pop-up max-w-xs md:max-w-lg lg:max-w-2xl"
                    style={{ animation: 'popUp 0.6s cubic-bezier(.17,.67,.83,.67)' }}
                  />
                  <style>{`
                    @keyframes popUp {
                      0% { transform: scale(0.7); opacity: 0; }
                      100% { transform: scale(1); opacity: 1; }
                    }
                  `}</style>
                </div>
              )}
            </div>
            <div className="border border-green-300 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:border-green-500 hover:shadow-xl p-6 bg-white">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: '#1cb152' }}>Who We Are</h2>
              <p className="text-black mb-6 max-w-2xl text-justify">Money Krishna Education is a leading platform dedicated to educating traders and investors about the stock market, forex, crypto, and options trading. Whether you're a beginner or an experienced trader, our goal is to help you make informed trading decisions through expert insights, strategies, and market analysis.</p>
            </div>
          </div>
          {/* 2nd row: What We Offer (left) + image right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-green-300 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:border-green-500 hover:shadow-xl p-6 bg-white">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1cb152' }}>What We Offer</h3>
              <ul className="list-disc pl-6 text-black mb-6 space-y-1 text-justify">
                <li>Comprehensive Trading Courses – Learn stock market basics, technical analysis, and advanced trading strategies.</li>
                <li>Live Market Analysis – Stay updated with real-time insights on stocks, forex, and cryptocurrencies.</li>
                <li>Trading Strategies & Tips – Master scalping, swing trading, day trading, and options trading.</li>
                <li>Community Support – Join a community of traders and investors sharing insights and experiences.</li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/trade.png"
                alt="Stock Market Growth"
                className="w-100 h-70 object-cover bg-white rounded-xl shadow-lg shadow-green-200/40 cursor-pointer transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-200/70 animate-fadein"
                style={{ animation: 'popUp 0.6s cubic-bezier(.17,.67,.83,.67)' }}
                onClick={() => setShowImageModal(true)}
              />
              {showImageModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fadein" onClick={() => setShowImageModal(false)}>
                  <img
                    src="/trade.png"
                    alt="Stock Market Growth Large"
                    className="rounded-2xl shadow-2xl animate-pop-up max-w-xs md:max-w-lg lg:max-w-2xl"
                    style={{ animation: 'popUp 0.6s cubic-bezier(.17,.67,.83,.67)' }}
                  />
                  <style>{`
                    @keyframes popUp {
                      0% { transform: scale(0.7); opacity: 0; }
                      100% { transform: scale(1); opacity: 1; }
                    }
                  `}</style>
                </div>
              )}
            </div>
          </div>
          {/* 3rd row: Our Mission (right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <img
                src="/btc.jpg"
                alt="Bitcoin"
                className="w-100 h-60 object-cover rounded-xl shadow-lg shadow-green-200/40 cursor-pointer transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-200/70 animate-fadein"
                 style={{ animation: 'popUp 0.6s cubic-bezier(.17,.67,.83,.67)' }}
                onClick={() => setShowImageModal('bitc')}
              />
              {showImageModal === 'bitc' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fadein" onClick={() => setShowImageModal(false)}>
                  <img
                    src="/btc.jpg"
                    alt="Bitcoin Large"
                    className="rounded-2xl shadow-2xl animate-pop-up h-100 max-w-xs md:max-w-lg lg:max-w-2xl"
                    style={{ animation: 'popUp 0.6s cubic-bezier(.17,.67,.83,.67)' }}
                  />
                  <style>{`
                    @keyframes popUp {
                      0% { transform: scale(0.7); opacity: 0; }
                      100% { transform: scale(1); opacity: 1; }
                    }
                  `}</style>
                </div>
              )}
            </div>
            <div className="border border-green-300 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:border-green-500 hover:shadow-xl p-6 bg-white">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1cb152' }}>Our Mission</h3>
              <p className="text-black mb-6 max-w-2xl text-justify">We strive to provide high-quality trading education that empowers individuals to achieve financial freedom through smart investing. Our team of experienced traders and analysts offers real-time market updates, technical analysis, and trading strategies to help you succeed.</p>
            </div>
          </div>
          {/* 4th row: Why Choose Us? (left) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-green-300 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:border-green-500 hover:shadow-xl p-6 bg-white">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1cb152' }}>Why Choose Us?</h3>
              <ul className="list-disc pl-6 text-black mb-6 space-y-1 text-justify">
                <li>Expert-Led Content – Our trading experts have years of experience in the financial markets.</li>
                <li>Actionable Insights – Practical strategies that help you trade confidently.</li>
                <li>Up-to-Date Market Trends – Stay ahead with the latest financial news and technical analysis.</li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/vt.jpg"
                alt="VT Trade"
                className="w-100 h-60 object-cover rounded-xl shadow-lg shadow-green-200/40 cursor-pointer transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-200/70 animate-fadein"
                style={{ animation: 'popUp 0.6s cubic-bezier(.17,.67,.83,.67)' }}
                onClick={() => setShowImageModal('vt')}
              />
              {showImageModal === 'vt' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fadein" onClick={() => setShowImageModal(false)}>
                  <img
                    src="/vt.jpg"
                    alt="VT Trade Large"
                    className="rounded-2xl shadow-2xl animate-pop-up max-w-xs md:max-w-lg lg:max-w-2xl"
                    style={{ animation: 'popUp 0.6s cubic-bezier(.17,.67,.83,.67)' }}
                  />
                  <style>{`
                    @keyframes popUp {
                      0% { transform: scale(0.7); opacity: 0; }
                      100% { transform: scale(1); opacity: 1; }
                    }
                  `}</style>
                </div>
              )}
            </div>
          </div>

          {/* 4th row: Who We Are (left) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Who We Are</h2>
              <p className="text-gray-300 mb-6 max-w-2xl">Money Krishna Education is a leading platform dedicated to educating traders and investors about the stock market, forex, crypto, and options trading. Whether you're a beginner or an experienced trader, our goal is to help you make informed trading decisions through expert insights, strategies, and market analysis.</p>
            </div> */}
            <div></div>
          </div>
        </div>
        <div className="border-2 border-green-300 bg-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 transition duration-300 hover:border-green-500 hover:shadow-xl hover:scale-105">
          <p className="font-semibold text-sm text-black">Take Control of Your Financial Future! Enroll Now and Start Your Journey to Consistent Trading Success!</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=naveen143mca@gmail.com&su=Book%20Free%20Class"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition animate-bounce text-base hover:[animation-play-state:paused]"
          >🚀 Book a free Class</a>
        </div>
      
      
      </section>
    </div>
    
  );
};

export default About;