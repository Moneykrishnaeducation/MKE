import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'

const BeginnerIntro = () => {
  const navigate = useNavigate()

  const handleEnrollNow = () => {
    navigate('/courses/beginner')
  }

  const handleContact = () => {
    navigate('/', { state: { scrollToContact: true } })
  }

  const learningTopics = [
    {
      icon: '📊',
      title: 'Market Structure & Price Theory',
      description: 'Mixer is Structure & Price Theory lasts velocity of capital, gaps in visualization, trend sealing pattern, and stantization.',
      points: [
        'Advanced market structure analysis',
        'Price theory and market mechanics',
        'Institutional trading patterns',
        'Capital flow and liquidity analysis'
      ]
    },
    {
      icon: '🌊',
      title: 'Elliott Wave Theory',
      description: 'Mastery learning miles and somethine restraints. Patterns can denote is stark deogen. Even trading sales, experience eriter.',
      points: [
        'Elliott Wave pattern identification',
        'Wave counting methodologies',
        'Advanced ratio analysis',
        'Wave relationship predictions'
      ]
    },
    {
      icon: '📈',
      title: 'Gann Theory',
      description: 'In depth coverage of VD. Price time relationship, Gann angles ed hobbies of price and signal, malce lacks tacks.',
      points: [
        'Gann angle calculations',
        'Price time relationships',
        'Gann square geometries',
        'Advanced swing trading setups'
      ]
    },
    {
      icon: '💧',
      title: 'Supply & Demand Theory',
      description: 'Theoretical and and practical understanding of is stanzated concepts to balance talls and trade role in market movents.',
      points: [
        'Supply zone identification',
        'Demand level recognition',
        'Order flow semantics',
        'Grid trading strategies'
      ]
    },
    {
      icon: '📦',
      title: 'Order Block Theory',
      description: 'Pools ensuring on order imay materese. Stee then en order hesites, tradeables in order tules. Portal causing journey efer online.',
      points: [
        'Order block identification',
        'Mitigation blocks and selloffs',
        'ICT trading concepts',
        'Advanced entry strategies'
      ]
    },
    {
      icon: '📡',
      title: 'Indicator Theory & Application',
      description: 'Theory behind hscaies, copentment, BOGS., support. to accompany gen sethers. Highly rntations etmet raabau.',
      points: [
        'Advanced indicator applications',
        'Confluence with price action',
        'BOGS methodology',
        'Advanced trading system design'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div 
        className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-32 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/Dow-Theory.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                  Master the <span className="text-yellow-400">Art of Trading</span> with
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Our Advanced Trading Course
                </h2>
              </div>

              <p className="text-gray-200 text-lg leading-relaxed">
                Gain professional-level trading skills by learning advanced theories like Elliott Wave, Gann, market structure, order blocks, liquidity, and risk management.
              </p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleEnrollNow}
                  className="px-8 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg transition-all hover:shadow-lg hover:scale-105"
                >
                  Enroll Now
                </button>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+1-800-123-6789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You Will Learn Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            What You Will Learn <span className="text-teal-600">in Our Advanced Trading Course</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive advanced curriculum covering professional trading theories and strategies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningTopics.map((topic, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Sessions Section */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/Dow-Theory.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Live Advanced Market Sessions</h2>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Apply advanced theories in real-time market sessions, analyzing live charts with professional guidance to master Elliott Wave, Gann theory, and advanced price action.
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Real-Time Elliott & Gann Analysis</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Practical Application of Advanced Concepts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Guided Live Trading</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative z-20"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-screen-2xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-5xl font-bold mb-4">
              Elevate Your Trading Skills <span className="text-yellow-400">to a Professional Level</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enroll in our advanced trading course and master the complex theories used by professional traders to consistently succeed in the markets.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEnrollNow}
              className="px-12 py-4 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg transition-all hover:shadow-lg hover:scale-105"
            >
              Enroll Now
            </button>
            <button
              onClick={handleContact}
              className="px-12 py-4 rounded-lg border-2 border-white hover:bg-white/10 text-white font-bold text-lg transition-all"
            >
              Get More Info
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BeginnerIntro
