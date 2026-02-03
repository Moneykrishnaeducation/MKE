import CourseLayout from "../Layout/CourseLayout"
import YouTubePlayer from "../Layout/YouTubePlayer"

const Intermediate = () => {
  return (
    <CourseLayout title="Technical & Price Action Strategies" level="Intermediate">

      <section>
        <h2 className="text-2xl font-bold mb-3">Trend Following Strategy</h2>
        <p className="text-gray-300">
          Trend trading focuses on identifying strong market trends and 
          entering trades in the direction of momentum.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Support & Resistance</h2>
        <p className="text-gray-300">
          Support and resistance levels represent areas where price repeatedly 
          reacts due to supply and demand imbalance.
        </p>
      </section>

      <YouTubePlayer
        videoId="6xxB3LsMhRI?si=8oN8HVPrQ2WxucvM"
        title="Don’t Trade Blindly!"
      />

    </CourseLayout>
  )
}

export default Intermediate
