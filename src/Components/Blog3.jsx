import React, { useEffect } from "react"
import { Link } from 'react-router-dom'
import { BookOpen, Zap, List, ShieldCheck, FileText, Clock, TrendingUp, ClockIcon, Clock1Icon } from "lucide-react"

const Blog3 = () => {
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
    const sections = [
        {
            title: "1. Build a Strong Foundation",
            text: "Learn how financial markets work, understand different trading instruments, and study basic technical and fundamental concepts before putting real money at risk.",
            Icon: BookOpen,
        },
        {
            title: "2. Master Your Trading Strategy",
            text: "Choose one or two strategies that match your personality, risk tolerance, and available time. Master them through backtesting and live market observation.",
            Icon: Zap,
        },
        {
            title: "3. Risk Management",
            text: "Protect your capital by limiting risk per trade, using stop-losses, and avoiding over-trading. Surviving the market is more important than quick profits.",
            Icon: ShieldCheck,
        },
        {
            title: "4. Maintain a Trading Journal",
            text: "Record every trade with entry reasons, emotions, outcomes, and mistakes. Reviewing your journal helps identify patterns and improve performance.",
            Icon: FileText,
        },
        {
            title: "5. Keep Learning & Adapting",
            text: "Markets constantly evolve. Stay updated with market news, refine strategies, and adapt to changing volatility and trends.",
            Icon: Clock,
        },
        {
            title: "6. Discipline & Patience",
            text: "Consistent execution, emotional control, and patience separate profitable traders from gamblers. Trust the process, not impulses.",
            Icon: TrendingUp,
        },
    ]


    return (
        <main className="relative bg-[url('/src/assets/bg_img.jpg')] bg-cover bg-center bg-fixed">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>

            {/* Close Button */}
            <div className="hidden lg:block">
                <a
                    href="/blog"
                    className="absolute right-10 top-10 z-100 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-green-500 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
                >
                    Explore Blog
                </a>
            </div>
            <div className="lg:hidden block">
                <a
                    href="/blog"
                    className="absolute right-6 top-6 z-100 pb-2 rounded-full text-3xl inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500 px-3 py-1 font-semibold text-white shadow-lg hover:opacity-90 transition-all"
                >
                    &times;
                </a>
            </div>

            {/* Hero Section */}
            <section className="relative pt-20 z-10">
                <div className="container mx-auto max-w-6xl px-6">
                    <span className="inline-block rounded-full bg-blue-100 px-6 py-3 text-xl font-semibold text-blue-700 border border-blue-300">
                        Trading Education
                    </span>

                    <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-slate-200">
                        Steps to Become a Successful Day Trader
                    </h1>

                    <p className="mt-4 max-w-3xl text-lg text-slate-300">
                        A modern roadmap to master trading psychology, risk management, and consistency.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4 text-sm bg-black/50 p-4 w-fit rounded-full text-slate-200">
                        <span><ClockIcon className="w-5 h-5 inline mr-1" /> 6 min read</span>
                        <span>• Updated 2026</span>
                        <span>• Beginner → Intermediate</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto py-20 relative z-10">
                <article className="space-y-16">

                    {/* Cards Grid */}
                    <div className="flex flex-wrap gap-8 px-10 md:px-0 justify-center">
                        {sections.map(({ title, text, Icon }, index) => {
                            const colors = [
                                'bg-blue-500',
                                'bg-cyan-500',
                                'bg-green-500',
                                'bg-emerald-500',
                                'bg-teal-500',
                                'bg-blue-600',
                                'bg-cyan-600'
                            ];
                            return (
                                <div
                                    key={title}
                                    className="group rounded-xl bg-white md:w-[36vw] lg:w-[25vw] border border-slate-100 hover:border-blue-200 shadow-md hover:shadow-lg transition-all duration-300 p-6"
                                >
                                    <div className="flex gap-4 items-start">
                                        {/* Icon Box */}
                                        <div className={`flex-shrink-0 h-12 w-12 rounded-lg ${colors[index % 7]} flex items-center justify-center shadow-md group-hover:shadow-lg transition`}>
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 ">
                                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                                                {title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed mt-2">
                                                {text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Pro Tips & Key Takeaways */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Pro Trading Tips */}
                        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-blue-500 to-blue-400 px-6 py-4">
                                <h3 className="text-2xl font-semibold text-white">
                                    Pro Trading Tips
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <ul className="space-y-4">
                                    {[
                                        'Always use a stop-loss',
                                        'Risk less than 2% per trade',
                                        'Review trades weekly',
                                    ].map((tip, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-xl text-slate-700">
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold mt-2">
                                                ✓
                                            </span>
                                            <span className="leading-relaxed">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 px-6 py-4">
                                <h3 className="text-2xl font-semibold text-white">
                                    Key Takeaways
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <ul className="space-y-4">
                                    {[
                                        'Trading is a professional skill',
                                        'Risk management defines survival',
                                        'Consistency beats intensity',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-xl text-slate-700">
                                            <span className="mt-3 h-2 w-2 rounded-full bg-blue-500"></span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* CTA */}
                    <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 p-12 text-white shadow-lg hover:shadow-xl transition">
                        <h3 className="text-3xl font-bold">
                            Ready to upgrade your trading skills?
                        </h3>
                        <p className="mt-4 text-white/90 max-w-2xl text-lg">
                            Learn from experts with structured courses, live webinars, and proven strategies.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="/courses/beginner"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-semibold text-blue-600 hover:bg-blue-50 shadow-md hover:shadow-lg transition"
                            >
                                View Courses
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition"
                            >
                                Join Webinar
                            </a>
                        </div>
                    </div>

                </article>
            </section>
        </main>
    )
}

export default Blog3