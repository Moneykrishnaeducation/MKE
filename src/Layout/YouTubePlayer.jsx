const YouTubePlayer = ({ videoId, title }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      
      {/* Video */}
      <div className="relative w-full aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-teal-400">
          {title}
        </h3>
      </div>

    </div>
  )
}

export default YouTubePlayer
