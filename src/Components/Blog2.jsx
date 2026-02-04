import React, { useEffect } from 'react'
import {
  Cpu, Zap, BarChart2,
  ShieldCheck,
  TrendingUp, Brain 
} from 'lucide-react'

const Blog2 = () => {
  const keywords = [
    'AI-powered trading',
    'Machine learning in stock market',
    'AI trading algorithms',
    'Best AI trading tools 2025',
    'Algorithmic trading strategies',
  ]

  useEffect(() => {
    let meta = document.querySelector('meta[name="keywords"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'keywords')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', keywords.join(', '))
  }, [])
  const aiTradingFeatures = [
    {
      id: 1,
      title: "AI & Deep Learning Market Intelligence",
      description:
        "In 2025, deep learning models analyze massive real-time datasets — including tick-level price action, order books, earnings, macro signals, and global sentiment — to detect complex patterns beyond human capability.",
      points: [
        "Neural network price forecasting",
        "Real-time sentiment fusion",
        "Adaptive market regime detection",
      ],
      icon: Cpu,
      gradient: "from-blue-600 to-green-500",
      bg: "bg-white",
    },
    {
      id: 2,
      title: "Algorithmic & Ultra-Low Latency Trading",
      description:
        "AI-driven algorithms execute trades in microseconds, exploiting short-lived inefficiencies while continuously learning from market feedback to improve execution quality.",
      points: [
        "Microsecond-level execution",
        "AI-powered arbitrage detection",
        "Self-learning execution strategies",
      ],
      icon: Zap,
      gradient: "from-green-600 to-blue-500",
      bg: "bg-white",
    },
    {
      id: 3,
      title: "Autonomous Trading Bots with Smart Risk Control",
      description:
        "Next-gen AI bots autonomously execute strategies while dynamically controlling risk using volatility-adjusted position sizing and real-time drawdown protection.",
      points: [
        "Adaptive stop-loss systems",
        "Capital-efficient position sizing",
        "Cross-market strategy automation",
      ],
      icon: BarChart2,
      gradient: "from-blue-600 to-green-500",
      bg: "bg-white",
    },
    {
      id: 4,
      title: "AI-Based Fraud Detection & Market Surveillance",
      description:
        "Advanced AI surveillance engines detect spoofing, wash trading, insider-like behavior, and abnormal volume patterns to ensure transparent and compliant markets.",
      points: [
        "Behavioral anomaly detection",
        "Instant risk alerts",
        "Regulatory-grade compliance monitoring",
      ],
      icon: ShieldCheck,
      gradient: "from-blue-600 to-green-500",
      bg: "bg-white",
    },
    {
      id: 5,
      title: "AI-Driven Portfolio Optimization & Rebalancing",
      description:
        "Machine learning models continuously optimize portfolios by adapting to volatility, asset correlations, and macroeconomic shifts for superior risk-adjusted returns.",
      points: [
        "Dynamic asset allocation",
        "Correlation-aware diversification",
        "Automated rebalancing strategies",
      ],
      icon: TrendingUp,
      gradient: "from-green-600 to-blue-500",
      bg: "bg-white",
    },
    {
      id: 6,
      title: "Generative AI Trading Assistants & Decision Engines",
      description:
        "In 2025, generative AI acts as a real-time trading co-pilot — explaining strategies, simulating outcomes, and providing transparent, human-readable trade reasoning.",
      points: [
        "Explainable AI trade insights",
        "Strategy simulation & stress testing",
        "Human-AI decision collaboration",
      ],
      icon: Brain,
      gradient: "from-green-600 to-blue-500",
      bg: "bg-white",
    },
  ]


  return (
    <main className="bg-[url('/src/assets/bg_img.jpg')] bg-cover bg-center bg-fixed">
      <section className="container mx-auto px-4 py-14">
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
        <header className="text-center">
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight  text-lg text-white drop-shadow-lg">
            AI-Powered Trading in 2025
          </h1>
        </header>

        <section className="relative pB-16">
          <div className="mx-auto">

            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold text-slate-200 drop-shadow-lg leading-relaxed">
                How AI Is Transforming Stock Trading
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-lg drop-shadow-lg leading-relaxed">
                Artificial Intelligence is reshaping financial markets by enabling faster decisions,
                deeper analysis, and emotion-free execution across equities, forex, and crypto markets.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTradingFeatures.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.id}
                    className={`group rounded-2xl border p-8 shadow-md hover:shadow-xl transition ${item.bg}`}
                  >
                    {Icon && (
                      <div
                        className={`flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-br ${item.gradient} mb-6`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    )}

                    <h3
                      className={`text-xl font-bold ${item.highlight ? "text-green-800" : "text-slate-900"
                        }`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-700 leading-relaxed">
                      {item.description}
                    </p>

                    {item.points.length > 0 && (
                      <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                        {item.points.map((point, index) => (
                          <li key={index}>• {point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            {/* Future */}
            <section className="p-6 bg-white rounded-2xl mt-16 shadow-md">
              <h3 className="text-lg font-semibold text-green-700">
                The Future of AI Trading
              </h3>
              <p className="mt-2 text-gray-700">
                The next phase includes personalized AI trading assistants,
                quantum-enhanced optimization models, and advanced fraud detection —
                making AI a permanent structural shift in global financial markets.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-green-500 px-6 py-3 font-semibold text-white shadow hover:opacity-90"
                >
                  Learn AI Trading
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-500 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Explore AI Tools
                </a>
              </div>
            </section>


          </div>
        </section>
      </section>
    </main>
  )
}

export default Blog2
