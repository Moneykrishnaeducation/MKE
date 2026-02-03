import React from "react"

const CourseLayout = ({ title, level, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <div className="mb-10">
          <span className="text-sm uppercase tracking-wider text-teal-400">
            {level} Level
          </span>
          <h1 className="text-4xl font-extrabold mt-2">
            {title}
          </h1>
          <div className="h-1 w-20 bg-teal-500 mt-4 rounded"></div>
        </div>

        <div className="space-y-10">
          {children}
        </div>

      </div>
    </div>
  )
}

export default CourseLayout
