


const socials = [
  { href: "https://facebook.com", label: "Facebook", icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
  ) },
  { href: "https://twitter.com", label: "Twitter", icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89-.386.104-.793.16-1.213.16-.297 0-.583-.028-.862-.08.584 1.823 2.28 3.152 4.29 3.188A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
  ) },
  { href: "https://instagram.com", label: "Instagram", icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.602.388 3.635 1.355 2.668 2.322 2.41 3.495 2.352 4.772.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.316 2.45 1.283 3.417.967.967 2.14 1.225 3.417 1.283C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.058 2.45-.316 3.417-1.283.967-.967 1.225-2.14 1.283-3.417.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.058-1.277-.316-2.45-1.283-3.417-.967-.967-2.14-1.225-3.417-1.283C15.668.014 15.259 0 12 0z"/><circle cx="12" cy="12" r="3.5"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
  ) },
  { href: "https://linkedin.com", label: "LinkedIn", icon: (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
  ) },
];

import React, { useState } from 'react';

const About = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // showImageModal can be false, 'trade', 'vttrade', 'buy', or 'bitc'
  const [showImageModal, setShowImageModal] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const form = e.target;
    const data = {
      name: form[0].value,
      email: form[1].value,
      mobile: form[2].value,
      message: form[3].value,
    };
    try {
      const res = await fetch('http://localhost:4000/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(result.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Could not connect to server.');
    }
    setLoading(false);
  };
  return (
    <div className="relative min-h-screen text-white font-sans">
      {/* Background image, no overlay */}
      <div className="absolute inset-0 -z-10">
        {/* <img src="/trading.jpg" alt="Trading background" className="w-full h-full object-cover" /> */}
      </div>
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-400 mb-6">About Us</h1>
          {/* 1st row: Who We Are (right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <img
                src="/buy1.png"
                alt="Buy"
                className="w-100 h-70 object-contain rounded-xl shadow-lg shadow-green-200/40 cursor-pointer transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-200/70 animate-fadein"
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
              <h2 className="text-xl sm:text-2xl font-semibold text-green-300 mb-4">Who We Are</h2>
              <p className="text-black mb-6 max-w-2xl text-justify">Money Krishna Education is a leading platform dedicated to educating traders and investors about the stock market, forex, crypto, and options trading. Whether you're a beginner or an experienced trader, our goal is to help you make informed trading decisions through expert insights, strategies, and market analysis.</p>
            </div>
          </div>
          {/* 2nd row: What We Offer (left) + image right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-green-300 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:border-green-500 hover:shadow-xl p-6 bg-white">
              <h3 className="text-lg font-semibold text-green-300 mb-2">What We Offer</h3>
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
                className="w-100 h-70 object-cover rounded-xl shadow-lg shadow-green-200/40 cursor-pointer transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-200/70 animate-fadein"
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
                src="/b.jpg"
                alt="Bitcoin"
                className="w-80 h-[100%] object-contain rounded-xl shadow-lg shadow-green-200/40 cursor-pointer transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-200/70 animate-fadein"
                style={{ animation: 'popUp 0.6s cubic-bezier(.17,.67,.83,.67)' }}
                onClick={() => setShowImageModal('bitc')}
              />
              {showImageModal === 'bitc' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fadein" onClick={() => setShowImageModal(false)}>
                  <img
                    src="/b.jpg"
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
              <h3 className="text-lg font-semibold text-green-300 mb-2">Our Mission</h3>
              <p className="text-black mb-6 max-w-2xl text-justify">We strive to provide high-quality trading education that empowers individuals to achieve financial freedom through smart investing. Our team of experienced traders and analysts offers real-time market updates, technical analysis, and trading strategies to help you succeed.</p>
            </div>
          </div>
          {/* 4th row: Why Choose Us? (left) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-green-300 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:border-green-500 hover:shadow-xl p-6 bg-white">
              <h3 className="text-lg font-semibold text-green-300 mb-2">Why Choose Us?</h3>
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
        <div className="bg-[#18202b] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <p className="font-semibold text-lg text-white">Take Control of Your Financial Future! Enroll Now and Start Your Journey to Consistent Trading Success!</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=naveen143mca@gmail.com&su=Book%20Free%20Class"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-full shadow-lg transition"
          >
            🚀 Book a free Class
          </a>
        </div>
        {/* Contact & Book Now Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#151a23] rounded-2xl p-8 shadow-lg">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-2">Trade Smart. Trade Confidently.</h2>
              <h3 className="text-xl font-semibold mb-2">Contact Us:</h3>
              <p className="text-lg font-semibold mb-1">Get in Touch with Us</p>
              <p className="text-gray-300 mb-4">Have questions about our trading courses, market analysis, or strategies? We’d love to hear from you!</p>
              <div className="mb-2">
                <span className="block font-semibold text-white">Arun Builders, Plot No 1050, 3rd floor, I Block, 35th Street, Aishwarya Colony, 18th Main Rd, Anna Nagar West, Chennai - 600040.</span>
                <span className="block text-green-300 font-semibold mt-2">Mobile : <a href="tel:+919500074778" className="hover:underline">+91 95000 74778</a></span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-gray-400 hover:text-green-400 transition">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Right: Book Now Form */}
          <div className="bg-[#10141c] rounded-xl p-6 flex flex-col justify-center shadow-md">
            <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Book Now for Free Trading Class</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-[#151a23] text-white border border-gray-700 focus:outline-none focus:border-green-400" required />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-[#151a23] text-white border border-gray-700 focus:outline-none focus:border-green-400" required />
              <input type="tel" placeholder="Your Mobile" className="w-full px-4 py-2 rounded bg-[#151a23] text-white border border-gray-700 focus:outline-none focus:border-green-400" required />
              <textarea placeholder="Message" className="w-full px-4 py-2 rounded bg-[#151a23] text-white border border-gray-700 focus:outline-none focus:border-green-400" rows={3} />
              <button type="submit" className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 rounded-full transition" disabled={loading}>
                {loading ? 'Booking...' : 'Book Free Class'}
              </button>
              {submitted && (
                <div className="text-green-400 text-center font-semibold mt-2">Thank you! We received your request.</div>
              )}
              {error && (
                <div className="text-red-400 text-center font-semibold mt-2">{error}</div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;