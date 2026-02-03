import React from 'react'
import YouTubePlayer from '../Layout/YouTubePlayer'
import CourseLayout from '../Layout/CourseLayout'

const BeginnerCourse = () => {

    return <CourseLayout title="Trading Strategies Fundamentals" level="Basic">

      <section>
        <h2 className="text-2xl font-bold mb-3">What is Trading?</h2>
        <p className="text-gray-300 leading-relaxed">
          Trading is the process of buying and selling financial instruments 
          such as stocks, forex, crypto, and commodities to generate profit 
          from price movements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Types of Traders</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Scalper – seconds to minutes</li>
          <li>Day Trader – same day</li>
          <li>Swing Trader – days to weeks</li>
          <li>Position Trader – long term</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-3">Free Webinar</h2>
        <p className="text-gray-300 mb-4">
          Join our free webinar to learn live trading strategies and get your
          questions answered by an instructor.
        </p>
        <a
          href="https://example.com/enroll"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
        >
          Enroll Free Webinar
        </a>
      </section>

      <YouTubePlayer
        videoId="KyJYT06MbzM?si=V1UVkgrz0VswBs6Q"
        title="Trading In The Zone"
      />

    </CourseLayout>

}
export default BeginnerCourse