import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Phone, Mail, TrendingUp, Waves, BarChart3, Droplet, Package, Radio } from 'lucide-react'

const AdvanceIntro = () => {
  const navigate = useNavigate()

  const handleEnrollNow = () => {
    navigate('/courses/advanced')
  }

  const handleContact = () => {
    navigate('/', { state: { scrollToContact: true } })
  }

  const learningTopics = [
    {
      icon: TrendingUp,
      title: 'Market Structure & Price Theory',
      description: 'Master in Structure & Price Theory, mixing or arrangement in structure, price theory, and model. Psychology almost signify.',
      points: [
        'Advanced market structure analysis',
        'Price theory and market mechanics',
        'Institutional trading patterns',
        'Capital flow and liquidity analysis'
      ]
    },
    {
      icon: Waves,
      title: 'Elliott Wave Theory',
      description: 'Mastery awaiting rules and symmetric agreements. Methods consulting chart drafting. Expect and expect framed wave psychology framework.',
      points: [
        'Elliott Wave pattern identification',
        'Wave counting methodologies',
        'Advanced ratio analysis',
        'Wave relationship predictions'
      ]
    },
    {
      icon: BarChart3,
      title: 'Gann Theory',
      description: 'Price time mix itself. Gann angles, and expect demitems from price action.',
      points: [
        'Gann angle calculations',
        'Price time relationships',
        'Gann square geometries',
        'Advanced swing trading setups'
      ]
    },
    {
      icon: Droplet,
      title: 'Supply & Demand Theory',
      description: 'Theoretical and practical understanding of supply zones and their role in market reversal and volatility.',
      points: [
        'Supply zone identification',
        'Demand level recognition',
        'Order flow semantics',
        'Grid trading strategies'
      ]
    },
    {
      icon: Package,
      title: 'Order Block Theory',
      description: 'Point-time opportunity and ordering blocks. Super source complex in-course structure. Starter ensure complex entry around.',
      points: [
        'Order block identification',
        'Mitigation blocks and selloffs',
        'ICT trading concepts',
        'Advanced entry strategies'
      ]
    },
    {
      icon: Radio,
      title: 'Liquidity & Stop Hunting Theory',
      description: 'Theory behind liquidity pools, turbulence. Part of these markets looking on strategies. Liquidity and more strategies.',
      points: [
        'Liquidity pool identification',
        'Stop hunting patterns',
        'Market maker strategies',
        'Advanced entry timing'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div 
        className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-32 px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/advance.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                  Become a <span className="text-yellow-400">Pro Trader</span> <span className="text-3xl lg:text-4xl">with</span>
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Our Advanced Trading Course
                </h2>
              </div>

              <p className="text-gray-200 text-lg leading-relaxed">
                Master advanced theoretical concepts and market strategies. Implement understanding of advanced market structures, Elliott Wave, Gann theory, order blocks, liquidity, and risk management.
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
            Topics Covered <span className="text-teal-600">in the Advanced Trading Course</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Master advanced trading theories and professional market analysis techniques
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningTopics.map((topic, idx) => {
              const IconComponent = topic.icon
              return (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="mb-3"><IconComponent className="w-10 h-10 text-teal-600" /></div>
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
            )
            })}
          </div>
        </div>
      </section>

      {/* Live Sessions Section */}
      <section 
        className="py-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/ADV.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-teal-600 mb-4">Live Advanced Market Sessions</h2>

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
      <section 
        className="relative py-20 px-4 text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/Contact.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-screen-2xl mx-auto text-center space-y-8 relative z-10">
          <div>
            <h2 className="text-5xl font-bold mb-4">
              Ready to Elevate Your Trading Skills?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our <span className="font-bold">Advanced Trading Course</span> and master the theories that professional traders use to succeed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEnrollNow}
              className="px-12 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition-all hover:shadow-lg hover:scale-105"
            >
              Enroll Now
            </button>
            <button
              onClick={handleContact}
              className="px-12 py-4 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg transition-all hover:shadow-lg"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdvanceIntro
