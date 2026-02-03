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
        { title: "1. Build a Strong Foundation", text: "Understand instruments, strategies, and market behavior before risking capital.", Icon: BookOpen },
        { title: "2. Master Your Trading Strategy", text: "Pick strategies aligned with your psychology and schedule.", Icon: Zap },
        { title: "3. Create a Trading Plan", text: "Plan entries, exits, position size, and routines.", Icon: List },
        { title: "4. Risk Management", text: "Protect capital with strict risk rules.", Icon: ShieldCheck },
        { title: "5. Trading Journal", text: "Track emotions, logic, and results.", Icon: FileText },
        { title: "6. Keep Learning", text: "Markets evolve — traders must adapt.", Icon: Clock },
        { title: "7. Discipline & Patience", text: "Consistency builds profitability.", Icon: TrendingUp },
    ]

    return (
        <main className="bg-[url('/src/assets/bg_img.jpg')] bg-cover bg-center bg-fixed">
            <div className=" hidden lg:block">
            <a
              href="/blog"
                className="absolute right-10 top-30 z-100 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-green-500 px-6 py-3 font-semibold text-white shadow hover:opacity-90"
              >
              Explore Blog
            </a>
          </div>
          <div className=" lg:hidden block">
            <a
              href="/blog"
                className="absolute right-10 top-30 z-100 pb-2 rounded-full text-2xl inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-green-500 px-3 py-1/2 font-semibold text-white shadow hover:opacity-90"
              >
              &times;
            </a>
          </div>
            {/* Hero */}
            <section className="relative bg-gradient-to-r from-emerald-600 to-blue-600 py-20">
                <div className="container mx-auto max-w-6xl px-6 text-white">
                    <span className="inline-block rounded-full bg-white/20 px-5 py-1 text-sm backdrop-blur">
                        Trading Education
                    </span>

                    <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
                        Steps to Become a Successful Day Trader
                    </h1>

                    <p className="mt-4 max-w-3xl text-lg text-white/90">
                        A modern roadmap to master trading psychology, risk management, and consistency.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
                        <span><ClockIcon className="w-5 h-5 inline mr-1 mb-1"/> 6 min read</span>
                        <span>• Updated 2026</span>
                        <span>• Beginner → Intermediate</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto max-w-6xl px-6 py-14">
                <article className="space-y-14">

                    {/* Cards */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {sections.map(({ title, text, Icon }) => (
                            <div
                                key={title}
                                className=" flex items-center gap-4 rounded-2xl bg-white/70 backdrop-blur border border-emerald-100 p-6 shadow-sm hover:shadow-lg transition"
                            >
                                <div className="flex h-14 min-w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 mb-4">
                                    <Icon className="h-7 w-7 text-white" />
                                </div>

                               <div> 
                                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                                <p className="mt-2 text-sm text-gray-600">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Pro Tips */}
                        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6">
                            <h3 className="font-semibold text-emerald-800">
                                Pro Trading Tips
                            </h3>
                            <ul className="mt-4 space-y-2 text-sm text-emerald-700 list-disc pl-5">
                                <li>Always use a stop-loss</li>
                                <li>Risk less than 2% per trade</li>
                                <li>Review trades weekly</li>
                            </ul>
                        </div>

                        {/* Key Takeaways */}
                        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-6">
                            <h3 className="font-semibold text-blue-800">
                                Key Takeaways
                            </h3>
                            <ul className="mt-4 space-y-2 text-sm text-blue-700 list-disc pl-5">
                                <li>Trading is a professional skill</li>
                                <li>Risk management defines survival</li>
                                <li>Consistency beats intensity</li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-600 p-10 text-white shadow-lg">
                        <h3 className="text-2xl font-bold">
                            Ready to upgrade your trading skills?
                        </h3>
                        <p className="mt-3 text-white/90 max-w-xl">
                            Learn from experts with structured courses, live webinars, and proven strategies.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-4">
                            <a
                                href=""
                                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-emerald-600 hover:bg-emerald-50"
                            >
                                View Courses
                            </a>
                            <a
                                href=""
                                className="rounded-md border border-white px-6 py-3 text-sm font-semibold hover:bg-white/10"
                            >
                                Join Webinar
                            </a>
                        </div>
                    </div>

                </article>

                    {/* Related Posts */}
                   
                    <div className="flex flex-wrap gap-4 pt-4">
       
          </div>
            </section>
        </main>
    )
}

export default Blog3