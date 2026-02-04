import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { BookOpen, Zap, List, ShieldCheck, FileText, Clock, TrendingUp, Award } from 'lucide-react'

const Blog = () => {
    const keywords = [
        "Best online trading courses",
        "Learn stock market trading",
        "Forex trading education",
        "Trading webinars",
        "Day trading strategies",
    ]

    useEffect(() => {
        let meta = document.querySelector('meta[name="keywords"]')
        if (!meta) {
            meta = document.createElement("meta")
            meta.setAttribute("name", "keywords")
            document.head.appendChild(meta)
        }
        meta.setAttribute("content", keywords.join(", "))
    }, [])

    const blogSections = [
        { img: '/trader.png', link: '/blog/become-trader', content: 'Become a Trader', description: 'A step-by-step guide to launching your trading career, from education and strategy development to risk management and psychological resilience.' },
        { img: '/strategies.png', link: '/blog/strategies', content: 'Top Trading Strategies', description: 'Proven approaches—from scalping to algorithmic trading—to help traders profit consistently across different market conditions.' },
        { img: '/ai.png', link: '/blog/ai', content: 'AI-Powered Trading (2025)', description: 'Explore how artificial intelligence is transforming trading with predictive analytics, algorithmic strategies, and real-time decision-making.' },
    ]

    const achievements = [
        { img: '/CERTIFICATE.png', title: 'Best CEO of the Year', subtitle: 'Banking, Finance & Stock Broking', description: 'Certificate of Appreciation presented at Savera Hotel, Chennai for outstanding business leadership.' },
        { img: '/TROFFY-2.png', title: 'Best CEO of the Year', subtitle: 'Banking, Finance & Stock Broking', description: 'Certificate of Appreciation for exceptional contributions to financial literacy and education.' },
        { img: '/TROFFY-1.png', title: 'CEO of the Year', subtitle: 'Business Iconic Awards 2022', description: 'Recognized for outstanding leadership and excellence in the financial education industry.' },
    ]

    return (
        <main className="bg-[url('/src/assets/bg_img.jpg')]  bg-cover bg-center bg-fixed p-5 space-y-10">

            {/* Cards */}
            <div className="grid gap-20 md:grid-cols-2 mx-10 lg:grid-cols-3">
                {blogSections.map(({ img, link, content, description }) => (
                    <Link
                        key={content}
                        to={link}
                        aria-label={`Read ${content}`}
                        className="group cursor-pointer flex flex-col items-center gap-4 rounded-2xl bg-white backdrop-blur border border-emerald-100 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    >
                        <div className="relative rounded-2xl overflow-hidden bg-white">

                            {/* Image */}
                            <img
                                src={img}
                                alt={content}
                                className="w-full h-56 object-cover 
                       transition-transform duration-500 
                       group-hover:scale-105"
                            />

                        </div>

                        <h3 className="text-lg font-semibold text-gray-900">{content}</h3>
                        <p className="mt-2 text-sm text-gray-600">{description} <span className="text-emerald-600 font-medium underline decoration-emerald-500">Read More...</span></p> 
                    </Link>

                ))}
            </div>

            {/* Achievements Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center text-white mb-12 drop-shadow-lg">Achievements & Awards</h2>
                <div className="grid gap-8 md:grid-cols-2 mx-10 lg:grid-cols-3">
                    {achievements.map(({ img, title, subtitle, description }) => (
                        <div
                            key={title}
                            className="group flex flex-col items-center gap-4 rounded-2xl bg-white backdrop-blur border border-amber-200 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                        >
                            <div className="relative rounded-xl overflow-hidden bg-white w-full h-64 flex items-center justify-center">
                                <img
                                    src={img}
                                    alt={title}
                                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                                        img.includes('TROFFY') ? 'object-contain' : 'object-cover'
                                    }`}
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 text-center">{title}</h3>
                            <p className="text-sm font-semibold text-amber-600 text-center">{subtitle}</p>
                            <p className="mt-2 text-sm text-gray-600 text-center">{description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </main>
    )
}

export default Blog
