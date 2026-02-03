import CourseLayout from "../Layout/CourseLayout"
import YouTubePlayer from "../Layout/YouTubePlayer"

const AdvancedCourse = () => {
  return (
    <CourseLayout title="Advanced & Algorithmic Trading" level="Advanced">

      <section>
        <h2 className="text-2xl font-bold mb-3">Risk Management Theory</h2>
        <p className="text-gray-300">
          Professional traders focus more on risk control than accuracy.
          Proper position sizing and stop-loss placement ensure long-term survival.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Algorithmic Trading</h2>
        <p className="text-gray-300">
          Algo trading uses automated systems, mathematical models, and 
          backtesting to execute trades without emotional bias.
        </p>
      </section>

      <YouTubePlayer
        videoId="fbrqFgrG4jM?si=sZs-lM7Je-L0SW24"
        title="Cash futures and options Trading"
      />

    </CourseLayout>
  )
}

export default AdvancedCourse