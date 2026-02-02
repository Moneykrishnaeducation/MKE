import React, { useState } from 'react'
import { ChevronDown, TrendingUp, BookOpen, Target, Users, Award, AlertCircle } from 'lucide-react'

const MT5Education = () => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const sections = [
    {
      id: 'intro',
      title: 'What is MT5 Trading?',
      icon: TrendingUp,
      content: 'MetaTrader 5 (MT5) is a professional trading platform used by millions of traders worldwide. It offers advanced charting tools, automated trading capabilities, and access to multiple asset classes including forex, stocks, commodities, and cryptocurrencies.'
    },
    {
      id: 'features',
      title: 'Key Features of MT5',
      icon: Award,
      content: 'MT5 includes advanced features like multiple timeframes for technical analysis, the MQL5 programming language for Expert Advisors (automated trading strategies), depth of market data, and the ability to trade multiple asset classes from a single platform.'
    },
    {
      id: 'basics',
      title: 'Trading Basics',
      icon: BookOpen,
      content: 'Learn fundamental concepts: pips (percentage in points), lots (trade volume), bid-ask spreads, margin requirements, and leverage. Understanding these basics is crucial before placing your first trade.'
    },
    {
      id: 'strategy',
      title: 'Trading Strategies',
      icon: Target,
      content: 'Popular strategies include day trading (multiple trades daily), swing trading (holding positions for days/weeks), trend following, and grid trading. Each strategy has different risk levels and requires different time commitments.'
    },
    {
      id: 'risk',
      title: 'Risk Management',
      icon: AlertCircle,
      content: 'Always use stop-loss orders, position sizing based on risk tolerance, and never risk more than 2% of your account on a single trade. Proper risk management separates successful traders from those who lose money.'
    },
    {
      id: 'community',
      title: 'Learning Community',
      icon: Users,
      content: 'Join trading communities, follow experienced traders, use demo accounts to practice, and continuously educate yourself. The MT5 community offers webinars, forums, and educational resources to help you grow.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">MT5 Trading Education</h1>
          <p className="text-xl text-blue-100">Master the MetaTrader 5 Platform and Become a Successful Trader</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 py-16">
        {/* Introduction Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-8 mb-12 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Welcome to MT5 Trading Education</h2>
          <p className="text-lg mb-4">
            Whether you're a complete beginner or looking to advance your trading skills, this comprehensive guide will help you understand and master MetaTrader 5 trading.
          </p>
          <p className="text-lg">
            Our educational content covers everything from basic concepts to advanced strategies to help you make informed trading decisions and manage risk effectively.
          </p>
        </div>

        {/* Educational Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {sections.map((section) => {
            const Icon = section.icon
            const isExpanded = expandedSection === section.id

            return (
              <div
                key={section.id}
                className="bg-slate-700 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-600 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white text-left">{section.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-400 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-slate-600">
                    <p className="text-slate-200 leading-relaxed mt-4">{section.content}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Quick Tips Section */}
        <div className="bg-slate-700 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Tips for Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Start with Demo', description: 'Practice on a demo account with virtual money before trading real funds' },
              { title: 'Set Clear Goals', description: 'Define your profit targets and risk tolerance before opening any positions' },
              { title: 'Keep Learning', description: 'Markets change; continuous education is essential for long-term success' },
              { title: 'Monitor Positions', description: 'Always watch your open trades and adjust your strategy as needed' },
              { title: 'Use Technical Analysis', description: 'Learn charts, indicators, and patterns to make informed trading decisions' },
              { title: 'Manage Emotions', description: 'Avoid emotional trading; stick to your trading plan regardless of market movement' }
            ].map((tip, index) => (
              <div key={index} className="bg-slate-600 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">{tip.title}</h3>
                <p className="text-slate-300 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Trading Journey?</h2>
          <p className="text-lg mb-6">Download MT5, open a demo account, and start practicing with our educational materials.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.metatrader5.com/en/download"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Download MT5
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Resources
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-950 text-slate-400 py-8 mt-16 border-t border-slate-700">
        <div className="max-w-screen-2xl mx-auto px-4 text-center">
          <p className="mb-2">
            <strong className="text-white">Disclaimer:</strong> Trading involves risk. Past performance does not guarantee future results.
          </p>
          <p>Always practice on a demo account first and only trade with money you can afford to lose.</p>
        </div>
      </div>
    </div>
  )
}

export default MT5Education
