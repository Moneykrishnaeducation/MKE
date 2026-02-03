import React from 'react';
import bgImg from '../assets/bg_img.jpg'
const careerAreas = [
  {
    title: 'Trading Education & Training',
    icon: '📘',
    roles: [
      'Trading Educator / Mentor (Forex, Stocks, Crypto – Educational Only)',
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
      'Video Content Creator (Trading & Finance Education)',
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
      'Learning Management System (LMS) Administrator',
    ],
  },
  {
    title: 'Marketing & Community Growth',
    icon: '📢',
    roles: [
      'Digital Marketing Executive',
      'Social Media Manager (Finance Education)',
      'Community Manager',
      'Student Support Executive',
    ],
  },
];

export default function Careers() {
  return (
    <div
      className="min-h-screen relative py-12 px-4"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text visibility, like Home.jsx */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/30 to-cyan-50/30 z-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4 text-center">Careers at Money Krishna</h1>
        <p className="text-lg text-slate-700 mb-8 text-center max-w-2xl mx-auto">
          At Money Krishna, we believe in empowering people through financial education, trading knowledge, and skill development. We are always looking for passionate individuals who want to teach, learn, and grow in the field of financial markets and education.
        </p>
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Why Work With Money Krishna?</h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
            <li>Be part of a growing financial education platform</li>
            <li>Opportunity to teach and mentor aspiring traders</li>
            <li>Learn continuously about markets, finance, and technology</li>
            <li>Flexible and growth-oriented work culture</li>
            <li>Make a real impact by spreading financial literacy</li>
          </ul>
        </div>
        <p className="text-3xl md:text-5xl font-bold gradient-text mb-4 text-center">Career Opportunities</p>
       <div className="grid md:grid-cols-2 gap-8 mb-10">
          {careerAreas.map((area) => (
            <div key={area.title} className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
              <div className="text-3xl mb-2">{area.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-green-700">{area.title}</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-1 flex-1">
                {area.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-10">
          <h2 className="text-2xl font-bold text-purple-700 mb-2">Who Can Apply?</h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-2">
            <li>Passionate about finance, trading, and education</li>
            <li>Willing to learn and grow continuously</li>
            <li>Strong communication and teaching skills (for educator roles)</li>
            <li>Technical skills (for development roles)</li>
            <li>Freshers and experienced professionals are welcome</li>
          </ul>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
          <strong className="text-blue-700">Important Note:</strong> Money Krishna is an education-focused platform. We do not offer financial advisory or live trading services. All roles are related strictly to learning, training, content creation, and educational support.
        </div>
      </div>
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #16a34a, #0ea5e9, #16a34a, #0ea5e9);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 8s ease-in-out infinite;
          -webkit-text-stroke: 0.5px white;
          text-stroke: 0.5px white;
          paint-order: stroke fill;
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
      `}</style>
    </div>
  );
}
