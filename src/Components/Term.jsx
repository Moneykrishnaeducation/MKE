import React from 'react'
import bgImg from '../assets/bg_img.jpg'

const Term = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: "Welcome to Money Krishna Education. These Terms & Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms."
    },
    {
      title: "2. Use of Website",
      content: "You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes harassing or causing distress, obscene statements, disrupting dialogue, and attempting unauthorized access to our systems."
    },
    {
      title: "3. Trading Disclaimer",
      content: "Please note that trading and investing in financial markets carries substantial risk of loss. Money Krishna Education provides educational content only and does not guarantee profits or specific results. Past performance is not indicative of future results. You are solely responsible for your trading decisions."
    },
    {
      title: "4. Intellectual Property",
      content: "All content on this website, including but not limited to text, graphics, logos, images, and videos, is the property of Money Krishna Education or its content suppliers and is protected by international copyright laws."
    },
    {
      title: "5. Refund Policy",
      content: "All course registrations are non-refundable after enrollment begins. Students are responsible for maintaining their login credentials and accessing the course materials within the specified time frame."
    },
    {
      title: "6. Limitation of Liability",
      content: "Money Krishna Education shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website or services, even if we have been advised of the possibility of such damages."
    },
    {
      title: "7. Changes to Terms",
      content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of revised terms means you accept and agree to the changes."
    },
    {
      title: "8. Governing Law",
      content: "These Terms & Conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Chennai."
    }
  ]

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="w-full px-6 sm:px-10 lg:px-16 py-12">
        <h1 className="relative pl-6 mb-8 text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent drop-shadow-sm before:absolute before:left-0 before:top-1 before:h-10 before:w-1.5 before:rounded-full before:bg-gradient-to-b before:from-emerald-500 before:to-sky-500">
          Terms & Conditions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((item, index) => (
            <section
              key={index}
              className="group relative rounded-2xl bg-white backdrop-blur-xl border border-white/50 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out before:absolute before:left-0 before:top-6 before:h-12 before:w-1.5 before:rounded-full before:bg-gradient-to-b before:from-emerald-400 before:to-sky-400 hover:before:top-4 hover:before:h-16"
            >
              <h2 className="flex items-start gap-3 mb-3">
                <span className="flex items-center justify-center h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-emerald-500 to-sky-500 text-white text-xs font-bold shadow-md">
                  {item.title.split(".")[0]}
                </span>
                <span className="relative text-lg sm:text-xl font-semibold tracking-tight text-slate-900 leading-snug transition-colors duration-300 group-hover:text-emerald-600">
                  {item.title.split(". ").slice(1).join(". ")}
                  <span className="absolute left-0 -bottom-1 h-[3px] w-12 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </span>
              </h2>

              {item.content && (
                <p className="text-sm leading-relaxed text-slate-700">
                  {item.content}
                </p>
              )}

              {item.contact && (
                <div className="text-sm text-slate-700 space-y-2">
                  <p><strong className="text-emerald-600">Email:</strong> moneykrishnaeducation@gmail.com</p>
                  <p><strong className="text-emerald-600">Phone:</strong> +91 95000 74778</p>
                  <p><strong className="text-emerald-600">Address:</strong> 3rd floor, I Block, 35th Street, 18th Main Rd, Anna Nagar West, Chennai</p>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Term
