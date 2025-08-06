import { AnimatedTooltipPreview } from "./AnimatedToolTip"
import { WavyBackground } from "./ui/wavy-background"

function Instructors() {
  return (
    <div className=" relative  overflow-hidden flex items-center justify-center">
        <WavyBackground>
            <h2 className=" text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className=" text-base md:text-lg text-white text-center mb-4">Discover the Instructors who will guide Your Musical Journey</p>
            <AnimatedTooltipPreview/>
        </WavyBackground>
    </div>
  )
}

export default Instructors