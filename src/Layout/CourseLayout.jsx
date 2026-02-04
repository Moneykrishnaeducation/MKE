import React from "react"

const CourseLayout = ({ title, level, children }) => {
  return (
    <div className="min-h-screen bg-[url('/src/assets/bg_img.jpg')] bg-cover bg-center bg-fixed text-white">
      <div className="w-full mx-auto px-2 sm:px-6 py-12">
        
        <div className="mb-2">
          <span className="text-sm uppercase tracking-wider text-teal-400">
            {level} Level
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2">
            {title}
          </h1>
          <div className="h-1 w-20 bg-teal-500 mt-2 rounded"></div>
        </div>

        <div className="rounded-lg p-2 sm:p-8 space-y-10">
          {children}
        </div>

      </div>
    </div>
  )
}

export default CourseLayout
