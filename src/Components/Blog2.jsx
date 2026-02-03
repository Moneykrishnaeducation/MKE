import React, { useEffect } from 'react'
import { Cpu, Zap, BarChart2 } from 'lucide-react'

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

  return (
    <main className="bg-[url('/src/assets/bg_img.jpg')] bg-cover bg-center bg-fixed">
      <section className="container mx-auto max-w-6xl px-6 py-14">
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
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700">
            AI-Powered Trading in 2025
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-gray-700">
            Discover how machine learning, algorithmic models, and automation
            are redefining stock market trading, execution speed, and risk management.
          </p>
        </header>

        {/* Main Content Card */}
        <article className="rounded-xl bg-white p-8 shadow-lg space-y-10">

          {/* Section 1 */}
          <section className="flex gap-4">
            <div className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-500">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-800">
                AI & Machine Learning in Stock Trading
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                AI systems analyze massive real-time datasets — including price movements,
                macroeconomic indicators, earnings reports, and news sentiment — to generate
                predictive insights that human traders cannot process manually.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="flex gap-4">
            <div className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-blue-500">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-800">
                Algorithmic & High-Frequency Trading
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                AI-driven algorithms execute trades in microseconds, eliminate emotional bias,
                detect arbitrage opportunities, and continuously improve via backtesting and
                reinforcement learning.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="flex gap-4">
            <div className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-500">
              <BarChart2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-800">
                Automated Trading Bots & Risk Control
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                AI-powered trading bots automate trend-following, arbitrage, and news-based
                strategies while dynamically adjusting stop-losses, position sizing,
                and portfolio exposure to reduce drawdowns.
              </p>
            </div>
          </section>

          {/* Future */}
          <section className="border-t pt-6">
            <h3 className="text-lg font-semibold text-green-700">
              The Future of AI Trading
            </h3>
            <p className="mt-2 text-gray-700">
              The next phase includes personalized AI trading assistants,
              quantum-enhanced optimization models, and advanced fraud detection —
              making AI a permanent structural shift in global financial markets.
            </p>
          </section>

          {/* CTA */}
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

        </article>
      </section>
    </main>
  )
}

export default Blog2
