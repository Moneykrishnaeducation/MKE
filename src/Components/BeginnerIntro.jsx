import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Phone, Mail, Download, GraduationCap, BarChart3, Users, Target, Laptop, Building2, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react'

const BeginnerIntro = () => {
  const navigate = useNavigate()

  const handleEnrollNow = () => {
    navigate('/courses/beginner')
  }

  const handleContact = () => {
    navigate('/', { state: { scrollToContact: true } })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-16 px-4">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-2">
              Beginner-Friendly Trading Education
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">
              with Live Market Learning
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
              Learn the fundamentals of trading through structured online & offline classes, live market sessions, and hands-on chart practice—designed specifically for beginners.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="text-left">
                <p className="flex items-center gap-2 text-gray-700 mb-2">
                  <span className="text-orange-500 font-bold">✓</span> Online & Classroom-Based Training
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-orange-500 font-bold">✓</span> Live Market & Chart Sessions
                </p>
              </div>
              <div className="text-left">
                <p className="flex items-center gap-2 text-gray-700 mb-2">
                  <span className="text-blue-600 font-bold">✓</span> Simple English, No Experience Needed
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-600 font-bold">✓</span> Small Batch Size for Personal Attention
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContact}
                className="px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition-all hover:shadow-lg"
              >
                Enroll Now
              </button>
              <button
                onClick={() => navigate('/courses/beginner')}
                className="px-8 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Learning Path */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            A Structured Learning Path for Serious Beginners
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-4 flex justify-center"><GraduationCap className="w-16 h-16 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-gray-900">Beginner-First Approach</h3>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center"><BarChart3 className="w-16 h-16 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-gray-900">Real Market Exposure</h3>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center"><Users className="w-16 h-16 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-gray-900">Continuous Guidance</h3>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center"><Target className="w-16 h-16 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-gray-900">Practical Learning Focus</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Learning Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Flexible Learning: Online & Offline Classes
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="inline-block mr-2"><Laptop className="w-6 h-6 text-green-500 inline" /></span> Live Online Classes
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200 flex items-center justify-center">
                💻 Online Class Image
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="inline-block mr-2"><Building2 className="w-6 h-6 text-orange-500 inline" /></span> Offline Classroom Training
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200 flex items-center justify-center">
                🏢 Classroom Training Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple English Section */}
      <section className="py-16 px-4 bg-white border-t border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Classes in Simple, Beginner-Friendly English
          </h2>
          <p className="text-gray-600 text-lg">
            Easy to Understand Concepts with Practical Examples
          </p>
        </div>
      </section>

      {/* Beginner-Level Trading Concepts */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Beginner-Level Trading Concepts Covered
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="mb-3 flex justify-center"><BarChart3 className="w-12 h-12 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-gray-900">Candlestick Patterns</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="mb-3 flex justify-center"><TrendingUp className="w-12 h-12 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-gray-900">Technical Indicators</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="mb-3 flex justify-center"><TrendingDown className="w-12 h-12 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-gray-900">Trendlines Analysis</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="mb-3 flex justify-center"><Target className="w-12 h-12 text-blue-600" /></div>
              <h3 className="text-xl font-bold text-gray-900">Support & Resistance</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Live Market Sessions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-2">
            Live Market Sessions with Guided Explanations
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Learn to Read Charts & Analyze Markets in Real Time
          </p>
        </div>
      </section>

      {/* Hands-On Chart Learning */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Hands-On Chart Learning
          </h2>

          <div className="rounded-xl overflow-hidden shadow-lg h-64 bg-gray-300 flex items-center justify-center mb-8">
            📊 Charts & Trading Screens
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="font-semibold">Practical Practice to Identify</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="font-semibold">Identify Trends & Key Levels</span>
            </div>
          </div>
        </div>
      </section>

      {/* Doubt-Clearing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Doubt-Clearing & Small Batch Advantage
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 text-white rounded-xl p-6">
              <p className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>Live Doubt-Clearing Sessions</span>
              </p>
              <p className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>Ask Questions & Get Answers</span>
              </p>
            </div>
            <div className="bg-blue-700 text-white rounded-xl p-6">
              <p className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
                <span>Limited Students Per Batch</span>
              </p>
              <p className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white" />
                <span>Personal Attention & Small Groups</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-blue-900 mb-4">
            Start Your Trading Education the Right Way
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Build a Strong Foundation & Trade with Confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContact}
              className="px-12 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition-all hover:shadow-lg"
            >
              Enroll Now
            </button>
            <button
              onClick={() => navigate('/courses/beginner')}
              className="px-12 py-4 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg transition-all hover:shadow-lg"
            >
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BeginnerIntro
