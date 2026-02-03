import React from 'react'
import bgImg from '../assets/bg_img.jpg'

const careerAreas = [
  {
    title: 'Trading Education & Training',
    icon: '📘',
    roles: [
      'Trading Educator / Mentor (Educational Only)',
      'Market Research & Content Analyst',
      'Trading Course Instructor',
      'Financial Literacy Trainer',
    ],
  },
  {
    title: 'Content & Knowledge Development',
    icon: '🧠',
    roles: [
      'Financial Content Writer',
      'Course Curriculum Developer',
      'Video Content Creator',
      'Webinar & Workshop Coordinator',
    ],
  },
  {
    title: 'Technology & Platform Roles',
    icon: '💻',
    roles: [
      'Android App Developer',
      'Web Developer (Frontend / Backend)',
      'UI/UX Designer',
      'LMS Administrator',
    ],
  },
  {
    title: 'Marketing & Community Growth',
    icon: '📢',
    roles: [
      'Digital Marketing Executive',
      'Social Media Manager',
      'Community Manager',
      'Student Support Executive',
    ],
  },
]

export default function Careers() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 py-16">

        {/* HERO */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            Careers at Money Krishna
          </h1>

          <p className="text-lg sm:text-xl font-medium text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
              At Money Krishna,
            </span>{' '}
            we empower people through financial education, trading knowledge, and
            skill development. Join us if you want to teach, learn, and grow while
            building a meaningful career.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              Explore Opportunities
            </button>
            <button className="px-6 py-3 rounded-full border border-white/60 text-white hover:bg-white/10 transition">
              Contact HR
            </button>
          </div>
        </div>

        {/* WHY WORK WITH US */}
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">
            Why Work With Money Krishna?
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-slate-700 list-disc pl-5">
            <li>Growing financial education platform</li>
            <li>Teach and mentor aspiring traders</li>
            <li>Continuous learning culture</li>
            <li>Flexible and growth-oriented work environment</li>
            <li>Create real impact through financial literacy</li>
          </ul>
        </div>

        {/* CAREER AREAS */}
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-10 text-center">
          Career Opportunities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {careerAreas.map((area) => (
            <div
              key={area.title}
              className="group bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-2xl transition"
            >
              <div className="text-3xl mb-3">{area.icon}</div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                {area.title}
              </h3>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                {area.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* WHO CAN APPLY */}
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Who Can Apply?
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-slate-700 list-disc pl-5">
            <li>Passionate about finance & education</li>
            <li>Strong communication or technical skills</li>
            <li>Willing to learn and grow</li>
            <li>Freshers and experienced professionals</li>
          </ul>
        </div>

        {/* IMPORTANT NOTE */}
        <div className="max-w-6xl mx-auto bg-blue-50 border-l-4 border-blue-400 p-5 rounded-xl">
          <strong className="text-blue-700">Important Note:</strong>{' '}
          Money Krishna is an education-focused platform. We do not provide financial
          advisory or live trading services. All roles strictly support learning,
          training, and educational content.
        </div>
      </div>

      {/* Gradient animation */}
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #16a34a, #0ea5e9, #16a34a);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 8s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  )
}
