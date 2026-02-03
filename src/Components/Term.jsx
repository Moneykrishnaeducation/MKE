import React, { useEffect, useState } from 'react'
import bgImg from '../assets/bg_img.jpg'

const Term = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen relative" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.7}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className={`text-5xl font-bold mb-12 text-center text-white transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>Terms &amp; Conditions</h1>
        
        <div className="space-y-6 text-white/90">
          <section className={`pb-6 border-b border-white/50 rounded-lg transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">1. Introduction</h2>
            <p>Welcome to Money Krishna Education. These Terms &amp; Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.</p>
          </section>

          <section className={`pb-6 border-b border-white/50 rounded-lg transition-all duration-700 transform delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">2. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Obscene or offensive statements or language</li>
              <li>Disrupting the normal flow of dialogue within our website</li>
              <li>Attempting to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section className={`pb-6 border-b border-white/50 rounded-lg transition-all duration-700 transform delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">3. Trading Disclaimer</h2>
            <p>Please note that trading and investing in financial markets carries substantial risk of loss. Money Krishna Education provides educational content only and does not guarantee profits or specific results. Past performance is not indicative of future results.</p>
            <p className="mt-3">You are solely responsible for your trading decisions. Our courses are meant to educate and provide information, not to serve as personal financial advice.</p>
          </section>

          <section className={`pb-6 border-b border-white/50 rounded-lg transition-all duration-700 transform delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p>All content on this website, including but not limited to text, graphics, logos, images, and videos, is the property of Money Krishna Education or its content suppliers and is protected by international copyright laws.</p>
          </section>

          <section className={`pb-6 border-b border-white/50 rounded-lg transition-all duration-700 transform delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">5. Refund Policy</h2>
            <p>All course registrations are non-refundable after enrollment begins. Students are responsible for maintaining their login credentials and accessing the course materials within the specified time frame.</p>
          </section>

          <section className={`pb-6 border-b border-white/50 rounded-lg transition-all duration-700 transform delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">6. Limitation of Liability</h2>
            <p>Money Krishna Education shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website or services, even if we have been advised of the possibility of such damages.</p>
          </section>

          <section className={`pb-6 border-b border-white/50 rounded-lg transition-all duration-700 transform delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of revised terms means you accept and agree to the changes.</p>
          </section>

          <section className={`pb-6 border-b border-white/50 rounded-lg transition-all duration-700 transform delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">8. Governing Law</h2>
            <p>These Terms &amp; Conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Chennai.</p>
          </section>

          <section className={`pb-6 rounded-lg transition-all duration-700 transform delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">9. Contact Us</h2>
            <div className="mt-3 ml-4 text-white/85">
              <p><strong className="text-emerald-300">Email:</strong> moneykrishnaeducation@gmail.com</p>
              <p><strong className="text-emerald-300">Phone:</strong> +91 95000 74778</p>
              <p><strong className="text-emerald-300">Address:</strong> 3rd floor, I Block, 35th Street, 18th Main Rd, Anna Nagar West, Chennai</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Term
