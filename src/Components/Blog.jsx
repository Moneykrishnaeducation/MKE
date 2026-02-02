import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { BookOpen, Zap, List, ShieldCheck, FileText, Clock, TrendingUp } from 'lucide-react'

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
    {img: '/trader.png',link: '/blog/become-trader', content: 'Become a Trader', description: 'A step-by-step guide to launching your trading career, from education and strategy development to risk management and psychological resilience.'},
    {img: '/strategies.png',link: '/blog/strategies', content: 'Top Trading Strategies', description: 'Proven approaches—from scalping to algorithmic trading—to help traders profit consistently across different market conditions.'},
    {img: '/ai.png',link: '/blog/ai', content: 'AI-Powered Trading (2025)', description: 'Explore how artificial intelligence is transforming trading with predictive analytics, algorithmic strategies, and real-time decision-making.'},
]

    return (
        <main className="bg-gradient-to-b from-white via-emerald-50 to-blue-50 p-5 space-y-10">

                    {/* Cards */}
                    <div className="grid gap-8 sm:grid-cols-2 mx-5 lg:grid-cols-3">
                        {blogSections.map(({ img, link, content, description }) => (
                            <Link
                                key={content}
                                to={link}
                                className=" flex flex-col items-center gap-4 rounded-2xl bg-white/70 backdrop-blur border border-emerald-100 p-6 shadow-sm hover:shadow-lg transition"
                            >
                                <div className="flex items-center justify-center rounded-xl mb-4">
                                    <img src={img} alt="blog images" className="text-white h-50 w-100" />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900">{content}</h3>
                                <p className="mt-2 text-sm text-gray-600">{description}</p>
                           </Link>  

                        ))}
                    </div>

        </main>
    )
}

export default Blog
    