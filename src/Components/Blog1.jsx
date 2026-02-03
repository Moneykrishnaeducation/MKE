import React, { useEffect } from 'react'
import { Zap, TrendingUp, Clock, BarChart2, Cpu } from 'lucide-react'

const Blog1 = () => {
  const keywords = [
    'Trading strategies for consistent profits',
    'Scalping trading strategy',
    'Swing trading strategy',
    'Best trading strategy for beginners',
    'Stock market trading strategies',
    'Profitable trading strategies',
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

  const strategies = [
    {
      title: 'Scalping — Small but Fast Profits',
      text: 'Ultra-short-term trades capturing small price movements using indicators like RSI, MACD, and moving averages. Works best in high-liquidity markets.',
      Icon: Zap,
    },
    {
      title: 'Swing Trading — Profiting from Market Swings',
      text: 'Trades lasting days to weeks using support/resistance and Fibonacci levels. Ideal for traders who cannot monitor markets all day.',
      Icon: TrendingUp,
    },
    {
      title: 'Day Trading — Buy & Sell Within a Day',
      text: 'Positions are opened and closed on the same day. Requires strong discipline, volume analysis, and quick execution.',
      Icon: Clock,
    },
    {
      title: 'Position Trading — Long-Term Trend Following',
      text: 'Long-term trades based on fundamentals and macro-economic trends. Best suited for investors with patience.',
      Icon: BarChart2,
    },
    {
      title: 'Algorithmic Trading — Automated Profits with AI',
      text: 'Rule-based trading powered by algorithms and machine learning. Commonly used by institutions and advanced traders.',
      Icon: Cpu,
    },
  ]

  return (
    <main className="bg-[url('/src/assets/bg_img.jpg')] bg-cover bg-center bg-fixed from-blue-50 to-green-50">
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
          <h1 className="text-4xl font-extrabold text-white">
            Top Trading Strategies for Consistent Profits
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-gray-300">
            Discover proven strategies like scalping, swing trading, day trading,
            long-term investing, and algorithmic trading to match your trading goals.
          </p>
        </header>

        {/* Strategy Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {strategies.map(({ title, text, Icon }) => (
            <article
              key={title}
              className="group flex items-center gap-4 rounded-xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-500">
                <Icon className="h-6 w-6 text-white" />
              </div>

              <div>
                <h3 className="font-semibold text-blue-800 group-hover:text-green-600 transition">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Guidance Section */}
        <section className="mt-12 rounded-xl border border-blue-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-700">
            Which Trading Strategy Is Right for You?
          </h2>

          <p className="mt-3 text-gray-700">
            The best trading strategy depends on your risk tolerance,
            available time, and experience level.
            Beginners are encouraged to start with swing or position trading.
          </p>

          <ul className="mt-5 space-y-2 text-gray-700 list-disc pl-5">
            <li>Master technical analysis fundamentals</li>
            <li>Select a reliable broker with low spreads</li>
            <li>Practice strategies in a demo account first</li>
            <li>Maintain strict risk management rules</li>
          </ul>
        </section>

      </section>
    </main>
  )
}

export default Blog1
