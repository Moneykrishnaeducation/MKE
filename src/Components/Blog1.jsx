import React, { useEffect } from 'react'
import { Zap, TrendingUp, Clock, BarChart2, Cpu, ArrowRight, CheckCircle } from 'lucide-react'

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
    {
      title: 'Momentum Trading — Trade the Strength',
      text: 'Focuses on assets showing strong price momentum backed by volume. Traders enter during powerful moves and exit when momentum weakens. Best suited for trending markets.',
      Icon: TrendingUp,
    }

  ]

  return (
    <main className="relative bg-[url(/src/assets/bg_img.webp)]  bg-cover bg-center bg-fixed">
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

      <section className="container mx-auto py-14 relative z-10">
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
        <header className="mb-16 text-center pt-8">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-100 border border-blue-300">
            <span className="text-sm font-semibold text-blue-700">Trading Strategies Guide</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-100 mb-4">
            Top Trading Strategies for Consistent Profits
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-200 leading-relaxed">
            Discover proven strategies like scalping, swing trading, day trading, long-term investing, and algorithmic trading to match your trading goals and experience level.
          </p>
        </header>

        {/* Strategy Cards Grid */}
        <div className="grid gap-8 mb-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {strategies.map(({ title, text, Icon }, index) => (
            <article
              key={title}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-green-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex gap-6 p-8">
                {/* Icon Column */}
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>

                  <span className="mt-5 w-px flex-1 bg-slate-200 group-hover:bg-green-300 transition"></span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-green-600 transition">
                    {title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>



        {/* Guidance Section */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Which Trading Strategy Is Right for You?
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            The best trading strategy depends on your risk tolerance, available time, and experience level.
            <span className="text-green-600 font-semibold"> Beginners are encouraged to start with swing or position trading.</span>
          </p>

          {/* Checklist Items */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              'Master technical analysis fundamentals',
              'Select a reliable broker with low spreads',
              'Practice strategies in a demo account first',
              'Maintain strict risk management rules'
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200 hover:border-green-300 transition-all">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <a
              href="/course"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Start Learning Now <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-slate-100 border border-slate-300 text-slate-700 font-semibold hover:bg-slate-200 transition-all"
            >
              Back to Blog
            </a>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Blog1
