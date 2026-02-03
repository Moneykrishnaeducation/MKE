
import React from "react"

const VideoPlayer = ({ src, title }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      <video controls className="w-full">
        <source src={src} type="video/mp4" />
      </video>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-teal-400">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default VideoPlayer
