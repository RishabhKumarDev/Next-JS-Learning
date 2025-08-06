import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonial from "@/components/MusicSchoolTestimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
        <HeroSection />
      </main>
      <FeaturedCourses />
      <WhyChoseUs/>
      <MusicSchoolTestimonial/>
      <UpcomingWebinars/>
      <Instructors/>
    </>
  );
}
